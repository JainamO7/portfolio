import { NextResponse } from "next/server";
import dns from "node:dns/promises";


// Popular email providers typo map
const COMMON_TYPOS: Record<string, string> = {
  "gmial.com": "gmail.com",
  "gamil.com": "gmail.com",
  "gmaill.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gemail.com": "gmail.com",
  "yaho.com": "yahoo.com",
  "yahooo.com": "yahoo.com",
  "yaho.co.in": "yahoo.co.in",
  "hotmial.com": "hotmail.com",
  "hotmai.com": "hotmail.com",
  "outlok.com": "outlook.com",
  "outloo.com": "outlook.com",
  "icluod.com": "icloud.com",
  "iclod.com": "icloud.com",
};

// Known disposable / burner email domains
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "throwawaymail.com",
  "yopmail.com",
  "trashmail.com",
  "sharklasers.com",
  "getairmail.com",
  "dispostable.com",
  "temp-mail.org",
  "fakeinbox.com",
  "mytemp.email",
]);

export async function POST(req: Request) {
  try {
    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ valid: false, message: "Invalid request body." }, { status: 400 });
    }

    const rawEmail = body?.email;

    if (!rawEmail || typeof rawEmail !== "string") {
      return NextResponse.json({ valid: false, message: "Email is required." }, { status: 400 });
    }

    const email = rawEmail.trim().toLowerCase();

    // 1. Strict regex format validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        valid: false,
        message: "Please enter a valid email format (e.g., name@example.com).",
      });
    }

    const [username, domain] = email.split("@");

    if (!username || !domain) {
      return NextResponse.json({ valid: false, message: "Invalid email structure." });
    }

    // 2. Common typo detection
    if (COMMON_TYPOS[domain]) {
      const suggestedDomain = COMMON_TYPOS[domain];
      return NextResponse.json({
        valid: false,
        isTypo: true,
        suggestion: `${username}@${suggestedDomain}`,
        message: `Did you mean @${suggestedDomain}?`,
      });
    }

    // 3. Block throwaway / disposable emails
    if (DISPOSABLE_DOMAINS.has(domain)) {
      return NextResponse.json({
        valid: false,
        message: "Disposable temporary emails are not accepted. Please use a valid personal or work email.",
      });
    }

    // 4. Free DNS MX record verification (using built-in node:dns)
    try {
      const mxRecords = await dns.resolveMx(domain);
      if (!mxRecords || mxRecords.length === 0) {
        return NextResponse.json({
          valid: false,
          message: `The domain "@${domain}" has no mail servers and cannot receive emails.`,
        });
      }

      return NextResponse.json({
        valid: true,
        message: "Verified email domain.",
        domain,
      });
    } catch (dnsErr: any) {
      const code = dnsErr?.code;
      if (code === "ENOTFOUND" || code === "ENODATA") {
        return NextResponse.json({
          valid: false,
          message: `The domain "@${domain}" does not exist or has no active mail exchange (MX) records.`,
        });
      }

      // If DNS timed out or transient error, still allow if standard domain format is valid
      return NextResponse.json({
        valid: true,
        message: "Email syntax is valid.",
        warning: "Could not verify mail server in real time.",
      });
    }
  } catch (error) {
    return NextResponse.json(
      { valid: false, message: "Unable to verify email at this moment." },
      { status: 500 }
    );
  }
}
