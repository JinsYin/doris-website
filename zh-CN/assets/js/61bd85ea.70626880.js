"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[5033],{15680:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>c});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},m=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),y=r,c=d["".concat(s,".").concat(y)]||d[y]||u[y]||l;return a?t.createElement(c,i(i({ref:n},m),{},{components:a})):t.createElement(c,i({ref:n},m))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},996670:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=a(58168),r=(a(296540),a(15680));const l={title:"HDFS",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/table-functions/hdfs",id:"version-2.0/sql-manual/sql-functions/table-functions/hdfs",title:"HDFS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/table-functions/hdfs.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/hdfs",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/table-functions/hdfs",draft:!1,tags:[],version:"2.0",frontMatter:{title:"HDFS",language:"zh-CN"},sidebar:"docs",previous:{title:"S3",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/table-functions/s3"},next:{title:"local",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/table-functions/local"}},s={},p=[{value:"HDFS",id:"hdfs",level:2},{value:"Description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"Examples",id:"examples",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},d="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,t.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"hdfs"},"HDFS"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"HDFS \u8868\u51fd\u6570\uff08table-valued-function,tvf\uff09\uff0c\u53ef\u4ee5\u8ba9\u7528\u6237\u50cf\u8bbf\u95ee\u5173\u7cfb\u8868\u683c\u5f0f\u6570\u636e\u4e00\u6837\uff0c\u8bfb\u53d6\u5e76\u8bbf\u95ee HDFS \u4e0a\u7684\u6587\u4ef6\u5185\u5bb9\u3002\u76ee\u524d\u652f\u6301",(0,r.yg)("inlineCode",{parentName:"p"},"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc"),"\u6587\u4ef6\u683c\u5f0f\u3002"),(0,r.yg)("h4",{id:"syntax"},"syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'hdfs(\n  "uri" = "..",\n  "fs.defaultFS" = "...",\n  "hadoop.username" = "...",\n  "format" = "csv",\n  "keyn" = "valuen" \n  ...\n  );\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,r.yg)("p",null,"\u8bbf\u95ee HDFS \u76f8\u5173\u53c2\u6570\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"uri"),"\uff1a\uff08\u5fc5\u586b\uff09\u8bbf\u95ee HDFS \u7684 uri\u3002\u5982\u679c uri \u8def\u5f84\u4e0d\u5b58\u5728\u6216\u6587\u4ef6\u90fd\u662f\u7a7a\u6587\u4ef6\uff0cHDFS TVF \u5c06\u8fd4\u56de\u7a7a\u96c6\u5408\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"fs.defaultFS"),"\uff1a\uff08\u5fc5\u586b\uff09"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"hadoop.username"),"\uff1a\uff08\u5fc5\u586b\uff09\u53ef\u4ee5\u662f\u4efb\u610f\u5b57\u7b26\u4e32\uff0c\u4f46\u4e0d\u80fd\u4e3a\u7a7a"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"hadoop.security.authentication"),"\uff1a\uff08\u9009\u586b\uff09"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"hadoop.username"),"\uff1a\uff08\u9009\u586b\uff09"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"hadoop.kerberos.principal"),"\uff1a\uff08\u9009\u586b\uff09"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"hadoop.kerberos.keytab"),"\uff1a\uff08\u9009\u586b\uff09"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"dfs.client.read.shortcircuit"),"\uff1a\uff08\u9009\u586b\uff09"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"dfs.domain.socket.path"),"\uff1a\uff08\u9009\u586b\uff09")),(0,r.yg)("p",null,"\u8bbf\u95ee HA \u6a21\u5f0f HDFS \u76f8\u5173\u53c2\u6570\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"dfs.nameservices"),"\uff1a\uff08\u9009\u586b\uff09"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"dfs.ha.namenodes.your-nameservices"),"\uff1a\uff08\u9009\u586b\uff09"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"dfs.namenode.rpc-address.your-nameservices.your-namenode"),"\uff1a\uff08\u9009\u586b\uff09"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"dfs.client.failover.proxy.provider.your-nameservices"),"\uff1a\uff08\u9009\u586b\uff09")),(0,r.yg)("p",null,"\u6587\u4ef6\u683c\u5f0f\u76f8\u5173\u53c2\u6570\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"format"),"\uff1a(\u5fc5\u586b) \u76ee\u524d\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"p"},"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc/avro"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"column_separator"),"\uff1a(\u9009\u586b) \u5217\u5206\u5272\u7b26\uff0c\u9ed8\u8ba4\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"\\t"),"\u3002 ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"line_delimiter"),"\uff1a(\u9009\u586b) \u884c\u5206\u5272\u7b26\uff0c\u9ed8\u8ba4\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},"\\n"),"\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"compress_type"),": (\u9009\u586b) \u76ee\u524d\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"p"},"UNKNOWN/PLAIN/GZ/LZO/BZ2/LZ4FRAME/DEFLATE/SNAPPYBLOCK"),"\u3002\u9ed8\u8ba4\u503c\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"UNKNOWN"),", \u5c06\u4f1a\u6839\u636e ",(0,r.yg)("inlineCode",{parentName:"p"},"uri")," \u7684\u540e\u7f00\u81ea\u52a8\u63a8\u65ad\u7c7b\u578b\u3002"),(0,r.yg)("p",{parentName:"li"},"  \u4e0b\u9762 6 \u4e2a\u53c2\u6570\u662f\u7528\u4e8e JSON \u683c\u5f0f\u7684\u5bfc\u5165\uff0c\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u53ef\u4ee5\u53c2\u7167\uff1a",(0,r.yg)("a",{parentName:"p",href:"../../../data-operate/import/import-way/load-json-format.md"},"JSON Load"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"read_json_by_line"),"\uff1a (\u9009\u586b) \u9ed8\u8ba4\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},'"true"'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"strip_outer_array"),"\uff1a (\u9009\u586b) \u9ed8\u8ba4\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},'"false"'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"json_root"),"\uff1a (\u9009\u586b) \u9ed8\u8ba4\u4e3a\u7a7a")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"json_paths"),"\uff1a (\u9009\u586b) \u9ed8\u8ba4\u4e3a\u7a7a")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"num_as_string"),"\uff1a (\u9009\u586b) \u9ed8\u8ba4\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"false"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"fuzzy_parse"),"\uff1a (\u9009\u586b) \u9ed8\u8ba4\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"false")),(0,r.yg)("p",{parentName:"li"},"  \u4e0b\u9762 2 \u4e2a\u53c2\u6570\u7528\u4e8e CSV \u683c\u5f0f\u7684\u5bfc\u5165\uff1a")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"trim_double_quotes"),"\uff1a\u5e03\u5c14\u7c7b\u578b\uff0c\u9009\u586b\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),"\uff0c\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," \u65f6\u8868\u793a\u88c1\u526a\u6389 CSV \u6587\u4ef6\u6bcf\u4e2a\u5b57\u6bb5\u6700\u5916\u5c42\u7684\u53cc\u5f15\u53f7")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"skip_lines"),"\uff1a\u6574\u6570\u7c7b\u578b\uff0c\u9009\u586b\uff0c\u9ed8\u8ba4\u503c\u4e3a 0\uff0c\u542b\u4e49\u4e3a\u8df3\u8fc7 CSV \u6587\u4ef6\u7684\u524d\u51e0\u884c\u3002\u5f53\u8bbe\u7f6e Format \u8bbe\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"csv_with_names")," \u6216 ",(0,r.yg)("inlineCode",{parentName:"p"},"csv_with_names_and_types")," \u65f6\uff0c\u8be5\u53c2\u6570\u4f1a\u5931\u6548"))),(0,r.yg)("p",null,"\u5176\u4ed6\u53c2\u6570\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"path_partition_keys"),'\uff1a\uff08\u9009\u586b\uff09\u6307\u5b9a\u6587\u4ef6\u8def\u5f84\u4e2d\u643a\u5e26\u7684\u5206\u533a\u5217\u540d\uff0c\u4f8b\u5982/path/to/city=beijing/date="2023-07-09", \u5219\u586b\u5199',(0,r.yg)("inlineCode",{parentName:"li"},'path_partition_keys="city,date"'),"\uff0c\u5c06\u4f1a\u81ea\u52a8\u4ece\u8def\u5f84\u4e2d\u8bfb\u53d6\u76f8\u5e94\u5217\u540d\u548c\u5217\u503c\u8fdb\u884c\u5bfc\u5165\u3002"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"resource"),"\uff1a\uff08\u9009\u586b\uff09\u6307\u5b9a Resource \u540d\uff0cHDFS TVF \u53ef\u4ee5\u5229\u7528\u5df2\u6709\u7684 HFDS Resource \u6765\u76f4\u63a5\u8bbf\u95ee HDFS\u3002\u521b\u5efa HDFS Resource \u7684\u65b9\u6cd5\u53ef\u4ee5\u53c2\u7167 ",(0,r.yg)("a",{parentName:"li",href:"../../sql-statements/Data-Definition-Statements/Create/CREATE-RESOURCE.md"},"CREATE-RESOURCE"),"\u3002\u8be5\u529f\u80fd\u81ea 2.1.4 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002")),(0,r.yg)("h3",{id:"examples"},"Examples"),(0,r.yg)("p",null,"\u8bfb\u53d6\u5e76\u8bbf\u95ee HDFS \u5b58\u50a8\u4e0a\u7684 CSV \u683c\u5f0f\u6587\u4ef6"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from hdfs(\n            "uri" = "hdfs://127.0.0.1:842/user/doris/csv_format_test/student.csv",\n            "fs.defaultFS" = "hdfs://127.0.0.1:8424",\n            "hadoop.username" = "doris",\n            "format" = "csv");\n+------+---------+------+\n| c1   | c2      | c3   |\n+------+---------+------+\n| 1    | alice   | 18   |\n| 2    | bob     | 20   |\n| 3    | jack    | 24   |\n| 4    | jackson | 19   |\n| 5    | liming  | 18   |\n+------+---------+------+\n')),(0,r.yg)("p",null,"\u8bfb\u53d6\u5e76\u8bbf\u95ee HA \u6a21\u5f0f\u7684 HDFS \u5b58\u50a8\u4e0a\u7684 CSV \u683c\u5f0f\u6587\u4ef6"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from hdfs(\n            "uri" = "hdfs://127.0.0.1:842/user/doris/csv_format_test/student.csv",\n            "fs.defaultFS" = "hdfs://127.0.0.1:8424",\n            "hadoop.username" = "doris",\n            "format" = "csv",\n            "dfs.nameservices" = "my_hdfs",\n            "dfs.ha.namenodes.my_hdfs" = "nn1,nn2",\n            "dfs.namenode.rpc-address.my_hdfs.nn1" = "nanmenode01:8020",\n            "dfs.namenode.rpc-address.my_hdfs.nn2" = "nanmenode02:8020",\n            "dfs.client.failover.proxy.provider.my_hdfs" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider");\n+------+---------+------+\n| c1   | c2      | c3   |\n+------+---------+------+\n| 1    | alice   | 18   |\n| 2    | bob     | 20   |\n| 3    | jack    | 24   |\n| 4    | jackson | 19   |\n| 5    | liming  | 18   |\n+------+---------+------+\n')),(0,r.yg)("p",null,"\u53ef\u4ee5\u914d\u5408 ",(0,r.yg)("inlineCode",{parentName:"p"},"desc function")," \u4f7f\u7528\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> desc function hdfs(\n            "uri" = "hdfs://127.0.0.1:8424/user/doris/csv_format_test/student_with_names.csv",\n            "fs.defaultFS" = "hdfs://127.0.0.1:8424",\n            "hadoop.username" = "doris",\n            "format" = "csv_with_names");\n')),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"HDFS, table-valued-function, TVF\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"),(0,r.yg)("p",null,"  \u5173\u4e8e HDFS TVF \u7684\u66f4\u8be6\u7ec6\u4f7f\u7528\u65b9\u6cd5\u53ef\u4ee5\u53c2\u7167 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/sql-manual/sql-functions/table-functions/s3"},"S3")," TVF, \u552f\u4e00\u4e0d\u540c\u7684\u662f\u8bbf\u95ee\u5b58\u50a8\u7cfb\u7edf\u7684\u65b9\u5f0f\u4e0d\u4e00\u6837\u3002"))}u.isMDXComponent=!0}}]);