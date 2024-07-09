"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52771],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var a=r(296540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},E="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),E=p(r),u=n,y=E["".concat(o,".").concat(u)]||E[u]||m[u]||i;return r?a.createElement(y,l(l({ref:t},c),{},{components:r})):a.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[E]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},505343:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(58168),n=(r(296540),r(15680));const i={title:"REFRESH-MATERIALIZED-VIEW",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-statements/Utility-Statements/REFRESH-MATERIALIZED-VIEW",id:"sql-manual/sql-statements/Utility-Statements/REFRESH-MATERIALIZED-VIEW",title:"REFRESH-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Utility-Statements/REFRESH-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-statements/Utility-Statements",slug:"/sql-manual/sql-statements/Utility-Statements/REFRESH-MATERIALIZED-VIEW",permalink:"/docs/dev/sql-manual/sql-statements/Utility-Statements/REFRESH-MATERIALIZED-VIEW",draft:!1,tags:[],version:"current",frontMatter:{title:"REFRESH-MATERIALIZED-VIEW",language:"en"},sidebar:"docs",previous:{title:"PAUSE-MATERIALIZED-VIEW",permalink:"/docs/dev/sql-manual/sql-statements/Utility-Statements/PAUSE-MATERIALIZED-VIEW"},next:{title:"RESUME-MATERIALIZED-VIEW",permalink:"/docs/dev/sql-manual/sql-statements/Utility-Statements/RESUME-MATERIALIZED-VIEW"}},o={},p=[{value:"REFRESH-MATERIALIZED-VIEW",id:"refresh-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},E="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(E,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"refresh-materialized-view"},"REFRESH-MATERIALIZED-VIEW"),(0,n.yg)("h3",{id:"name"},"Name"),(0,n.yg)("p",null,"REFRESH MATERIALIZED VIEW"),(0,n.yg)("h3",{id:"description"},"Description"),(0,n.yg)("p",null,"This statement is used to manually refresh the specified asynchronous materialized view"),(0,n.yg)("p",null,"syntax:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH MATERIALIZED VIEW mvName=multipartIdentifier (partitionSpec | COMPLETE | AUTO)\n")),(0,n.yg)("p",null,"Explanation:"),(0,n.yg)("p",null,"Asynchronous refresh of data for a materialized view"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"AUTO: The calculation will determine which partitions of the materialized view are not synchronized with the base table. (Currently, if the base table is an external table, it is considered to be always synchronized with the materialized view. Therefore, if the base table is an external table, it is necessary to specify ",(0,n.yg)("inlineCode",{parentName:"li"},"COMPLETE")," or designate the partitions to be refreshed), and then proceed to refresh the corresponding partitions accordingly."),(0,n.yg)("li",{parentName:"ul"},"COMPLETE: It will forcibly refresh all partitions of the materialized view without checking whether the partitions are synchronized with the base table."),(0,n.yg)("li",{parentName:"ul"},"partitionSpec: It will forcibly refresh the specified partitions without checking whether the partitions are synchronized with the base table.")),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Refresh materialized view mv1 (automatically calculate the partition to be refreshed)"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH MATERIALIZED VIEW mv1 AUTO;\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Refresh partition named p_19950801_19950901\u548cp_19950901_19951001"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH MATERIALIZED VIEW mv1 partitions(p_19950801_19950901,p_19950901_19951001);\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Force refresh of all materialized view data"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH MATERIALIZED VIEW mv1 complete;\n")))),(0,n.yg)("h3",{id:"keywords"},"Keywords"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"REFRESH, MATERIALIZED, VIEW\n")),(0,n.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);