"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[86626],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},497718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=n(58168),i=(n(296540),n(15680));const l={title:"month_ceil",language:"zh-CN"},o=void 0,a={unversionedId:"sql-manual/sql-functions/date-time-functions/month_ceil",id:"version-1.2/sql-manual/sql-functions/date-time-functions/month_ceil",title:"month_ceil",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/date-time-functions/month_ceil.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/month_ceil",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/month_ceil",draft:!1,tags:[],version:"1.2",frontMatter:{title:"month_ceil",language:"zh-CN"},sidebar:"docs",previous:{title:"day_ceil",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/day_ceil"},next:{title:"year_ceil",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/year_ceil"}},c={},s=[{value:"month_ceil",id:"month_ceil",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"month_ceil"},"month_ceil"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"DATETIME MONTH_CEIL(DATETIME datetime)\nDATETIME MONTH_CEIL(DATETIME datetime, DATETIME origin)\nDATETIME MONTH_CEIL(DATETIME datetime, INT period)\nDATETIME MONTH_CEIL(DATETIME datetime, INT period, DATETIME origin)\n")),(0,i.yg)("p",null,"\u5c06\u65e5\u671f\u8f6c\u5316\u4e3a\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5468\u671f\u7684\u6700\u8fd1\u4e0a\u53d6\u6574\u65f6\u523b\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"datetime\uff1a\u53c2\u6570\u662f\u5408\u6cd5\u7684\u65e5\u671f\u8868\u8fbe\u5f0f\u3002"),(0,i.yg)("li",{parentName:"ul"},"period\uff1a\u53c2\u6570\u662f\u6307\u5b9a\u6bcf\u4e2a\u5468\u671f\u6709\u51e0\u4e2a\u6708\u7ec4\u6210\u3002"),(0,i.yg)("li",{parentName:"ul"},"origin\uff1a\u5f00\u59cb\u7684\u65f6\u95f4\u8d77\u70b9\uff0c\u5982\u679c\u4e0d\u586b\uff0c\u9ed8\u8ba4\u662f 0001-01-01T00:00:00\u3002")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select month_ceil(\"2023-07-13 22:28:18\", 5);\n+-------------------------------------------------------------+\n| month_ceil(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+-------------------------------------------------------------+\n| 2023-10-01 00:00:00                                         |\n+-------------------------------------------------------------+\n1 row in set (0.02 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"MONTH_CEIL, MONTH, CEIL\n")))}m.isMDXComponent=!0}}]);