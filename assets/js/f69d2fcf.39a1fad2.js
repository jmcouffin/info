(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5935],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,h=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4973:function(e,t,n){"use strict";n.d(t,{Z:function(){return m},I:function(){return u}});var r=n(7294),a=/{\w+}/g,o="{}";function i(e,t){var n=[],i=e.replace(a,(function(e){var a=e.substr(1,e.length-2),i=null==t?void 0:t[a];if(void 0!==i){var s=r.isValidElement(i)?i:String(i);return n.push(s),o}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?i.split(o).reduce((function(e,t,r){var a;return e.concat(t).concat(null!==(a=n[r])&&void 0!==a?a:"")}),""):i.split(o).reduce((function(e,t,a){return[].concat(e,[r.createElement(r.Fragment,{key:a},t,n[a])])}),[])}function s(e){return i(e.children,e.values)}var l=n(4644);function c(e){var t,n=e.id,r=e.message;return null!==(t=l[null!=n?n:r])&&void 0!==t?t:r}function u(e,t){var n,r=e.message;return i(null!==(n=c({message:r,id:e.id}))&&void 0!==n?n:r,t)}function m(e){var t,n=e.children,a=e.id,o=e.values,i=null!==(t=c({message:n,id:a}))&&void 0!==t?t:n;return r.createElement(s,{values:o},i)}},983:function(e,t,n){"use strict";n.d(t,{M:function(){return s}});var r=n(7294),a=n(9205),o="titleOffset_2I3u",i="iconContainer_1xRA",s=function(e){var t=e.title?r.createElement("div",{className:"card__header"},r.createElement("span",{className:i},e.icon&&r.createElement(a.A,{icon:e.icon,link:e.link,active:"true"})),r.createElement("h3",{className:e.icon&&o},e.title)):"";return r.createElement("div",{className:"card-demo",style:{margin:"2rem"}},r.createElement("div",{className:"card"},t,r.createElement("div",{className:"card__body"},r.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return c}});var r=n(7294),a="hidden_2JtY",o="iconContainer_2Rnc",i="visible_2147",s="link_Lh4h",l="clickable_3vcc",c=function(e){var t=" "+(e.active?i:a),n=s+" "+(e.link&&l);return r.createElement("div",{className:o+t},r.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},5308:function(e,t,n){"use strict";n.d(t,{Q:function(){return o}});var r=n(7294),a=n(4973),o=function(e){return r.createElement("div",null,e.image,r.createElement("a",{target:"_blank",href:e.ifcLink}," ",r.createElement("i",null,function(e){return e.hideSource?null:r.createElement(a.Z,{description:"The source of an image of the blog"},"Source")}(e))," "))}},2223:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return f}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=n(5308),s=n(983),l=["components"],c={slug:"Why IFC doesnt work",title:"Why IFC doesn't work",author:"Ansoni",author_title:"Why IFC doesn't work",author_url:"https://github.com/agviegas",author_image_url:"https://secure.gravatar.com/avatar/9263b9f81d351788e46bc64000c03cb6",tags:["industry","ifc"]},u={permalink:"/info/blog/Why IFC doesnt work",source:"@site/blog/2021-12-01-why-ifc-doesnt-work.mdx",title:"Why IFC doesn't work",description:"How is it so difficult to collaborate between software from different vendors?",date:"2021-12-01T00:00:00.000Z",formattedDate:"December 1, 2021",tags:[{label:"industry",permalink:"/info/blog/tags/industry"},{label:"ifc",permalink:"/info/blog/tags/ifc"}],readingTime:3.185,truncated:!0,nextItem:{title:"Build a CDE in 30 minutes",permalink:"/info/blog/Build a CDE in 30 minutes"}},m=[],p={toc:m};function f(e){var t=e.components,c=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"How is it so difficult to collaborate between software from different vendors?")),(0,o.kt)(i.Q,{image:(0,o.kt)("img",{src:n(8388).Z,alt:"PC image"}),alt:"PC image",ifcLink:"https://www.pexels.com/es-es/foto/tiza-azul-roja-y-amarilla-1107495/",mdxType:"IfcImage"}),(0,o.kt)("p",null,"  \ud83e\udd1c\ud83d\udca5\ud83e\udd1b\nIn the BIM market there are multiple tools from different vendors. This means that we often have to use IFC to get the data from one application to another, and ",(0,o.kt)("strong",{parentName:"p"},"this is where the problems of interoperability arise"),"."),(0,o.kt)("p",null,"  \ud83e\udd12\nData is being lost in the transfer of these documents from software to software, some geometry may not be displaying as it should or federated models are becoming out of place are just some of the ",(0,o.kt)("strong",{parentName:"p"},"pitfalls that many of us have experienced on projects of all sizes"),"."),(0,o.kt)(s.M,{mdxType:"IfcCard"},"\ud83e\udd37\u200d\u2642\ufe0f We start to see and ask questions like: Why does IFC work so badly? Is open BIM technology unviable?"),(0,o.kt)(i.Q,{hideSource:!0,image:(0,o.kt)("img",{src:n(44).Z,alt:"PC image"}),alt:"PC image",mdxType:"IfcImage"}),(0,o.kt)("p",null,"\ud83d\udcc3\nMany argue that IFC is unworkable because it is a textual (meaning non-binary) and open format. However, the ",(0,o.kt)("strong",{parentName:"p"},"JSON")," format (a standard in the software industry) is also textual and works perfectly well."),(0,o.kt)("p",null,"\ud83d\udc68\u200d\ud83d\udcbb\ud83d\udc68\u200d\ud83d\udcbb\ud83d\udc68\u200d\ud83d\udcbb\nOthers say the problem is the schema itself. It is true that IFC is complex and the documentation is dry, but IFC.js started between ",(0,o.kt)("strong",{parentName:"p"},"3 people in their spare time"),",  implementing something that has extraordinary potential in less than a year."),(0,o.kt)("p",null,"The problem seems to be that ",(0,o.kt)("strong",{parentName:"p"},"no large software company has a commercial interest in IFC"),". In reality, the ultimate goal of all of them is to convince the user to use their entire ecosystem. The IFC is, in many cases, a partially flawed solution for attempting to fill gaps in other tools that may not have had time to implement certain features or will not, since their business is not in line with those feature interests."),(0,o.kt)(s.M,{mdxType:"IfcCard"},"\ud83d\udc68\u200d\ud83d\udcbc \ud83d\udcbc In other words, how many customers would any of these large companies lose if they never improved their communication with IFC? Probably very little."),(0,o.kt)("p",null,"\ud83d\udcb5\ud83d\udcb5\ud83d\udcb5 ",(0,o.kt)("strong",{parentName:"p"},'This creates the illusion that the IFC "just doesn\'t work well"')," while they continue to grow their ecosystem through tremendous developments or the acquisition of other companies."),(0,o.kt)("p",null,"\ud83d\ude4d\u200d\u2642\ufe0fThis is unfortunate because some of the industry players do have commercial interests in IFC. This includes engineering companies, architectural firms, construction companies, real estate companies, asset managers, etc."),(0,o.kt)("p",null,"\ud83d\udcb8 ",(0,o.kt)("strong",{parentName:"p"},"We are the big losers in this situation.")," We all have to choose whether to subjugate ourselves to a closed, private ecosystem and depend on these companies, or waste time and money with all the problems that come with the current implementation of the IFC in their tools."),(0,o.kt)("p",null,"\ud83e\udd1d Last week there was a round table discussion at the ",(0,o.kt)("a",{parentName:"p",href:"https://www.typsa.com/en/"},"Typsa")," offices where there was an ",(0,o.kt)("a",{parentName:"p",href:"https://teys.es/01-hackaton-typsa-ue4-actividades/"},"open conversation")," with representatives from ",(0,o.kt)("a",{parentName:"p",href:"https://www.ferrovial.com/"},"Ferrovial")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.fcc.es/"},"FCC"),", and we all agreed that maybe ",(0,o.kt)("strong",{parentName:"p"},"it is time for us to step up to the plate and develop in the world of BIM software to defend our own interests"),"."),(0,o.kt)(i.Q,{hideSource:!0,image:(0,o.kt)("img",{src:n(7936).Z,alt:"PC image"}),alt:"PC image",mdxType:"IfcImage"}),(0,o.kt)("p",null,"\ud83d\udcaa You may think that we will never be able to catch up with the giants. But not only us. We are ",(0,o.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/info/docs/Contribute"},"many companies")," joining our efforts in this project; ",(0,o.kt)("strong",{parentName:"p"},"companies of all kinds, of all sizes and from all areas are creating our own BIM tools without paying anything"),". Some of them are even getting into the market as new players."),(0,o.kt)("p",null,"\ud83d\udc69\u200d\ud83d\udcbb Although developing BIM applications sounds daunting, it is actually much simpler than a video game, and nowadays it is already possible to create video games in a very short time with tools like Godot, Unreal or Unity. With tools like IFC.js creating BIM tools can be just as easy."),(0,o.kt)(s.M,{mdxType:"IfcCard"},"\ud83d\udc9b We are working hard to make this possible. We are convinced that this is the only way to improve the sector."))}f.isMDXComponent=!0},8388:function(e,t,n){"use strict";t.Z=n.p+"assets/images/viktoria-goda-6af67676f13f2f1784105f2d0c2d4ce8.jpg"},44:function(e,t,n){"use strict";t.Z=n.p+"assets/images/1-8874e49fbf5e21070d7199cf72e93669.png"},7936:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2-e8e6587857f7d3d197351026dbacca27.png"}}]);