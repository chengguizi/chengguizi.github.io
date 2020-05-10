module.exports = {
  title: 'My Logs',
  tagline: 'Go-to Place for Ctrl+C/V',
  url: 'https://chengguizi.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: '', // Usually your GitHub org/user name.
  projectName: 'site', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'My Logs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
	      {
          to: 'docs/hardware/',
          activeBasePath: 'docs/hardware',
          label: 'Hardware',
          position: 'left',
          items: [
            {
              activeBasePath:'docs/hardware/jetson',
              label: 'Jetson TX2',
              to: 'docs/hardware/jetson/flash-existing-image'
            },
            // {
            //   label: 'Hi3619 Dev'
            // },
            {
              activeBasePath:'docs/hardware/cameras',
              label: 'Cameras',
              to: 'docs/hardware/cameras/tiscamera-install'
            },
          ]
        },
        {
          to: 'docs/linux/gnome-shell-extensions',
          activeBasePath: 'docs/linux/',
          label: 'Linux Tricks',
          position: 'left',
        },
        {
          to: 'docs/kernel/grub-default-kernel',
          activeBasePath: 'docs/kernel/',
          label: 'Kernel Stuff',
          position: 'left',
        },
        {
          to: 'docs/examples/doc1',
          activeBasePath: 'docs/examples',
          label: 'Examples',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
