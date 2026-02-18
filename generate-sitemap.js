#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://blog.landmarkbets.com';
const OUTPUT_FILE = 'sitemap.xml';

// Get all HTML files in current directory
const files = fs.readdirSync(__dirname)
  .filter(file => file.endsWith('.html'))
  .sort();

// Generate sitemap XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

files.forEach(file => {
  const url = file === 'index.html' 
    ? `${DOMAIN}/`
    : `${DOMAIN}/${file}`;
  
  const priority = file === 'index.html' ? '1.0' : '0.8';
  const changefreq = file === 'index.html' ? 'weekly' : 'monthly';
  
  // Get file modification date
  const stats = fs.statSync(path.join(__dirname, file));
  const lastmod = stats.mtime.toISOString().split('T')[0];
  
  sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
});

sitemap += `</urlset>
`;

// Write sitemap
fs.writeFileSync(path.join(__dirname, OUTPUT_FILE), sitemap);

console.log(`✅ Sitemap generated with ${files.length} pages:`);
files.forEach(file => console.log(`   - ${file}`));
