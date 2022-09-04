(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[364],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),h=i,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3878:function(e,t,n){"use strict";n.d(t,{r:function(){return l}});var r=n(7294),i="icon_1PGw",a=n(9205),l=function(e){return r.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},r.createElement("div",{className:i},r.createElement(a.A,{icon:"\ud83d\udca1",active:"true"})),e.children)}},983:function(e,t,n){"use strict";n.d(t,{M:function(){return o}});var r=n(7294),i=n(9205),a="titleOffset_2I3u",l="iconContainer_1xRA",o=function(e){var t=e.title?r.createElement("div",{className:"card__header"},r.createElement("span",{className:l},e.icon&&r.createElement(i.A,{icon:e.icon,link:e.link,active:"true"})),r.createElement("h3",{className:e.icon&&a},e.title)):"";return r.createElement("div",{className:"card-demo",style:{margin:"2rem"}},r.createElement("div",{className:"card"},t,r.createElement("div",{className:"card__body"},r.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});var r=n(7294),i="hidden_2JtY",a="iconContainer_2Rnc",l="visible_2147",o="link_Lh4h",u="clickable_3vcc",s=function(e){var t=" "+(e.active?l:i),n=o+" "+(e.link&&u);return r.createElement("div",{className:a+t},r.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},9287:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),l=n(3878),o=n(983),u=["components"],s={title:"Handling bounties",sidebar_position:1},c={unversionedId:"Guide/Handling bounties",id:"Guide/Handling bounties",isDocsHomePage:!1,title:"Handling bounties",description:"Let's learn to handle bounties",source:"@site/docs/Guide/Handling bounties.mdx",sourceDirName:"Guide",slug:"/Guide/Handling bounties",permalink:"/info/zh/docs/Guide/Handling bounties",version:"current",sidebarPosition:1,frontMatter:{title:"Handling bounties",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u59cb\u5de5\u4f5c",permalink:"/info/zh/docs/Guide/Getting started"},next:{title:"Contribute",permalink:"/info/zh/docs/Guide/web-ifc/Contribution"}},d=[{value:"Let&#39;s learn to handle bounties",id:"lets-learn-to-handle-bounties",children:[]},{value:"Bounty Bot &amp; Take",id:"bounty-bot--take",children:[{value:"::take",id:"take",children:[]},{value:"::extend",id:"extend",children:[]},{value:"::freeze",id:"freeze",children:[]},{value:"::unfreeze",id:"unfreeze",children:[]},{value:"::done",id:"done",children:[]},{value:"::undone",id:"undone",children:[]},{value:"::drop",id:"drop",children:[]},{value:"::expense::____",id:"expense____",children:[]}]},{value:"Create Pull Request",id:"create-pull-request",children:[]},{value:"Generate Payment Request",id:"generate-payment-request",children:[]}],p={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"lets-learn-to-handle-bounties"},"Let's learn to handle bounties"),(0,a.kt)("p",null,"\ud83e\udd85\nWe follow the steps to take the selected reward and claim the payment"),(0,a.kt)("h2",{id:"bounty-bot--take"},"Bounty Bot & Take"),(0,a.kt)("p",null,"To interact with the bounty bot and manipulate its status, submit a comment containing only one of these commands:"),(0,a.kt)("h3",{id:"take"},"::take"),(0,a.kt)("p",null,"\ud83c\udfa8\nTo assign a bounty we will have to write ",(0,a.kt)("inlineCode",{parentName:"p"},"(::take)")," in the comment box of the selected bounty.\nThe due date of your assignment is the next 21st date UTC."),(0,a.kt)(o.M,{icon:"\ud83c\udf81",title:"Taked bounty successfully",mdxType:"IfcCard"},"Hi,",(0,a.kt)("b",null,"YOUR_NAME"),"! Thanks for taking this bounty! The due date is ",(0,a.kt)("b",null,"DATE_TIME"),"."),(0,a.kt)("p",null,"\ud83d\udcdc\nIf you've received a comment like this... Congratulations, you just took this bounty."),(0,a.kt)("h4",{id:"requeriments"},"Requeriments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sender: Anyone,"),(0,a.kt)("li",{parentName:"ul"},"Status: Available")),(0,a.kt)("h3",{id:"extend"},"::extend"),(0,a.kt)("p",null,"\ud83d\udc23\nExtend the due date by 21 days. Can only be done once."),(0,a.kt)("h4",{id:"requeriments-1"},"Requeriments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sender: Assignee,"),(0,a.kt)("li",{parentName:"ul"},"Status: In progress")),(0,a.kt)("h3",{id:"freeze"},"::freeze"),(0,a.kt)("p",null,"\u2728\nFreeze the bounty clock. The due date will be adjusted once the ",(0,a.kt)("inlineCode",{parentName:"p"},"!::unfreeze")," is executed.\nThe bounty manager can use this while reviewing the works without decreasing the duration available for the assignee."),(0,a.kt)("h4",{id:"requeriments-2"},"Requeriments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sender: Manager,"),(0,a.kt)("li",{parentName:"ul"},"Status: In progress,"),(0,a.kt)("li",{parentName:"ul"},"Frozen: False")),(0,a.kt)("h3",{id:"unfreeze"},"::unfreeze"),(0,a.kt)("p",null,"\ud83d\udd25\nUnfreeze the bounty clock. The new due date will be informed."),(0,a.kt)("h4",{id:"requeriments-3"},"Requeriments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sender: Manager,"),(0,a.kt)("li",{parentName:"ul"},"Status: In progress,"),(0,a.kt)("li",{parentName:"ul"},"Frozen: True")),(0,a.kt)("h3",{id:"done"},"::done"),(0,a.kt)("p",null,"\ud83c\udf93\nChange the status of this bounty to done. If your tasks require you to create pull requests,\na PR title that either starts with the bounty ID or is exactly the same as the bounty name\nwill automatically do the same thing when merged."),(0,a.kt)("h4",{id:"requeriments-4"},"Requeriments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sender: Manager,"),(0,a.kt)("li",{parentName:"ul"},"Status: In progress")),(0,a.kt)("h3",{id:"undone"},"::undone"),(0,a.kt)("p",null,"\ud83e\udde0\nChange the status of this bounty to in progress. Use this if the bounty is marked as done by mistake."),(0,a.kt)("h4",{id:"requeriments-5"},"Requeriments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sender: Manager,"),(0,a.kt)("li",{parentName:"ul"},"Status: done")),(0,a.kt)("h3",{id:"drop"},"::drop"),(0,a.kt)("p",null,"\ud83c\udfaf\nGive up on this bounty."),(0,a.kt)("h4",{id:"requeriments-6"},"Requeriments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sender: Assignee,"),(0,a.kt)("li",{parentName:"ul"},"Status: In progress")),(0,a.kt)("h3",{id:"expense____"},"::expense::","_","_","_","_"),(0,a.kt)("p",null,"\ud83c\udf08\nAfter you\u2019re done with the tasks, you need to submit an expense to IFC.js Open Collective.\nTo ensure the authenticity of the expense, you need to tell us the invoice number via this command.\nReplace the ",(0,a.kt)("strong",{parentName:"p"},"_","_","_","_")," with the invoice number (only the number)."),(0,a.kt)("h4",{id:"requeriments-7"},"Requeriments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sender: Assignee,"),(0,a.kt)("li",{parentName:"ul"},"Status: Done")),(0,a.kt)("h2",{id:"create-pull-request"},"Create Pull Request"),(0,a.kt)("p",null,"\ud83d\uded1\nThe tutorial should be made in the repository ",(0,a.kt)("a",{href:"https://github.com/ifcjs/info"},"IFCjs/info.")),(0,a.kt)("p",null,"\ud83d\ude0a\nYou need to submit some Pull Request(PR) to complete the task, make sure that the last\nand only the last PR has a title that either starts with the bounty ID or is exactly the\nsame as the bounty name."),(0,a.kt)("p",null,"\ud83c\udf34\nIf you have to develop an example for the tutorial do it ",(0,a.kt)("a",{href:"https://github.com/ifcjs/hello-world"},"here"),"."),(0,a.kt)(o.M,{icon:"\ud83c\udfc6",title:"Pull Request Status",mdxType:"IfcCard"},"After the PR is merged, this bounty`s status will automatically changed to done."),(0,a.kt)("h2",{id:"generate-payment-request"},"Generate Payment Request"),(0,a.kt)("p",null,"\u26a1\nThis step is done through ",(0,a.kt)("inlineCode",{parentName:"p"},"Open Collective")," if you still do not have your user you can\ncreate it ",(0,a.kt)("a",{href:"https://opencollective.com/create-account?next=%2F"},"here.")),(0,a.kt)("p",null,"\u261d\nTo generate a payment request linked to your user, you must be logged in and access your account.\nYou can do it through the following ",(0,a.kt)("a",{href:"https://opencollective.com/ifcjs"},"link.")),(0,a.kt)("p",null,"\ud83e\uddca\nOnce the invoice is generated, we need the ID number to attach it to the command ",(0,a.kt)("inlineCode",{parentName:"p"},"::expense::"),".\n(E.g. ::expense::",(0,a.kt)("b",null,"ID_INVOICE"),")"),(0,a.kt)(o.M,{icon:"\ud83e\udd47",title:"Pull Request Status",mdxType:"IfcCard"},"Thank you for the confirmation. We will proceed to review the expense. Once approved, payment will be scheduled"),(0,a.kt)("p",null,"\ud83d\udea9\ud83d\udea9\ud83d\udea9\nYour request is being studied, in case it is approved. We will send a message like this:"),(0,a.kt)(l.r,{mdxType:"IfcAlert"},"Your expense has been ",(0,a.kt)("b",null,"approved!")),(0,a.kt)("p",null,"\ud83c\udf31\ud83c\udf32\ud83c\udf0e\nCongratulations and thanks for contributing to IFCjs."))}h.isMDXComponent=!0}}]);