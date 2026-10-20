# Portfolio-Ki6uiPar1na


## Blog (`/blog`)

A bento dashboard of writeups pulled from **Medium** and/or a **GitHub repo**.

- Sources are set in `blog.config.json` (`medium` handle, `github.user` / `github.repo`).
- `npm run posts` fetches them into `public/posts.json` (and `public/posts/*.md`). It also runs automatically before `npm run dev` and `npm run build`. If a source is unreachable, the previous snapshot is kept.
- **Medium:** latest ~10 stories from the RSS feed; tiles link out to Medium.
- **GitHub:** every `.md` file in the repo (root `README.md` is skipped). Folder name = event, e.g. `BCS-CTF-2026/web-ssti.md`. Rendered in-site at `/blog/<slug>`. Optional front matter: `title`, `date`, `tags: [a, b]`, `event`, `summary`, `draft: true`.
- Set `GITHUB_TOKEN` in the environment to raise the GitHub API rate limit.
- The blog updates when the site is rebuilt. For a static host, rebuild on a schedule or on push.
- Static hosts need an SPA fallback for `/blog`: `public/_redirects` (Netlify) and `dist/404.html` (GitHub Pages) are generated for you.

## Deploy on Vercel + auto-updating blog

1. Import the repo in Vercel. Framework preset **Vite** is auto-detected (build `npm run build`, output `dist`). `vercel.json` adds the SPA fallback so `/blog` and `/blog/<slug>` work on refresh.
2. **Environment variable (recommended):** `GITHUB_TOKEN` = a read-only fine-grained token (public repos only). Vercel builds share IPs, so unauthenticated GitHub API calls can hit the 60/hour limit. If a fetch fails, the build keeps the committed snapshot instead of breaking.
3. Commit `public/posts.json` and `public/posts/` — they are the blog's data snapshot.

How the blog stays fresh:

- Every Vercel build runs `npm run posts` first, so each deploy pulls the latest Medium stories and writeup-repo files.
- `.github/workflows/refresh-blog.yml` runs **hourly** (and from the Actions tab). If something changed it commits the new data to `main`, which makes Vercel redeploy. If nothing changed it commits nothing, so there are no wasted deploys. (Medium has no webhooks, so polling is the only way to notice a new story.)
- **Optional instant updates:** add `docs/writeup-repo-workflow.yml` to the writeup repo (setup steps are in the file). Pushing a writeup then triggers a Vercel deploy hook immediately.
