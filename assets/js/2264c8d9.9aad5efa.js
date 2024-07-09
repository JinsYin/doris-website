"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[69257],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,y=u["".concat(s,".").concat(d)]||u[d]||g[d]||a;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},673916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(58168),o=(n(296540),n(15680));const a={title:"Log Action",language:"en"},l=void 0,i={unversionedId:"admin-manual/http-actions/fe/log-action",id:"version-1.2/admin-manual/http-actions/fe/log-action",title:"Log Action",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/admin-manual/http-actions/fe/log-action.md",sourceDirName:"admin-manual/http-actions/fe",slug:"/admin-manual/http-actions/fe/log-action",permalink:"/docs/1.2/admin-manual/http-actions/fe/log-action",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Log Action",language:"en"},sidebar:"docs",previous:{title:"Help Action",permalink:"/docs/1.2/admin-manual/http-actions/fe/help-action"},next:{title:"Login Action",permalink:"/docs/1.2/admin-manual/http-actions/fe/login-action"}},s={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],c={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"log-action"},"Log Action"),(0,o.yg)("h2",{id:"request"},"Request"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"GET /rest/v1/log\n")),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"GET is used to obtain the latest part of Doris's WARNING log, and the POST method is used to dynamically set the log level of FE."),(0,o.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,o.yg)("p",null,"None"),(0,o.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"add_verbose")),(0,o.yg)("p",{parentName:"li"},"  Optional parameters for the POST method. Enable the DEBUG level log of the specified package.\n")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"del_verbose")),(0,o.yg)("p",{parentName:"li"},"  Optional parameters for the POST method. Turn off the DEBUG level log of the specified package.\n"))),(0,o.yg)("h2",{id:"request-body"},"Request body"),(0,o.yg)("p",null,"None"),(0,o.yg)("h2",{id:"response"},"Response"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'GET /rest/v1/log\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "LogContents": {\n            "logPath": "/home/disk1/cmy/git/doris/core-for-ui/output/fe/log/fe.warn.log",\n            "log": "<pre>2020-08-26 15:54:30,081 WARN (UNKNOWN 10.81.85.89_9213_1597652404352(-1)|1) [Catalog.notifyNewFETypeTransfer():2356] notify new FE type transfer: UNKNOWN</br>2020-08-26 15:54:32,089 WARN (RepNode 10.81.85.89_9213_1597652404352(-1)|61) [Catalog.notifyNewFETypeTransfer():2356] notify new FE type transfer: MASTER</br>2020-08-26 15:54:35,121 WARN (stateListener|73) [Catalog.replayJournal():2510] replay journal cost too much time: 2975 replayedJournalId: 232383</br>2020-08-26 15:54:48,117 WARN (leaderCheckpointer|75) [Catalog.replayJournal():2510] replay journal cost too much time: 2812 replayedJournalId: 232383</br></pre>",\n            "showingLast": "603 bytes of log"\n        },\n        "LogConfiguration": {\n            "VerboseNames": "org",\n            "AuditNames": "slow_query,query",\n            "Level": "INFO"\n        }\n    },\n    "count": 0\n}  \n')),(0,o.yg)("p",null,"Among them, ",(0,o.yg)("inlineCode",{parentName:"p"},"data.LogContents.log")," means the log content in the latest part of ",(0,o.yg)("inlineCode",{parentName:"p"},"fe.warn.log"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'POST /rest/v1/log?add_verbose=org\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "LogConfiguration": {\n            "VerboseNames": "org",\n            "AuditNames": "slow_query,query",\n            "Level": "INFO"\n        }\n    },\n    "count": 0\n}\n')))}g.isMDXComponent=!0}}]);