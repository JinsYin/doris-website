"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[17439],{15680:(e,n,i)=>{i.d(n,{xA:()=>d,yg:()=>g});var t=i(296540);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},d=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(i),u=a,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return i?t.createElement(g,l(l({ref:n},d),{},{components:i})):t.createElement(g,l({ref:n},d))}));function g(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=i[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},66835:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var t=i(58168),a=(i(296540),i(15680));const r={title:"Bitmap Index",language:"en"},l=void 0,o={unversionedId:"table-design/index/bitmap-index",id:"version-2.0/table-design/index/bitmap-index",title:"Bitmap Index",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/table-design/index/bitmap-index.md",sourceDirName:"table-design/index",slug:"/table-design/index/bitmap-index",permalink:"/docs/2.0/table-design/index/bitmap-index",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Bitmap Index",language:"en"}},p={},s=[{value:"Applicable scenarios",id:"applicable-scenarios",level:2},{value:"Inapplicable scenarios",id:"inapplicable-scenarios",level:3},{value:"Creating bitmap index",id:"creating-bitmap-index",level:3},{value:"Viewing bitmap index",id:"viewing-bitmap-index",level:2},{value:"Deleting index",id:"deleting-index",level:3},{value:"Notes:",id:"notes",level:3}],d={toc:s},c="wrapper";function m(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Bitmap Index is an index represented by bitmaps, where a bitmap is created for each key value in a column. Compared to other indexes, it occupies very little storage space and is very fast to create and use. However, it has a disadvantage of having a large lock granularity for modification operations, making it unsuitable for frequent updates."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"bitmap index",src:i(489919).A,width:"2560",height:"896"})),(0,a.yg)("h2",{id:"applicable-scenarios"},"Applicable scenarios"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Columns with high value repetition, recommended to be between 100 and 100,000, such as occupation, city, etc. If the repetition is too high, there is no significant advantage compared to other types of indexes; if the repetition is too low, space efficiency and performance will be greatly reduced."),(0,a.yg)("li",{parentName:"ul"},"Specific types of queries such as ",(0,a.yg)("inlineCode",{parentName:"li"},"count"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"or"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"and")," logical operations that only require bitwise operations. For example: querying with multiple conditions combined, ",(0,a.yg)("inlineCode",{parentName:"li"},"select count(*) from table where city = 'Nanjing' and job = 'Doctor' and phonetype = 'iphone' and gender = 'Male'.")," If bitmap indexes are established on each query condition column, the database can perform efficient bit operations, accurately locate the required data, reduce disk IO, and the smaller the filtered result set, the more obvious the advantage of bitmap indexes."),(0,a.yg)("li",{parentName:"ul"},"Suitable for ad-hoc queries, multi-dimensional analysis, and other analytical scenarios. If a table has 100 columns and users use 20 of them as query conditions (arbitrarily using several columns from these 20 columns), creating 20 bitmap indexes on these columns will allow all queries to utilize the indexes.")),(0,a.yg)("h3",{id:"inapplicable-scenarios"},"Inapplicable scenarios"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Columns with low value repetition, such as ID cards, phone numbers, etc."),(0,a.yg)("li",{parentName:"ul"},"Columns with excessively high repetition, such as gender. Although bitmap indexes can be established, it is not recommended to use them as query conditions alone. It is recommended to filter them together with other conditions."),(0,a.yg)("li",{parentName:"ul"},"Columns that often need to be updated.")),(0,a.yg)("h3",{id:"creating-bitmap-index"},"Creating bitmap index"),(0,a.yg)("p",null,"Creating a bitmap index named index_name on the column siteid in the table named table_name:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CREATE INDEX [IF NOT EXISTS] index_name ON table1 (siteid) USING BITMAP;\n")),(0,a.yg)("h2",{id:"viewing-bitmap-index"},"Viewing bitmap index"),(0,a.yg)("p",null,"Displaying indexes under the specified table_name:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW INDEX FROM table_name;\n")),(0,a.yg)("h3",{id:"deleting-index"},"Deleting index"),(0,a.yg)("p",null,"Deleting the index named index_name under the specified table_name:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DROP INDEX [IF EXISTS] index_name ON table_name;\n")),(0,a.yg)("h3",{id:"notes"},"Notes:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Bitmap indexes are only created on single columns."),(0,a.yg)("li",{parentName:"ul"},"Bitmap indexes can be applied to all columns in Duplicate and Uniq data models and key columns in the Aggregate model."),(0,a.yg)("li",{parentName:"ul"},"The data types supported by bitmap indexes are as follows: ",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"TINYINT")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"SMALLINT")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"INT")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"BIGINT")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"CHAR")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"VARCHAR")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"DATE")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"DATETIME")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"LARGEINT")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"DECIMAL")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"BOOL"))))))}m.isMDXComponent=!0},489919:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/bitmap-index-example-692794948b22e3105c1171ed819766fc.png"}}]);