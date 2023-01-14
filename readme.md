## SEO Optimization

Explore Google Search documentation to improve site's SEO ([Docs](https://developers.google.com/search/docs))

### High Issues

- [ ]  URL Canonicalization Test

```
// redirect http://www.example.com to http://example.com

RewriteCond %{HTTP_HOST} ^www\.example\.com$
RewriteRule ^/?$ "http\:\/\/example\.com\/" [R=301,L]
```

- [x]  Sitemap file

```
// ping updated sitemap

https://www.google.com/ping?sitemap=FULL_URL_OF_SITEMAP
https://www.google.com/ping?sitemap=https://example.com/sitemap.xml

```

- [ ]  Serving images in a modern format
- [ ]  Custom 404 error page
- [x]  Valid SSL certificate
- [ ]  Structured data markup ([Docs](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=en#search-appearance))
- [ ]  Render Blocking Resources

```
// How to pass
- inline critical JS within a script tag in your HTML document
- inline critical CSS required for the first paint inside a style block in the head of the HTML document
- move the script and link tags at the end of the HTML document
- add async or defer attributes to non-critical script or link tags
- split CSS styles into different files, organized by media query
- compress and minify your text-based resources
```

- [x]  Add robots.txt ([Docs](https://developers.google.com/search/docs/crawling-indexing/robots/intro))

### Medium Issues

- [x]  Add The Essential Meta Tags
- [x]  Integration with Google Analytics
- [x]  Optimal length of <title> tag (10 - 70 characters)
- [x]  Optimal length of *Meta Description Tag* (70 and 160 characters)
- [x]  Generally recommended to only use one H1 Tag on a page
- [ ]  Improve site load speed and Download Page Size (Current 3.45 mb)
- [ ]  Add Canonical Tag
- [ ]  Google Accelerated Mobile Pages (AMP)
- [ ]  Schema.org Structured Data

### Low Issues

- [ ]  Remove iFrame
- [x]  Remove any plain text email addresses
- [x]  Remove inline styles (Line 376, 382)
