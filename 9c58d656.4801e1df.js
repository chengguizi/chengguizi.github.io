(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),i=(n(0),n(140)),a={hide_title:!0,sidebar_label:"External SD Card"},s={unversionedId:"hardware/jetson/external-sd-card",id:"hardware/jetson/external-sd-card",isDocsHomePage:!1,title:"external-sd-card",description:"Steps in preparing an External SD Card with the right permissions for TX2",source:"@site/docs/hardware/jetson/external-sd-card.md",permalink:"/docs/hardware/jetson/external-sd-card",editUrl:"https://github.com/chengguizi/chengguizi.github.io/docs/hardware/jetson/external-sd-card.md",lastUpdatedAt:1597829776,sidebar_label:"External SD Card",sidebar:"tx2Sidebar",previous:{title:"power-button",permalink:"/docs/hardware/jetson/power-button"},next:{title:"hotspot-setup",permalink:"/docs/hardware/jetson/hotspot-setup"}},l=[{value:"To clear ACL settings",id:"to-clear-acl-settings",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"steps-in-preparing-an-external-sd-card-with-the-right-permissions-for-tx2"},"Steps in preparing an External SD Card with the right permissions for TX2"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Option 1")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Format the SD Card in the Ubuntu GUI (right click -> format), selecting ",Object(i.b)("inlineCode",{parentName:"li"},"ext4")," filesystem."),Object(i.b)("li",{parentName:"ol"},"Done :)")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Option 2 (Should not use)")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Format the SD Card with ",Object(i.b)("inlineCode",{parentName:"li"},"ext4")," filesystem"),Object(i.b)("li",{parentName:"ol"},"Locate in the terminal, the location of the mounting point (in the host machine)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"An Example is /media/user/sdcard"))),Object(i.b)("li",{parentName:"ol"},"In the parent folder (e.g. /media/user), adjust the ownerships of the SD card's filesystem recursively",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sudo chown -R 1001:adm sdcard")),Object(i.b)("li",{parentName:"ul"},"1001 indicate the uid of the user ",Object(i.b)("inlineCode",{parentName:"li"},"nvidia")," on the TX2"))),Object(i.b)("li",{parentName:"ol"},"Next, adjust the permissions recursively",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sudo chmod -R 755 sdcard"),", if you want only the TX2 has the write permissions, or"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sudo chmod -R 775 sdcard"),", if you want both the host and TX2 to have write permissions upon mounting")))),Object(i.b)("h1",{id:"modification-done-on-tx2-one-time"},"Modification done on TX2, one-time"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"/dev/mmcblk1p1      /media/nvidia/SD    ext4        defaults,noauto       0  2")," to the end of /etc/fstab")),Object(i.b)("h1",{id:"miscellaneous"},"Miscellaneous"),Object(i.b)("h2",{id:"to-clear-acl-settings"},"To clear ACL settings"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"setfacl -b nvidia"))),Object(i.b)("h1",{id:"regarding-removable-devices-permissions"},"Regarding Removable Devices Permissions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The SD Card should be formated as ext4 filesystem, as it supports standard Linux permission flags, in contrast to FAT")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\nLike any unix-style filesystem, ext4 includes standard Unix file ownership and permission conventions. That is, the user is identified by an UID number, and each user will belong to one or more groups, each group identified by its GID number. Each file has an owner UID and one group owner GID. The three classic Unix file permission sets are:\n\n    one set of permissions for the owner, identified by the owner's UID number\n    one set of permissions for the group owner, identified by the group's GID number\n    one set of permissions for everyone else\n\nIn order to be able to access the stick without needing to adjust permissions, you must make sure any files and directories created on the stick will have non-restrictive permissions automatically. The problem is, permissions on any new files created are controlled by the umask value... and you don't really want to keep changing it to 000 for creating files on the USB stick and back to the default value (usually 002 or 022) for normal use. A single mistake could lead you creating an important configuration file with wide-open permissions, that might compromise the security of your user account or cause other more minor problems.\n\nIf you can make sure that your normal user's UID number is the same across all your Linux systems, and you only care about access for that one user (plus root of course), you can get away with just formatting the USB stick to ext4, mounting it for the first time, and assigning the ownership of its root directory to your regular user account before you begin using the filesystem.\n\nAssuming that /dev/sdX1 is the USB stick partition you wish to create the filesystem in, and <username> is your username, you can do this when setting up the USB stick for use:\n\nsudo mkfs.ext4 /dev/sdX1\nsudo mount /dev/sdX1 /mnt\nsudo chown <username>: /mnt\nsudo umount /mnt\n\nBut if you cannot guarantee matching UID/GID numbers, and/or there are multiple users who might want to use the USB stick, you'll need to do something a bit more complicated, but still an one-time operation after creating the ext4 filesystem on the stick.\n\nWe need to set a default ACL on the root directory of the USB stick filesystem that assigns full access to everyone on any new file or directory. And to ensure that the stick will be mounted with ACL support enabled, we need to use tune2fs to adjust the default mount options stored in the filesystem metadata.\n\nsudo mkfs.ext4 /dev/sdX1\nsudo tune2fs -o acl /dev/sdX1\nsudo mount /dev/sdX1 /mnt\nsudo chown <username>: /mnt\nchmod 777 /mnt\nsetfacl -m d:u::rwx,d:g::rwx,d:o::rwx /mnt\nsudo umount /mnt\n\nAssuming that all your systems support ACLs on ext4 filesystems, and that any removable media mounting tool you might use won't choose to ignore the acl mount option, you now should have a USB stick on which all files created on it will have permissions -rw-rw-rw- and all created sub-directories will be drwxrwxrwx+. The plus sign indicates that the sub-directory will have an ACL: the custom default permission set configured for the stick's root directory will be inherited by the sub-directories too, and they will behave the same.\n\nThe owner UID/GID will still match the UID and primary GID of the user that created the file on the filesystem, but because of relaxed file and directory permissions, that should not be much of an issue.\n\nThe only problem I might expect is that copying files to the USB stick will by default attempt to duplicate the file permissions of the original, which you don't want in this case.\n\nFor example, if you create a file on System A with permissions -rw-r--r-- and copy it to the stick, then move the stick to System B with non-matching UID numbers. You can still read the file on System B, but you cannot overwrite it on the stick without first explicitly deleting or renaming the original file. But you can do that, as long as you have write access to the directory the file's in.\n\nThis can actually be an useful feature: if you modify the same file on multiple systems, this will push you towards saving a new version of the file each time instead of overwriting the One True File... and if the file is important, that might actually be a good thing.\n\n")))}u.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,p=d["".concat(a,".").concat(h)]||d[h]||m[h]||i;return n?o.a.createElement(p,s(s({ref:t},c),{},{components:n})):o.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);