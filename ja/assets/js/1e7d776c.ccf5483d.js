(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[578],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return n?i.createElement(k,r(r({ref:t},s),{},{components:n})):i.createElement(k,r({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},983:function(e,t,n){"use strict";n.d(t,{M:function(){return o}});var i=n(7294),a=n(9205),l="titleOffset_2I3u",r="iconContainer_1xRA",o=function(e){var t=e.title?i.createElement("div",{className:"card__header"},i.createElement("span",{className:r},e.icon&&i.createElement(a.A,{icon:e.icon,link:e.link,active:"true"})),i.createElement("h3",{className:e.icon&&l},e.title)):"";return i.createElement("div",{className:"card-demo",style:{margin:"2rem"}},i.createElement("div",{className:"card"},t,i.createElement("div",{className:"card__body"},i.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return c}});var i=n(7294),a="hidden_2JtY",l="iconContainer_2Rnc",r="visible_2147",o="link_Lh4h",p="clickable_3vcc",c=function(e){var t=" "+(e.active?r:a),n=o+" "+(e.link&&p);return i.createElement("div",{className:l+t},i.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},8506:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var i=n(2122),a=n(9756),l=(n(7294),n(3905)),r=n(983),o=["components"],p={title:"web-ifc-viewer-API",sidebar_position:3},c={unversionedId:"Guide/web-ifc-viewer/web-ifc-viewer-API",id:"Guide/web-ifc-viewer/web-ifc-viewer-API",isDocsHomePage:!1,title:"web-ifc-viewer-API",description:"\ud83d\udcdd",source:"@site/docs/Guide/web-ifc-viewer/web-ifc-viewer-API.mdx",sourceDirName:"Guide/web-ifc-viewer",slug:"/Guide/web-ifc-viewer/web-ifc-viewer-API",permalink:"/info/ja/docs/Guide/web-ifc-viewer/web-ifc-viewer-API",version:"current",sidebarPosition:3,frontMatter:{title:"web-ifc-viewer-API",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u306f\u3058\u3081\u306b",permalink:"/info/ja/docs/Guide/web-ifc-viewer/Introduction"}},s=[{value:"IfcViewerAPI",id:"ifcviewerapi",children:[]},{value:"\u26a1 Setup",id:"-setup",children:[{value:"setWasmPath",id:"setwasmpath",children:[]}]},{value:"addClippingPlane",id:"addclippingplane",children:[]},{value:"removeClippingPlane",id:"removeclippingplane",children:[]},{value:"toggleClippingPlane",id:"toggleclippingplane",children:[]},{value:"openDropboxWindow",id:"opendropboxwindow",children:[]},{value:"loadIfc",id:"loadifc",children:[]},{value:"loadIfcUrl",id:"loadifcurl",children:[]},{value:"addGrid",id:"addgrid",children:[]},{value:"addAxes",id:"addaxes",children:[]},{value:"getModelID",id:"getmodelid",children:[]},{value:"getProperties",id:"getproperties",children:[]},{value:"getSpatialStructure",id:"getspatialstructure",children:[]},{value:"getAllItemsOfType",id:"getallitemsoftype",children:[]},{value:"prePickIfcItem",id:"prepickifcitem",children:[]},{value:"pickIfcItem",id:"pickifcitem",children:[]},{value:"pickIfcItemsByID",id:"pickifcitemsbyid",children:[]},{value:"dispose",id:"dispose",children:[]}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"the-list-of-things-you-can-do-with-web-ifc-viewer"},"The list of things you can do with web-ifc-viewer"),(0,l.kt)("p",null,"\ud83d\udcdd\nThe API is documented, so when you use any of the objects or methods listed in this documentation, you should see help from Intellisense, regardless of the IDE you're using. ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/web-ifc-viewer/blob/master/viewer/src/components/ifc/ifc-manager.ts"},"Check it out!"),"."),(0,l.kt)("p",null,"\ud83e\udd14\nHowever, we realize that with Intellisense or comments it is not the most comfortable. On this page we will give an overview of what the API can do. We can see it in operation in detail in the specific tutorials section below."),(0,l.kt)("h2",{id:"ifcviewerapi"},"IfcViewerAPI"),(0,l.kt)("p",null,"\ud83c\udfe0\nWe import the object from the library. You can use the loadIfc() method to load IFC from a URL. For example to load an IFC we can do it as follows."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import { IfcViewerAPI } from "web-ifc-viewer";\n\nconst viewer = new IfcViewerAPI();\n\nconst input = document.getElementById("file-input");\ninput.addEventListener(\n    "change",\n    (changed) => {\n    const file = changed.target.files[0];\n    const url = URL.createObjectURL(file);\n    const model = await viewer.IFC.loadIfcUrl(url)\n})\n')),(0,l.kt)("p",null,"Later we will review the details of how to use the different methods dedicated to load files."),(0,l.kt)("p",null,"\ud83c\udfa9\ud83c\udfa9\ud83c\udfa9\nMany of the API operations run on a specific model. We will use ModelID to express on which model we want to operate."),(0,l.kt)("p",null,"\ud83c\udfaf\nYou can get the id of a model through the modelID property."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const modelID = IfcViewerAPI.IFC.ifcModel.modelID;\n")),(0,l.kt)("h2",{id:"-setup"},"\u26a1 Setup"),(0,l.kt)("h3",{id:"setwasmpath"},"setWasmPath"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"async IfcViewerAPI.IFC.setWasmPath(../../../)\n")),(0,l.kt)("p",null,"\ud83d\udcc1\nSpecifies the location of the web-ifc.wasm and web-ifc-mt.wasm files. These files are required to build any application with IFC.js. You can find them in node_modules/web-ifc/."),(0,l.kt)(r.M,{icon:" \ud83e\uddf1 ",title:" Be careful with your tools!! ",mdxType:"IfcCard"},"If you use frameworks or libraries like React, Angular, Vue or Svelte it is possible that the root path of the project doesn't correspond to the root path of the served application. You will have to check in ",(0,l.kt)("a",{href:"https://github.com/IFCjs/examples"},"each case")," how the paths of the statically served files are managed."),(0,l.kt)("h4",{id:"arguments"},"Arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path"),": Route of ",(0,l.kt)("inlineCode",{parentName:"li"},"web-ifc.wasm"),".")),(0,l.kt)("h4",{id:"example"},"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await IfcViewerAPI.IFC.setWasmPath(dist / wasmDir);\n")),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"web-ifc.wasm")," is in ",(0,l.kt)("inlineCode",{parentName:"p"},"dis/wasmDir"),"."),(0,l.kt)("p",null,"\ud83c\udfa3\ud83c\udfa3 Tools"),(0,l.kt)("h2",{id:"addclippingplane"},"addClippingPlane"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.clipper.createPlane();\n")),(0,l.kt)("h4",{id:"example-1"},"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'window.onkeydown = (event) => {\n  if (event.code === "KeyP") {\n    IfcViewerAPI.clipper.createPlane();\n  }\n};\n')),(0,l.kt)("p",null,"\u23f3\nAdds a clipping plane on the face the cursor is pointing at."),(0,l.kt)("h2",{id:"removeclippingplane"},"removeClippingPlane"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.clipper.deletePlane();\n")),(0,l.kt)("h4",{id:"example-2"},"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'window.onkeydown = (event) => {\n  if (event.code === "KeyO") {\n    IfcViewerAPI.clipper.deletePlane();\n  }\n};\n')),(0,l.kt)("p",null,"\ud83d\udea7\nDeletes the clipping plane pointed at by the cursor."),(0,l.kt)("h2",{id:"toggleclippingplane"},"toggleClippingPlane"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.clipper.toggle();\n")),(0,l.kt)("h4",{id:"example-3"},"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.clipper.toggle();\n")),(0,l.kt)("p",null,"\ud83d\udc77\u200d\u2640\ufe0f\nTurns all clipping planes on/off."),(0,l.kt)("h2",{id:"opendropboxwindow"},"openDropboxWindow"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"this.dropbox.loadDropboxIfc();\n")),(0,l.kt)("h4",{id:"example-4"},"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.dropbox.loadDropboxIfc();\n")),(0,l.kt)("p",null,"\ud83d\ude80\nOpens a dropdown window where the user can select their IFC models."),(0,l.kt)("h2",{id:"loadifc"},"loadIfc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.IFC.loadIfc(file: File,\n                         fitToFrame: boolean)\n")),(0,l.kt)("h4",{id:"arguments-1"},"Arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"file"),": IFC as ",(0,l.kt)("inlineCode",{parentName:"li"},"File"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fitToFrame"),": If ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", brings the ",(0,l.kt)("inlineCode",{parentName:"li"},"perspectiveCamera")," to the loaded IFC.")),(0,l.kt)("h4",{id:"example-5"},"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const input = document.getElementById('file-input')\ninput.addEventListener('change', changed => {\n    const file = changed.target.files[0]\n    const model = await IfcViewerAPI.IFC.loadIfcUrl(file)\n})\n")),(0,l.kt)("p",null,"\ud83d\udce6\nLoads the given IFC in the current scene."),(0,l.kt)("h2",{id:"loadifcurl"},"loadIfcUrl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.IFC.loadIfcUrl(url: string,\n                           fitToFrame: boolean,\n                            onProgress: any,\n                            onError: any)\n")),(0,l.kt)("h4",{id:"arguments-2"},"Arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"file"),": Ifc as ",(0,l.kt)("inlineCode",{parentName:"li"},"url"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fitToFrame"),": If ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", brings the ",(0,l.kt)("inlineCode",{parentName:"li"},"perspectiveCamera")," to the loaded IFC."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"onProgress"),": A callback function to report on downloading progress."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"onError"),": A callback function to report on loading errors.")),(0,l.kt)("h4",{id:"example-6"},"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const input = document.getElementById("file-input");\ninput.addEventListener(\n    "change",\n    (changed) => {\n    const file = changed.target.files[0];\n    const url = URL.createObjectURL(file);\n    const model = await IfcViewerAPI.IFC.loadIfcUrl(url)\n})\n')),(0,l.kt)("p",null,"\ud83e\udde0\nLoad the Ifc from a ",(0,l.kt)("inlineCode",{parentName:"p"},"URL.createObjectURL"),"and add it to the scene."),(0,l.kt)("h2",{id:"addgrid"},"addGrid"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.grid.setGrid(size: number, divisions: number,\n                          colorCenterLine: Color, colorGrid: Color)\n")),(0,l.kt)("h4",{id:"arguments-3"},"Arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"size"),": Grid ",(0,l.kt)("inlineCode",{parentName:"li"},"size"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"divisions"),": Number of ",(0,l.kt)("inlineCode",{parentName:"li"},"divisions")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"X")," & ",(0,l.kt)("inlineCode",{parentName:"li"},"Y"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"colorCenterLine"),": Color of the ",(0,l.kt)("inlineCode",{parentName:"li"},"X")," & ",(0,l.kt)("inlineCode",{parentName:"li"},"Y")," center lines of the",(0,l.kt)("inlineCode",{parentName:"li"},"grid"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"colorGrid"),": Color of lines ",(0,l.kt)("inlineCode",{parentName:"li"},"X")," & ",(0,l.kt)("inlineCode",{parentName:"li"},"Y")," of the ",(0,l.kt)("inlineCode",{parentName:"li"},"grid"),".")),(0,l.kt)("h4",{id:"example-7"},"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.grid.setGrid(40);\n")),(0,l.kt)("p",null,"\u270c\nUsing ",(0,l.kt)("inlineCode",{parentName:"p"},"size")," resizes the size of the mesh in X and Y."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.grid.division(20);\n")),(0,l.kt)("p",null,"\ud83c\udfa5\nUsing ",(0,l.kt)("inlineCode",{parentName:"p"},"division")," configure the number of divisions in ",(0,l.kt)("inlineCode",{parentName:"p"},"X")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"Y"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.grid.colorCenterLine(0x0000ff);\n")),(0,l.kt)("p",null,"\ud83c\udf81\nUsing ",(0,l.kt)("inlineCode",{parentName:"p"},"colorCenterLine")," can change the color of the central lines in the grid X & Y."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.grid.colorGrid(0x008000);\n")),(0,l.kt)("p",null,"\ud83d\udcb5\nUsing ",(0,l.kt)("inlineCode",{parentName:"p"},"colorGrid")," can change the color of lines ",(0,l.kt)("inlineCode",{parentName:"p"},"X")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"Y")," of the grid."),(0,l.kt)(r.M,{icon:"\ud83d\udcdc",title:" Add a base `mesh` to the scene",mdxType:"IfcCard"},'"GridHelper"[Check it out!](https://threejs.org/docs/#api/en/helpers/GridHelper)'),(0,l.kt)("h2",{id:"addaxes"},"addAxes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.axes.setAxes(size: number)\n")),(0,l.kt)("h4",{id:"arguments-4"},"Arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"size"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"size")," of ",(0,l.kt)("inlineCode",{parentName:"li"},"axes"),".")),(0,l.kt)("h4",{id:"example-8"},"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.grid.setAxes(20);\n")),(0,l.kt)("p",null,"\ud83d\udcb3\nUsing ",(0,l.kt)("inlineCode",{parentName:"p"},"size")," define the length of the ",(0,l.kt)("inlineCode",{parentName:"p"},"axes")," on which the ",(0,l.kt)("inlineCode",{parentName:"p"},"ifcModel")," is loaded."),(0,l.kt)(r.M,{icon:"\ud83d\udcdc",title:"Add axes to the scene",mdxType:"IfcCard"},'"AxesHelper"[Check it out!](https://threejs.org/docs/#api/en/helpers/AxesHelper)'),(0,l.kt)("h2",{id:"getmodelid"},"getModelID"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.IFC.getModelID() : number\n")),(0,l.kt)("h4",{id:"example-9"},"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const modelID = await IfcViewerAPI.IFC.ifcModel.modelID;\n")),(0,l.kt)("p",null,"\ud83d\udcd8\ud83d\udd0d\nGets the Id of the model selected with the cursor."),(0,l.kt)("h2",{id:"getproperties"},"getProperties"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.IFC.getProperties(modelID: number, id: number,\n                                indirect: boolean)\n")),(0,l.kt)("h4",{id:"arguments-5"},"Arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"modelID"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," of model IFC."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id"),": Express IDs of the item."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"indirect"),": is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"? If ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", also returns ",(0,l.kt)("inlineCode",{parentName:"li"},"psets"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"qsets")," and type properties.")),(0,l.kt)("h4",{id:"example-10"},"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const properties = await IfcViewerAPI.IFC.getProperties(modelID, id, true);\n")),(0,l.kt)("p",null,"\ud83d\udcd7\ud83d\udd0d\nGet the properties of a specified item."),(0,l.kt)("h2",{id:"getspatialstructure"},"getSpatialStructure"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewer.IFC.getSpatialStructure(modelID: number): any\n")),(0,l.kt)("h4",{id:"arguments-6"},"Arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"modelID"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," of model IFC.")),(0,l.kt)("h4",{id:"example-11"},"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const structure = await IfcViewerAPI.IFC.getSpatialStructure(modelID);\n")),(0,l.kt)("p",null,"\ud83d\udcd2\ud83d\udd0d\nGets the spatial structure of the specified model."),(0,l.kt)("h2",{id:"getallitemsoftype"},"getAllItemsOfType"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.IFC.getAllItemsOfType(modelID: number, type: number,\n                                    verbose: boolean): any\n")),(0,l.kt)("h4",{id:"arguments-7"},"Arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"modelID"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," of model IFC."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type"),": Type of element. You can import the ",(0,l.kt)("inlineCode",{parentName:"li"},"type")," from ",(0,l.kt)("inlineCode",{parentName:"li"},"web-ifc"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"verbose"),": Is ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"? So you get the properties of all the elements.")),(0,l.kt)("h4",{id:"example-12"},"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const modelID = await IfcViewerAPI.IFC.ifcModel.modelID;\nIfcViewerAPI.IFC.getAllItemsOfType(modelID, 3, true);\n")),(0,l.kt)("p",null,"\ud83d\udcd5\ud83d\udd0d\nGet all elements of the specified type in the specified IFC model."),(0,l.kt)("h2",{id:"prepickifcitem"},"prePickIfcItem"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.IFC.selector.prePickIfcItem();\n")),(0,l.kt)("h4",{id:"example-13"},"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"window.onmousemove = () => IfcViewerAPI.IFC.selector.prePickIfcItem();\n")),(0,l.kt)("p",null,"\u2728\ud83d\udc1f\nHighlights the item pointed by the cursor."),(0,l.kt)("h2",{id:"pickifcitem"},"pickIfcItem"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.IFC.selector.pickIfcItem(focusSelection: boolean):\n {modelID: number, id: number}\n")),(0,l.kt)("h4",{id:"arguments-8"},"Arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"focusSelection"),": If ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", animate the ",(0,l.kt)("inlineCode",{parentName:"li"},"perspectiveCamera")," to focus the current selection.")),(0,l.kt)("h4",{id:"example-14"},"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"window.ondblclick = () => IfcViewerAPI.IFC.selector.pickIfcItem(true);\n")),(0,l.kt)("p",null,"\u2728\ud83d\udc20\nHighlights the element pointed at by the cursor and gets its properties."),(0,l.kt)("h2",{id:"pickifcitemsbyid"},"pickIfcItemsByID"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.IFC.selector.pickIfcItemsByID(modelID: number, ids: number\n                                            focusSelection: boolean)\n")),(0,l.kt)("h4",{id:"arguments-9"},"Arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"modelID"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," of model IFC."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id"),": Express IDs of the item."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"focusSelection"),": If ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", animate the ",(0,l.kt)("inlineCode",{parentName:"li"},"perspectiveCamera")," to focus the current selection.")),(0,l.kt)("h4",{id:"example-15"},"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const modelID = await IfcViewerAPI.IFC.ifcModel.modelID;\nconst pickID = await IfcViewerAPI.IFC.selector.pickIfcItemsByID(modelID, 0, true);\n")),(0,l.kt)("p",null,"\u2728\ud83d\udc21\nHighlights the item with the given ID with the picking material."),(0,l.kt)("p",null,"\ud83d\udc40\ud83d\udc40\ud83d\udc40"),(0,l.kt)("h4",{id:"remember-this"},"Remember this..."),(0,l.kt)("h2",{id:"dispose"},"dispose"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"IfcViewerAPI.dispose();\n")),(0,l.kt)(r.M,{icon:"\ud83e\udde9",title:" When to use dispose... ",mdxType:"IfcCard"},"Use this only when removing the ",(0,l.kt)("b",null,"ifcViewerAPI")," instance. This is especially important when using libraries and frameworks that handle the object lifecycle automatically. (eg React, Angular, etc.) If you're using one of these examples and you're instantiating `-ifc-viewer-api` inside a component make sure you use this method on the component for destruction."))}m.isMDXComponent=!0}}]);