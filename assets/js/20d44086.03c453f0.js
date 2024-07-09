"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[26911],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(t),p=o,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||s;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},829944:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(58168),o=(t(296540),t(15680));const s={title:"MICROSECONDS_SUB",language:"en"},i=void 0,a={unversionedId:"sql-manual/sql-functions/date-time-functions/microseconds-sub",id:"sql-manual/sql-functions/date-time-functions/microseconds-sub",title:"MICROSECONDS_SUB",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/date-time-functions/microseconds-sub.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/microseconds-sub",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/microseconds-sub",draft:!1,tags:[],version:"current",frontMatter:{title:"MICROSECONDS_SUB",language:"en"},sidebar:"docs",previous:{title:"MICROSECONDS_DIFF",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/microseconds-diff"},next:{title:"MILLISECONDS_ADD",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/milliseconds-add"}},c={},l=[{value:"microseconds_sub",id:"microseconds_sub",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:l},d="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"microseconds_sub"},"microseconds_sub"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DATETIMEV2 microseconds_sub(DATETIMEV2 basetime, INT delta)")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"basetime: Base time whose type is DATETIMEV2"),(0,o.yg)("li",{parentName:"ul"},"delta: Microseconds to subtract from basetime"),(0,o.yg)("li",{parentName:"ul"},"Return type of this function is DATETIMEV2")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select now(3), microseconds_sub(now(3), 100000);\n+-------------------------+----------------------------------+\n| now(3)                  | microseconds_sub(now(3), 100000) |\n+-------------------------+----------------------------------+\n| 2023-02-25 02:03:05.174 | 2023-02-25 02:03:05.074          |\n+-------------------------+----------------------------------+\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"now(3)")," returns current time as type DATETIMEV2 with precision ",(0,o.yg)("inlineCode",{parentName:"p"},"3"),"\uff0c",(0,o.yg)("inlineCode",{parentName:"p"},"microseconds_sub(now(3), 100000)")," means 100000 microseconds before current time"),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"microseconds_sub\n")))}m.isMDXComponent=!0}}]);