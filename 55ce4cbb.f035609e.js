(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{140:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),f=n,b=u["".concat(o,".").concat(f)]||u[f]||p[f]||i;return r?a.a.createElement(b,c(c({ref:t},s),{},{components:r})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(6),i=(r(0),r(140)),o={hide_title:!0,sidebar_label:"ZED Camera"},c={unversionedId:"hardware/cameras/zed-install",id:"hardware/cameras/zed-install",isDocsHomePage:!1,title:"zed-install",description:"ZED SDK",source:"@site/docs/hardware/cameras/zed-install.md",permalink:"/docs/hardware/cameras/zed-install",editUrl:"https://github.com/chengguizi/chengguizi.github.io/docs/hardware/cameras/zed-install.md",lastUpdatedAt:1597829776,sidebar_label:"ZED Camera",sidebar:"camerasSidebar",previous:{title:"realsense-install",permalink:"/docs/hardware/cameras/realsense-install"}},l=[{value:"ZED SDK",id:"zed-sdk",children:[]},{value:"Modification to Settings Folder (if needed):",id:"modification-to-settings-folder-if-needed",children:[]}],s={rightToc:l};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"zed-sdk"},"ZED SDK"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"download from ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.stereolabs.com/developers/release/"}),"https://www.stereolabs.com/developers/release/"),", use version ZED SDK for Jetpack 4.3 (CUDA 10)")),Object(i.b)("h2",{id:"modification-to-settings-folder-if-needed"},"Modification to Settings Folder (if needed):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"add soft symlink from ",Object(i.b)("inlineCode",{parentName:"li"},"/usr/local/zed/settings")," to ",Object(i.b)("inlineCode",{parentName:"li"},"/media/nvidia/SD/catkin_ws/src/ddrone_v2/param/zed/settings"))))}d.isMDXComponent=!0}}]);