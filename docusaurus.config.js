module.exports = {
  title: "Routex",
  tagline: "Modern Node Router",
  url: "https://routex.js.org",
  baseUrl: "/",
  favicon: "img/icon.png",
  organizationName: "Routex",
  projectName: "RoutexJS",
  themeConfig: {
    navbar: {
      title: "Routex",
      logo: {
        alt: "My Site Logo",
        src: "img/icon.svg",
      },
      links: [
        {
          to: "docs/introduction",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "docs/packages/index",
          activeBasePath: "docs/packages",
          label: "Packages",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/routexjs/routex",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Routex",
          items: [
            {
              label: "Docs",
              to: "docs/introduction",
            },
            {
              label: "Packages",
              to: "docs/packages/index",
            },
            {
              label: "Blog",
              to: "blog",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "http://stackoverflow.com/questions/tagged/routex",
            },
            {
              label: "Spectrum",
              href: "https://spectrum.chat/routex",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/routexjs/routex",
            },
            {
              label: "npm",
              href: "https://www.npmjs.com/package/routex",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Charles Crete (Routex)`,
    },
    prism: {
      theme: require("prism-react-renderer/themes/nightOwl"),
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/routexjs/routex-docs/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
