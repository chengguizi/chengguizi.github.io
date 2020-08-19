(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),o=(n(0),n(140)),a={id:"tonemapping-intro",title:"Introduction to Tonemapping",author:"Huimin C.",author_url:"https://github.com/chengguizi",tags:["HDR"]},c={permalink:"/blog/tonemapping-intro",editUrl:"https://github.com/chengguizi/chengguizi.github.io/blog/2020-06-19-tonemapping-intro.md",source:"@site/blog/2020-06-19-tonemapping-intro.md",description:"Tonemapping",date:"2020-06-19T00:00:00.000Z",tags:[{label:"HDR",permalink:"/blog/tags/hdr"}],title:"Introduction to Tonemapping",readingTime:.395,truncated:!1,prevItem:{title:"MOSFET Automatic Power Switching",permalink:"/blog/mosfet-automatic-power-switching"},nextItem:{title:"About Vulkan and Future of High Performance Computing",permalink:"/blog/about-vulkan"}},l=[{value:"Schlick (1994)",id:"schlick-1994",children:[]},{value:"Tumblin (1999)",id:"tumblin-1999",children:[]},{value:"Durand (2004)",id:"durand-2004",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"tonemapping"},"Tonemapping"),Object(o.b)("h3",{id:"schlick-1994"},"Schlick (1994)"),Object(o.b)("p",null,"Photorealistic rendering techniques, chapter Quantization Techniques for the Visusalization of High Dynamic Range Pictures"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Sigmoid compression")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Schlick\u2019s s-shaped curve reduces some of the problems caused by clipping however its limited dynamic range makes it only viable for MDR images.")),Object(o.b)("h3",{id:"tumblin-1999"},"Tumblin (1999)"),Object(o.b)("p",null,"Two methods for display of high contrast images."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"tanh")),Object(o.b)("h3",{id:"durand-2004"},"Durand (2004)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"bilateral filter")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"detailed layer (LDR) + base layer (HDR)\nor, illuminance and reflectance layer")))}p.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,d=b["".concat(a,".").concat(s)]||b[s]||m[s]||o;return n?i.a.createElement(d,c(c({ref:t},u),{},{components:n})):i.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);