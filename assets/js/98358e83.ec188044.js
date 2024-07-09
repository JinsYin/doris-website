"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[3790],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>f});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=c(r),m=a,f=y["".concat(s,".").concat(m)]||y[m]||p[m]||i;return r?t.createElement(f,l(l({ref:n},u),{},{components:r})):t.createElement(f,l({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[y]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},842102:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=r(58168),a=(r(296540),r(15680));const i={title:"ARRAY_MIN",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array-min",id:"version-2.1/sql-manual/sql-functions/array-functions/array-min",title:"ARRAY_MIN",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/array-functions/array-min.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-min",permalink:"/docs/sql-manual/sql-functions/array-functions/array-min",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ARRAY_MIN",language:"en"},sidebar:"docs",previous:{title:"ARRAY_MAX",permalink:"/docs/sql-manual/sql-functions/array-functions/array-max"},next:{title:"ARRAY_MAP",permalink:"/docs/sql-manual/sql-functions/array-functions/array-map"}},s={},c=[{value:"array_min",id:"array_min",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},y="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(y,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_min"},"array_min"),(0,a.yg)("p",null,"array_min"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"T array_min(ARRAY<T> array1)")),(0,a.yg)("p",null,"Get the minimum element in an array (",(0,a.yg)("inlineCode",{parentName:"p"},"NULL")," values are skipped).\nWhen the array is empty or all elements in the array are ",(0,a.yg)("inlineCode",{parentName:"p"},"NULL")," values, the function returns ",(0,a.yg)("inlineCode",{parentName:"p"},"NULL"),"."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"mysql> create table array_type_table(k1 INT, k2 Array<int>) duplicate key (k1)\n    -> distributed by hash(k1) buckets 1 properties('replication_num' = '1');\nmysql> insert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3]), (3, [1, NULL, 3]);\nmysql> select k2, array_min(k2) from array_type_table;\n+--------------+-----------------+\n| k2           | array_min(`k2`) |\n+--------------+-----------------+\n| []           |            NULL |\n| [NULL]       |            NULL |\n| [1, 2, 3]    |               1 |\n| [1, NULL, 3] |               1 |\n+--------------+-----------------+\n4 rows in set (0.02 sec)\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,MIN,ARRAY_MIN"))}p.isMDXComponent=!0}}]);