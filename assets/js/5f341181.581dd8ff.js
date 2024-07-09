"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[49164],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>p});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,p=f["".concat(l,".").concat(m)]||f[m]||d[m]||a;return n?r.createElement(p,o(o({ref:t},c),{},{components:n})):r.createElement(p,o({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},324286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(58168),i=(n(296540),n(15680));const a={title:"MINUTES_DIFF",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-functions/date-time-functions/minutes-diff",id:"version-2.1/sql-manual/sql-functions/date-time-functions/minutes-diff",title:"MINUTES_DIFF",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/date-time-functions/minutes-diff.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/minutes-diff",permalink:"/docs/sql-manual/sql-functions/date-time-functions/minutes-diff",draft:!1,tags:[],version:"2.1",frontMatter:{title:"MINUTES_DIFF",language:"en"},sidebar:"docs",previous:{title:"MINUTES_ADD",permalink:"/docs/sql-manual/sql-functions/date-time-functions/minutes-add"},next:{title:"MINUTES_SUB",permalink:"/docs/sql-manual/sql-functions/date-time-functions/minutes-sub"}},l={},u=[{value:"minutes_diff",id:"minutes_diff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},f="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(f,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"minutes_diff"},"minutes_diff"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"INT minutes_diff(DATETIME enddate, DATETIME startdate)")),(0,i.yg)("p",null,"The difference between the start time and the end time is a few minutes"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select minutes_diff('2020-12-25 22:00:00','2020-12-25 21:00:00');\n+------------------------------------------------------------+\n| minutes_diff('2020-12-25 22:00:00', '2020-12-25 21:00:00') |\n+------------------------------------------------------------+\n|                                                         60 |\n+------------------------------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"minutes_diff\n")))}d.isMDXComponent=!0}}]);