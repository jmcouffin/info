(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[276],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,p=d["".concat(s,".").concat(m)]||d[m]||f[m]||o;return r?n.createElement(p,a(a({ref:t},l),{},{components:r})):n.createElement(p,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4973:function(e,t,r){"use strict";r.d(t,{Z:function(){return f},I:function(){return l}});var n=r(7294),i=/{\w+}/g,o="{}";function a(e,t){var r=[],a=e.replace(i,(function(e){var i=e.substr(1,e.length-2),a=null==t?void 0:t[i];if(void 0!==a){var c=n.isValidElement(a)?a:String(a);return r.push(c),o}return e}));return 0===r.length?e:r.every((function(e){return"string"==typeof e}))?a.split(o).reduce((function(e,t,n){var i;return e.concat(t).concat(null!==(i=r[n])&&void 0!==i?i:"")}),""):a.split(o).reduce((function(e,t,i){return[].concat(e,[n.createElement(n.Fragment,{key:i},t,r[i])])}),[])}function c(e){return a(e.children,e.values)}var s=r(4644);function u(e){var t,r=e.id,n=e.message;return null!==(t=s[null!=r?r:n])&&void 0!==t?t:n}function l(e,t){var r,n=e.message;return a(null!==(r=u({message:n,id:e.id}))&&void 0!==r?r:n,t)}function f(e){var t,r=e.children,i=e.id,o=e.values,a=null!==(t=u({message:r,id:i}))&&void 0!==t?t:r;return n.createElement(c,{values:o},a)}},983:function(e,t,r){"use strict";r.d(t,{M:function(){return c}});var n=r(7294),i=r(9205),o="titleOffset_2I3u",a="iconContainer_1xRA",c=function(e){var t=e.title?n.createElement("div",{className:"card__header"},n.createElement("span",{className:a},e.icon&&n.createElement(i.A,{icon:e.icon,link:e.link,active:"true"})),n.createElement("h3",{className:e.icon&&o},e.title)):"";return n.createElement("div",{className:"card-demo",style:{margin:"2rem"}},n.createElement("div",{className:"card"},t,n.createElement("div",{className:"card__body"},n.createElement("p",null," ",e.children," "))))}},9205:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var n=r(7294),i="hidden_2JtY",o="iconContainer_2Rnc",a="visible_2147",c="link_Lh4h",s="clickable_3vcc",u=function(e){var t=" "+(e.active?a:i),r=c+" "+(e.link&&s);return n.createElement("div",{className:o+t},n.createElement("a",{href:e.link,className:r},e.icon||"\ud83d\ude80"))}},5308:function(e,t,r){"use strict";r.d(t,{Q:function(){return o}});var n=r(7294),i=r(4973),o=function(e){return n.createElement("div",null,e.image,n.createElement("a",{target:"_blank",href:e.ifcLink}," ",n.createElement("i",null,function(e){return e.hideSource?null:n.createElement(i.Z,{description:"The source of an image of the blog"},"Source")}(e))," "))}},6649:function(e,t,r){"use strict";r.d(t,{x:function(){return o}});var n=r(7294),i="threeScene_3QXR",o=function(e){return n.createElement("iframe",{className:i,width:"100%",height:"600px",key:Math.random(),src:e.link,frameBorder:"0"})}},9130:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return l},toc:function(){return f},default:function(){return m}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a=(r(6649),r(983)),c=r(5308),s=["components"],u={title:"IFC.js crash course",sidebar_position:1},l={unversionedId:"Courses/Crash-course",id:"Courses/Crash-course",isDocsHomePage:!1,title:"IFC.js crash course",description:"What's this about?",source:"@site/docs/Courses/Crash-course.mdx",sourceDirName:"Courses",slug:"/Courses/Crash-course",permalink:"/info/zh/docs/Courses/Crash-course",version:"current",sidebarPosition:1,frontMatter:{title:"IFC.js crash course",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/info/zh/docs/Courses/Getting-started"},next:{title:"IFC for developers",permalink:"/info/zh/docs/Courses/Ifc-course"}},f=[{value:"What&#39;s this about?",id:"whats-this-about",children:[]},{value:"Course content",id:"course-content",children:[]},{value:"Requirements",id:"requirements",children:[]}],d={toc:f};function m(e){var t=e.components,u=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"whats-this-about"},"What's this about?"),(0,o.kt)("p",null,"In the process of digitalization of our industry, programming is becoming increasingly important. Although it may seem an intimidating area, it is a lot of fun and offers a world of business possibilities."),(0,o.kt)("p",null,"However, the world of programming is so vast that it is difficult to decide where to start. That is why we have created this course. Here you will learn how to program from scratch and the basics to create BIM applications with IFC.js."),(0,o.kt)(a.M,{mdxType:"IfcCard"},"BIM programming will allow you to create your own tools, automate processes, create new businesses and qualify for better jobs."),(0,o.kt)(c.Q,{hideSource:!0,image:(0,o.kt)("img",{src:r(1244).Z,alt:"PC image"}),alt:"PC image",mdxType:"IfcImage"}),(0,o.kt)("h2",{id:"course-content"},"Course content"),(0,o.kt)("p",null,"Loading..."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"\ud83d\udc4c Nothing! We will teach you to code your own BIM applications from scratch."))}m.isMDXComponent=!0},1244:function(e,t,r){"use strict";t.Z=r.p+"assets/images/crash-course-2f5dae9efe3e0b7c222e8e8c68fbea45.png"}}]);