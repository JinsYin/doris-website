"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[81714],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>u});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),g=r,u=m["".concat(p,".").concat(g)]||m[g]||y[g]||l;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},297741:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(58168),r=(a(296540),a(15680));const l={title:"CREATE-POLICY",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY",id:"version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY",title:"CREATE-POLICY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-POLICY",draft:!1,tags:[],version:"1.2",frontMatter:{title:"CREATE-POLICY",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-TABLE-AS-SELECT",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT"},next:{title:"CREATE-VIEW",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-VIEW"}},p={},s=[{value:"CREATE-POLICY",id:"create-policy",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"\u8bed\u6cd5\uff1a",id:"\u8bed\u6cd5",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s},m="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-policy"},"CREATE-POLICY"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("version",{since:"1.2"},(0,r.yg)("p",null,"CREATE POLICY")),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u521b\u5efa\u7b56\u7565\uff0c\u5305\u542b\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u521b\u5efa\u5b89\u5168\u7b56\u7565(ROW POLICY)\uff0cexplain \u53ef\u4ee5\u67e5\u770b\u6539\u5199\u540e\u7684 SQL\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u521b\u5efa\u6570\u636e\u8fc1\u79fb\u7b56\u7565(STORAGE POLICY)\uff0c\u7528\u4e8e\u51b7\u70ed\u6570\u636e\u8f6c\u6362\u3002")),(0,r.yg)("h4",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"ROW POLICY")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY test_row_policy_1 ON test.table1 \nAS {RESTRICTIVE|PERMISSIVE} TO test USING (id in (1, 2));\n")),(0,r.yg)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"filterType\uff1aRESTRICTIVE \u5c06\u4e00\u7ec4\u7b56\u7565\u901a\u8fc7 AND \u8fde\u63a5, PERMISSIVE \u5c06\u4e00\u7ec4\u7b56\u7565\u901a\u8fc7 OR \u8fde\u63a5"),(0,r.yg)("li",{parentName:"ul"},"\u914d\u7f6e\u591a\u4e2a\u7b56\u7565\u9996\u5148\u5408\u5e76 RESTRICTIVE \u7684\u7b56\u7565\uff0c\u518d\u6dfb\u52a0 PERMISSIVE \u7684\u7b56\u7565"),(0,r.yg)("li",{parentName:"ul"},"RESTRICTIVE \u548c PERMISSIVE \u4e4b\u95f4\u901a\u8fc7 AND \u8fde\u63a5\u7684"),(0,r.yg)("li",{parentName:"ul"},"\u4e0d\u5141\u8bb8\u5bf9 root \u548c admin \u7528\u6237\u521b\u5efa")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"STORAGE POLICY")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE POLICY test_storage_policy_1\nPROPERTIES ("key"="value", ...);\n')),(0,r.yg)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"PROPERTIES\u4e2d\u9700\u8981\u6307\u5b9a\u8d44\u6e90\u7684\u7c7b\u578b:",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"storage_resource\uff1a\u6307\u5b9a\u7b56\u7565\u4f7f\u7528\u7684storage resource\u540d\u79f0\u3002"),(0,r.yg)("li",{parentName:"ol"},"cooldown_datetime\uff1a\u70ed\u6570\u636e\u8f6c\u4e3a\u51b7\u6570\u636e\u65f6\u95f4\uff0c\u4e0d\u80fd\u4e0ecooldown_ttl\u540c\u65f6\u5b58\u5728\u3002"),(0,r.yg)("li",{parentName:"ol"},"cooldown_ttl\uff1a\u70ed\u6570\u636e\u6301\u7eed\u65f6\u95f4\u3002\u4ece\u6570\u636e\u5206\u7247\u751f\u6210\u65f6\u5f00\u59cb\u8ba1\u7b97\uff0c\u7ecf\u8fc7\u6307\u5b9a\u65f6\u95f4\u540e\u8f6c\u4e3a\u51b7\u6570\u636e\u3002\u652f\u6301\u7684\u683c\u5f0f\uff1a\n1d\uff1a1\u5929\n1h\uff1a1\u5c0f\u65f6\n50000: 50000\u79d2")))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u7ec4\u884c\u5b89\u5168\u7b56\u7565"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY test_row_policy_1 ON test.table1 \nAS RESTRICTIVE TO test USING (c1 = 'a');\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY test_row_policy_2 ON test.table1 \nAS RESTRICTIVE TO test USING (c2 = 'b');\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY test_row_policy_3 ON test.table1 \nAS PERMISSIVE TO test USING (c3 = 'c');\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY test_row_policy_3 ON test.table1 \nAS PERMISSIVE TO test USING (c4 = 'd');\n")),(0,r.yg)("p",{parentName:"li"},"\u5f53\u6211\u4eec\u6267\u884c\u5bf9 table1 \u7684\u67e5\u8be2\u65f6\u88ab\u6539\u5199\u540e\u7684 sql \u4e3a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select * from (select * from table1 where c1 = 'a' and c2 = 'b' or c3 = 'c' or c4 = 'd')\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u6570\u636e\u8fc1\u79fb\u7b56\u7565"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u8bf4\u660e"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u51b7\u70ed\u5206\u79bb\u521b\u5efa\u7b56\u7565\uff0c\u5fc5\u987b\u5148\u521b\u5efaresource\uff0c\u7136\u540e\u521b\u5efa\u8fc1\u79fb\u7b56\u7565\u65f6\u5019\u5173\u8054\u521b\u5efa\u7684resource\u540d"),(0,r.yg)("li",{parentName:"ul"},"\u5f53\u524d\u4e0d\u652f\u6301\u5220\u9664drop\u6570\u636e\u8fc1\u79fb\u7b56\u7565\uff0c\u9632\u6b62\u6570\u636e\u88ab\u8fc1\u79fb\u540e\u3002\u7b56\u7565\u88ab\u5220\u9664\u4e86\uff0c\u7cfb\u7edf\u65e0\u6cd5\u627e\u56de\u6570\u636e"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6307\u5b9a\u6570\u636e\u51b7\u5374\u65f6\u95f4\u521b\u5efa\u6570\u636e\u8fc1\u79fb\u7b56\u7565"))),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE POLICY testPolicy\nPROPERTIES(\n  "storage_resource" = "s3",\n  "cooldown_datetime" = "2022-06-08 00:00:00"\n);\n')),(0,r.yg)("ol",{parentName:"li",start:3},(0,r.yg)("li",{parentName:"ol"},"\u6307\u5b9a\u70ed\u6570\u636e\u6301\u7eed\u65f6\u95f4\u521b\u5efa\u6570\u636e\u8fc1\u79fb\u7b56\u7565")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE POLICY testPolicy\nPROPERTIES(\n  "storage_resource" = "s3",\n  "cooldown_ttl" = "1d"\n);\n')),(0,r.yg)("p",{parentName:"li"},"\u76f8\u5173\u53c2\u6570\u5982\u4e0b\uff1a"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"storage_resource"),"\uff1a\u521b\u5efa\u7684storage resource\u540d\u79f0"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"cooldown_datetime"),"\uff1a\u8fc1\u79fb\u6570\u636e\u7684\u65f6\u95f4\u70b9"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"cooldown_ttl"),"\uff1a\u8fc1\u79fb\u6570\u636e\u8ddd\u79bb\u5f53\u524d\u65f6\u95f4\u7684\u5012\u8ba1\u65f6\uff0c\u5355\u4f4ds\u3002\u4e0ecooldown_datetime\u4e8c\u9009\u4e00\u5373\u53ef")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE, POLICY\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}y.isMDXComponent=!0}}]);