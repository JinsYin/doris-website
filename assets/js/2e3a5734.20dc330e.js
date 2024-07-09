"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[15749],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>f});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},542494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(58168),o=(n(296540),n(15680));const a={title:"STR_TO_DATE",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/str-to-date",id:"version-2.0/sql-manual/sql-functions/date-time-functions/str-to-date",title:"STR_TO_DATE",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/str-to-date.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/str-to-date",permalink:"/docs/2.0/sql-manual/sql-functions/date-time-functions/str-to-date",draft:!1,tags:[],version:"2.0",frontMatter:{title:"STR_TO_DATE",language:"en"},sidebar:"docs",previous:{title:"MAKEDATE",permalink:"/docs/2.0/sql-manual/sql-functions/date-time-functions/makedate"},next:{title:"TIME_ROUND",permalink:"/docs/2.0/sql-manual/sql-functions/date-time-functions/time-round"}},l={},c=[{value:"Str_to_date",id:"str_to_date",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"str_to_date"},"Str_to_date"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DATETIME STR TWO DATES (VARCHAR STR, VARCHAR format)")),(0,o.yg)("p",null,"Convert STR to DATE type by format specified, if the conversion result does not return NULL. Note that the 'format' parameter specifies the format of the first parameter."),(0,o.yg)("p",null,"All formats in ",(0,o.yg)("a",{parentName:"p",href:"./date-format"},"date_format")," are supported. "),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Since Doris 2.0.5:"),(0,o.yg)("p",{parentName:"blockquote"},"Support auto completing the remainder of date part for '%Y' and '%Y-%m'.")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select str_to_date('2014-12-21 12:34:56', '%Y-%m-%d %H:%i:%s');\n+---------------------------------------------------------+\n| str_to_date('2014-12-21 12:34:56', '%Y-%m-%d %H:%i:%s') |\n+---------------------------------------------------------+\n| 2014-12-21 12:34:56                                     |\n+---------------------------------------------------------+\n\nmysql> select str_to_date('2014-12-21 12:34%3A56', '%Y-%m-%d %H:%i%%3A%s');\n+--------------------------------------------------------------+\n| str_to_date('2014-12-21 12:34%3A56', '%Y-%m-%d %H:%i%%3A%s') |\n+--------------------------------------------------------------+\n| 2014-12-21 12:34:56                                          |\n+--------------------------------------------------------------+\n\nmysql> select str_to_date('200442 Monday', '%X%V %W');\n+-----------------------------------------+\n| str_to_date('200442 Monday', '%X%V %W') |\n+-----------------------------------------+\n| 2004-10-18                              |\n+-----------------------------------------+\n\nmysql> select str_to_date(\"2020-09-01\", \"%Y-%m-%d %H:%i:%s\");\n+------------------------------------------------+\n| str_to_date('2020-09-01', '%Y-%m-%d %H:%i:%s') |\n+------------------------------------------------+\n| 2020-09-01 00:00:00                            |\n+------------------------------------------------+\n\nmysql> select str_to_date('2023','%Y');\n+---------------------------+\n| str_to_date('2023', '%Y') |\n+---------------------------+\n| 2023-01-01                |\n+---------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"STR_TO_DATE,STR,TO,DATE\n")))}p.isMDXComponent=!0}}]);