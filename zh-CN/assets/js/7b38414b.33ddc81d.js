"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[39262],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},282708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const i={title:"WINDOW_FUNCTION_FIRST_VALUE",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/window-functions/window-function-first-value",id:"version-2.1/sql-manual/sql-functions/window-functions/window-function-first-value",title:"WINDOW_FUNCTION_FIRST_VALUE",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/window-functions/window-function-first-value.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function-first-value",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/window-function-first-value",draft:!1,tags:[],version:"2.1",frontMatter:{title:"WINDOW_FUNCTION_FIRST_VALUE",language:"zh-CN"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_CUME_DIST",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/window-function-cume-dist"},next:{title:"WINDOW_FUNCTION_LAST_VALUE",permalink:"/zh-CN/docs/sql-manual/sql-functions/window-functions/window-function-last-value"}},s={},c=[{value:"WINDOW FUNCTION FIRST_VALUE",id:"window-function-first_value",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"window-function-first_value"},"WINDOW FUNCTION FIRST_VALUE"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"FIRST_VALUE() \u8fd4\u56de\u7a97\u53e3\u8303\u56f4\u5185\u7684\u7b2c\u4e00\u4e2a\u503c\uff0c ignore_null \u51b3\u5b9a\u662f\u5426\u5ffd\u7565 null \u503c\uff0c\u53c2\u6570 ignore_null \u9ed8\u8ba4\u503c\u4e3a false \u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"FIRST_VALUE(expr[, ignore_null]) OVER(partition_by_clause order_by_clause [window_clause])\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("p",null,"\u6211\u4eec\u6709\u5982\u4e0b\u6570\u636e"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"}," select id, myday, time_col, state from t;\n \n | id   | myday | time_col    | state |\n |------|-------|-------------|-------|\n |    3 |    21 | 04-21-13    |     3 |\n |    7 |    22 | 04-22-10-24 |  NULL |\n |    8 |    22 | 04-22-10-25 |     9 |\n |   10 |    23 | 04-23-12    |    10 |\n |    4 |    22 | 04-22-10-21 |  NULL |\n |    9 |    23 | 04-23-11    |  NULL |\n |    1 |    21 | 04-21-11    |  NULL |\n |    5 |    22 | 04-22-10-22 |  NULL |\n |   12 |    24 | 02-24-10-21 |  NULL |\n |    2 |    21 | 04-21-12    |     2 |\n |    6 |    22 | 04-22-10-23 |     5 |\n |   11 |    23 | 04-23-13    |  NULL |\n")),(0,o.yg)("p",null,"\u4f7f\u7528 FIRST_VALUE()\uff0c\u6839\u636e myday \u5206\u7ec4\uff0c\u8fd4\u56de\u6bcf\u4e2a\u5206\u7ec4\u4e2d\u7b2c\u4e00\u4e2a state \u7684\u503c\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"select * , \nfirst_value(`state`, 1) over(partition by `myday` order by `time_col` rows between 1 preceding and 1 following) as ignore_null,\nfirst_value(`state`, 0) over(partition by `myday` order by `time_col` rows between 1 preceding and 1 following) as not_ignore_null,\nfirst_value(`state`) over(partition by `myday` order by `time_col` rows between 1 preceding and 1 following) as ignore_null_default\nfrom t order by `id`, `myday`, `time_col`;\n\n| id   | myday | time_col    | state | ignore_null | not_ignore_null | ignore_null_default |\n|------|-------|-------------|-------|-------------|-----------------|---------------------|\n|    1 |    21 | 04-21-11    |  NULL |           2 |            NULL |                NULL |\n|    2 |    21 | 04-21-12    |     2 |           2 |            NULL |                NULL |\n|    3 |    21 | 04-21-13    |     3 |           2 |               2 |                   2 |\n|    4 |    22 | 04-22-10-21 |  NULL |        NULL |            NULL |                NULL |\n|    5 |    22 | 04-22-10-22 |  NULL |           5 |            NULL |                NULL |\n|    6 |    22 | 04-22-10-23 |     5 |           5 |            NULL |                NULL |\n|    7 |    22 | 04-22-10-24 |  NULL |           5 |               5 |                   5 |\n|    8 |    22 | 04-22-10-25 |     9 |           9 |            NULL |                NULL |\n|    9 |    23 | 04-23-11    |  NULL |          10 |            NULL |                NULL |\n|   10 |    23 | 04-23-12    |    10 |          10 |            NULL |                NULL |\n|   11 |    23 | 04-23-13    |  NULL |          10 |              10 |                  10 |\n|   12 |    24 | 02-24-10-21 |  NULL |        NULL |            NULL |                NULL |\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,FIRST_VALUE\n")))}p.isMDXComponent=!0}}]);