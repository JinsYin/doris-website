"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[50943],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,d=u["".concat(p,".").concat(y)]||u[y]||m[y]||l;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},84593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"DROP-FUNCTION",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FUNCTION",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FUNCTION",title:"DROP-FUNCTION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FUNCTION.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FUNCTION",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FUNCTION",draft:!1,tags:[],version:"1.2",frontMatter:{title:"DROP-FUNCTION",language:"zh-CN"},sidebar:"docs",previous:{title:"DROP-TABLE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-TABLE"},next:{title:"DROP-SQL-BLOCK-RULE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-SQL-BLOCK-RULE"}},p={},c=[{value:"DROP-FUNCTION",id:"drop-function",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"drop-function"},"DROP-FUNCTION"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"DROP FUNCTION"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u5220\u9664\u4e00\u4e2a\u81ea\u5b9a\u4e49\u51fd\u6570\u3002\u51fd\u6570\u7684\u540d\u5b57\u3001\u53c2\u6570\u7c7b\u578b\u5b8c\u5168\u4e00\u81f4\u624d\u80fd\u591f\u88ab\u5220\u9664"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP [GLOBAL] FUNCTION function_name\n    (arg_type [, ...])\n")),(0,a.yg)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"function_name"),": \u8981\u5220\u9664\u51fd\u6570\u7684\u540d\u5b57"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"arg_type"),": \u8981\u5220\u9664\u51fd\u6570\u7684\u53c2\u6570\u5217\u8868")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5220\u9664\u6389\u4e00\u4e2a\u51fd\u6570"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP FUNCTION my_add(INT, INT)\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5220\u9664\u6389\u4e00\u4e2a\u5168\u5c40\u51fd\u6570"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP GLOBAL FUNCTION my_add(INT, INT)\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DROP, FUNCTION\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);