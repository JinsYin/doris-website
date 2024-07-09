"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[15429],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>d});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},929962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(58168),o=(n(296540),n(15680));const i={title:"minute_floor",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/date-time-functions/minute_floor",id:"sql-manual/sql-functions/date-time-functions/minute_floor",title:"minute_floor",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/minute_floor.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/minute_floor",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/minute_floor",draft:!1,tags:[],version:"current",frontMatter:{title:"minute_floor",language:"zh-CN"},sidebar:"docs",previous:{title:"second_floor",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/second_floor"},next:{title:"hour_floor",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/hour_floor"}},u={},c=[{value:"minute_floor",id:"minute_floor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"minute_floor"},"minute_floor"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"DATETIME MINUTE_FLOOR(DATETIME datetime)\nDATETIME MINUTE_FLOOR(DATETIME datetime, DATETIME origin)\nDATETIME MINUTE_FLOOR(DATETIME datetime, INT period)\nDATETIME MINUTE_FLOOR(DATETIME datetime, INT period, DATETIME origin)\n")),(0,o.yg)("p",null,"\u5c06\u65e5\u671f\u8f6c\u5316\u4e3a\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5468\u671f\u7684\u6700\u8fd1\u4e0b\u53d6\u6574\u65f6\u523b\u3002"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"datetime\uff1a\u53c2\u6570\u662f\u5408\u6cd5\u7684\u65e5\u671f\u8868\u8fbe\u5f0f\u3002"),(0,o.yg)("li",{parentName:"ul"},"period\uff1a\u53c2\u6570\u662f\u6307\u5b9a\u6bcf\u4e2a\u5468\u671f\u6709\u591a\u5c11\u5929\u7ec4\u6210\u3002"),(0,o.yg)("li",{parentName:"ul"},"origin\uff1a\u5f00\u59cb\u7684\u65f6\u95f4\u8d77\u70b9\uff0c\u5982\u679c\u4e0d\u586b\uff0c\u9ed8\u8ba4\u662f 0001-01-01T00:00:00\u3002")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select minute_floor(\"2023-07-13 22:28:18\", 5);\n+---------------------------------------------------------------+\n| minute_floor(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+---------------------------------------------------------------+\n| 2023-07-13 22:25:00                                           |\n+---------------------------------------------------------------+\n1 row in set (0.06 sec)\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MINUTE_FLOOR, MINUTE, FLOOR\n")),(0,o.yg)("h3",{id:"best-practice"},"Best Practice"),(0,o.yg)("p",null,"\u8fd8\u53ef\u53c2\u9605 ",(0,o.yg)("a",{parentName:"p",href:"./date_floor"},"date_floor")))}f.isMDXComponent=!0}}]);