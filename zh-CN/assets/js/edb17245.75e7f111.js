"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[54001],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,d=p["".concat(l,".").concat(f)]||p[f]||y[f]||s;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},494091:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const s={title:"ST_ASBINARY",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/spatial-functions/st-asbinary",id:"version-2.1/sql-manual/sql-functions/spatial-functions/st-asbinary",title:"ST_ASBINARY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/spatial-functions/st-asbinary.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st-asbinary",permalink:"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st-asbinary",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ST_ASBINARY",language:"zh-CN"},sidebar:"docs",previous:{title:"ST_LINEFROMTEXT,ST_LINESTRINGFROMTEXT",permalink:"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st-linefromtext"},next:{title:"ST_GEOMETRYFROMWKB,ST_GEOMFROMWKB",permalink:"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st-geometryfromwkb"}},l={},c=[{value:"ST_AsBinary",id:"st_asbinary",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"st_asbinary"},"ST_AsBinary"),(0,a.yg)("h3",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR ST_AsBinary(GEOMETRY geo)")),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u5c06\u4e00\u4e2a\u51e0\u4f55\u56fe\u5f62\u8f6c\u5316\u4e3a\u4e00\u4e2a\u6807\u51c6 WKB\uff08Well-known binary\uff09\u7684\u8868\u793a\u5f62\u5f0f\u3002"),(0,a.yg)("p",null,"\u76ee\u524d\u652f\u6301\u5bf9\u51e0\u4f55\u56fe\u5f62\u662f\uff1aPoint, LineString, Polygon\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select ST_AsBinary(st_point(24.7, 56.7));\n+----------------------------------------------+\n| st_asbinary(st_point(24.7, 56.7))            |\n+----------------------------------------------+\n| \\x01010000003333333333b338409a99999999594c40 |\n+----------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select ST_AsBinary(ST_GeometryFromText(\"LINESTRING (1 1, 2 2)\"));\n+--------------------------------------------------------------------------------------+\n| st_asbinary(st_geometryfromtext('LINESTRING (1 1, 2 2)'))                            |\n+--------------------------------------------------------------------------------------+\n| \\x010200000002000000000000000000f03f000000000000f03f00000000000000400000000000000040 |\n+--------------------------------------------------------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> select ST_AsBinary(ST_Polygon(\"POLYGON ((114.104486 22.547119,114.093758 22.547753,114.096504 22.532057,114.104229 22.539826,114.106203 22.542680,114.104486 22.547119))\"));\n+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| st_asbinary(st_polygon('POLYGON ((114.104486 22.547119,114.093758 22.547753,114.096504 22.532057,114.104229 22.539826,114.106203 22.542680,114.104486 22.547119))'))                                                         |\n+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| \\x01030000000100000006000000f3380ce6af865c402d05a4fd0f8c364041ef8d2100865c403049658a398c3640b9fb1c1f2d865c409d9b36e334883640de921cb0ab865c40cf876709328a36402cefaa07cc865c407b319413ed8a3640f3380ce6af865c402d05a4fd0f8c3640 |\n+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.02 sec)\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ST_ASBINARY,ST,ASBINARY"))}y.isMDXComponent=!0}}]);