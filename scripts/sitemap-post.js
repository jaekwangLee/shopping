const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

const getDate = new Date().toISOString();

const TIPBOX_DOMAIN = 'https://tipbox.wiki';
const TIPBOX_API_DOMAIN = 'https://api.tipbox.wiki';
const axios = require('axios');

const formatted = sitemap => prettier.format(sitemap, { parser: 'html' });

(async () => {
    const contents = [];
    const { data } = await axios.get(TIPBOX_API_DOMAIN + '/v1/analyze/question/id/list');
    if (data && data.status === 'success') {
        data.data.forEach(id => contents.push(id));
    }

    const contentsSitemap = `
    ${contents
        .map(cId => {
            return `
          <url>
            <loc>${TIPBOX_DOMAIN}/search/tip?qId=${cId}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
        })
        .join('')}
    `;

    const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${contentsSitemap}
    </urlset>
  `;

    const formattedSitemap = formatted(generatedSitemap);

    fs.writeFileSync('./public/sitemap/content.xml', formattedSitemap, 'utf8');
})();
