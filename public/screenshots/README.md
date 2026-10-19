# App Screenshots Directory

Drop your high-resolution screenshots in this folder!

- `bmra/` — BMRA Medical Rep Gallery (5 live screenshots: Doctor Directory, Doctor Details, History, Booking, Profile)
- `quetal/` — Qué Tal Móvil Gallery (5 live screenshots: SIM Checkout, Plan & Roaming, IMEI Compatibility, Language Switcher, Subscriber Profile)
- `alarm/` — Smart WiFi Alarm Gallery (5 live screenshots: IoT Dashboard, Live Announcement, Device Alerts & Sync, Sign In, Splash Screen)
- `dealer/` — PrepaidIQ Dealer SaaS Gallery (5 live screenshots: Sales & KPI Dashboard, Carrier Directory, Activation & POS Cart, Carrier Dealer Tools, Dealer Sign In)
- `videoflex.png` — VideoFlex Video Player (Android / iOS)
- `audify.png` — Audify Music Player (Android / iOS)
- `study-unify.png` — Study Unify Student / Admin App (Tablet or Mobile)

### How to Activate a Screenshot:
In `src/data/projectsData.ts`, update the `screenshotUrl` property of the corresponding project:
```ts
screenshotUrl: "/screenshots/videoflex.png",
```

If `screenshotUrl` is empty (default), the portfolio automatically renders the high-fidelity **interactive simulated Flutter app** with working live controls!
