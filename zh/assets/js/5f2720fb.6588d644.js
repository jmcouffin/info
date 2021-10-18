(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9991],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(n),f=i,m=s["".concat(l,".").concat(f)]||s[f]||p[f]||c;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,a=new Array(c);a[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3878:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});var r=n(7294),i="icon_1PGw",c=n(9205),a=function(e){return r.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},r.createElement("div",{className:i},r.createElement(c.A,{icon:"\ud83d\udca1",active:"true"})),e.children)}},983:function(e,t,n){"use strict";n.d(t,{M:function(){return o}});var r=n(7294),i=n(9205),c="titleOffset_2I3u",a="iconContainer_1xRA",o=function(e){var t=e.title?r.createElement("div",{className:"card__header"},r.createElement("span",{className:a},e.icon&&r.createElement(i.A,{icon:e.icon,link:e.link,active:"true"})),r.createElement("h3",{className:e.icon&&c},e.title)):"";return r.createElement("div",{className:"card-demo",style:{margin:"2rem"}},r.createElement("div",{className:"card"},t,r.createElement("div",{className:"card__body"},r.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var r=n(7294),i="hidden_2JtY",c="iconContainer_2Rnc",a="visible_2147",o="link_Lh4h",l="clickable_3vcc",u=function(e){var t=" "+(e.active?a:i),n=o+" "+(e.link&&l);return r.createElement("div",{className:c+t},r.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},2671:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=n(2122),i=n(9756),c=(n(7294),n(3905)),a=n(983),o=n(3878),l=["components"],u={title:"\u7b80\u4ecb",sidebar_position:1},d={unversionedId:"Guide/web-ifc-three/Introduction",id:"Guide/web-ifc-three/Introduction",isDocsHomePage:!1,title:"\u7b80\u4ecb",description:"BIM\u4e0d\u4ec5\u662f\u51e0\u4f55\u5b66...",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/Guide/web-ifc-three/Introduction.mdx",sourceDirName:"Guide/web-ifc-three",slug:"/Guide/web-ifc-three/Introduction",permalink:"/info/zh/docs/Guide/web-ifc-three/Introduction",version:"current",sidebarPosition:1,frontMatter:{title:"\u7b80\u4ecb",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/info/zh/docs/Guide/web-ifc/Introduction"},next:{title:"\u8bbe\u7f6e",permalink:"/info/zh/docs/Guide/web-ifc-three/Setup"}},p=[{value:"BIM\u4e0d\u4ec5\u662f\u51e0\u4f55\u5b66...",id:"bim\u4e0d\u4ec5\u662f\u51e0\u4f55\u5b66",children:[{value:"\u6211\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528<code>web-ifc</code>\u5417\uff1f",id:"\u6211\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528web-ifc\u5417\uff1f",children:[]}]}],s={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,c.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"bim\u4e0d\u4ec5\u662f\u51e0\u4f55\u5b66"},"BIM\u4e0d\u4ec5\u662f\u51e0\u4f55\u5b66..."),(0,c.kt)("p",null,"...\u4f46\u5b83\u6709\u51e0\u4f55\u5b66\u3002"),(0,c.kt)("p",null,"  \ud83d\udcaa\n",(0,c.kt)("a",{parentName:"p",href:"%22https://ifcjs.github.io/info/docs/Guide/web-ifc/Introduction%22"},"Web-ifc"),"\u662f\u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u7684\u5de5\u5177\uff0c\u80fd\u591f\u4ee5\u63a5\u8fd1\u539f\u751f\u7684\u901f\u5ea6\u8bfb\u5199IFCs\u3002\u7136\u800c\uff0c\u51e0\u4e4e\u6240\u6709\u7684BIM\u5e94\u7528\u7a0b\u5e8f\u90fd\u4f1a\u5411\u7528\u6237\u5c55\u793a\u4ed6\u4eec\u6b63\u5728\u5904\u7406\u7684\u6a21\u578b\u7684\u4e09\u7ef4\u89c6\u56fe\u3002\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u56fe\u5f62\u5f15\u64ce\u4e2d\u4f7f\u7528",(0,c.kt)("inlineCode",{parentName:"p"},"web-ifc"),"\uff0c\u4f46\u6211\u4eec\u5df2\u7ecf\u5728",(0,c.kt)("strong",{parentName:"p"},"web-ifc-three"),"\u4e2d\u4e3a\u4f60\u505a\u4e86\u8fd9\u4e9b\u3002"),(0,c.kt)("p",null,"  \ud83e\uddf6\n",(0,c.kt)("inlineCode",{parentName:"p"},"web-ifc-three"),"\u662f",(0,c.kt)("inlineCode",{parentName:"p"},"web-ifc"),"\u7684\u4e00\u4e2a\u5305\u88c5\u5668\uff0c\u5b83\u4eceIFC\u6587\u4ef6\u4e2d\u8bfb\u53d6\u6240\u6709\u6570\u636e\uff0c\u5e76\u5c06\u5176\u8f6c\u5316\u4e3a\u53ef\u5728\u4efb\u4f55\u6d4f\u89c8\u5668\u4e2d\u663e\u793a\u548c\u7f16\u8f91\u7684\u51e0\u4f55\u56fe\u5f62\u3002\u4f60\u53ef\u4ee5\u7528",(0,c.kt)("inlineCode",{parentName:"p"},"npm i web-ifc-three"),"\u6216",(0,c.kt)("inlineCode",{parentName:"p"},"yarn add web-ifc-three"),"\u5b89\u88c5\u5b83\u3002\u5173\u4e8e\u8fd9\u4e2a\u6a21\u5757\u7684\u4e00\u4e9b\u5f88\u9177\u7684\u4e8b\u5b9e\u3002"),(0,c.kt)(a.M,{mdxType:"IfcCard"},"\ud83d\udc23 \u5b83\u8d85\u7ea7\u5bb9\u6613\u4f7f\u7528\u3002"),(0,c.kt)(a.M,{mdxType:"IfcCard"},"\ud83c\udfa9 \u5b83\u662f",(0,c.kt)("a",{href:"https://threejs.org/examples/webgl_loader_ifc.html"},"Three.js\u7684\u5b98\u65b9IFCLoader"),"\u3002"),(0,c.kt)(a.M,{mdxType:"IfcCard"},"\ud83d\ude80 \u5b83\u975e\u5e38\u9ad8\u6548\uff0c\u80fd\u591f\u5728\u6d4f\u89c8\u5668\u4e2d\u4ee560\u5e27/\u79d2\u7684\u901f\u5ea6\u663e\u793a\u6210\u5343\u4e0a\u4e07\u7684\u7269\u4f53\u3002\u5b83\u53ef\u4ee5\u663e\u793a\u591a\u4e2a\u6a21\u578b\uff0c\u6539\u53d8\u6750\u6599\u548c\u8fc7\u6ee4\u9879\u76ee\u3002"),(0,c.kt)(a.M,{mdxType:"IfcCard"},"\ud83e\udde0 \u5b83\u53ef\u4ee5\u83b7\u5f97\u5e76\u904d\u5386\u591a\u4e2a\u6587\u4ef6\u7684\u7a7a\u95f4\u7ed3\u6784\u6811\u3002\u6b64\u5916\uff0c\u5b83\u8fd8\u53ef\u4ee5\u8bbf\u95ee\u6240\u6709\u9879\u76ee\u7684\u5c5e\u6027\uff0c\u65e2\u53ef\u4ee5\u5728\u4e09\u7ef4\u89c6\u56fe\u4e2d\u70b9\u51fb\u5b83\u4eec\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u667a\u80fd\u8fc7\u6ee4\u5668\u3002"),(0,c.kt)("p",null,"  \ud83c\udf93\n\u5728\u4ee5\u4e0b\u51e0\u70b9\u4e2d\uff0c\u5c06\u9010\u6b65\u5c55\u793a\u8be5API\u53ca\u5176\u529f\u80fd\u3002\u7136\u800c\uff0c\u5728\u4f7f\u7528web-ifc-three\u4e4b\u524d\uff0c\u6709\u51e0\u4e2a\u95ee\u9898\u662f\u5fc5\u987b\u8981\u6e05\u695a\u7684\u3002"),(0,c.kt)("h3",{id:"\u6211\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528web-ifc\u5417\uff1f"},"\u6211\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,c.kt)("inlineCode",{parentName:"h3"},"web-ifc"),"\u5417\uff1f"),(0,c.kt)("p",null,"\u901a\u8fc7web-ifc\uff0c\u4f60\u53ef\u4ee5\u5efa\u7acb\u51e0\u4e4e\u6240\u6709\u80fd\u591f\u8bfb\u5199IFC\u7684BIM\u5de5\u5177\u3002\u90a3\u4e48\uff0c\u4e3a\u4ec0\u4e48\u8981\u5728\u5b83\u4e0a\u9762\u521b\u5efa\u4e00\u4e2a\u5c42\u5462\uff1f"),(0,c.kt)("p",null,"  \ud83e\udd37\u200d\u2640\ufe0f\n\u56e0\u4e3a\u51e0\u4e4e\u6240\u6709\u7684BIM\u5de5\u5177\u90fd\u662f3D\u7684\uff0c\u800c\u4e14\u6211\u4eec\u8ba4\u4e3a\u5bf9\u6240\u6709\u7684\u5f00\u53d1\u8005\u6765\u8bf4\uff0c\u4ece\u5934\u5f00\u59cb\u5b9e\u73b0\u4e00\u4e2a\u67e5\u770b\u5668\u662f\u6ca1\u6709\u610f\u4e49\u7684\u3002\u5982\u679c\u4f60\u53ea\u5bf9\u6570\u636e\u611f\u5174\u8da3\uff0c\u4f60\u53ef\u80fd\u6700\u597d\u76f4\u63a5\u4f7f\u7528web-ifc\u3002"),(0,c.kt)("p",null,"\u6b64\u5916\uff0cweb-ifc-three\u8ba9\u4f7f\u7528IFC\u7684\u5de5\u4f5c\u53d8\u5f97\u66f4\u52a0\u7b80\u5355\u548c\u5b89\u5168\uff0c\u5373\u4f7f\u662f\u5bf9\u4e8e\u90a3\u4e9b\u4ee5\u524d\u6ca1\u6709\u4f7f\u7528\u8be5\u683c\u5f0f\u7ecf\u9a8c\u7684\u5f00\u53d1\u8005\u6765\u8bf4\u4e5f\u662f\u5982\u6b64\u3002"),(0,c.kt)(o.r,{mdxType:"IfcAlert"},"Web-ifc\u66f4\u7075\u6d3b\uff0c\u4f46\u9700\u8981\u66f4\u591aIFC\u6a21\u5f0f\u7684\u77e5\u8bc6\u3002"),(0,c.kt)("p",null,"###\u6211\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,c.kt)("inlineCode",{parentName:"p"},"THREE.IFCLoader"),"\u5417?"),(0,c.kt)("p",null,"  \ud83d\udc6c\n\u5982\u4e0a\u6240\u8ff0\uff0c",(0,c.kt)("inlineCode",{parentName:"p"},"web-ifc-three")," \u662f Three.js \u7684\u5b98\u65b9 IFCLoader\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u4f60\u4eceThree.js\u4e2d\u5bfc\u5165IFCLoader\uff0c\u5176\u4ee3\u7801\u5c06\u4e0e",(0,c.kt)("inlineCode",{parentName:"p"},"web-ifc-three"),"\u8d44\u6e90\u5e93\u4e2d\u7684\u4ee3\u7801\u76f8\u540c\u3002"),(0,c.kt)("p",null,"  \ud83d\udea7\n\u4f60\u53ef\u80fd\u60f3\u4eceThree.js\u5bfc\u5165",(0,c.kt)("inlineCode",{parentName:"p"},"IFCLoader"),"\uff0c\u4ee5\u907f\u514d\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u5bfc\u5165",(0,c.kt)("inlineCode",{parentName:"p"},"web-ifc-three"),"\u3002\u8fd9\u5e94\u8be5\u53ef\u4ee5\uff0c\u4f46\u8981\u6ce8\u610fThree.js\u662f\u4e00\u4e2a\u975e\u5e38\u5927\u7684\u5e93\uff0c\u5176\u66f4\u65b0\u901f\u5ea6\u6bd4IFC.js\u6162\u5f97\u591a\u3002"),(0,c.kt)(a.M,{icon:"\u23f3",title:"\u7565\u6709\u5ef6\u8fdf",mdxType:"IfcCard"}," Three.js IFCLoader\u53ef\u80fd\u6ca1\u6709\u6700\u65b0\u7684\u66f4\u65b0\uff0c\u5728\u4e0b\u4e00\u4e2a\u7248\u672c\u53d1\u5e03\u4e4b\u524d\uff0c\u6211\u4eec\u5df2\u7ecf\u4fee\u590d\u7684\u6700\u65b0bug\u5728Three.js\u4e2d\u4ecd\u672a\u5f97\u5230\u89e3\u51b3\u3002"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"Three.js IFCLoader"),"\u53ef\u80fd\u6ca1\u6709\u6700\u65b0\u7684\u66f4\u65b0\uff0c\u5728\u4e0b\u4e00\u4e2a\u7248\u672c\u53d1\u5e03\u4e4b\u524d\uff0c\u6211\u4eec\u5df2\u7ecf\u4fee\u590d\u7684\u6700\u65b0bug\u5728Three.js\u4e2d\u4ecd\u672a\u5f97\u5230\u89e3\u51b3\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},'  // \u5bfc\u5165web-ifc-three\uff08\u539f\u59cb\uff09IFCLoader\n  import {\n    IFCLoader\n} from "web-ifc-three/IFCLoader";\n\n  // \u5bfc\u5165three.js IFCLoader\n  import {\n      IFCLoader\n  } from "three/examples/jsm/loaders/IFCLoader";\n')))}f.isMDXComponent=!0}}]);