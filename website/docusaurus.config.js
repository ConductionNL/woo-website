/* @ts-nocheck */
/* eslint-disable */

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenWoo.app',
  tagline: 'Een publicatie platform voor alle overheidsbronnen',
  url: 'https://conductionnl.github.io',
  baseUrl: '/woo-website/',
  
  // GitHub pages deployment config
  organizationName: 'conductionnl',
  projectName: 'woo-website',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/conductionnl/openregister/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          // Pass it a path to a local OpenAPI YAML file
          {
            // Redocusaurus will automatically bundle your spec into a single file during the build
            id: 'open-catalogi',
            spec: 'static/oas/open-catalogi.yaml',
            route: '/api/search',
          },
          {
            // Redocusaurus will automatically bundle your spec into a single file during the build
            id: 'woo-register',
            spec: 'static/oas/open-catalogi.yaml',
            route: '/api/woo-register',
          },
          {
            // Redocusaurus will automatically bundle your spec into a single file during the build
            id: 'publication-registers',
            spec: 'static/oas/open-catalogi.yaml',
            route: '/api/publication-registers',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Open Register',
        logo: {
          alt: 'Open Register Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: '/api/search',
            label: 'Zoeken API',
            position: 'right',
          },
          {
            href: '/api/publication-registers',
            label: 'Backend API',
            position: 'right',
          },
          {
            href: '/api/woo-register',
            label: 'Woo API',
            position: 'right',
          },
          {
            href: 'https://github.com/conductionnl/openregister',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/conductionnl/openregister',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} for <a href="https://openwebconcept.nl">Open Webconcept</a> by <a href="https://conduction.nl">Conduction B.V.</a>`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
    }),
};

module.exports = config;