"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[18426],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},399213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const o={title:"DAYOFWEEK",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/dayofweek",id:"version-2.1/sql-manual/sql-functions/date-time-functions/dayofweek",title:"DAYOFWEEK",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/date-time-functions/dayofweek.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/dayofweek",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/dayofweek",draft:!1,tags:[],version:"2.1",frontMatter:{title:"DAYOFWEEK",language:"zh-CN"},sidebar:"docs",previous:{title:"DAYOFMONTH",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/dayofmonth"},next:{title:"WEEK",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/week"}},s={},c=[{value:"dayofweek",id:"dayofweek",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"dayofweek"},"dayofweek"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"INT DAYOFWEEK(DATETIME date)")),(0,a.yg)("p",null,"DAYOFWEEK\u51fd\u6570\u8fd4\u56de\u65e5\u671f\u7684\u5de5\u4f5c\u65e5\u7d22\u5f15\u503c\uff0c\u5373\u661f\u671f\u65e5\u4e3a1\uff0c\u661f\u671f\u4e00\u4e3a2\uff0c\u661f\u671f\u516d\u4e3a7"),(0,a.yg)("p",null,"\u53c2\u6570\u4e3aDate\u6216\u8005Datetime\u7c7b\u578b\u6216\u8005\u53ef\u4ee5cast\u4e3aDate\u6216\u8005Datetime\u7c7b\u578b\u7684\u6570\u5b57"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select dayofweek('2019-06-25');\n+----------------------------------+\n| dayofweek('2019-06-25 00:00:00') |\n+----------------------------------+\n|                                3 |\n+----------------------------------+\n\nmysql> select dayofweek(cast(20190625 as date)); \n+-----------------------------------+\n| dayofweek(CAST(20190625 AS DATE)) |\n+-----------------------------------+\n|                                 3 |\n+-----------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DAYOFWEEK\n")))}p.isMDXComponent=!0}}]);