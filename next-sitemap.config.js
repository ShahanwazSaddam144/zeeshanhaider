/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://zeeshanhaider.com",
    generateRobotsTxt: true,              
    sitemapSize: 7000,                    
    outDir: "./public",                   
    changefreq: "monthly",
    priority: 0.8,
    robotsTxtOptions: {
        additionalSitemaps: [
            "https://zeeshanhaider.com/sitemap.xml",
        ],
    },
};
