"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[55654],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),y=a,d=c["".concat(i,".").concat(y)]||c[y]||m[y]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},316389:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(58168),a=(r(296540),r(15680));const o={title:"MySQL Dump",language:"zh-CN"},l=void 0,p={unversionedId:"data-operate/export/export-with-mysql-dump",id:"data-operate/export/export-with-mysql-dump",title:"MySQL Dump",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/export/export-with-mysql-dump.md",sourceDirName:"data-operate/export",slug:"/data-operate/export/export-with-mysql-dump",permalink:"/zh-CN/docs/dev/data-operate/export/export-with-mysql-dump",draft:!1,tags:[],version:"current",frontMatter:{title:"MySQL Dump",language:"zh-CN"},sidebar:"docs",previous:{title:"Select Into Outfile",permalink:"/zh-CN/docs/dev/data-operate/export/outfile"},next:{title:"\u4f5c\u4e1a\u8c03\u5ea6",permalink:"/zh-CN/docs/dev/data-operate/scheduler/job-scheduler"}},i={},s=[{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u5bfc\u51fa",id:"\u5bfc\u51fa",level:3},{value:"\u5bfc\u5165",id:"\u5bfc\u5165",level:3},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Doris \u5728 0.15 \u4e4b\u540e\u7684\u7248\u672c\u5df2\u7ecf\u652f\u6301\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"mysqldump")," \u5de5\u5177\u5bfc\u51fa\u6570\u636e\u6216\u8005\u8868\u7ed3\u6784"),(0,a.yg)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,a.yg)("h3",{id:"\u5bfc\u51fa"},"\u5bfc\u51fa"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5bfc\u51fa test \u6570\u636e\u5e93\u4e2d\u7684 table1 \u8868\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test --tables table1"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5bfc\u51fa test \u6570\u636e\u5e93\u4e2d\u7684 table1 \u8868\u7ed3\u6784\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test --tables table1 --no-data"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5bfc\u51fa test1, test2 \u6570\u636e\u5e93\u4e2d\u6240\u6709\u8868\uff1a",(0,a.yg)("inlineCode",{parentName:"p"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test1 test2"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5bfc\u51fa\u6240\u6709\u6570\u636e\u5e93\u548c\u8868 ",(0,a.yg)("inlineCode",{parentName:"p"},"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --all-databases")))),(0,a.yg)("p",null,"\u66f4\u591a\u7684\u4f7f\u7528\u53c2\u6570\u53ef\u4ee5\u53c2\u8003",(0,a.yg)("inlineCode",{parentName:"p"},"mysqldump")," \u7684\u4f7f\u7528\u624b\u518c"),(0,a.yg)("h3",{id:"\u5bfc\u5165"},"\u5bfc\u5165"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"mysqldump"),"\u5bfc\u51fa\u7684\u7ed3\u679c\u53ef\u4ee5\u91cd\u5b9a\u5411\u5230\u6587\u4ef6\u4e2d\uff0c\u4e4b\u540e\u53ef\u4ee5\u901a\u8fc7 source \u547d\u4ee4\u5bfc\u5165\u5230 Doris \u4e2d ",(0,a.yg)("inlineCode",{parentName:"p"},"source filenamme.sql")),(0,a.yg)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u7531\u4e8e Doris  \u4e2d\u6ca1\u6709 MySQL \u91cc\u7684 tablespace \u6982\u5ff5\uff0c\u56e0\u6b64\u5728\u4f7f\u7528 MySQL Dump \u65f6\u8981\u52a0\u4e0a ",(0,a.yg)("inlineCode",{parentName:"p"},"--no-tablespaces")," \u53c2\u6570")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4f7f\u7528 MySQL Dump \u5bfc\u51fa\u6570\u636e\u548c\u8868\u7ed3\u6784\u4ec5\u7528\u4e8e\u5f00\u53d1\u6d4b\u8bd5\u6216\u8005\u6570\u636e\u91cf\u5f88\u5c0f\u7684\u60c5\u51b5\uff0c\u8bf7\u52ff\u7528\u4e8e\u5927\u6570\u636e\u91cf\u7684\u751f\u4ea7\u73af\u5883"))))}m.isMDXComponent=!0}}]);