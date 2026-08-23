# Ravindu Portfolio — Next.js Complete

This is the finalized portfolio starter based on the reference clone direction. It keeps the existing Home design/animation structure and adds a practical Next.js backend for client contact, WhatsApp contact configuration, and CV download.

## Stack

- Next.js (Pages Router)
- TypeScript
- React
- GSAP
- Framer Motion
- Lucide React
- Resend (email delivery from the server-side API route)

## Project structure

```text
ravindu-portfolio-nextjs-complete/
├── pages/
│   ├── api/
│   │   └── contact.ts          # backend API endpoint
│   ├── _app.tsx
│   ├── index.tsx
│   ├── home.tsx                # main Home page
│   └── contact.tsx             # main Contact page
├── components/
│   ├── home/                   # every Home section as its own component
│   └── contact/                # every Contact section as its own component
├── styles/
│   ├── globals.css
│   └── pages/
│       ├── Home.css
│       └── Contact.css
├── assets/
│   ├── imageAssets.ts          # central image import map
│   └── images/
│       └── home/
├── public/
│   └── documents/
│       └── Ravindu-Kaveesha-CV.pdf
├── data/
│   └── home/
│       └── content.ts
├── lib/
│   └── validation.ts
├── services/
│   └── contactService.ts
├── types/
│   └── contact.ts
├── .env.example
├── package.json
└── tsconfig.json
```

## Frontend vs backend in this project

This is one full-stack Next.js project, so you do not need separate `frontend/` and `backend/` root folders.

- Frontend: `pages/`, `components/`, `styles/`, `assets/`, `data/`
- Backend: `pages/api/contact.ts`, with supporting logic in `lib/`, `services/`, and `types/`

If you later add a completely separate Spring Boot, FastAPI, or Express server, then a dedicated backend project would make sense.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Configure email

1. Copy `.env.example` to `.env.local`.
2. Create/configure your Resend account and sender.
3. Add your `RESEND_API_KEY`.
4. Set `CONTACT_TO_EMAIL` to the inbox where client inquiries should arrive.
5. Set `CONTACT_FROM_EMAIL` to a sender accepted by your Resend configuration.
6. Restart `npm run dev` after changing environment variables.

The browser sends the form to `POST /api/contact`. The API validates the request and sends the message server-side, so the secret API key is never exposed to the client.

## Configure WhatsApp

In `.env.local`:

```text
NEXT_PUBLIC_WHATSAPP_NUMBER=947XXXXXXXX
```

Use digits only and include the country code. The Contact page creates a WhatsApp deep link with a pre-filled project message. If you leave the variable empty, the UI shows a configuration reminder instead of inventing a number.

## CV download

The supplied CV is stored at:

```text
public/documents/Ravindu-Kaveesha-CV.pdf
```

The site links to `/documents/Ravindu-Kaveesha-CV.pdf` with the browser download attribute. Replace that PDF later if you update your CV; keep the same filename if you do not want to change the code.

## CSS organization rule

Keep each main page stylesheet under `styles/pages/`:

```text
Home.css
Contact.css
About.css
Projects.css
```

With the Pages Router, global CSS imports belong in `pages/_app.tsx`. This project follows that rule.

## Page component rule

Every main page stays in `pages/`. Every section for that page stays in its matching component folder:

```text
pages/home.tsx
components/home/Hero.tsx
components/home/Projects.tsx
components/home/Services.tsx
```

and:

```text
pages/contact.tsx
components/contact/ContactHero.tsx
components/contact/ContactForm.tsx
components/contact/ContactMethods.tsx
```

This same pattern can be used later for About, Projects, Services, and case-study pages.
