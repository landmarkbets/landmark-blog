# Landmark Bets Blog

Sports betting education and strategy content.

## Structure

- `index.html` - Blog homepage with article cards
- `ev-betting.html` - Expected Value article
- `line-shopping.html` - Line Shopping guide
- More articles coming soon

## Adding New Articles

**Just create the HTML file!** The sitemap updates automatically.

1. Create your article: `my-new-article.html`
2. Add a link to it in `index.html` (article cards section)
3. Commit and push:
   ```bash
   git add .
   git commit -m "Add new article"
   git push
   ```
4. Netlify will automatically:
   - Regenerate `sitemap.xml` with your new article
   - Deploy the changes
   - Google will discover it on next crawl

## Sitemap (Automatic)

The sitemap is **automatically generated** on every deployment using `generate-sitemap.js`.

**Manual regeneration (optional):**
```bash
npm run sitemap
```

**How it works:**
- Scans all `.html` files in the directory
- Generates `sitemap.xml` with current dates
- Runs automatically on every Netlify deployment

## Deployment

This site is deployed on Netlify at `blog.landmarkbets.com`

### Local Development

Simply open `index.html` in a browser, or run a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`

## SEO

All pages include:
- Proper meta tags (title, description)
- Open Graph tags for social sharing
- Twitter Card support
- Mobile responsive design
- Auto-generated sitemap.xml
- robots.txt for search engines
