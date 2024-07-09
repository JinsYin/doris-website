"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[49411],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>A});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,A=p["".concat(i,".").concat(d)]||p[d]||u[d]||s;return a?n.createElement(A,l(l({ref:t},m),{},{components:a})):n.createElement(A,l({ref:t},m))}));function A(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},57260:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(58168),r=(a(296540),a(15680));const s={title:"SHOW-CREATE-DATABASE",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-CREATE-DATABASE",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-DATABASE",title:"SHOW-CREATE-DATABASE",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-DATABASE.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-DATABASE",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-DATABASE",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-CREATE-DATABASE",language:"en"},sidebar:"docs",previous:{title:"SHOW-CREATE-CATALOG",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-CATALOG"},next:{title:"SHOW-CREATE-MATERIALIZED-VIEW",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-MATERIALIZED-VIEW"}},i={},c=[{value:"SHOW-CREATE-DATABASE",id:"show-create-database",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-create-database"},"SHOW-CREATE-DATABASE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW CREATE DATABASE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement checks the creation of the doris database, support database from both internal catalog and hms catalog"),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE DATABASE db_name;\n")),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"db_name"),": The name of the database"),(0,r.yg)("li",{parentName:"ul"},"if specific a database from hms catalog, will return same with this stmt in hive")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"View the creation of the test database in doris internal catalog"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SHOW CREATE DATABASE test;\n+----------+----------------------------+\n| Database | Create Database |\n+----------+----------------------------+\n| test | CREATE DATABASE `test` |\n+----------+----------------------------+\n1 row in set (0.00 sec)\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"view a database named ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs_text")," from a hms catalog"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show create database hdfs_text;                                                                                     \n+-----------+------------------------------------------------------------------------------------+                         \n| Database  | Create Database                                                                    |                         \n+-----------+------------------------------------------------------------------------------------+                         \n| hdfs_text | CREATE DATABASE `hdfs_text` LOCATION 'hdfs://HDFS1009138/hive/warehouse/hdfs_text' |                         \n+-----------+------------------------------------------------------------------------------------+                         \n1 row in set (0.01 sec)  \n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"}," SHOW, CREATE, DATABASE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);