(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2958],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,h=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4973:function(e,t,n){"use strict";n.d(t,{Z:function(){return m},I:function(){return u}});var r=n(7294),o=/{\w+}/g,i="{}";function a(e,t){var n=[],a=e.replace(o,(function(e){var o=e.substr(1,e.length-2),a=null==t?void 0:t[o];if(void 0!==a){var l=r.isValidElement(a)?a:String(a);return n.push(l),i}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?a.split(i).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):a.split(i).reduce((function(e,t,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},t,n[o])])}),[])}function l(e){return a(e.children,e.values)}var c=n(4644);function s(e){var t,n=e.id,r=e.message;return null!==(t=c[null!=n?n:r])&&void 0!==t?t:r}function u(e,t){var n,r=e.message;return a(null!==(n=s({message:r,id:e.id}))&&void 0!==n?n:r,t)}function m(e){var t,n=e.children,o=e.id,i=e.values,a=null!==(t=s({message:n,id:o}))&&void 0!==t?t:n;return r.createElement(l,{values:i},a)}},983:function(e,t,n){"use strict";n.d(t,{M:function(){return l}});var r=n(7294),o=n(9205),i="titleOffset_2I3u",a="iconContainer_1xRA",l=function(e){var t=e.title?r.createElement("div",{className:"card__header"},r.createElement("span",{className:a},e.icon&&r.createElement(o.A,{icon:e.icon,link:e.link,active:"true"})),r.createElement("h3",{className:e.icon&&i},e.title)):"";return r.createElement("div",{className:"card-demo",style:{margin:"2rem"}},r.createElement("div",{className:"card"},t,r.createElement("div",{className:"card__body"},r.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});var r=n(7294),o="hidden_2JtY",i="iconContainer_2Rnc",a="visible_2147",l="link_Lh4h",c="clickable_3vcc",s=function(e){var t=" "+(e.active?a:o),n=l+" "+(e.link&&c);return r.createElement("div",{className:i+t},r.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},5308:function(e,t,n){"use strict";n.d(t,{Q:function(){return i}});var r=n(7294),o=n(4973),i=function(e){return r.createElement("div",null,e.image,r.createElement("a",{target:"_blank",href:e.ifcLink}," ",r.createElement("i",null,function(e){return e.hideSource?null:r.createElement(o.Z,{description:"The source of an image of the blog"},"Source")}(e))," "))}},6649:function(e,t,n){"use strict";n.d(t,{x:function(){return i}});var r=n(7294),o="threeScene_3QXR",i=function(e){return r.createElement("iframe",{className:o,width:"100%",height:"600px",key:Math.random(),src:e.link,frameBorder:"0"})}},141:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=(n(6649),n(983)),l=n(5308),c=["components"],s={title:"Patreon",sidebar_position:2},u={unversionedId:"Patreon",id:"Patreon",isDocsHomePage:!1,title:"Patreon",description:"Join our community",source:"@site/docs/Patreon.mdx",sourceDirName:".",slug:"/Patreon",permalink:"/info/docs/Patreon",version:"current",sidebarPosition:2,frontMatter:{title:"Patreon",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Contribute",permalink:"/info/docs/Contribute"},next:{title:"Getting started",permalink:"/info/docs/Courses/Getting-started"}},m=[{value:"Join our community",id:"join-our-community",children:[{value:"As an individual",id:"as-an-individual",children:[]},{value:"As a company",id:"as-a-company",children:[]}]},{value:"Where does my money go?",id:"where-does-my-money-go",children:[]},{value:"Who&#39;s in?",id:"whos-in",children:[]}],d={toc:m};function p(e){var t=e.components,s=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"join-our-community"},"Join our community"),(0,i.kt)("p",null,"\ud83c\udf31 Do you want to join us in our journey and be an active part of our BIM & Development learning community? Then this is what you were looking for."),(0,i.kt)(a.M,{mdxType:"IfcCard"},"If you want to join our development team instead, go to the ",(0,i.kt)("a",{href:"https://ifcjs.github.io/info/docs/Contribute"},"contribution page"),"."),(0,i.kt)(l.Q,{hideSource:!0,image:(0,i.kt)("img",{src:n(5733).Z,alt:"PC image"}),alt:"PC image",mdxType:"IfcImage"}),(0,i.kt)("h3",{id:"as-an-individual"},"As an individual"),(0,i.kt)("p",null,"Our patreon system is super simple: you give ",(0,i.kt)("strong",{parentName:"p"},"$5/month")," to the project to help IFC.js keep growing. However, ",(0,i.kt)("strong",{parentName:"p"},"we don't believe that open source should depend on altruistic donations"),". For this reason, all patreons gain access to the following:"),(0,i.kt)(a.M,{icon:"\ud83d\udc69\u200d\ud83c\udfeb",title:"BIM programming courses for all levels",mdxType:"IfcCard"},"We will implement everything you need from the library very quickly. Your needs will have top priority over the rest."),(0,i.kt)(a.M,{icon:"\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d",title:"Access to the patreon community",mdxType:"IfcCard"},"We will implement everything you need from the library very quickly. Your needs will have top priority over the rest."),(0,i.kt)(a.M,{icon:"\ud83c\udfa5",title:"Exclusive live webinars and streams",mdxType:"IfcCard"},"We will implement everything you need from the library very quickly. Your needs will have top priority over the rest."),(0,i.kt)(a.M,{icon:"\ud83e\udd1d",title:"Our help with your projects",mdxType:"IfcCard"},"We will implement everything you need from the library very quickly. Your needs will have top priority over the rest."),(0,i.kt)(a.M,{icon:"\ud83c\udfc6",title:"Prime access to hackathons",mdxType:"IfcCard"},"We will implement everything you need from the library very quickly. Your needs will have top priority over the rest."),(0,i.kt)(a.M,{icon:"\ud83d\ude80",title:"Visibility from our networks",mdxType:"IfcCard"},"We will implement everything you need from the library very quickly. Your needs will have top priority over the rest."),(0,i.kt)(a.M,{icon:"\ud83c\udf81",title:"Merch and perks",mdxType:"IfcCard"},"We will implement everything you need from the library very quickly. Your needs will have top priority over the rest."),(0,i.kt)("h3",{id:"as-a-company"},"As a company"),(0,i.kt)("p",null,"We do have a corporate patreon which is ",(0,i.kt)("strong",{parentName:"p"},"$50/month"),". It offers all the benefits mentioned above, plus:"),(0,i.kt)(a.M,{icon:"\ud83d\udc68\u200d\ud83d\udcbc",title:"Consulting and prime support",mdxType:"IfcCard"},"We will share our experience in creating professional BIM tools with your company and help you find the best solution."),(0,i.kt)(a.M,{icon:"\ud83d\udc69\u200d\ud83c\udfeb",title:"All courses for free + private webinars",mdxType:"IfcCard"},"All official IFC.js courses free of charge for all your employees."),(0,i.kt)(a.M,{icon:"\ud83d\ude80",title:"Product promotion through our networks",mdxType:"IfcCard"},"Your BIM applications will be promoted in all our networks, including hackathons and stream interviews."),(0,i.kt)(a.M,{icon:"\ud83d\udcaa",title:"Decission making power",mdxType:"IfcCard"},"You will have some decision-making power over the bookshop's next steps to align them with your business."),(0,i.kt)("h2",{id:"where-does-my-money-go"},"Where does my money go?"),(0,i.kt)("p",null,"We manage all money openly and transparently through OpenCollective. That means that anyone can see who has put how much money into the project. Every time we want to use that money we will have to upload an invoice that will be published on the same page. That way, the money is as open as the code."),(0,i.kt)("h2",{id:"whos-in"},"Who's in?"),(0,i.kt)("img",{style:{margin:"0.2rem"},alt:"open collective badge",src:"https://opencollective.com/ifcjs/tiers/patreon/badge.svg?label=patreon&color=brightgreen"}),(0,i.kt)("img",{style:{margin:"0.2rem"},alt:"open collective badge",src:"https://opencollective.com/ifcjs/tiers/badge.svg?label=financial contributors&color=brightgreen"}),(0,i.kt)("iframe",{className:"openCollectiveBanner",height:"800px",style:{overflow:"hidden",width:"100%"},key:Math.random(),src:"https://opencollective.com/ifcjs/banner.html",frameBorder:"0"}))}p.isMDXComponent=!0},5733:function(e,t,n){"use strict";t.Z=n.p+"assets/images/coffee-mates-da0e1318b02cd4dd0f1065442f7d6347.png"}}]);