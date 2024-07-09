"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[94833],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>c});var t=n(296540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=t.createContext({}),m=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=m(e.components);return t.createElement(o.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=m(n),y=l,c=u["".concat(o,".").concat(y)]||u[y]||g[y]||r;return n?t.createElement(c,i(i({ref:a},d),{},{components:n})):t.createElement(c,i({ref:a},d))}));function c(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=y;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[u]="string"==typeof e?e:l,i[1]=p;for(var m=2;m<r;m++)i[m]=n[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},644449:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var t=n(58168),l=(n(296540),n(15680));const r={title:"Bitmap \u7d22\u5f15",language:"zh-CN"},i=void 0,p={unversionedId:"data-table/index/bitmap-index",id:"version-1.2/data-table/index/bitmap-index",title:"Bitmap \u7d22\u5f15",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/data-table/index/bitmap-index.md",sourceDirName:"data-table/index",slug:"/data-table/index/bitmap-index",permalink:"/zh-CN/docs/1.2/data-table/index/bitmap-index",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Bitmap \u7d22\u5f15",language:"zh-CN"},sidebar:"docs",previous:{title:"BloomFilter\u7d22\u5f15",permalink:"/zh-CN/docs/1.2/data-table/index/bloomfilter"},next:{title:"\u5bfc\u5165\u603b\u89c8",permalink:"/zh-CN/docs/1.2/data-operate/import/load-manual"}},o={},m=[{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"\u539f\u7406\u4ecb\u7ecd",id:"\u539f\u7406\u4ecb\u7ecd",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u521b\u5efa\u7d22\u5f15",id:"\u521b\u5efa\u7d22\u5f15",level:3},{value:"\u67e5\u770b\u7d22\u5f15",id:"\u67e5\u770b\u7d22\u5f15",level:3},{value:"\u5220\u9664\u7d22\u5f15",id:"\u5220\u9664\u7d22\u5f15",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u66f4\u591a\u5e2e\u52a9",id:"\u66f4\u591a\u5e2e\u52a9",level:2}],d={toc:m},u="wrapper";function g(e){let{components:a,...n}=e;return(0,l.yg)(u,(0,t.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"bitmap-\u7d22\u5f15"},"Bitmap \u7d22\u5f15"),(0,l.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u521b\u5efabitmap index \u52a0\u901f\u67e5\u8be2 \u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa index \u4f5c\u4e1a\uff0c\u4ee5\u53ca\u521b\u5efa index \u7684\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879\u548c\u5e38\u89c1\u95ee\u9898\u3002"),(0,l.yg)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"bitmap index\uff1a\u4f4d\u56fe\u7d22\u5f15\uff0c\u662f\u4e00\u79cd\u5feb\u901f\u6570\u636e\u7ed3\u6784\uff0c\u80fd\u591f\u52a0\u5feb\u67e5\u8be2\u901f\u5ea6")),(0,l.yg)("h2",{id:"\u539f\u7406\u4ecb\u7ecd"},"\u539f\u7406\u4ecb\u7ecd"),(0,l.yg)("p",null,"\u521b\u5efa\u548c\u5220\u9664\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a schema change \u7684\u4f5c\u4e1a\uff0c\u5177\u4f53\u7ec6\u8282\u53ef\u4ee5\u53c2\u7167 ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/advanced/alter-table/schema-change"},"Schema Change"),"\u3002"),(0,l.yg)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,l.yg)("h3",{id:"\u521b\u5efa\u7d22\u5f15"},"\u521b\u5efa\u7d22\u5f15"),(0,l.yg)("p",null,"\u5728table1 \u4e0a\u4e3asiteid \u521b\u5efabitmap \u7d22\u5f15"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX [IF NOT EXISTS] index_name ON table1 (siteid) USING BITMAP COMMENT 'balabala';\n")),(0,l.yg)("h3",{id:"\u67e5\u770b\u7d22\u5f15"},"\u67e5\u770b\u7d22\u5f15"),(0,l.yg)("p",null,"\u5c55\u793a\u6307\u5b9a table_name \u7684\u4e0b\u7d22\u5f15"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW INDEX FROM example_db.table_name;\n")),(0,l.yg)("h3",{id:"\u5220\u9664\u7d22\u5f15"},"\u5220\u9664\u7d22\u5f15"),(0,l.yg)("p",null,"\u5220\u9664\u6307\u5b9a table_name \u7684\u4e0b\u7d22\u5f15"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"DROP INDEX [IF EXISTS] index_name ON [db_name.]table_name;\n")),(0,l.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u76ee\u524d\u7d22\u5f15\u4ec5\u652f\u6301 bitmap \u7c7b\u578b\u7684\u7d22\u5f15\u3002"),(0,l.yg)("li",{parentName:"ul"},"bitmap \u7d22\u5f15\u4ec5\u5728\u5355\u5217\u4e0a\u521b\u5efa\u3002"),(0,l.yg)("li",{parentName:"ul"},"bitmap \u7d22\u5f15\u80fd\u591f\u5e94\u7528\u5728 ",(0,l.yg)("inlineCode",{parentName:"li"},"Duplicate"),"\u3001",(0,l.yg)("inlineCode",{parentName:"li"},"Uniq"),"  \u6570\u636e\u6a21\u578b\u7684\u6240\u6709\u5217\u548c ",(0,l.yg)("inlineCode",{parentName:"li"},"Aggregate"),"\u6a21\u578b\u7684key\u5217\u4e0a\u3002"),(0,l.yg)("li",{parentName:"ul"},"bitmap \u7d22\u5f15\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u5982\u4e0b:",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"TINYINT")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"SMALLINT")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"INT")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"BIGINT")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"CHAR")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"VARCHAR")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"DATE")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"DATETIME")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"LARGEINT")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"DECIMAL")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"BOOL")))),(0,l.yg)("li",{parentName:"ul"},"bitmap\u7d22\u5f15\u4ec5\u5728 Segment V2 \u4e0b\u751f\u6548\u3002\u5f53\u521b\u5efa index \u65f6\uff0c\u8868\u7684\u5b58\u50a8\u683c\u5f0f\u5c06\u9ed8\u8ba4\u8f6c\u6362\u4e3a V2 \u683c\u5f0f\u3002")),(0,l.yg)("h2",{id:"\u66f4\u591a\u5e2e\u52a9"},"\u66f4\u591a\u5e2e\u52a9"),(0,l.yg)("p",null,"\u5173\u4e8e bitmap\u7d22\u5f15 \u4f7f\u7528\u7684\u66f4\u591a\u8be6\u7ec6\u8bed\u6cd5\u53ca\u6700\u4f73\u5b9e\u8df5\uff0c\u8bf7\u53c2\u9605 ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-INDEX"},"CREARE INDEX")," / ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-INDEX"},"SHOW INDEX")," / ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-INDEX"},"DROP INDEX")," \u547d\u4ee4\u624b\u518c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728 MySql \u5ba2\u6237\u7aef\u547d\u4ee4\u884c\u4e0b\u8f93\u5165 ",(0,l.yg)("inlineCode",{parentName:"p"},"HELP CREATE INDEX")," /  ",(0,l.yg)("inlineCode",{parentName:"p"},"HELP SHOW INDEX")," / ",(0,l.yg)("inlineCode",{parentName:"p"},"HELP DROP INDEX"),"\u3002"))}g.isMDXComponent=!0}}]);