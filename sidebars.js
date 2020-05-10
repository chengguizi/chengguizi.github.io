module.exports = {
  examplesSidebar: {
    Docusaurus: [
    'examples/doc1', 
    'examples/doc2',
    'examples/doc3'
    ],
    Features: ['examples/mdx'],
  },
  tx2Sidebar: {
    'All About Images': [
      'hardware/jetson/prepare-bsp-rfs',
      'hardware/jetson/flash-existing-image',
      'hardware/jetson/backup-procedures',
      'hardware/jetson/mount-image-as-loopback',
      
    ],
    'Getting Started': [
      'hardware/jetson/tx2-post-flashing',
      'hardware/jetson/uart-setup',
      'hardware/jetson/usb-setup',
      'hardware/jetson/power-button',
      'hardware/jetson/external-sd-card',
      'hardware/jetson/hotspot-setup',
      'hardware/jetson/network-sharing',
      'hardware/jetson/misc'
    ],
    'Software Packages': [
      'hardware/jetson/pytorch-install',
      'hardware/jetson/vscode-install'
    ]
  },
  camerasSidebar: {
    'USB Cameras': [
      'hardware/cameras/tiscamera-install',
      'hardware/cameras/realsense-install',
      'hardware/cameras/zed-install',
    ]
  },
  linuxSidebar: {
    'Convenience': [
      'linux/gnome-shell-extensions',
    ],
    'Productivity': [
      'linux/git',
      'linux/debugging'
    ],
    'Software Packages': [
      'linux/file-systems',
      'linux/gstreamer',
      'linux/latex',
      'linux/nodejs',
      'linux/nginx',
      'linux/opencv',
      'linux/roslib.js',
    ]
  },
  kernelSidebar: {
    'Boot': [
      'kernel/grub-default-kernel'
    ],
    'Graphics': [
      'kernel/nvidia-intel-driver'
    ],
    'IO': [
      'kernel/usb'
    ]
    
  }
};
