"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[45056],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>f});var a=n(296540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=a.createContext({}),i=function(e){var r=a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=i(e.components);return a.createElement(c.Provider,{value:r},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=i(n),m=t,f=y["".concat(c,".").concat(m)]||y[m]||p[m]||o;return n?a.createElement(f,s(s({ref:r},u),{},{components:n})):a.createElement(f,s({ref:r},u))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[y]="string"==typeof e?e:t,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},276052:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=n(58168),t=(n(296540),n(15680));const o={title:"ARRAY_COUNT",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array-count",id:"version-2.0/sql-manual/sql-functions/array-functions/array-count",title:"ARRAY_COUNT",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/array-functions/array-count.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-count",permalink:"/docs/2.0/sql-manual/sql-functions/array-functions/array-count",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY_COUNT",language:"en"},sidebar:"docs",previous:{title:"ARRAYS_OVERLAP",permalink:"/docs/2.0/sql-manual/sql-functions/array-functions/arrays-overlap"},next:{title:"ARRAY_APPLY",permalink:"/docs/2.0/sql-manual/sql-functions/array-functions/array-apply"}},c={},i=[{value:"array_count",id:"array_count",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:i},y="wrapper";function p(e){let{components:r,...n}=e;return(0,t.yg)(y,(0,a.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_count"},"array_count"),(0,t.yg)("version",{since:"2.0"},(0,t.yg)("p",null,"array_count")),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"array_count(lambda, array1, ...)\n")),(0,t.yg)("p",null,"Use lambda expressions as input parameters to perform corresponding expression calculations on the internal data of other input ARRAY parameters.\nReturns the number of elements such that the return value of ",(0,t.yg)("inlineCode",{parentName:"p"},"lambda(array1[i], ...)")," is not 0. Returns 0 if no element is found that satisfies this condition."),(0,t.yg)("p",null,"There are one or more parameters are input in the lambda expression, which must be consistent with the number of input array columns later.The number of elements of all input arrays must be the same. Legal scalar functions can be executed in lambda, aggregate functions, etc. are not supported."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"array_count(x->x, array1);\narray_count(x->(x%2 = 0), array1);\narray_count(x->(abs(x)-1), array1);\narray_count((x,y)->(x = y), array1, array2);\n")),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"mysql> select array_count(x -> x, [0, 1, 2, 3]);\n+--------------------------------------------------------+\n| array_count(array_map([x] -> x(0), ARRAY(0, 1, 2, 3))) |\n+--------------------------------------------------------+\n|                                                      3 |\n+--------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql> select array_count(x -> x > 2, [0, 1, 2, 3]);\n+------------------------------------------------------------+\n| array_count(array_map([x] -> x(0) > 2, ARRAY(0, 1, 2, 3))) |\n+------------------------------------------------------------+\n|                                                          1 |\n+------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_count(x -> x is null, [null, null, null, 1, 2]);\n+----------------------------------------------------------------------------+\n| array_count(array_map([x] -> x(0) IS NULL, ARRAY(NULL, NULL, NULL, 1, 2))) |\n+----------------------------------------------------------------------------+\n|                                                                          3 |\n+----------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_count(x -> power(x,2)>10, [1, 2, 3, 4, 5]);\n+------------------------------------------------------------------------------+\n| array_count(array_map([x] -> power(x(0), 2.0) > 10.0, ARRAY(1, 2, 3, 4, 5))) |\n+------------------------------------------------------------------------------+\n|                                                                            2 |\n+------------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select *, array_count((x, y) -> x>y, c_array1, c_array2) from array_test;\n+------+-----------------+-------------------------+-----------------------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_count(array_map([x, y] -> x(0) > y(1), `c_array1`, `c_array2`)) |\n+------+-----------------+-------------------------+-----------------------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] |                                                                     2 |\n|    2 | [6, 7, 8]       | [10, 12, 13]            |                                                                     0 |\n|    3 | [1]             | [-100]                  |                                                                     1 |\n|    4 | [1, NULL, 2]    | [NULL, 3, 1]            |                                                                     1 |\n|    5 | []              | []                      |                                                                     0 |\n|    6 | NULL            | NULL                    |                                                                     0 |\n+------+-----------------+-------------------------+-----------------------------------------------------------------------+\n6 rows in set (0.02 sec)\n\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY, COUNT, ARRAY_COUNT"))}p.isMDXComponent=!0}}]);