# Aetos DDP (Digital Presence Platform)

A beautiful, high-performance React + Vite web application optimized for seamless user experiences and modern design aesthetics.

## 🚀 Deployment to Vercel

This project is fully configured and ready to be deployed on **Vercel** with optimized build commands, clean URLs, and aggressive caching rules for static assets.

### Option 1: Git Integration (Recommended)
This is the easiest way to deploy. Vercel will automatically redeploy your site every time you push to your main branch.

1. Push this project to a git repository (GitHub, GitLab, or Bitbucket).
2. Go to the [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New > Project**.
3. Import your Git repository.
4. Vercel will automatically detect **Vite** as the framework preset:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install` (or `npm ci`)
5. Click **Deploy**. Your site will be live in less than a minute!

---

### Option 2: Vercel CLI (Local Command Line)
If you want to deploy directly from your terminal:

1. Install the Vercel CLI globally (if you haven't already):
   ```bash
   npm install -g vercel
   ```
2. Log in to your Vercel account:
   ```bash
   vercel login
   ```
3. Run the deployment command from the project root:
   ```bash
   vercel
   ```
   *Follow the interactive prompts to link and deploy your project.*
4. To deploy to production, run:
   ```bash
   vercel --prod
   ```

---

## 🛠️ Project Configuration & Performance Optimization

We have added a custom [vercel.json](file:///x:/projects/ddp/vercel.json) file to optimize production deployments:
- **Clean URLs**: Automatically strips `.html` extensions from paths if they are used.
- **SPA Routing Rules**: Redirects all requests back to `/index.html` so that any client-side routing added in the future functions properly without returning 404 errors.
- **Aggressive Asset Caching**: Sets `Cache-Control: public, max-age=31536000, immutable` headers for all compiled files under the `/assets/` directory. Since Vite generates unique hashes for each production build, this speeds up repeat loads for users dramatically.

## 💻 Local Development

To run the development server locally:
```bash
npm run dev
```

To build and preview the production build locally:
```bash
npm run build
npm run preview
```
