"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[61889],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>f});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},621333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const o={title:"STR_TO_DATE",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/str-to-date",id:"sql-manual/sql-functions/date-time-functions/str-to-date",title:"STR_TO_DATE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/str-to-date.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/str-to-date",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/str-to-date",draft:!1,tags:[],version:"current",frontMatter:{title:"STR_TO_DATE",language:"zh-CN"},sidebar:"docs",previous:{title:"MAKEDATE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/makedate"},next:{title:"TIME_ROUND",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/time-round"}},i={},c=[{value:"str_to_date",id:"str_to_date",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"str_to_date"},"str_to_date"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DATETIME STR_TO_DATE(VARCHAR str, VARCHAR format)")),(0,a.yg)("p",null,"\u901a\u8fc7format\u6307\u5b9a\u7684\u65b9\u5f0f\u5c06str\u8f6c\u5316\u4e3aDATE\u7c7b\u578b\uff0c\u5982\u679c\u8f6c\u5316\u7ed3\u679c\u4e0d\u5bf9\u8fd4\u56deNULL\u3002\u6ce8\u610fformat\u6307\u5b9a\u7684\u662f\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u683c\u5f0f\u3002"),(0,a.yg)("p",null,"\u652f\u6301",(0,a.yg)("a",{parentName:"p",href:"./date-format"},"date_format"),"\u4e2d\u7684\u6240\u6709 format \u683c\u5f0f\uff0c\u6b64\u5916\u5bf9\u4e8e '%Y' \u548c '%Y-%m'\uff0c\u652f\u6301\u8865\u9f50\u65e5\u671f\u5269\u4f59\u90e8\u5206\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select str_to_date('2014-12-21 12:34:56', '%Y-%m-%d %H:%i:%s');\n+---------------------------------------------------------+\n| str_to_date('2014-12-21 12:34:56', '%Y-%m-%d %H:%i:%s') |\n+---------------------------------------------------------+\n| 2014-12-21 12:34:56                                     |\n+---------------------------------------------------------+\n\nmysql> select str_to_date('2014-12-21 12:34%3A56', '%Y-%m-%d %H:%i%%3A%s');\n+--------------------------------------------------------------+\n| str_to_date('2014-12-21 12:34%3A56', '%Y-%m-%d %H:%i%%3A%s') |\n+--------------------------------------------------------------+\n| 2014-12-21 12:34:56                                          |\n+--------------------------------------------------------------+\n\nmysql> select str_to_date('200442 Monday', '%X%V %W');\n+-----------------------------------------+\n| str_to_date('200442 Monday', '%X%V %W') |\n+-----------------------------------------+\n| 2004-10-18                              |\n+-----------------------------------------+\n\nmysql> select str_to_date(\"2020-09-01\", \"%Y-%m-%d %H:%i:%s\");\n+------------------------------------------------+\n| str_to_date('2020-09-01', '%Y-%m-%d %H:%i:%s') |\n+------------------------------------------------+\n| 2020-09-01 00:00:00                            |\n+------------------------------------------------+\n\nmysql> select str_to_date('2023','%Y');\n+---------------------------+\n| str_to_date('2023', '%Y') |\n+---------------------------+\n| 2023-01-01                |\n+---------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"STR_TO_DATE,STR,TO,DATE\n")))}p.isMDXComponent=!0}}]);