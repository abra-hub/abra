# ABRA Project Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/f0390256-11c9-4a28-8808-60e38c4b538b/deploy-status)](https://app.netlify.com/sites/abra-hub/deploys)

# How To Use

The website is made with [Hugo](https://gohugo.io/) static site generator utilizing with [TailwindCSS starter theme](https://github.com/dirkolbrich/hugo-theme-tailwindcss-starter) (see `tailwind.config.js`). Interface for organizing content is made with [NetlifyCMS](https://www.netlifycms.org/)(see `static/admin`). The website is deployed to [Netlify CDN](https://app.netlify.com) directly from GitHub on every push to the `production` branch. 

```
                  ┌───────────────────┐
                  │                   │
      ┌───────────┤    Netlify CMS    │
      │           │                   │
      │           └─────────┬─────────┘
      │                     │
┌─────▼─────┐     ┌─────────┴─────────┐     ┌────────────────────┐    ┌──────────────────┐
│           │     │                   │     │                    │    │                  │
│New Commit ├─────►    GitHub Repo    ├────►│    Netlify CDN     ├───►│ www.abra-hub.net │
│           │     │     *production   │     │                    │    │                  │
└───────────┘     └───────────────────┘     └────────────────────┘    └──────────────────┘
```

## Start dev server

To run the application on the local dev server, you will need [Hugo](https://gohugo.io/) [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com/)) installed on your computer. After the installation, you need to install node.js packages with npm:

`npm install`

Then you can start the server from your command line:

`hugo server -D`

Web Server will be available at `http://localhost:1313/`


## Folder Structure

| Folder | Description |
| --- | --- |
| archetypes | template for generating new posts with pre-defined structure (see [Archetypes](https://gohugo.io/content-management/archetypes/)|
| layouts | Predefined layouts |
| content | The content files following a specific layout (see [Content Organisation | Hugo](https://gohugo.io/content-management/organization/)) |
| static | Files that get served statically |
| assets | CSS and JS files |

## Other Dependencies

- tailwindcss
- alpine.js (see `layouts/partials/javascript-libraries.html`)
- p5.js (see `layouts/partials/javascript-libraries.html`)

# Other services

- [Analytics](https://abra.goatcounter.com/) - to remain free, the data retention is only last 6 months, currently using their API to export data every 6 months
- [Hosting](https://app.netlify.com/) - Hosted through the Netlify CDN
- [Domain](https://www.namecheap.com/) - Domain settings at Namecheap
- [Email alias](https://improvmx.com/) - email forwarding for abra@abra-hub.net, currently all email sent to this email will appear at Email Forwards - Dissemination and Communication on Basecamp and abra-hub@pm.me