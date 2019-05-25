const siteConfig = {
  title: "Routex", // Title for your website.
  tagline: "Modern Node Router",
  url: "https://routex.js.org", // Your website URL
  baseUrl: "/",

  projectName: "Routex",
  organizationName: "RoutexJS",

  headerLinks: [
    { doc: "introduction", label: "Docs" },
    { doc: "packages/index", label: "Packages" },
    { href: "https://github.com/routexjs/routex", label: "GitHub" }
  ],

  headerIcon: "img/icon.svg",
  footerIcon: "img/icon.svg",
  favicon: "img/icon.png",

  colors: {
    primaryColor: "#228be6",
    secondaryColor: "#4dabf7"
  },

  copyright: `Copyright © ${new Date().getFullYear()} Charles Crete`,

  highlight: {
    theme: "monokai"
  },

  scripts: ["https://buttons.github.io/buttons.js"],

  onPageNav: "separate",
  cleanUrl: true,

  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg",

  repoUrl: "https://github.com/routexjs/routex",

  editUrl: "https://github.com/routexjs/docs/edit/master/docs/",
  usePrism: true
};

module.exports = siteConfig;
