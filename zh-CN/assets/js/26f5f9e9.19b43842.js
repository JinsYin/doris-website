"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[58325],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},298941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const i={title:"BITMAP_INTERSECT",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-intersect",id:"sql-manual/sql-functions/bitmap-functions/bitmap-intersect",title:"BITMAP_INTERSECT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/bitmap-functions/bitmap-intersect.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-intersect",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-intersect",draft:!1,tags:[],version:"current",frontMatter:{title:"BITMAP_INTERSECT",language:"zh-CN"},sidebar:"docs",previous:{title:"INTERSECT_COUNT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/intersect-count"},next:{title:"BITMAP_HASH64",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-hash64"}},s={},c=[{value:"bitmap_intersect",id:"bitmap_intersect",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap_intersect"},"bitmap_intersect"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"\u805a\u5408\u51fd\u6570\uff0c\u7528\u4e8e\u8ba1\u7b97\u5206\u7ec4\u540e\u7684 bitmap \u4ea4\u96c6\u3002\u5e38\u89c1\u4f7f\u7528\u573a\u666f\u5982\uff1a\u8ba1\u7b97\u7528\u6237\u7559\u5b58\u7387\u3002"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_INTERSECT(BITMAP value)")),(0,a.yg)("p",null,"\u8f93\u5165\u4e00\u7ec4 bitmap \u503c\uff0c\u6c42\u8fd9\u4e00\u7ec4 bitmap \u503c\u7684\u4ea4\u96c6\uff0c\u5e76\u8fd4\u56de\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("p",null,"\u8868\u7ed3\u6784"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"KeysType: AGG_KEY\nColumns: tag varchar, date datetime, user_id bitmap bitmap_union\n\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u6c42\u4eca\u5929\u548c\u6628\u5929\u4e0d\u540c tag \u4e0b\u7684\u7528\u6237\u7559\u5b58\nmysql> select tag, bitmap_intersect(user_id) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n")),(0,a.yg)("p",null,"\u548c bitmap_to_string \u51fd\u6570\u7ec4\u5408\u4f7f\u7528\u53ef\u4ee5\u83b7\u53d6\u4ea4\u96c6\u7684\u5177\u4f53\u6570\u636e"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u6c42\u4eca\u5929\u548c\u6628\u5929\u4e0d\u540c tag \u4e0b\u7559\u5b58\u7684\u7528\u6237\u90fd\u662f\u54ea\u4e9b\nmysql> select tag, bitmap_to_string(bitmap_intersect(user_id)) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BITMAP_INTERSECT, BITMAP\n")))}m.isMDXComponent=!0}}]);