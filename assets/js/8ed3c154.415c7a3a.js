"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[98298],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>f});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),p=o,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||i;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6073:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(58168),o=(t(296540),t(15680));const i={title:"MICROSECONDS_ADD",language:"en"},a=void 0,s={unversionedId:"sql-manual/sql-functions/date-time-functions/microseconds-add",id:"version-2.0/sql-manual/sql-functions/date-time-functions/microseconds-add",title:"MICROSECONDS_ADD",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/microseconds-add.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/microseconds-add",permalink:"/docs/2.0/sql-manual/sql-functions/date-time-functions/microseconds-add",draft:!1,tags:[],version:"2.0",frontMatter:{title:"MICROSECONDS_ADD",language:"en"},sidebar:"docs",previous:{title:"MICROSECOND",permalink:"/docs/2.0/sql-manual/sql-functions/date-time-functions/microsecond"},next:{title:"MICROSECONDS_DIFF",permalink:"/docs/2.0/sql-manual/sql-functions/date-time-functions/microseconds-diff"}},c={},l=[{value:"microseconds_add",id:"microseconds_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"microseconds_add"},"microseconds_add"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DATETIMEV2 microseconds_add(DATETIMEV2 basetime, INT delta)")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"basetime: Base time whose type is DATETIMEV2"),(0,o.yg)("li",{parentName:"ul"},"delta: Microseconds to add to basetime"),(0,o.yg)("li",{parentName:"ul"},"Return type of this function is DATETIMEV2")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select now(3), microseconds_add(now(3), 100000);\n+-------------------------+----------------------------------+\n| now(3)                  | microseconds_add(now(3), 100000) |\n+-------------------------+----------------------------------+\n| 2023-02-21 11:35:56.556 | 2023-02-21 11:35:56.656          |\n+-------------------------+----------------------------------+\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"now(3)")," returns current time as type DATETIMEV2 with precision 3d\uff0c",(0,o.yg)("inlineCode",{parentName:"p"},"microseconds_add(now(3), 100000)")," means 100000 microseconds after current time"),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"microseconds_add\n")))}m.isMDXComponent=!0}}]);