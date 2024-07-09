"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[12696],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>f});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),i=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=i(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=i(r),h=a,f=m["".concat(l,".").concat(h)]||m[h]||p[h]||s;return r?t.createElement(f,o(o({ref:n},c),{},{components:r})):t.createElement(f,o({ref:n},c))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=h;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[m]="string"==typeof e?e:a,o[1]=u;for(var i=2;i<s;i++)o[i]=r[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},283855:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>i});var t=r(58168),a=(r(296540),r(15680));const s={title:"murmur_hash3_32",language:"en"},o=void 0,u={unversionedId:"sql-manual/sql-functions/hash-functions/murmur_hash3_32",id:"version-1.2/sql-manual/sql-functions/hash-functions/murmur_hash3_32",title:"murmur_hash3_32",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/hash-functions/murmur_hash3_32.md",sourceDirName:"sql-manual/sql-functions/hash-functions",slug:"/sql-manual/sql-functions/hash-functions/murmur_hash3_32",permalink:"/docs/1.2/sql-manual/sql-functions/hash-functions/murmur_hash3_32",draft:!1,tags:[],version:"1.2",frontMatter:{title:"murmur_hash3_32",language:"en"},sidebar:"docs",previous:{title:"json_extract",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/json_extract"},next:{title:"murmur_hash3_64",permalink:"/docs/1.2/sql-manual/sql-functions/hash-functions/murmur_hash3_64"}},l={},i=[{value:"murmur_hash3_32",id:"murmur_hash3_32",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:i},m="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(m,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"murmur_hash3_32"},"murmur_hash3_32"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"INT MURMUR_HASH3_32(VARCHAR input, ...)")),(0,a.yg)("p",null,"Return the 32 bits murmur3 hash of input string."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select murmur_hash3_32(null);\n+-----------------------+\n| murmur_hash3_32(NULL) |\n+-----------------------+\n|                  NULL |\n+-----------------------+\n\nmysql> select murmur_hash3_32(\"hello\");\n+--------------------------+\n| murmur_hash3_32('hello') |\n+--------------------------+\n|               1321743225 |\n+--------------------------+\n\nmysql> select murmur_hash3_32(\"hello\", \"world\");\n+-----------------------------------+\n| murmur_hash3_32('hello', 'world') |\n+-----------------------------------+\n|                         984713481 |\n+-----------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"MURMUR_HASH3_32,HASH\n")))}p.isMDXComponent=!0}}]);