"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[61734],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>N});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,N=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(N,i(i({ref:t},p),{},{components:n})):a.createElement(N,i({ref:t},p))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},886887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"ADMIN-SET-PARTITION-VERSION",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-PARTITION-VERSION",id:"sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-PARTITION-VERSION",title:"ADMIN-SET-PARTITION-VERSION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-PARTITION-VERSION.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-PARTITION-VERSION",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-PARTITION-VERSION",draft:!1,tags:[],version:"current",frontMatter:{title:"ADMIN-SET-PARTITION-VERSION",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-SET-REPLICA-VERSION",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-REPLICA-VERSION"},next:{title:"ADMIN-SET-TABLE-STATUS",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-TABLE-STATUS"}},o={},c=[{value:"ADMIN-SET-PARTITION-VERSION",id:"admin-set-partition-version",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"admin-set-partition-version"},"ADMIN-SET-PARTITION-VERSION"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ADMIN SET PARTITION VERSION"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u624b\u52a8\u6539\u53d8\u6307\u5b9a\u5206\u533a\u7684\u53ef\u89c1\u7248\u672c\u3002"),(0,r.yg)("p",null,"\u5728\u67d0\u4e9b\u7279\u6b8a\u60c5\u51b5\u4e0b\uff0c\u5143\u6570\u636e\u4e2d\u5206\u533a\u7684\u7248\u672c\u6709\u53ef\u80fd\u548c\u5b9e\u9645\u526f\u672c\u7684\u7248\u672c\u4e0d\u4e00\u81f4\uff0c\u8be5\u547d\u4ee4\u53ef\u624b\u52a8\u6539\u53d8\u5143\u6570\u636e\u4e2d\u5206\u533a\u7684\u7248\u672c\u3002"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET TABLE table_name PARTITION VERSION\n        PROPERTIES ("key" = "value", ...);\n')),(0,r.yg)("p",null,"\u76ee\u524d\u652f\u6301\u5982\u4e0b\u5c5e\u6027\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'"partition_id"\uff1a\u5fc5\u9700\u3002\u6307\u5b9a\u4e00\u4e2a Partition Id.'),(0,r.yg)("li",{parentName:"ol"},'"visible_version"\uff1a\u5fc5\u9700\u3002\u6307\u5b9a Version.')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,r.yg)("p",{parentName:"blockquote"}," \u8bbe\u7f6e\u5206\u533a\u7684\u7248\u672c\u9700\u8981\u5148\u786e\u8ba4Be\u673a\u5668\u4e0a\u5b9e\u9645\u526f\u672c\u7684\u7248\u672c\uff0c\u6b64\u547d\u4ee4\u4e00\u822c\u53ea\u7528\u4e8e\u7d27\u6025\u6545\u969c\u4fee\u590d\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\u3002")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u8bbe\u7f6e partition 1769152 \u5728 FE \u5143\u6570\u636e\u4e0a\u7684\u7248\u672c\u4e3a 100\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET TABLE tbl1 PARTITION VERSION PROPERTIES("partition_id" = "1769152", "visible_version" = "100");\n')),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ADMIN, SET, PARTITION, VERSION\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);