/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.malera.studio",
  generateRobotsTxt: false,
  outDir: "out",
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/icon.png"],
  transform: async (config, path) => {
    const priority = path === "/" ? 1.0 : path === "/privacy" || path === "/terms" ? 0.3 : 0.7;
    const changefreq = path === "/" ? "weekly" : "yearly";
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
