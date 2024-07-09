"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[88961],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},747652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(58168),i=(n(296540),n(15680));const a={title:"utc_timestamp",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-functions/date-time-functions/utc_timestamp",id:"version-1.2/sql-manual/sql-functions/date-time-functions/utc_timestamp",title:"utc_timestamp",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/date-time-functions/utc_timestamp.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/utc_timestamp",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/utc_timestamp",draft:!1,tags:[],version:"1.2",frontMatter:{title:"utc_timestamp",language:"en"},sidebar:"docs",previous:{title:"unix_timestamp",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/unix_timestamp"},next:{title:"to_date",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/to_date"}},l={},c=[{value:"utc_timestamp",id:"utc_timestamp",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(m,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"utc_timestamp"},"utc_timestamp"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"DATETIME UTC_TIMESTAMP()")),(0,i.yg)("p",null,'Returns the current UTC date and time in "YYYY-MM-DD HH: MM: SS" or'),(0,i.yg)("p",null,'A Value of "YYYYMMDDHMMSS" Format'),(0,i.yg)("p",null,"Depending on whether the function is used in a string or numeric context"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select utc_timestamp(),utc_timestamp() + 1;\n+---------------------+---------------------+\n| utc_timestamp()     | utc_timestamp() + 1 |\n+---------------------+---------------------+\n| 2019-07-10 12:31:18 |      20190710123119 |\n+---------------------+---------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"UTC_TIMESTAMP,UTC,TIMESTAMP\n")))}p.isMDXComponent=!0}}]);