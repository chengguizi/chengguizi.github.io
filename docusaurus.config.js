const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

module.exports = {
  title: 'My Logs',
  tagline: 'Go-to Place for Ctrl+C/V',
  url: 'https://chengguizi.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: '', // Usually your GitHub org/user name.
  projectName: 'Public Page', // Usually your repo name.
  onBrokenLinks: 'warn',

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
    },

    navbar: {
      title: 'My Logs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [

        // Hardware
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
            {
              activeBasePath:'docs/hardware/cameras',
              label: 'Cameras',
              to: 'docs/hardware/cameras/tiscamera-install'
            },
            {
              activeBasePath:'docs/hardware/px4-firmware',
              label: 'PX4 Firmware',
              to: 'docs/hardware/px4-firmware/time-synchronisation'
            },
          ]
        },

        // Systems
        {
          to: 'docs/systems/vicon',
          activeBasePath: 'docs/systems',
          label: 'Systems',
          position: 'left',
          items: [
            {
              // activeBasePath:'docs/systems/',
              label: 'Ddrone V2',
              to: 'docs/systems/ddrone_v2/ddrone'
            },
            {
              // activeBasePath:'docs/systems/',
              label: 'Simulations',
              to: 'docs/systems/unity-SITL'
            },
            {
              // activeBasePath:'docs/systems/',
              label: 'Vicon',
              to: 'docs/systems/vicon'
            },
          ]
        },

        // Linux
        {
          to: 'docs/linux/desktop/gnome-shell-extensions',
          activeBasePath: 'docs/linux/',
          label: 'Linux',
          position: 'left',
          items: [
            {
              activeBasePath:'docs/linux/desktop/',
              label: 'Desktop',
              to: 'docs/linux/desktop/gnome-shell-extensions'
            },
            {
              activeBasePath:'docs/linux/packages',
              label: 'Software Packages',
              to: 'docs/linux/packages/file-systems'
            },
            {
              activeBasePath:'docs/linux/ros',
              label: 'ROS',
              to: 'docs/linux/ros/using-catkin-build'
            },
            {
              activeBasePath:'docs/linux/kernel',
              label: 'Drivers & Kernel',
              to: 'docs/linux/kernel/grub-default-kernel'
            },
          ]
        },
        {
          to: 'docs/productivity/git/git',
          activeBasePath: 'docs/productivity/',
          label: 'Productivity',
          position: 'left',
          items: [
            {
              activeBasePath:'docs/productivity/git',
              label: 'Git Version Control',
              to: 'docs/productivity/git/git'
            },
            {
              activeBasePath:'docs/productivity/cmake_debug',
              label: 'CMake and Debugging',
              to: 'docs/productivity/cmake_debug/cmake'
            },
            {
              activeBasePath:'docs/productivity/uiux',
              label: 'UI/UX Tools',
              to: 'docs/productivity/uiux/pangolin'
            },
          ]
        },
        {
          to: 'docs/research/',
          activeBasePath: 'docs/research/',
          label: 'Research',
          position: 'left',

          items: [
            {
              activeBasePath:'docs/research/calibration',
              label: 'Sensor Calibration',
              to: 'docs/research/calibration/index'
            },
            {
              activeBasePath:'docs/research/vio',
              label: 'VIO',
              to: 'docs/research/vio/basalt-backend'
            },
          ]
        },
        {
          to: 'docs/examples/doc1',
          activeBasePath: 'docs/examples',
          label: 'Examples',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/chengguizi/chengguizi.github.io',
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
            'https://github.com/chengguizi/chengguizi.github.io',
          // showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {strict: false}]],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/chengguizi/chengguizi.github.io',
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {strict: false}]],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
