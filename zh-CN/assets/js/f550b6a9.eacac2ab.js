"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[21914],{15680:(n,e,t)=>{t.d(e,{xA:()=>p,yg:()=>d});var r=t(296540);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},s=Object.keys(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var o=r.createContext({}),c=function(n){var e=r.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=c(n.components);return r.createElement(o.Provider,{value:e},n.children)},u="mdxType",y={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,s=n.originalType,o=n.parentName,p=a(n,["components","mdxType","originalType","parentName"]),u=c(t),g=i,d=u["".concat(o,".").concat(g)]||u[g]||y[g]||s;return t?r.createElement(d,l(l({ref:e},p),{},{components:t})):r.createElement(d,l({ref:e},p))}));function d(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var s=t.length,l=new Array(s);l[0]=g;var a={};for(var o in e)hasOwnProperty.call(e,o)&&(a[o]=e[o]);a.originalType=n,a[u]="string"==typeof n?n:i,l[1]=a;for(var c=2;c<s;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},19954:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(58168),i=(t(296540),t(15680));const s={title:"SPLIT_BY_STRING",language:"zh-CN"},l=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/split-by-string",id:"sql-manual/sql-functions/string-functions/split-by-string",title:"SPLIT_BY_STRING",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/split-by-string.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/split-by-string",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/split-by-string",draft:!1,tags:[],version:"current",frontMatter:{title:"SPLIT_BY_STRING",language:"zh-CN"},sidebar:"docs",previous:{title:"SPLIT_PART",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/split-part"},next:{title:"SUBSTRING_INDEX",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/substring-index"}},o={},c=[{value:"split_by_string",id:"split_by_string",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value(s)",id:"returned-values",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function y(n){let{components:e,...t}=n;return(0,i.yg)(u,(0,r.A)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"split_by_string"},"split_by_string"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"ARRAY<STRING> split_by_string(STRING s, STRING separator)"),"\n\u5c06\u5b57\u7b26\u4e32\u62c6\u5206\u4e3a\u7531\u5b57\u7b26\u4e32\u5206\u9694\u7684\u5b50\u5b57\u7b26\u4e32\u3002\u5b83\u4f7f\u7528\u591a\u4e2a\u5b57\u7b26\u7684\u5e38\u91cf\u5b57\u7b26\u4e32\u5206\u9694\u7b26\u4f5c\u4e3a\u5206\u9694\u7b26\u3002\u5982\u679c\u5b57\u7b26\u4e32\u5206\u9694\u7b26\u4e3a\u7a7a\uff0c\u5b83\u5c06\u5b57\u7b26\u4e32\u62c6\u5206\u4e3a\u5355\u4e2a\u5b57\u7b26\u6570\u7ec4\u3002"),(0,i.yg)("h4",{id:"arguments"},"Arguments"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"separator")," \u2014 \u5206\u9694\u7b26\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u662f\u7528\u6765\u5206\u5272\u7684\u6807\u5fd7\u5b57\u7b26. \u7c7b\u578b: ",(0,i.yg)("inlineCode",{parentName:"p"},"String")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"s")," \u2014 \u9700\u8981\u5206\u5272\u7684\u5b57\u7b26\u4e32. \u7c7b\u578b: ",(0,i.yg)("inlineCode",{parentName:"p"},"String")),(0,i.yg)("h4",{id:"returned-values"},"Returned value(s)"),(0,i.yg)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u5b50\u5b57\u7b26\u4e32\u7684\u6570\u7ec4. \u4ee5\u4e0b\u60c5\u51b5\u4f1a\u8fd4\u56de\u7a7a\u7684\u5b50\u5b57\u7b26\u4e32:"),(0,i.yg)("p",null,"\u9700\u8981\u5206\u5272\u7684\u5b57\u7b26\u4e32\u7684\u9996\u5c3e\u662f\u5206\u9694\u7b26;"),(0,i.yg)("p",null,"\u591a\u4e2a\u5206\u9694\u7b26\u8fde\u7eed\u51fa\u73b0;"),(0,i.yg)("p",null,"\u9700\u8981\u5206\u5272\u7684\u5b57\u7b26\u4e32\u4e3a\u7a7a\uff0c\u800c\u5206\u9694\u7b26\u4e0d\u4e3a\u7a7a."),(0,i.yg)("p",null,"Type: ",(0,i.yg)("inlineCode",{parentName:"p"},"Array(String)")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"select split_by_string('a1b1c1d','1');\n+---------------------------------+\n| split_by_string('a1b1c1d', '1') |\n+---------------------------------+\n| ['a', 'b', 'c', 'd']            |\n+---------------------------------+\n\nselect split_by_string(',,a,b,c,',',');\n+----------------------------------+\n| split_by_string(',,a,b,c,', ',') |\n+----------------------------------+\n| ['', '', 'a', 'b', 'c', '']      |\n+----------------------------------+\n\nSELECT split_by_string(NULL,',');\n+----------------------------+\n| split_by_string(NULL, ',') |\n+----------------------------+\n| NULL                       |\n+----------------------------+\n\nselect split_by_string('a,b,c,abcde',',');\n+-------------------------------------+\n| split_by_string('a,b,c,abcde', ',') |\n+-------------------------------------+\n| ['a', 'b', 'c', 'abcde']            |\n+-------------------------------------+\n\nselect split_by_string('1,,2,3,,4,5,,abcde', ',,');\n+---------------------------------------------+\n| split_by_string('1,,2,3,,4,5,,abcde', ',,') |\n+---------------------------------------------+\n| ['1', '2,3', '4,5', 'abcde']                |\n+---------------------------------------------+\n\nselect split_by_string(',,,,',',,');\n+-------------------------------+\n| split_by_string(',,,,', ',,') |\n+-------------------------------+\n| ['', '', '']                  |\n+-------------------------------+\n\nselect split_by_string(',,a,,b,,c,,',',,');\n+--------------------------------------+\n| split_by_string(',,a,,b,,c,,', ',,') |\n+--------------------------------------+\n| ['', 'a', 'b', 'c', '']              |\n+--------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("p",null,"SPLIT_BY_STRING,SPLIT"))}y.isMDXComponent=!0}}]);