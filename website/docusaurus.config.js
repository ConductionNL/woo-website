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
          editUrl: 'https://github.com/conductionnl/woo-website/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'OpenWoo.app',
        logo: {
          alt: 'OpenWoo.app Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Product',
            position: 'left',
            type: 'dropdown',
            items: [
              {
                label: 'Kosten',
                to: '/docs/Product/Kosten',
              },
              {
                label: 'Privacy',
                to: '/docs/Product/Privacyverklaring',
              },
              {
                label: 'Beveiliging',
                to: '/docs/Product/SECURITY',
              },
              {
                label: 'Toegankelijkheid', 
                to: '/docs/Product/Toegankelijkheid',
              },
              {
                label: 'Roadmap',
                to: '/docs/Product/Roadmap',
              },
              {
                label: 'Community',
                to: '/docs/Product/GOVERNANCE',
              },
              {
                label: 'Veel gestelde vragen',
                to: '/docs/Product/FAQ',
              },
            ],
          },
          {
            label: 'Techniek',
            position: 'left',
            type: 'dropdown',
            items: [
              {
                label: 'Naar Productie',
                to: '/docs/Techniek/Productie',
              },
              {
                label: 'Architectuur',
                to: '/docs/Techniek/Architectuur',
              },
              {
                label: 'Installatie',
                to: '/docs/Techniek/Installatie',
              },
              {
                label: 'Integratie',
                to: '/docs/Techniek/Integratie',
              },
              {
                label: 'Configuratie',
                to: '/docs/Techniek/Configuratie',
              },
              {
                label: 'Testscenario\'s',
                to: '/docs/Techniek/Tests',
              },
            ],
          },
          {
            label: 'Over Open Webconcept',
            position: 'left',
            href: 'https://openwebconcept.nl/',
          },
          {
            href: 'https://samenorganiseren.slack.com/archives/C067Q3UE9F0',
            label: 'Slack',
            position: 'right',
          },
          {
            href: 'https://github.com/conductionnl/woo-website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Slack',
                href: 'https://samenorganiseren.slack.com/archives/C067Q3UE9F0',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ConductionNL/woo-website-template',
              },
              {
                label: 'Open Webconcept',
                href: 'https://openwebconcept.nl/',
              },
            ],
          },
          {
            title: 'Product',
            items: [
              {
                label: 'Kosten',
                to: '/docs/Product/Kosten',
              },
              {
                label: 'Privacy',
                to: '/docs/Product/Privacyverklaring',
              },
              {
                label: 'Beveiliging',
                to: '/docs/Product/SECURITY',
              },
              {
                label: 'Toegankelijkheid',
                to: '/docs/Product/Toegankelijkheid',
              },
              {
                label: 'Roadmap',
                to: '/docs/Product/Roadmap',
              },
              {
                label: 'Veelgestelde vragen',
                to: '/docs/Product/FAQ',
              },
            ],
          },
          {
            title: 'Techniek',
            items: [
              {
                label: 'Naar Productie',
                to: '/docs/Techniek/Productie',
              },
              {
                label: 'Architectuur',
                to: '/docs/Techniek/Architectuur',
              },
              {
                label: 'Installatie',
                to: '/docs/Techniek/Installatie',
              },
              {
                label: 'Integratie',
                to: '/docs/Techniek/Integratie',
              },
              {
                label: 'Configuratie',
                to: '/docs/Techniek/Configuratie',
              },
              {
                label: 'Testscenario\'s',
                to: '/docs/Techniek/Tests',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenWoo.app. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
    }),
};

module.exports = config;