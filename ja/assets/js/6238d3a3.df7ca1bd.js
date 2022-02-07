(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5434],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3878:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var r=n(7294),a="icon_1PGw",i=n(9205),c=function(e){return r.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},r.createElement("div",{className:a},r.createElement(i.A,{icon:"\ud83d\udca1",active:"true"})),e.children)}},983:function(e,t,n){"use strict";n.d(t,{M:function(){return o}});var r=n(7294),a=n(9205),i="titleOffset_2I3u",c="iconContainer_1xRA",o=function(e){var t=e.title?r.createElement("div",{className:"card__header"},r.createElement("span",{className:c},e.icon&&r.createElement(a.A,{icon:e.icon,link:e.link,active:"true"})),r.createElement("h3",{className:e.icon&&i},e.title)):"";return r.createElement("div",{className:"card-demo",style:{margin:"2rem"}},r.createElement("div",{className:"card"},t,r.createElement("div",{className:"card__body"},r.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return l}});var r=n(7294),a="hidden_2JtY",i="iconContainer_2Rnc",c="visible_2147",o="link_Lh4h",s="clickable_3vcc",l=function(e){var t=" "+(e.active?c:a),n=o+" "+(e.link&&s);return r.createElement("div",{className:i+t},r.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},6649:function(e,t,n){"use strict";n.d(t,{x:function(){return i}});var r=n(7294),a="threeScene_3QXR",i=function(e){return r.createElement("iframe",{className:a,width:"100%",height:"600px",key:Math.random(),src:e.link,frameBorder:"0"})}},3030:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),c=(n(983),n(3878)),o=n(6649),s=["components"],l={title:"\ud83e\udd0f \u30d4\u30c3\u30ad\u30f3\u30b0",sidebar_position:1},u={unversionedId:"Guide/web-ifc-three/Tutorials/Picking",id:"Guide/web-ifc-three/Tutorials/Picking",isDocsHomePage:!1,title:"\ud83e\udd0f \u30d4\u30c3\u30ad\u30f3\u30b0",description:"\u306f\u3058\u3081\u306b",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/Guide/web-ifc-three/Tutorials/Picking.mdx",sourceDirName:"Guide/web-ifc-three/Tutorials",slug:"/Guide/web-ifc-three/Tutorials/Picking",permalink:"/info/ja/docs/Guide/web-ifc-three/Tutorials/Picking",version:"current",sidebarPosition:1,frontMatter:{title:"\ud83e\udd0f \u30d4\u30c3\u30ad\u30f3\u30b0",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/info/ja/docs/Guide/web-ifc-three/api"},next:{title:"\u2728 \u30b5\u30d6\u30bb\u30c3\u30c8",permalink:"/info/ja/docs/Guide/web-ifc-three/Tutorials/Highlighting"}},d=[{value:"\u306f\u3058\u3081\u306b",id:"\u306f\u3058\u3081\u306b",children:[{value:"Three.js\u306e\u4f9d\u5b58\u95a2\u4fc2\u306e\u30a4\u30f3\u30dd\u30fc\u30c8",id:"threejs\u306e\u4f9d\u5b58\u95a2\u4fc2\u306e\u30a4\u30f3\u30dd\u30fc\u30c8",children:[]},{value:"\u30a4\u30f3\u30dd\u30fc\u30c8 three-mesh-bvh \uff08\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30a4\u30f3\u30dd\u30fc\u30c8-three-mesh-bvh-\uff08\u30aa\u30d7\u30b7\u30e7\u30f3",children:[]},{value:"IFC\u30e2\u30c7\u30eb\u306e\u30b9\u30c8\u30a2\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",id:"ifc\u30e2\u30c7\u30eb\u306e\u30b9\u30c8\u30a2\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",children:[]}]},{value:"\u305d\u306e\u65b9\u6cd5\u3068\u306f",id:"\u305d\u306e\u65b9\u6cd5\u3068\u306f",children:[]},{value:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",id:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",children:[]}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),(0,i.kt)("p",null,"\ud83d\udeb6\u200d\u2640\ufe0f\n\u3053\u308c\u307e\u3067\u306fIFC\u30e2\u30c7\u30eb\u3092\u30b7\u30fc\u30f3\u306b\u8aad\u307f\u8fbc\u3080\u3060\u3051\u3067\u3057\u305f\u3002\u3057\u304b\u3057\u3001\u305d\u306e\u30e2\u30c7\u30eb\u3092\u64cd\u4f5c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308c\u3070\u3001\u3055\u3089\u306b\u7d20\u6674\u3089\u3057\u3044\u3068\u601d\u3044\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"threejs\u306e\u4f9d\u5b58\u95a2\u4fc2\u306e\u30a4\u30f3\u30dd\u30fc\u30c8"},"Three.js\u306e\u4f9d\u5b58\u95a2\u4fc2\u306e\u30a4\u30f3\u30dd\u30fc\u30c8"),(0,i.kt)("p",null,"  \u26a1\u26a1\u26a1\n\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u3063\u3066\u4f55\u304b\u3092\u3059\u308b\u524d\u306b\u306f\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u9078\u629e\u3067\u304d\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"three"),"\u306e\u30b3\u30a2\u30e9\u30a4\u30d6\u30e9\u30ea\u304b\u3089\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u308b",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/core/Raycaster"},"Three.js Raycaster"),"\u3092\u4f7f\u3048\u3070\u7c21\u5358\u306b\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002\u3055\u3089\u306b\u3001\u30b7\u30fc\u30f3\u5185\u306e\u30de\u30a6\u30b9\u306e\u4f4d\u7f6e\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306b\u3001",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/math/Vector2"},"Vector2"),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import {\n  Raycaster,\n  Vector2\n} from "three";\n')),(0,i.kt)(c.r,{mdxType:"IfcAlert"},"\u30ec\u30a4\u30ad\u30e3\u30b9\u30bf\u30fc\u306f\u3001\u30b7\u30fc\u30f3\u5185\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u5f53\u305f\u308b\u300c\u30d3\u30fc\u30e0\u300d\u3092\u767a\u5c04\u3057\u3001\u305d\u306e\u60c5\u5831\u3092\u8fd4\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"\u30a4\u30f3\u30dd\u30fc\u30c8-three-mesh-bvh-\uff08\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30a4\u30f3\u30dd\u30fc\u30c8 three-mesh-bvh \uff08\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,i.kt)("p",null,"  \ud83d\udc69\u200d\ud83d\ude80\ud83d\ude80\n\u3055\u3089\u306b\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gkjohnson/three-mesh-bvh"},"three-mesh-bvh library"),"\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u9078\u629e\u3092\u3088\u308a\u6700\u9069\u306a\u3082\u306e\u306b\u3057\u3066\u3044\u304d\u307e\u3059\u3002\u3053\u308c\u306f ",(0,i.kt)("inlineCode",{parentName:"p"},"npm i three-mesh-bvh")," \u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002\u5fc3\u914d\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3001\u3042\u306a\u305f\u306f\u305d\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u4f7f\u3044\u65b9\u3092\u5b66\u3076\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u3053\u308c\u3089\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u6e21\u3059\u3060\u3051\u3067\u3001\u3042\u3068\u306fIFC.js\u304c\u9762\u5012\u3092\u898b\u3066\u304f\u308c\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n    acceleratedRaycast,\n    computeBoundsTree,\n    disposeBoundsTree\n} from 'three-mesh-bvh';\n\n// \u6700\u9069\u306a\u30d4\u30c3\u30ad\u30f3\u30b0\u3092\u8a2d\u5b9a\u3059\u308b\nifcLoader.ifcManager.setupThreeMeshBVH(\n                        computeBoundsTree,\n                        disposeBoundsTree,\n                        acceleratedRaycast);\n")),(0,i.kt)("h3",{id:"ifc\u30e2\u30c7\u30eb\u306e\u30b9\u30c8\u30a2\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"},"IFC\u30e2\u30c7\u30eb\u306e\u30b9\u30c8\u30a2\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"),(0,i.kt)("p",null,"  \ud83c\udfe0\ud83c\udfe0\ud83c\udfe0\n\u4f55\u304b\u3092\u3059\u308b\u524d\u306b\u3001\u30b7\u30fc\u30f3\u5185\u306eIFC\u30e2\u30c7\u30eb\u3092\u9078\u629e\u3059\u308b\u305f\u3081\u306e\u53c2\u7167\u3092\u4fdd\u5b58\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u306b\u306f\u3001\u8aad\u307f\u8fbc\u3093\u3060\u30e2\u30c7\u30eb\u3092\u4fdd\u5b58\u3059\u308b\u914d\u5217\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{2,6}","{2,6}":!0},'  // IFC\u306e\u8aad\u307f\u8fbc\u307f\u3092\u8a2d\u5b9a\u3059\u308b\n  const ifcModels = [];\n  const ifcLoader = new IFCLoader();\n  async function loadIFC() {\n      await ifcLoader.ifcManager.setWasmPath("../../");\n      ifcLoader.load("../../IFC/01.ifc", (ifcModel) => {\n          ifcModels.push(ifcModel.mesh);\n          scene.add(ifcModel.mesh);\n      });\n  }\n\nloadIFC();\n')),(0,i.kt)("h2",{id:"\u305d\u306e\u65b9\u6cd5\u3068\u306f"},"\u305d\u306e\u65b9\u6cd5\u3068\u306f"),(0,i.kt)("p",null,"  \ud83d\udc01\n\u6b21\u306b\u3001Raycaster \u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3068\u30de\u30a6\u30b9\u306e\u4f4d\u7f6e\u30d9\u30af\u30c8\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u6700\u9069\u5316\u3059\u308b\u305f\u3081\u306b\u3001Raycaster\u306f\u6700\u521d\u306b\u906d\u9047\u3057\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304b\u3089\u306e\u307f\u60c5\u5831\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const raycaster = new Raycaster();\nraycaster.firstHitOnly = true;\nconst mouse = new Vector2();\n")),(0,i.kt)("p",null,"\u6b21\u306b\u3001Raycaster\u304c\u5149\u7dda\u3092\u6295\u5c04\u3059\u308b\u305f\u3081\u306b\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306e\u30de\u30a6\u30b9\u306e\u4f4d\u7f6e\u3092\u8a08\u7b97\u3059\u308b\u95a2\u6570\u304c\u5fc5\u8981\u3067\u3059\u3002\u305d\u306e\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"threeCanvas \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001Three.js \u306e\u30b7\u30fc\u30f3\u304c\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u3066\u3044\u308b HTML \u306e ",(0,i.kt)("inlineCode",{parentName:"p"},"<canvas>")," \u8981\u7d20\u3067\u3059\u3002\u3053\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3078\u306e\u53c2\u7167\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"getElementByID()"),"\u3067\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u30d3\u30fc\u30e0\u304c\u3069\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u885d\u7a81\u3059\u308b\u304b\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u3001\u8aad\u307f\u8fbc\u3093\u3060IFC\u30e2\u30c7\u30eb\u306e\u307f\u306b\u885d\u7a81\u3057\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u30b7\u30fc\u30f3\u5185\u306b\u4ed6\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u3042\u308b\u5834\u5408\u306f\u7121\u8996\u3055\u308c\u307e\u3059\u3002"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function cast(event) {\n\n  // \u30b9\u30af\u30ea\u30fc\u30f3\u4e0a\u306e\u30de\u30a6\u30b9\u306e\u4f4d\u7f6e\u3092\u8a08\u7b97\u3059\u308b\n  const bounds = threeCanvas.getBoundingClientRect();\n\n  const x1 = event.clientX - bounds.left;\n  const x2 = bounds.right - bounds.left;\n  mouse.x = (x1 / x2) * 2 - 1;\n\n  const y1 = event.clientY - bounds.top;\n  const y2 = bounds.bottom - bounds.top;\n  mouse.y = -(y1 / y2) * 2 + 1;\n\n  // \u30de\u30a6\u30b9\u3092\u6307\u3057\u793a\u3059\u30ab\u30e1\u30e9\u306e\u4e0a\u306b\u7f6e\u304f\n  raycaster.setFromCamera(mouse, camera);\n\n  // \u5149\u7dda\u3092\u5f53\u3066\u308b\n  return raycaster.intersectObjects(ifcModels);\n}\n")),(0,i.kt)("p",null,"  \ud83d\udc53\n\u30ec\u30a4\u3092\u767a\u5c04\u3057\u3001\u305d\u308c\u304c\u885d\u7a81\u3057\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3059\u95a2\u6570\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u305d\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u4f55\u3082\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u305d\u3053\u3067\u3001\u30ec\u30a4\u304c\u5f53\u305f\u3063\u305f\u9762\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3092\u53d6\u5f97\u3057\u3001\u305d\u308c\u304c\u5c5e\u3059\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306eExpress ID\u3092\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u8a18\u9332\u3059\u308b2\u3064\u76ee\u306e\u95a2\u6570\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function pick(event) {\n    const found = cast(event)[0];\n    if (found) {\n        const index = found.faceIndex;\n        const geometry = found.object.geometry;\n        const ifc = ifcLoader.ifcManager;\n        const id = ifc.getExpressId(geometry, index);\n        console.log(id);\n    }\n}\n")),(0,i.kt)(c.r,{mdxType:"IfcAlert"},"Raycaster\u306f\u3001",(0,i.kt)("i",null,"raycaster.firstHitOnly = true;"),"\u306e\u5834\u5408\u3067\u3082\u3001\u5e38\u306b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u914d\u5217\u3092\u8fd4\u3057\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001\u914d\u5217\u306b\u306f\u3001",(0,i.kt)("i",null,"[0]"),"\u3067\u62bd\u51fa\u3067\u304d\u308b1\u3064\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3057\u304b\u542b\u307e\u308c\u307e\u305b\u3093\u3002"),(0,i.kt)("p",null,"\u6700\u5f8c\u306b\u3001\u305d\u306e\u95a2\u6570\u3092\u30a4\u30d9\u30f3\u30c8\uff08\u3053\u3053\u3067\u306f\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\uff09\u3068\u95a2\u9023\u4ed8\u3051\u308b\u3060\u3051\u3067\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  threeCanvas.ondblclick = pick;\n")),(0,i.kt)("p",null,"\u3059\u3079\u3066\u304c\u6b63\u3057\u304f\u884c\u308f\u308c\u3001\u30a2\u30a4\u30c6\u30e0\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u305d\u306eExpress ID\u304c\u8868\u793a\u3055\u308c\u307e\u3059\uff08\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u306fF12\u3092\u62bc\u3059\u304b\u3001\u30da\u30fc\u30b8\u3092\u691c\u67fb\u3059\u308b\u3053\u3068\u3067\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\uff09\u3002"),(0,i.kt)(o.x,{link:"https://ifcjs.github.io/hello-world/examples/web-ifc-three/picking/",mdxType:"Scene"}),(0,i.kt)("h2",{id:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7"},"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7"),(0,i.kt)("p",null,"  \ud83c\udf89\ud83c\udf89\ud83c\udf89\n\u304a\u3081\u3067\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u3053\u308c\u3067\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u305d\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306eID\u3092\u53d6\u5f97\u3059\u308b\u65b9\u6cd5\u304c\u308f\u304b\u308a\u307e\u3057\u305f\u3002\u305d\u306eID\u3092\u4f7f\u3063\u3066\u3044\u308d\u3044\u308d\u306a\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),(0,i.kt)("p",null,"  \u2728\n\u3057\u304b\u3057\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u9078\u629e\u3055\u308c\u305f\u3053\u3068\u3092\u30e6\u30fc\u30b6\u30fc\u304c\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\u306b\u78ba\u8a8d\u3067\u304d\u305f\u3089\u3044\u3044\u3067\u3059\u3088\u306d\u3002\u305d\u306e\u305f\u3081\u306b\u306f\u3001\u6b21\u306e\u30dd\u30a4\u30f3\u30c8\u3067\u3042\u308b\u8981\u7d20\u306e\u30cf\u30a4\u30e9\u30a4\u30c8\u306e\u4ed5\u65b9\u3092\u5b66\u3073\u307e\u3057\u3087\u3046\u3002"))}m.isMDXComponent=!0}}]);