// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RISC Zero Developer Docs',
  tagline: 'Hyper-Efficient General Purpose Zero-Knowledge Computing.',
  url: 'https://risczero.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'risc0', // Usually your GitHub org/user name.
  projectName: 'website2', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          remarkPlugins: [math, require('mdx-mermaid')],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/risc0/website/edit/main/',
        },
        blog: {
          remarkPlugins: [math, require('mdx-mermaid')],
          rehypePlugins: [katex],
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/risc0/website/edit/main/',
        },
        pages: {},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  scripts: [
    {
      src: 'https://plausible.io/js/script.js',
      'data-domain':'risczero.com',
      defer: true,
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'RISC Zero Developer Docs',
        logo: {
          alt: 'Risc0 Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            position: 'left',
            label: 'Introduction',
            to: '/',
          },
          {
            position: 'left',
            label: 'zkVM',
            to: 'zkVM',
          },
          {
            position: 'left',
            label: 'Bonsai',
            to: 'bonsai',
          },
          {
            href: 'https://github.com/Risc0',
            position: 'right',
            label: 'GitHub',
          },
         {
            type: 'dropdown',
            position: 'right',
            label: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/risczero',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/risczero',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@risczero'
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/risczero',
              },
              {
                label: 'Contributor\'s Guide',
                to: 'contributors-guide',
              },
            ]
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {

          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Risc0, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image: 'img/logo-name.png',
    }),
};

module.exports = config;
