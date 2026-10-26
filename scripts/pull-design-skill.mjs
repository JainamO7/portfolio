import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const skillsDir = path.join(projectRoot, '.agents', 'skills');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Antigravity-Design-Skills' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed ${res.statusCode} for ${url}`));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function pullSkill(name) {
  const targetDir = path.join(skillsDir, name);
  fs.mkdirSync(targetDir, { recursive: true });

  const files = ['SKILL.md', 'DESIGN.md'];
  for (const file of files) {
    const rawUrl = `https://raw.githubusercontent.com/bergside/awesome-design-skills/main/skills/${name}/${file}`;
    try {
      const content = await fetch(rawUrl);
      fs.writeFileSync(path.join(targetDir, file), content, 'utf8');
      console.log(`✓ Saved ${name}/${file}`);
    } catch (err) {
      console.warn(`! Could not pull ${name}/${file}: ${err.message}`);
    }
  }
}

async function listAll() {
  const apiUrl = 'https://api.github.com/repos/bergside/awesome-design-skills/contents/skills';
  const data = JSON.parse(await fetch(apiUrl));
  return data.filter(item => item.type === 'dir').map(item => item.name);
}

const arg = process.argv[2];

if (!arg || arg === '--help' || arg === '-h') {
  console.log(`
Usage:
  node scripts/pull-design-skill.mjs <skill-name>   Pull a specific skill (e.g. bento, neon, minimal)
  node scripts/pull-design-skill.mjs --list         List all 67 available design skills
  node scripts/pull-design-skill.mjs --all          Pull all 67 design skills into .agents/skills
  `);
  process.exit(0);
}

if (arg === '--list') {
  const all = await listAll();
  console.log(`Available Design Skills (${all.length}):`);
  console.log(all.join(', '));
  process.exit(0);
}

if (arg === '--all') {
  const all = await listAll();
  console.log(`Pulling all ${all.length} skills...`);
  for (const s of all) {
    await pullSkill(s);
  }
  console.log('All skills installed successfully!');
  process.exit(0);
}

pullSkill(arg).then(() => {
  console.log(`\nSkill "${arg}" is ready in .agents/skills/${arg}`);
});
