# Deploy Instructions

## 1. Create GitHub Repository

Go to: https://github.com/new

Fill in:
- Repository name: `landmark-blog`
- Description: "Landmark Bets blog - Sports betting education and strategy"
- Public ✓
- **Don't** initialize with README (we have files already)

Click "Create repository"

## 2. Push Code to GitHub

```bash
cd /Users/michaelmannino/.openclaw/workspace/blog-site

git remote add origin https://github.com/landmarkbets/landmark-blog.git
git branch -M main
git push -u origin main
```

## 3. Deploy to Netlify

1. Go to: https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Authorize Netlify to access your GitHub
5. Select `landmarkbets/landmark-blog` repository
6. Build settings (should auto-detect):
   - Build command: (leave empty)
   - Publish directory: `.`
7. Click "Deploy site"

## 4. Connect Custom Domain

After site is deployed:

1. In Netlify, go to "Domain settings"
2. Click "Add custom domain"
3. Enter: `blog.landmarkbets.com`
4. Netlify will show DNS instructions
5. In your domain registrar, add CNAME record:
   - Type: CNAME
   - Name: blog
   - Value: (Netlify will provide this, looks like: `xxx.netlify.app`)
6. Wait 5-60 minutes for DNS propagation
7. Netlify will auto-provision SSL certificate

Done! Your blog will be live at `blog.landmarkbets.com`
