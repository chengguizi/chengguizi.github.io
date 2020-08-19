(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{140:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=d(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(t),p=r,m=b["".concat(o,".").concat(p)]||b[p]||u[p]||i;return t?a.a.createElement(m,s(s({ref:n},l),{},{components:t})):a.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},59:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(6),i=(t(0),t(140)),o={hide_title:!0,sidebar_label:"Network Sharing"},s={unversionedId:"hardware/jetson/network-sharing",id:"hardware/jetson/network-sharing",isDocsHomePage:!1,title:"network-sharing",description:"Modifications Done for Networking",source:"@site/docs/hardware/jetson/network-sharing.md",permalink:"/docs/hardware/jetson/network-sharing",editUrl:"https://github.com/chengguizi/chengguizi.github.io/docs/hardware/jetson/network-sharing.md",lastUpdatedAt:1597829776,sidebar_label:"Network Sharing",sidebar:"tx2Sidebar",previous:{title:"hotspot-setup",permalink:"/docs/hardware/jetson/hotspot-setup"},next:{title:"misc",permalink:"/docs/hardware/jetson/misc"}},c=[{value:"Modifications Done for Networking",id:"modifications-done-for-networking",children:[]},{value:"Added Samba Services for Remote File Editing",id:"added-samba-services-for-remote-file-editing",children:[]},{value:"To allow insecure symlinks to outside shared folder (Not needed)",id:"to-allow-insecure-symlinks-to-outside-shared-folder-not-needed",children:[]},{value:"Enable Screen Sharing for VNC",id:"enable-screen-sharing-for-vnc",children:[]}],l={rightToc:c};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"modifications-done-for-networking"},"Modifications Done for Networking"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Wifi power saving is disabled in ",Object(i.b)("inlineCode",{parentName:"li"},"/etc/NetworkManager/conf.d/")," ",Object(i.b)("inlineCode",{parentName:"li"},"wifi.powersave")," from 3 to 2"),Object(i.b)("li",{parentName:"ul"},"ipv6 usage in avahi-daemon is turned off in ",Object(i.b)("inlineCode",{parentName:"li"},"/etc/avahi/avahi-daemon.conf"),". This is to make .local resolve works better")),Object(i.b)("h2",{id:"added-samba-services-for-remote-file-editing"},"Added Samba Services for Remote File Editing"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"sudo apt install samba"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"add current user to samba database"),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"sudo smbpasswd -a nvidia")),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"to list users, use ",Object(i.b)("inlineCode",{parentName:"li"},"sudo pdbedit -L"))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"edit ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/samba/smb.conf"),", add at last:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"[home]\npath = /home/nvidia\nvalid users = nvidia\ncreate mask = 0664\ndirectory mask = 0775\nbrowseable = yes\nwritable = yes\nguest ok = no\nfollow symlinks = yes\n\n[SD]\npath = /media/nvidia/SD\nvalid users = nvidia\ncreate mask = 0664\ndirectory mask = 0775\nbrowseable = yes\nwritable = yes\nguest ok = no\nfollow symlinks = yes\n\n[rootfs]\npath = /\nadmin users = nvidia\nforce group = root\ncreate mask = 0644\nbrowseable = yes\nwritable = yes\nguest ok = no\nfollow symlinks = yes\n")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"restart samba ",Object(i.b)("inlineCode",{parentName:"li"},"sudo systemctl restart smbd.service"))),Object(i.b)("h2",{id:"to-allow-insecure-symlinks-to-outside-shared-folder-not-needed"},"To allow insecure symlinks to outside shared folder (Not needed)"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"[global]\nallow insecure wide links = yes\n\n[share]\nwide links = yes\n")),Object(i.b)("h2",{id:"enable-screen-sharing-for-vnc"},"Enable Screen Sharing for VNC"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"setup in ubuntu settings first, enable screen sharing"),Object(i.b)("li",{parentName:"ul"},"then disable encryption by, ",Object(i.b)("inlineCode",{parentName:"li"},"sudo apt install dconf-tools"),", and in org.gnome.desktop.remote-access.require-encryption, turn off")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://askubuntu.com/questions/1192382/can-i-use-ubuntu-18-04-screen-sharing-with-vino-with-mac-os-x-mojave-screen-shar"}),"Reference")))}d.isMDXComponent=!0}}]);