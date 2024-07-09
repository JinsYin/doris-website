"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[97552],{15680:(e,t,n)=>{n.d(t,{xA:()=>f,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,y=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?r.createElement(y,o(o({ref:t},f),{},{components:n})):r.createElement(y,o({ref:t},f))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},824916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const i={title:"YEARS_DIFF",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-functions/date-time-functions/years-diff",id:"sql-manual/sql-functions/date-time-functions/years-diff",title:"YEARS_DIFF",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/date-time-functions/years-diff.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/years-diff",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/years-diff",draft:!1,tags:[],version:"current",frontMatter:{title:"YEARS_DIFF",language:"en"},sidebar:"docs",previous:{title:"YEARS_ADD",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/years-add"},next:{title:"YEARS_SUB",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/years-sub"}},l={},c=[{value:"years_diff",id:"years_diff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],f={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"years_diff"},"years_diff"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"INT years_diff(DATETIME enddate, DATETIME startdate)")),(0,a.yg)("p",null,"The difference between the start time and the end time is several years"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select years_diff('2020-12-25','2019-10-25');\n+----------------------------------------------------------+\n| years_diff('2020-12-25 00:00:00', '2019-10-25 00:00:00') |\n+----------------------------------------------------------+\n|                                                        1 |\n+----------------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"years_diff\n")))}d.isMDXComponent=!0}}]);