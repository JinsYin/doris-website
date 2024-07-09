"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[76740],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(y,i(i({ref:n},p),{},{components:t})):a.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},318688:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(58168),r=(t(296540),t(15680));const o={title:"System Action",language:"en"},i=void 0,s={unversionedId:"admin-manual/fe/system-action",id:"version-2.1/admin-manual/fe/system-action",title:"System Action",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/fe/system-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/system-action",permalink:"/docs/admin-manual/fe/system-action",draft:!1,tags:[],version:"2.1",frontMatter:{title:"System Action",language:"en"},sidebar:"docs",previous:{title:"Session Action",permalink:"/docs/admin-manual/fe/session-action"},next:{title:"Colocate Meta Action",permalink:"/docs/admin-manual/fe/colocate-meta-action"}},l={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"system-action"},"System Action"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"GET /rest/v1/system\n")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"System Action is used for information about the Proc system built in Doris."),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"path")),(0,r.yg)("p",{parentName:"li"},"  Optional parameter, specify the path of proc"))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("p",null,"Take ",(0,r.yg)("inlineCode",{parentName:"p"},"/dbs/10003/10054/partitions/10053/10055")," as an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "href_columns": ["TabletId", "MetaUrl", "CompactionStatus"],\n        "column_names": ["TabletId", "ReplicaId", "BackendId", "SchemaHash", "Version", "VersionHash", "LstSuccessVersion", "LstSuccessVersionHash", "LstFailedVersion", "LstFailedVersionHash", "LstFailedTime", "DataSize", "RowCount", "State", "LstConsistencyCheckTime", "CheckVersion", "CheckVersionHash", "VersionCount", "PathHash", "MetaUrl", "CompactionStatus"],\n        "rows": [{\n            "SchemaHash": "1294206575",\n            "LstFailedTime": "\\\\N",\n            "LstFailedVersion": "-1",\n            "MetaUrl": "URL",\n            "__hrefPaths": ["http://192.168.100.100:8030/rest/v1/system?path=/dbs/10003/10054/partitions/10053/10055/10056", "http://192.168.100.100:8043/api/meta/header/10056", "http://192.168.100.100:8043/api/compaction/show?tablet_id=10056"],\n            "CheckVersionHash": "-1",\n            "ReplicaId": "10057",\n            "VersionHash": "4611804212003004639",\n            "LstConsistencyCheckTime": "\\\\N",\n            "LstSuccessVersionHash": "4611804212003004639",\n            "CheckVersion": "-1",\n            "Version": "6",\n            "VersionCount": "2",\n            "State": "NORMAL",\n            "BackendId": "10032",\n            "DataSize": "776",\n            "LstFailedVersionHash": "0",\n            "LstSuccessVersion": "6",\n            "CompactionStatus": "URL",\n            "TabletId": "10056",\n            "PathHash": "-3259732870068082628",\n            "RowCount": "21"\n        }]\n    },\n    "count": 1\n}\n')),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"column_names")," in the data part is the header information, and ",(0,r.yg)("inlineCode",{parentName:"p"},"href_columns")," indicates which columns in the table are hyperlink columns. Each element in the ",(0,r.yg)("inlineCode",{parentName:"p"},"rows")," array represents a row. Among them, ",(0,r.yg)("inlineCode",{parentName:"p"},"__hrefPaths")," is not the table data, but the link URL of the hyperlink column, which corresponds to the column in ",(0,r.yg)("inlineCode",{parentName:"p"},"href_columns")," one by one."))}m.isMDXComponent=!0}}]);