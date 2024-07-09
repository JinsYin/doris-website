"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[92529],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},191284:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(58168),r=(a(296540),a(15680));const o={title:"Show Data Action",language:"en"},i=void 0,l={unversionedId:"admin-manual/fe/show-data-action",id:"admin-manual/fe/show-data-action",title:"Show Data Action",description:"\x3c!--",source:"@site/docs/admin-manual/fe/show-data-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/show-data-action",permalink:"/docs/dev/admin-manual/fe/show-data-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Show Data Action",language:"en"},sidebar:"docs",previous:{title:"Set Config Action",permalink:"/docs/dev/admin-manual/fe/set-config-action"},next:{title:"Show Meta Info Action",permalink:"/docs/dev/admin-manual/fe/show-meta-info-action"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"show-data-action"},"Show Data Action"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /api/show_data")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to get the total data volume of the cluster or the data volume of the specified database. Unit byte."),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"db")),(0,r.yg)("p",{parentName:"li"},"  Optional. If specified, get the data volume of the specified database."))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Specify the amount of data in the database."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "default_cluster:db1": 381\n    },\n    "count": 0\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Total data"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "__total_size": 381\n    },\n    "count": 0\n}\n')))),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Get the data volume of the specified database"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/show_data?db=db1\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "default_cluster:db1": 381\n    },\n    "count": 0\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Get the total data volume of the cluster"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/show_data\n    \nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "__total_size": 381\n    },\n    "count": 0\n}\n')))))}u.isMDXComponent=!0}}]);