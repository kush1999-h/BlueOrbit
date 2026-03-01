# Blubit (Blue Orbit)

Production-ready Next.js App Router website for Blubit with a Blue Orbit UI theme.

## Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS
- Route Handlers (`/api/*`)
- MySQL schema + seed files

## Implemented UI
- Public pages: `/`, `/about`, `/services`, `/career`, `/career/[slug]`, `/contact`, `/request-quote`
- Responsive navbar with SVG logo, mobile drawer, theme toggle (localStorage)
- Hero slider with autoplay, hover pause, arrows/dots, mobile swipe
- Sections: services, modules, process timeline, proof stats, advanced capabilities, CTA, footer
- Splash/loading overlay on first load and route changes
- Admin screens: `/admin`, `/admin/login` (UI complete)

## Form APIs
- `POST /api/contact`
- `POST /api/quote`
- `POST /api/newsletter`
- `POST /api/jobs/apply`

Each endpoint has `zod` validation and honeypot field support.

## Local setup
1. Install dependencies:
```bash
npm install
```
2. Run dev server:
```bash
npm run dev
```
3. Build production bundle:
```bash
npm run build
```
4. Run production server:
```bash
npm start
```

## Environment variables
Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# MySQL
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=blubit
DB_PASSWORD=change_me
DB_NAME=blubit

# SMTP
SMTP_HOST=smtp.yourmailhost.com
SMTP_PORT=587
SMTP_USER=your-user
SMTP_PASS=your-pass
SMTP_FROM=notifications@your-domain.com
```

## MySQL
- Schema: `db/schema.sql`
- Seed: `db/seed.sql`

Example:
```bash
mysql -u root -p < db/schema.sql
mysql -u root -p < db/seed.sql
```

## VPS deployment (Ubuntu + Nginx + PM2)
1. Install Node.js LTS, Nginx, MySQL, PM2.
2. Upload project and install deps: `npm install`.
3. Configure `.env.local` for production.
4. Build: `npm run build`.
5. Start with PM2:
```bash
pm2 start npm --name blubit -- start
pm2 save
pm2 startup
```
6. Nginx reverse proxy (example):
```nginx
server {
  server_name your-domain.com www.your-domain.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```
7. Enable SSL:
```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Notes
- `npm run build` is configured to use webpack (`next build --webpack`) to avoid a Turbopack runtime crash in this local environment.
- Replace placeholder assets in `public/placeholders/` with production brand images.
