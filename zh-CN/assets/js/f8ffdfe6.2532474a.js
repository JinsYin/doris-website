"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[59226],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>d});var r=a(296540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=r.createContext({}),c=function(e){var n=r.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),y=t,d=u["".concat(i,".").concat(y)]||u[y]||m[y]||l;return a?r.createElement(d,s(s({ref:n},p),{},{components:a})):r.createElement(d,s({ref:n},p))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,s=new Array(l);s[0]=y;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[u]="string"==typeof e?e:t,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},896150:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(58168),t=(a(296540),a(15680));const l={title:"\u5bfc\u5165\u5206\u6790",language:"zh-CN"},s=void 0,o={unversionedId:"query/query-analysis/import-analysis",id:"query/query-analysis/import-analysis",title:"\u5bfc\u5165\u5206\u6790",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query/query-analysis/import-analysis.md",sourceDirName:"query/query-analysis",slug:"/query/query-analysis/import-analysis",permalink:"/zh-CN/docs/dev/query/query-analysis/import-analysis",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5bfc\u5165\u5206\u6790",language:"zh-CN"},sidebar:"docs",previous:{title:"\u67e5\u8be2\u5206\u6790",permalink:"/zh-CN/docs/dev/query/query-analysis/"},next:{title:"Java UDF",permalink:"/zh-CN/docs/dev/query/udf/java-user-defined-function"}},i={},c=[{value:"\u5bfc\u5165\u8ba1\u5212\u6811",id:"\u5bfc\u5165\u8ba1\u5212\u6811",level:2},{value:"\u67e5\u770b\u5bfc\u5165 Profile",id:"\u67e5\u770b\u5bfc\u5165-profile",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...a}=e;return(0,t.yg)(u,(0,r.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Doris \u63d0\u4f9b\u4e86\u4e00\u4e2a\u56fe\u5f62\u5316\u7684\u547d\u4ee4\u4ee5\u5e2e\u52a9\u7528\u6237\u66f4\u65b9\u4fbf\u7684\u5206\u6790\u4e00\u4e2a\u5177\u4f53\u7684\u5bfc\u5165\u3002\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u8be5\u529f\u80fd\u3002"),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"\u8be5\u529f\u80fd\u76ee\u524d\u4ec5\u9488\u5bf9 Broker Load \u7684\u5206\u6790\u3002")),(0,t.yg)("h2",{id:"\u5bfc\u5165\u8ba1\u5212\u6811"},"\u5bfc\u5165\u8ba1\u5212\u6811"),(0,t.yg)("p",null,"\u5982\u679c\u4f60\u5bf9 Doris \u7684\u67e5\u8be2\u8ba1\u5212\u6811\u8fd8\u4e0d\u592a\u4e86\u89e3\uff0c\u8bf7\u5148\u9605\u8bfb\u4e4b\u524d\u7684\u6587\u7ae0 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/query/query-analysis/"},"Doris \u67e5\u8be2\u5206\u6790"),"\u3002"),(0,t.yg)("p",null,"\u4e00\u4e2a ",(0,t.yg)("a",{parentName:"p",href:"../../data-operate/import/broker-load-manual"},"Broker Load")," \u8bf7\u6c42\u7684\u6267\u884c\u8fc7\u7a0b\uff0c\u4e5f\u662f\u57fa\u4e8e Doris \u7684\u67e5\u8be2\u6846\u67b6\u7684\u3002\u4e00\u4e2a Broker Load \u4f5c\u4e1a\u4f1a\u6839\u636e\u5bfc\u5165\u8bf7\u6c42\u4e2d DATA INFILE \u5b50\u53e5\u7684\u4e2a\u6570\u5c06\u4f5c\u4e1a\u62c6\u5206\u6210\u591a\u4e2a\u5b50\u4efb\u52a1\u3002\u6bcf\u4e2a\u5b50\u4efb\u52a1\u53ef\u4ee5\u89c6\u4e3a\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5bfc\u5165\u6267\u884c\u8ba1\u5212\u3002\u4e00\u4e2a\u5bfc\u5165\u8ba1\u5212\u7684\u7ec4\u6210\u53ea\u4f1a\u6709\u4e00\u4e2a Fragment\uff0c\u5176\u7ec4\u6210\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502OlapTableSink\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n        \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502BrokerScanNode\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,t.yg)("p",null,"BrokerScanNode \u4e3b\u8981\u8d1f\u8d23\u53bb\u8bfb\u6e90\u6570\u636e\u5e76\u53d1\u9001\u7ed9 OlapTableSink\uff0c\u800c OlapTableSink \u8d1f\u8d23\u5c06\u6570\u636e\u6309\u7167\u5206\u533a\u5206\u6876\u89c4\u5219\u53d1\u9001\u5230\u5bf9\u5e94\u7684\u8282\u70b9\uff0c\u7531\u5bf9\u5e94\u7684\u8282\u70b9\u8d1f\u8d23\u5b9e\u9645\u7684\u6570\u636e\u5199\u5165\u3002"),(0,t.yg)("p",null,"\u800c\u8fd9\u4e2a\u5bfc\u5165\u6267\u884c\u8ba1\u5212\u7684 Fragment \u4f1a\u6839\u636e\u5bfc\u5165\u6e90\u6587\u4ef6\u7684\u6570\u91cf\u3001BE \u8282\u70b9\u7684\u6570\u91cf\u7b49\u53c2\u6570\uff0c\u5212\u5206\u6210\u4e00\u4e2a\u6216\u591a\u4e2a Instance\u3002\u6bcf\u4e2a Instance \u8d1f\u8d23\u4e00\u90e8\u5206\u6570\u636e\u5bfc\u5165\u3002"),(0,t.yg)("p",null,"\u591a\u4e2a\u5b50\u4efb\u52a1\u7684\u6267\u884c\u8ba1\u5212\u662f\u5e76\u53d1\u6267\u884c\u7684\uff0c\u800c\u4e00\u4e2a\u6267\u884c\u8ba1\u5212\u7684\u591a\u4e2a Instance \u4e5f\u662f\u5e76\u884c\u6267\u884c\u3002"),(0,t.yg)("h2",{id:"\u67e5\u770b\u5bfc\u5165-profile"},"\u67e5\u770b\u5bfc\u5165 Profile"),(0,t.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6253\u5f00\u4f1a\u8bdd\u53d8\u91cf ",(0,t.yg)("inlineCode",{parentName:"p"},"is_report_success"),"\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SET is_report_success=true;\n")),(0,t.yg)("p",null,"\u7136\u540e\u63d0\u4ea4\u4e00\u4e2a Broker Load \u5bfc\u5165\u8bf7\u6c42\uff0c\u5e76\u7b49\u5230\u5bfc\u5165\u6267\u884c\u5b8c\u6210\u3002Doris \u4f1a\u4ea7\u751f\u8be5\u5bfc\u5165\u7684\u4e00\u4e2a Profile\u3002Profile \u5305\u542b\u4e86\u4e00\u4e2a\u5bfc\u5165\u5404\u4e2a\u5b50\u4efb\u52a1\u3001Instance \u7684\u6267\u884c\u8be6\u60c5\uff0c\u6709\u52a9\u4e8e\u6211\u4eec\u5206\u6790\u5bfc\u5165\u74f6\u9888\u3002"),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"\u76ee\u524d\u4e0d\u652f\u6301\u67e5\u770b\u672a\u6267\u884c\u6210\u529f\u7684\u5bfc\u5165\u4f5c\u4e1a\u7684 Profile\u3002")),(0,t.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5148\u83b7\u53d6 Profile \u5217\u8868\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/"\\G\n*************************** 1. row ***************************\n                 JobId: 20010\n               QueryId: 980014623046410a-af5d36f23381017f\n                  User: root\n             DefaultDb: default_cluster:test\n                   SQL: LOAD LABEL xxx\n             QueryType: Load\n             StartTime: 2023-03-07 19:48:24\n               EndTime: 2023-03-07 19:50:45\n             TotalTime: 2m21s\n            QueryState: N/A\n               TraceId:\n          AnalysisTime: NULL\n              PlanTime: NULL\n          ScheduleTime: NULL\n       FetchResultTime: NULL\n       WriteResultTime: NULL\nWaitAndFetchResultTime: NULL\n*************************** 2. row ***************************\n                 JobId: N/A\n               QueryId: 7cc2d0282a7a4391-8dd75030185134d8\n                  User: root\n             DefaultDb: default_cluster:test\n                   SQL: insert into xxx\n             QueryType: Load\n             StartTime: 2023-03-07 19:49:15\n               EndTime: 2023-03-07 19:49:15\n             TotalTime: 102ms\n            QueryState: OK\n               TraceId:\n          AnalysisTime: 825.277us\n              PlanTime: 4.126ms\n          ScheduleTime: N/A\n       FetchResultTime: 0ns\n       WriteResultTime: 0ns\nWaitAndFetchResultTime: N/A\n')),(0,t.yg)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u5217\u51fa\u5f53\u524d\u4fdd\u5b58\u7684\u6240\u6709\u5bfc\u5165 Profile\u3002\u6bcf\u884c\u5bf9\u5e94\u4e00\u4e2a\u5bfc\u5165\u3002\u5176\u4e2d QueryId \u5217\u4e3a\u5bfc\u5165\u4f5c\u4e1a\u7684 ID\u3002\u8fd9\u4e2a ID \u4e5f\u53ef\u4ee5\u901a\u8fc7 SHOW LOAD \u8bed\u53e5\u67e5\u770b\u62ff\u5230\u3002\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u6211\u4eec\u60f3\u770b\u7684 Profile \u5bf9\u5e94\u7684 QueryId\uff0c\u67e5\u770b\u5177\u4f53\u60c5\u51b5\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u67e5\u770b\u4e00\u4e2a Profile \u5206\u4e3a 3 \u4e2a\u6b65\u9aa4\uff1a")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u67e5\u770b\u5b50\u4efb\u52a1\u603b\u89c8"),(0,t.yg)("p",{parentName:"li"},"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u6709\u5bfc\u5165\u4f5c\u4e1a\u7684\u5b50\u4efb\u52a1\u6982\u51b5\uff1a"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/980014623046410a-af5d36f23381017f";\n+-----------------------------------+------------+\n| TaskId                            | ActiveTime |\n+-----------------------------------+------------+\n| 980014623046410a-af5d36f23381017f | 3m14s      |\n+-----------------------------------+------------+\n')),(0,t.yg)("p",null,"   \u5982\u4e0a\u56fe\uff0c\u8868\u793a ",(0,t.yg)("inlineCode",{parentName:"p"},"980014623046410a-af5d36f23381017f")," \u8fd9\u4e2a\u5bfc\u5165\u4f5c\u4e1a\u603b\u5171\u6709\u4e00\u4e2a\u5b50\u4efb\u52a1\uff0c\u5176\u4e2d ActiveTime \u8868\u793a\u8fd9\u4e2a\u5b50\u4efb\u52a1\u4e2d\u8017\u65f6\u6700\u957f\u7684 Instance \u7684\u6267\u884c\u65f6\u95f4\u3002"),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u67e5\u770b\u6307\u5b9a\u5b50\u4efb\u52a1\u7684 Instance \u6982\u51b5"),(0,t.yg)("p",{parentName:"li"},"\u5f53\u6211\u4eec\u53d1\u73b0\u4e00\u4e2a\u5b50\u4efb\u52a1\u8017\u65f6\u8f83\u957f\u65f6\uff0c\u53ef\u4ee5\u8fdb\u4e00\u6b65\u67e5\u770b\u8be5\u5b50\u4efb\u52a1\u7684\u5404\u4e2a Instance \u7684\u6267\u884c\u8017\u65f6\uff1a"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/980014623046410a-af5d36f23381017f/980014623046410a-af5d36f23381017f";\n+-----------------------------------+------------------+------------+\n| Instances                         | Host             | ActiveTime |\n+-----------------------------------+------------------+------------+\n| 980014623046410a-88e260f0c43031f2 | 10.81.85.89:9067 | 3m7s       |\n| 980014623046410a-88e260f0c43031f3 | 10.81.85.89:9067 | 3m6s       |\n| 980014623046410a-88e260f0c43031f4 | 10.81.85.89:9067 | 3m10s      |\n| 980014623046410a-88e260f0c43031f5 | 10.81.85.89:9067 | 3m14s      |\n+-----------------------------------+------------------+------------+\n')),(0,t.yg)("p",null,"   \u8fd9\u91cc\u5c55\u793a\u4e86 980014623046410a-af5d36f23381017f \u8fd9\u4e2a\u5b50\u4efb\u52a1\u7684\u56db\u4e2a Instance \u8017\u65f6\uff0c\u5e76\u4e14\u8fd8\u5c55\u793a\u4e86 Instance \u6240\u5728\u7684\u6267\u884c\u8282\u70b9\u3002"),(0,t.yg)("ol",{start:3},(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u67e5\u770b\u5177\u4f53 Instance"),(0,t.yg)("p",{parentName:"li"},"\u6211\u4eec\u53ef\u4ee5\u7ee7\u7eed\u67e5\u770b\u67d0\u4e00\u4e2a\u5177\u4f53\u7684 Instance \u4e0a\u5404\u4e2a\u7b97\u5b50\u7684\u8be6\u7ec6 Profile\uff1a"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show load profile "/980014623046410a-af5d36f23381017f/980014623046410a-af5d36f23381017f/980014623046410a-88e260f0c43031f5"\\G\n*************************** 1. row ***************************\nInstance:\n      \u250c-----------------------------------------\u2510\n      \u2502[-1: OlapTableSink]                      \u2502\n      \u2502(Active: 2m17s, non-child: 70.91)        \u2502\n      \u2502  - Counters:                            \u2502\n      \u2502      - CloseWaitTime: 1m53s             \u2502\n      \u2502      - ConvertBatchTime: 0ns            \u2502\n      \u2502      - MaxAddBatchExecTime: 1m46s       \u2502\n      \u2502      - NonBlockingSendTime: 3m11s       \u2502\n      \u2502      - NumberBatchAdded: 782            \u2502\n      \u2502      - NumberNodeChannels: 1            \u2502\n      \u2502      - OpenTime: 743.822us              \u2502\n      \u2502      - RowsFiltered: 0                  \u2502\n      \u2502      - RowsRead: 1.599729M (1599729)    \u2502\n      \u2502      - RowsReturned: 1.599729M (1599729)\u2502\n      \u2502      - SendDataTime: 11s761ms           \u2502\n      \u2502      - TotalAddBatchExecTime: 1m46s     \u2502\n      \u2502      - ValidateDataTime: 9s802ms        \u2502\n      \u2514-----------------------------------------\u2518\n                           \u2502\n\u250c-----------------------------------------------------\u2510\n\u2502[0: BROKER_SCAN_NODE]                                \u2502\n\u2502(Active: 56s537ms, non-child: 29.06)                 \u2502\n\u2502  - Counters:                                        \u2502\n\u2502      - BytesDecompressed: 0.00                      \u2502\n\u2502      - BytesRead: 5.77 GB                           \u2502\n\u2502      - DecompressTime: 0ns                          \u2502\n\u2502      - FileReadTime: 34s263ms                       \u2502\n\u2502      - MaterializeTupleTime(*): 45s54ms             \u2502\n\u2502      - NumDiskAccess: 0                             \u2502\n\u2502      - PeakMemoryUsage: 33.03 MB                    \u2502\n\u2502      - RowsRead: 1.599729M (1599729)                \u2502\n\u2502      - RowsReturned: 1.599729M (1599729)            \u2502\n\u2502      - RowsReturnedRate: 28.295K /sec               \u2502\n\u2502      - TotalRawReadTime(*): 1m20s                   \u2502\n\u2502      - TotalReadThroughput: 30.39858627319336 MB/sec\u2502\n\u2502      - WaitScannerTime: 56s528ms                    \u2502\n\u2514-----------------------------------------------------\u2518\n')),(0,t.yg)("p",null,"   \u4e0a\u56fe\u5c55\u793a\u4e86\u5b50\u4efb\u52a1 980014623046410a-af5d36f23381017f \u4e2d\uff0cInstance 980014623046410a-88e260f0c43031f5 \u7684\u5404\u4e2a\u7b97\u5b50\u7684\u5177\u4f53 Profile\u3002"),(0,t.yg)("p",null,"\u901a\u8fc7\u4ee5\u4e0a 3 \u4e2a\u6b65\u9aa4\uff0c\u6211\u4eec\u53ef\u4ee5\u9010\u6b65\u6392\u67e5\u4e00\u4e2a\u5bfc\u5165\u4efb\u52a1\u7684\u6267\u884c\u74f6\u9888\u3002"))}m.isMDXComponent=!0}}]);