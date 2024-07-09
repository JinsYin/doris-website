"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[20282],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>f});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),y=s(r),p=a,f=y["".concat(l,".").concat(p)]||y[p]||d[p]||i;return r?t.createElement(f,o(o({ref:n},u),{},{components:r})):t.createElement(f,o({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[y]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},412767:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var t=r(58168),a=(r(296540),r(15680));const i={title:"ARRAY_DISTINCT",language:"en"},o=void 0,c={unversionedId:"sql-manual/sql-functions/array-functions/array-distinct",id:"sql-manual/sql-functions/array-functions/array-distinct",title:"ARRAY_DISTINCT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/array-functions/array-distinct.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-distinct",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array-distinct",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAY_DISTINCT",language:"en"},sidebar:"docs",previous:{title:"ARRAY_RANGE",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array-range"},next:{title:"ARRAY_DIFFERENCE",permalink:"/docs/dev/sql-manual/sql-functions/array-functions/array-difference"}},l={},s=[{value:"array_distinct",id:"array_distinct",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},y="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(y,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_distinct"},"array_distinct"),(0,a.yg)("p",null,"array_distinct"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY<T> array_distinct(ARRAY<T> arr)")),(0,a.yg)("p",null,"Return the array which has been removed duplicate values.\nReturn NULL for NULL input."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select k1, k2, array_distinct(k2) from array_test;\n+------+-----------------------------+---------------------------+\n| k1   | k2                          | array_distinct(k2)        |\n+------+-----------------------------+---------------------------+\n| 1    | [1, 2, 3, 4, 5]             | [1, 2, 3, 4, 5]           |\n| 2    | [6, 7, 8]                   | [6, 7, 8]                 |\n| 3    | []                          | []                        |\n| 4    | NULL                        | NULL                      |\n| 5    | [1, 2, 3, 4, 5, 4, 3, 2, 1] | [1, 2, 3, 4, 5]           |\n| 6    | [1, 2, 3, NULL]             | [1, 2, 3, NULL]           |\n| 7    | [1, 2, 3, NULL, NULL]       | [1, 2, 3, NULL]     |\n+------+-----------------------------+---------------------------+\n\nmysql> select k1, k2, array_distinct(k2) from array_test01;\n+------+------------------------------------------+---------------------------+\n| k1   | k2                                       | array_distinct(`k2`)      |\n+------+------------------------------------------+---------------------------+\n| 1    | ['a', 'b', 'c', 'd', 'e']                | ['a', 'b', 'c', 'd', 'e'] |\n| 2    | ['f', 'g', 'h']                          | ['f', 'g', 'h']           |\n| 3    | ['']                                     | ['']                      |\n| 3    | [NULL]                                   | [NULL]                    |\n| 5    | ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c'] | ['a', 'b', 'c', 'd', 'e'] |\n| 6    | NULL                                     | NULL                      |\n| 7    | ['a', 'b', NULL]                         | ['a', 'b', NULL]          |\n| 8    | ['a', 'b', NULL, NULL]                   | ['a', 'b', NULL]    |\n+------+------------------------------------------+---------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY, DISTINCT, ARRAY_DISTINCT"))}d.isMDXComponent=!0}}]);