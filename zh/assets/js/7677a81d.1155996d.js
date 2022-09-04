(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[722],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(n),p=i,m=f["".concat(u,".").concat(p)]||f[p]||d[p]||o;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},983:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r=n(7294),i=n(9205),o="titleOffset_2I3u",c="iconContainer_1xRA",a=function(e){var t=e.title?r.createElement("div",{className:"card__header"},r.createElement("span",{className:c},e.icon&&r.createElement(i.A,{icon:e.icon,link:e.link,active:"true"})),r.createElement("h3",{className:e.icon&&o},e.title)):"";return r.createElement("div",{className:"card-demo",style:{margin:"2rem"}},r.createElement("div",{className:"card"},t,r.createElement("div",{className:"card__body"},r.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return l}});var r=n(7294),i="hidden_2JtY",o="iconContainer_2Rnc",c="visible_2147",a="link_Lh4h",u="clickable_3vcc",l=function(e){var t=" "+(e.active?c:i),n=a+" "+(e.link&&u);return r.createElement("div",{className:o+t},r.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},3451:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),c=n(983),a=["components"],u={title:"\u7b80\u4ecb",sidebar_position:1},l={unversionedId:"Guide/web-ifc/Introduction",id:"Guide/web-ifc/Introduction",isDocsHomePage:!1,title:"\u7b80\u4ecb",description:"\ud83d\udea7\ud83d\udc77\u200d\u2640\ufe0f \u5efa\u8bbe\u4e2d \ud83d\udc77\u200d\u2642\ufe0f\ud83d\udea7",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/Guide/web-ifc/Introduction.mdx",sourceDirName:"Guide/web-ifc",slug:"/Guide/web-ifc/Introduction",permalink:"/info/zh/docs/Guide/web-ifc/Introduction",version:"current",sidebarPosition:1,frontMatter:{title:"\u7b80\u4ecb",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Contribute",permalink:"/info/zh/docs/Guide/web-ifc/Contribution"},next:{title:"Hello World",permalink:"/info/zh/docs/Guide/web-ifc/Tutorials/Hello world"}},s=[{value:"\ud83d\udea7\ud83d\udc77\u200d\u2640\ufe0f \u5efa\u8bbe\u4e2d \ud83d\udc77\u200d\u2642\ufe0f\ud83d\udea7",id:"\u2640\ufe0f-\u5efa\u8bbe\u4e2d-\u2642\ufe0f",children:[]}],d={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u2640\ufe0f-\u5efa\u8bbe\u4e2d-\u2642\ufe0f"},"\ud83d\udea7\ud83d\udc77\u200d\u2640\ufe0f \u5efa\u8bbe\u4e2d \ud83d\udc77\u200d\u2642\ufe0f\ud83d\udea7"),(0,o.kt)(c.M,{icon:"\ud83d\udc99",title:"\u611f\u8c22\u4f60\u5bf9IFC.js\u7684\u5174\u8da3!",mdxType:"IfcCard"},"\u6211\u4eec\u73b0\u5728\u6b63\u5728\u5efa\u7acb\u8fd9\u4e00\u90e8\u5206\u7684\u6587\u6863\u3002\u540c\u65f6\uff0c\u60a8\u53ef\u4ee5\u52a0\u5165",(0,o.kt)("a",{href:"https://discord.gg/FXfyR4XrKT"},"Discord\u9891\u9053"),"\uff0c\u5e76\u5411\u6211\u4eec\u63d0\u51fa\u4efb\u4f55\u5173\u4e8e\u5b9e\u65bdIFC.js\u6216\u52a0\u5165\u8be5\u9879\u76ee\u6240\u9700\u7684\u95ee\u9898\u3002"))}f.isMDXComponent=!0}}]);