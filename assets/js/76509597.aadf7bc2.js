"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[48633],{15680:(n,e,r)=>{r.d(e,{xA:()=>c,yg:()=>d});var a=r(296540);function t(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function l(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,a)}return r}function o(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){t(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function i(n,e){if(null==n)return{};var r,a,t=function(n,e){if(null==n)return{};var r,a,t={},l=Object.keys(n);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(t[r]=n[r]);return t}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var u=a.createContext({}),s=function(n){var e=a.useContext(u),r=e;return n&&(r="function"==typeof n?n(e):o(o({},e),n)),r},c=function(n){var e=s(n.components);return a.createElement(u.Provider,{value:e},n.children)},y="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(n,e){var r=n.components,t=n.mdxType,l=n.originalType,u=n.parentName,c=i(n,["components","mdxType","originalType","parentName"]),y=s(r),f=t,d=y["".concat(u,".").concat(f)]||y[f]||p[f]||l;return r?a.createElement(d,o(o({ref:e},c),{},{components:r})):a.createElement(d,o({ref:e},c))}));function d(n,e){var r=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=n,i[y]="string"==typeof n?n:t,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},673612:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(58168),t=(r(296540),r(15680));const l={title:"ARRAY_UNION",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array-union",id:"version-2.0/sql-manual/sql-functions/array-functions/array-union",title:"ARRAY_UNION",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/array-functions/array-union.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-union",permalink:"/docs/2.0/sql-manual/sql-functions/array-functions/array-union",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY_UNION",language:"en"},sidebar:"docs",previous:{title:"ARRAY_DIFFERENCE",permalink:"/docs/2.0/sql-manual/sql-functions/array-functions/array-difference"},next:{title:"ARRAY_JOIN",permalink:"/docs/2.0/sql-manual/sql-functions/array-functions/array-join"}},u={},s=[{value:"array_union",id:"array_union",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},y="wrapper";function p(n){let{components:e,...r}=n;return(0,t.yg)(y,(0,a.A)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_union"},"array_union"),(0,t.yg)("p",null,"array_union"),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"ARRAY<T> array_union(ARRAY<T> array1, ARRAY<T> array2)")),(0,t.yg)("p",null,"Returns an array of the elements in the union of array1 and array2, without duplicates. If the input parameter is null, null is returned."),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"mysql> select k1,k2,k3,array_union(k2,k3) from array_type_table;\n+------+-----------------+--------------+-------------------------+\n| k1   | k2              | k3           | array_union(`k2`, `k3`) |\n+------+-----------------+--------------+-------------------------+\n|    1 | [1, 2, 3]       | [2, 4, 5]    | [1, 2, 3, 4, 5]         |\n|    2 | [2, 3]          | [1, 5]       | [2, 3, 1, 5]            |\n|    3 | [1, 1, 1]       | [2, 2, 2]    | [1, 2]                  |\n+------+-----------------+--------------+-------------------------+\n\nmysql> select k1,k2,k3,array_union(k2,k3) from array_type_table_nullable;\n+------+-----------------+--------------+-------------------------+\n| k1   | k2              | k3           | array_union(`k2`, `k3`) |\n+------+-----------------+--------------+-------------------------+\n|    1 | [1, NULL, 3]    | [1, 3, 5]    | [1, NULL, 3, 5]         |\n|    2 | [NULL, NULL, 2] | [2, NULL, 4] | [NULL, 2, 4]            |\n|    3 | NULL            | [1, 2, 3]    | NULL                    |\n+------+-----------------+--------------+-------------------------+\n\nmysql> select k1,k2,k3,array_union(k2,k3) from array_type_table_varchar;\n+------+----------------------------+----------------------------------+---------------------------------------------------+\n| k1   | k2                         | k3                               | array_union(`k2`, `k3`)                           |\n+------+----------------------------+----------------------------------+---------------------------------------------------+\n|    1 | ['hello', 'world', 'c++']  | ['I', 'am', 'c++']               | ['hello', 'world', 'c++', 'I', 'am']              |\n|    2 | ['a1', 'equals', 'b1']     | ['a2', 'equals', 'b2']           | ['a1', 'equals', 'b1', 'a2', 'b2']                |\n|    3 | ['hasnull', NULL, 'value'] | ['nohasnull', 'nonull', 'value'] | ['hasnull', NULL, 'value', 'nohasnull', 'nonull'] |\n|    4 | ['hasnull', NULL, 'value'] | ['hasnull', NULL, 'value']       | ['hasnull', NULL, 'value']                        |\n+------+----------------------------+----------------------------------+---------------------------------------------------+\n\nmysql> select k1,k2,k3,array_union(k2,k3) from array_type_table_decimal;\n+------+------------------+-------------------+----------------------------+\n| k1   | k2               | k3                | array_union(`k2`, `k3`)    |\n+------+------------------+-------------------+----------------------------+\n|    1 | [1.1, 2.1, 3.44] | [2.1, 3.4, 5.4]   | [1.1, 2.1, 3.44, 3.4, 5.4] |\n|    2 | [NULL, 2, 5]     | [NULL, NULL, 5.4] | [NULL, 2, 5, 5.4]          |\n|    4 | [1, NULL, 2, 5]  | [1, 3.1, 5.4]     | [1, NULL, 2, 5, 3.1, 5.4]  |\n+------+------------------+-------------------+----------------------------+\n\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY,UNION,ARRAY_UNION"))}p.isMDXComponent=!0}}]);