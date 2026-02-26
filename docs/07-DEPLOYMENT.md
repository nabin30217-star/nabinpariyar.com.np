# 07 — Deployment Guide

## Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account (https://github.com/nabin30217-star)
- Vercel account (sign up free at https://vercel.com using GitHub)

---

## Step 1: Initialize Git Repository

```bash
cd "d:\Self Try\Website"
git init
git add .
git commit -m "Initial commit: portfolio website"
```

---

## Step 2: Push to GitHub

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name: `nabinpariyar.com.np` (or `portfolio-website`)
   - Visibility: Public (recommended for portfolio)
   - Don't initialize with README (we already have code)

2. Push code:
```bash
git remote add origin https://github.com/nabin30217-star/nabinpariyar.com.np.git
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. Go to https://vercel.com and sign in with GitHub
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js — keep default settings
5. Click "Deploy"
6. Wait for build to complete (~1-2 minutes)
7. Your site is live at `your-project.vercel.app`

### Option B: Via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (follow prompts)
vercel

# For production deployment
vercel --prod
```

---

## Step 4: Connect Custom Domain

1. In Vercel Dashboard → your project → Settings → Domains
2. Add: `nabinpariyar.com.np`
3. Vercel will give you DNS records to add

### Update DNS at Cloudflare

1. Log in to Cloudflare Dashboard
2. Select `nabinpariyar.com.np`
3. Go to DNS settings
4. **Option A — CNAME** (recommended):
   - Delete existing A/CNAME records for `@`
   - Add CNAME record:
     - Name: `@`
     - Target: `cname.vercel-dns.com`
     - Proxy: DNS only (grey cloud, NOT orange)

5. **Option B — A Records**:
   - Add A record: `@` → `76.76.21.21`

6. For `www` subdomain:
   - Add CNAME: `www` → `cname.vercel-dns.com`

> ⚠️ **Important**: Turn OFF Cloudflare proxy (orange cloud) for these records. Set to "DNS only" (grey cloud). Vercel handles SSL.

---

## Step 5: Verify

After DNS propagation (usually 5-30 minutes):

1. Visit https://nabinpariyar.com.np → should load your site
2. Visit https://nabinpariyar.com.np/app-ads.txt → should show ad content
3. Visit https://nabinpariyar.com.np/privacy-policy → should show policy
4. Check HTTPS is working (padlock in browser)

---

## Continuous Deployment

After initial setup, every `git push` to `main` automatically triggers a new deployment on Vercel.

```bash
# Make changes
git add .
git commit -m "Update: description of changes"
git push
# → Vercel auto-deploys in ~1-2 minutes
```

---

## Environment Variables (If Needed Later)

Set in Vercel Dashboard → Settings → Environment Variables:

```
# Example for future use:
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX     # Google Analytics
NEXT_PUBLIC_SITE_URL=https://nabinpariyar.com.np
```

---

## Build Commands (Reference)

```bash
# Development server (local)
npm run dev        # → http://localhost:3000

# Production build (test locally)
npm run build      # Generates .next/ folder
npm run start      # Serves production build locally

# Lint
npm run lint       # ESLint check
```

---

## Troubleshooting

| Issue | Solution |
|---|---|
| Build fails on Vercel | Check `npm run build` locally first |
| Domain not connecting | Ensure Cloudflare proxy is OFF (grey cloud) |
| SSL not working | Wait for Vercel to provision certificate (~10 min) |
| 404 on routes | Ensure all `page.tsx` files export a default component |
| app-ads.txt not found | Ensure file is in `public/app-ads.txt` |
| Old site still showing | Clear browser cache or wait for DNS propagation |
