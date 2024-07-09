"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[13755],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>f});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(i,".").concat(d)]||u[d]||y[d]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},748152:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(58168),a=(r(296540),r(15680));const l={title:"DATE",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-types/Data-Types/DATE",id:"sql-manual/sql-types/Data-Types/DATE",title:"DATE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-types/Data-Types/DATE.md",sourceDirName:"sql-manual/sql-types/Data-Types",slug:"/sql-manual/sql-types/Data-Types/DATE",permalink:"/docs/dev/sql-manual/sql-types/Data-Types/DATE",draft:!1,tags:[],version:"current",frontMatter:{title:"DATE",language:"en"},sidebar:"docs",previous:{title:"DECIMAL",permalink:"/docs/dev/sql-manual/sql-types/Data-Types/DECIMAL"},next:{title:"DATETIME",permalink:"/docs/dev/sql-manual/sql-types/Data-Types/DATETIME"}},i={},p=[{value:"DATE",id:"date",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"date"},"DATE"),(0,a.yg)("p",null,"DATE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,"date\nDate type, the current range of values is ","['0000-01-01','9999-12-31']",", and the default print form is 'yyyy-MM-dd'."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SELECT DATE('2003-12-31 01:02:03');\n+-----------------------------+\n| DATE('2003-12-31 01:02:03') |\n+-----------------------------+\n| 2003-12-31                  |\n+-----------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"DATE"))}y.isMDXComponent=!0}}]);