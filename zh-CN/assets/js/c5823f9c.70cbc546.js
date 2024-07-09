"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[58814],{15680:(e,n,r)=>{r.d(n,{xA:()=>m,yg:()=>f});var t=r(296540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},m=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(r),y=i,f=u["".concat(s,".").concat(y)]||u[y]||c[y]||a;return r?t.createElement(f,l(l({ref:n},m),{},{components:r})):t.createElement(f,l({ref:n},m))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},690089:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var t=r(58168),i=(r(296540),r(15680));const a={title:"\u83b7\u53d6 Profile",language:"zh-CN"},l=void 0,o={unversionedId:"query/query-analysis/get-profile",id:"version-2.1/query/query-analysis/get-profile",title:"\u83b7\u53d6 Profile",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query/query-analysis/get-profile.md",sourceDirName:"query/query-analysis",slug:"/query/query-analysis/get-profile",permalink:"/zh-CN/docs/query/query-analysis/get-profile",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u83b7\u53d6 Profile",language:"zh-CN"},sidebar:"docs",previous:{title:"\u9ad8\u5e76\u53d1\u70b9\u67e5",permalink:"/zh-CN/docs/query/high-concurrent-point-query"},next:{title:"Query Profile",permalink:"/zh-CN/docs/query/query-analysis/query-profile"}},s={},p=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42",level:2},{value:"Doris \u96c6\u7fa4\u80fd\u591f\u6b63\u5e38\u8bbf\u95ee\u5916\u7f51",id:"doris-\u96c6\u7fa4\u80fd\u591f\u6b63\u5e38\u8bbf\u95ee\u5916\u7f51",level:2},{value:"Doris \u96c6\u7fa4\u8bbf\u95ee\u5916\u7f51\u53d7\u5230\u9650\u5236",id:"doris-\u96c6\u7fa4\u8bbf\u95ee\u5916\u7f51\u53d7\u5230\u9650\u5236",level:2}],m={toc:p},u="wrapper";function c(e){let{components:n,...a}=e;return(0,i.yg)(u,(0,t.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,i.yg)("p",null,"\u6211\u4eec\u65f6\u5e38\u9047\u5230\u5bf9\u5e94 SQL \u6267\u884c\u65f6\u95f4\u4e0d\u53ca\u9884\u671f\u7684\u60c5\u51b5\uff0c\u4e3a\u4e86\u4f18\u5316 SQL \u8fbe\u5230\u9884\u671f\u67e5\u8be2\u65f6\u5ef6\uff0c\u901a\u8fc7 Profile \u6211\u4eec\u80fd\u591f\u770b\u51fa\u53ef\u4ee5\u505a\u54ea\u4e9b\u4f18\u5316\u3002\u73b0\u5728\u8bf4\u660e\u5728\u4e0d\u540c\u73af\u5883\u4e0b\u5e94\u8be5\u5982\u4f55\u62ff\u5230\u5bf9\u5e94 Query \u7684 Profile\u3002"),(0,i.yg)("h2",{id:"\u8bf7\u6c42"},"\u8bf7\u6c42"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"HTTP://FE_IP:HTTP_PORT"),"\n",(0,i.yg)("inlineCode",{parentName:"p"},"GET /API/Profile")),(0,i.yg)("h2",{id:"doris-\u96c6\u7fa4\u80fd\u591f\u6b63\u5e38\u8bbf\u95ee\u5916\u7f51"},"Doris \u96c6\u7fa4\u80fd\u591f\u6b63\u5e38\u8bbf\u95ee\u5916\u7f51"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u5f00\u542f Profile \u4e0a\u62a5\u53c2\u6570 enable_profile"),(0,i.yg)("p",{parentName:"li"},"\u8be5\u53c2\u6570\u5f00\u542f\u7684\u662f session \u53d8\u91cf\uff0c\u6b64\u53d8\u91cf\u4e0d\u5efa\u8bae\u5168\u5c40\u5f00\u542f\u3002"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"--\u5f00\u542f\u53d8\u91cf\nmysql> set enable_profile=true;\nQuery OK, 0 rows affected (0.00 sec)\n\n--\u786e\u8ba4\u53d8\u91cf\u662f\u5426\u6b63\u5e38\u5f00\u542f\nmysql> show variables like '%profile%';\n+----------------+-------+---------------+---------+\n| Variable_name  | Value | Default_Value | Changed |\n+----------------+-------+---------------+---------+\n| enable_profile | true  | false         | 1       |\n+----------------+-------+---------------+---------+\n1 row in set (0.00 sec)\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u6267\u884c\u5bf9\u5e94 Query"),(0,i.yg)("p",{parentName:"li"},"\u96c6\u7fa4\u5728\u591a\u4e2a FE \u7684\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u5230\u5f00\u542f Profile \u4e0a\u62a5\u53c2\u6570\u7684 FE \u4e0a\u6267\u884c\u5bf9\u5e94 Query, \u53c2\u6570\u5e76\u6ca1\u6709\u5168\u5c40\u751f\u6548\u3002"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"--\u5f00\u542f\u53d8\u91cf\nmysql> set enable_profile=true;\nQuery OK, 0 rows affected (0.00 sec)\n--\u786e\u8ba4\u53d8\u91cf\u662f\u5426\u6b63\u5e38\u5f00\u542f\nmysql> show variables like '%profile%';\n+----------------+-------+---------------+---------+\n| Variable_name  | Value | Default_Value | Changed |\n+----------------+-------+---------------+---------+\n| enable_profile | true  | false         | 1       |\n+----------------+-------+---------------+---------+\n1 row in set (0.00 sec)\n\n--\u6267\u884c\u5bf9\u5e94 Query\nmysql> select id,name from test.test where name like \"%RuO%\";\n+---------------------------+-----------------------------------------------------------------------------------------------------------------------------+\n| id                        | name                                                                                                                        |\n+---------------------------+-----------------------------------------------------------------------------------------------------------------------------+\n| 1ZWXYGbb8nr5Pi29J4cEMyEMb | ZN1nqzBRSl1rTrr99rnX1aplxhRuOUTLw6so7rzjlRQ317gTPxh0dHljmrARDJjH7FjRkJW9c7YuUBmWikq7eNgmFKJPreWirDrGrFzUYH4eP6kDtSA3UTnNIIj |\n+---------------------------+-----------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u83b7\u53d6 Profile"),(0,i.yg)("p",{parentName:"li"},"\u96c6\u7fa4\u5728\u591a\u4e2a FE \u7684\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u8bbf\u95ee\u6267\u884c\u5bf9\u5e94 Query \u7684 FE HTTP \u754c\u9762 ( HTTP://FE_IP:HTTP_PORT ) \u7684 QueryProfile \u9875\u9762\uff0c\u70b9\u51fb\u5bf9\u5e94 Profile ID \u67e5\u770b\u5bf9\u5e94 Profile\uff0c\u8fd8\u53ef\u4ee5\u5728 Profile \u754c\u9762\u4e0b\u8f7d\u5bf9\u5e94 Profile\u3002"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"profile1.png",src:r(198936).A,width:"1280",height:"256"}),"\n",(0,i.yg)("img",{alt:"profile2.png",src:r(373427).A,width:"1280",height:"561"})))),(0,i.yg)("h2",{id:"doris-\u96c6\u7fa4\u8bbf\u95ee\u5916\u7f51\u53d7\u5230\u9650\u5236"},"Doris \u96c6\u7fa4\u8bbf\u95ee\u5916\u7f51\u53d7\u5230\u9650\u5236"),(0,i.yg)("p",null,"\u96c6\u7fa4\u4e0d\u80fd\u6b63\u5e38\u8bbf\u95ee\u5916\u7f51\u65f6\uff0c\u9700\u8981\u901a\u8fc7 API \u7684\u65b9\u5f0f\u62ff\u5230\u5bf9\u5e94 Profile (HTTP://FE_IP:HTTP_PORT/API/Profile?Query_ID=),IP \u548c\u7aef\u53e3\u662f\u6307\u6267\u884c\u5bf9\u5e94 Query \u7684 FE \u5bf9\u5e94 IP \u548c\u7aef\u53e3\u3002\u6b64\u65f6\u83b7\u53d6\u5bf9\u5e94 Query \u7684 Profile \u6b65\u9aa4\u524d\u4e24\u6b65\u548c\u6b63\u5e38\u8bbf\u95ee\u5916\u7f51\u65f6\u662f\u4e00\u6837\u7684\uff0c\u7b2c\u4e09\u6b65\u83b7\u53d6 Profile \u65f6\u4f1a\u6709\u5dee\u522b\u3002"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u83b7\u53d6 Porfile")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u627e\u5230\u5bf9\u5e94 Query ID"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'--\u6839\u636e\u5bf9\u5e94 Query \u627e\u5230 Profile ID\nmysql> show query profile "/";\n+-----------------------------------+-----------+---------------------+---------------------+-------+------------+------+------------+-------------------------------------------------------+\n| Profile ID                        | Task Type | Start Time          | End Time            | Total | Task State | User | Default Db | Sql Statement                                         |\n+-----------------------------------+-----------+---------------------+---------------------+-------+------------+------+------------+-------------------------------------------------------+\n| 1b0bb22689734d30-bbe56e17c2ff21dc | QUERY     | 2024-02-28 11:00:17 | 2024-02-28 11:00:17 | 7ms   | EOF        | root |            | select id,name from test.test where name like "%RuO%" |\n| 202fb174510c4772-965289e8f7f0cf10 | QUERY     | 2024-02-25 19:39:20 | 2024-02-25 19:39:20 | 19ms  | EOF        | root |            | select id,name from test.test where name like "%KJ%"  |\n+-----------------------------------+-----------+---------------------+---------------------+-------+------------+------+------------+-------------------------------------------------------+\n2 rows in set (0.00 sec)\n'))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u67e5\u8be2 Profile \u5e76\u5c06 Profile \u91cd\u5b9a\u5411\u5230\u4e00\u4e2a\u6587\u672c\u4e2d"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"\u6a21\u677f\uff1aCURL -X GET -u user:password http://fe_ip:http_port/api/profile?query_id=1b0bb22689734d30-bbe56e17c2ff21dc > test.profile\n\n[user@VM-10-6-centos profile]$ curl -X GET -u root:root http://127.0.0.1:8030/api/profile?query_id=1b0bb22689734d30-bbe56e17c2ff21dc > test.profile\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100  1211    0  1211    0     0   168k      0 --:--:-- --:--:-- --:--:--  168k\n"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u8fd4\u56de\u7684 Profile \u6362\u884c\u7b26\u4e3a \\ \\n \u5206\u6790\u8d77\u6765\u5f88\u4e0d\u65b9\u4fbf\uff0c\u53ef\u4ee5\u5728\u6587\u672c\u7f16\u8f91\u5de5\u5177\u4e2d\u5c06 \\ \\n \u66ff\u6362\u4e3a \\n"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'[user@VM-10-6-centos profile]$ cat test.profile\n{"msg":"success","code":0,"data":{"profile":"Query:\\n  Summary:\\n     \n- Profile ID: 1b0bb22689734d30-bbe56e17c2ff21dc\\n     - Task Type: QUERY\\n     \n- Start Time: 2024-02-28 11:00:17\\n     - End Time: 2024-02-28 11:00:17\\n     \n- Total: 7ms\\n     - Task State: EOF\\n     - User: root\\n     - Default Db: \\n     \n- Sql Statement: select id,name from test.test where name like \\"%RuO%\\"\\n  Execution Summary:\\n     \n- Workload Group: \\n     - Analysis Time: 1ms\\n     \n- Plan Time: 2ms\\n       - JoinReorder Time: N/A\\n       \n- CreateSingleNode Time: N/A\\n       - QueryDistributed Time: N/A\\n       \n- Init Scan Node Time: N/A\\n       - Finalize Scan Node Time: N/A\\n         \n- Get Splits Time: N/A\\n           - Get PARTITIONS Time: N/A\\n           \n- Get PARTITION FILES Time: N/A\\n         - Create Scan Range Time: N/A\\n     \n- Schedule Time: N/A\\n     - Fetch Result Time: 0ms\\n     - Write Result Time: 0ms\\n     \n- Wait and Fetch Result Time: N/A\\n     - Doris Version: doris-2.0.4-rc06-003a815b63\\n     \n- Is Nereids: Yes\\n     - Is Pipeline: Yes\\n     - Is Cached: Yes\\n     \n- Total Instances Num: 0\\n     - Instances Num Per BE: \\n     \n- Parallel Fragment Exec Instance Num: 48\\n     - Trace ID: \\n"},"count":0}\n'))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u66ff\u6362\u540e\u7684\u6548\u679c\u5982\u4e0b"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'{"msg":"success","code":0,"data":{"profile":"Query:\n  Summary:\n     - Profile ID: 1b0bb22689734d30-bbe56e17c2ff21dc\n     - Task Type: QUERY\n     - Start Time: 2024-02-28 11:00:17\n     - End Time: 2024-02-28 11:00:17\n     - Total: 7ms\n     - Task State: EOF\n     - User: root\n     - Default Db: \n     - Sql Statement: select id,name from test.test where name like \\"%RuO%\\"\n  Execution Summary:\n     - Workload Group: \n     - Analysis Time: 1ms\n     - Plan Time: 2ms\n       - JoinReorder Time: N/A\n       - CreateSingleNode Time: N/A\n       - QueryDistributed Time: N/A\n       - Init Scan Node Time: N/A\n       - Finalize Scan Node Time: N/A\n         - Get Splits Time: N/A\n           - Get PARTITIONS Time: N/A\n           - Get PARTITION FILES Time: N/A\n         - Create Scan Range Time: N/A\n     - Schedule Time: N/A\n     - Fetch Result Time: 0ms\n     - Write Result Time: 0ms\n     - Wait and Fetch Result Time: N/A\n     - Doris Version: doris-2.0.4-rc06-003a815b63\n     - Is Nereids: Yes\n     - Is Pipeline: Yes\n     - Is Cached: Yes\n     - Total Instances Num: 0\n     - Instances Num Per BE: \n     - Parallel Fragment Exec Instance Num: 48\n     - Trace ID: \n"},"count":0}\n')))))}c.isMDXComponent=!0},198936:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/profile1-0d88983bffcec7c5bee8246e3271ef75.png"},373427:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/profile2-e869373c94cd09dae47ecfd3bbbca378.png"}}]);