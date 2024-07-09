"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[37504],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>y});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,y=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return a?t.createElement(y,i(i({ref:n},d),{},{components:a})):t.createElement(y,i({ref:n},d))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},914983:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=a(58168),r=(a(296540),a(15680));const l={title:"HDFS",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-functions/table-functions/hdfs",id:"version-2.0/sql-manual/sql-functions/table-functions/hdfs",title:"HDFS",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/table-functions/hdfs.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/hdfs",permalink:"/docs/2.0/sql-manual/sql-functions/table-functions/hdfs",draft:!1,tags:[],version:"2.0",frontMatter:{title:"HDFS",language:"en"},sidebar:"docs",previous:{title:"S3",permalink:"/docs/2.0/sql-manual/sql-functions/table-functions/s3"},next:{title:"local",permalink:"/docs/2.0/sql-manual/sql-functions/table-functions/local"}},s={},p=[{value:"HDFS",id:"hdfs",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"Examples",id:"examples",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],d={toc:p},m="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(m,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"hdfs"},"HDFS"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"hdfs"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"HDFS table-valued-function(tvf), allows users to read and access file contents on S3-compatible object storage, just like accessing relational table. Currently supports ",(0,r.yg)("inlineCode",{parentName:"p"},"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc")," file format."),(0,r.yg)("h4",{id:"syntax"},"syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'hdfs(\n  "uri" = "..",\n  "fs.defaultFS" = "...",\n  "hadoop.username" = "...",\n  "format" = "csv",\n  "keyn" = "valuen" \n  ...\n  );\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"parameter description")),(0,r.yg)("p",null,"Related parameters for accessing hdfs:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"uri"),": (required) hdfs uri. If the uri path does not exist or the files are empty files, hdfs tvf will return an empty result set."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"fs.defaultFS"),": (required)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"hadoop.username"),": (required) Can be any string, but cannot be empty."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"hadoop.security.authentication"),": (optional)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"hadoop.username"),": (optional)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"hadoop.kerberos.principal"),": (optional)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"hadoop.kerberos.keytab"),": (optional)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"dfs.client.read.shortcircuit"),": (optional)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"dfs.domain.socket.path"),": (optional)")),(0,r.yg)("p",null,"Related parameters for accessing HDFS in HA mode:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"dfs.nameservices"),": (optional)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"dfs.ha.namenodes.your-nameservices"),": (optional)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"dfs.namenode.rpc-address.your-nameservices.your-namenode"),": (optional)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"dfs.client.failover.proxy.provider.your-nameservices"),": (optional)")),(0,r.yg)("p",null,"File format parameters:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"format"),": (required) Currently support ",(0,r.yg)("inlineCode",{parentName:"p"},"csv/csv_with_names/csv_with_names_and_types/json/parquet/orc/avro"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"column_separator"),": (optional) default ",(0,r.yg)("inlineCode",{parentName:"p"},"\\t"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"line_delimiter"),": (optional) default ",(0,r.yg)("inlineCode",{parentName:"p"},"\\n"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"compress_type"),": (optional) Currently support ",(0,r.yg)("inlineCode",{parentName:"p"},"UNKNOWN/PLAIN/GZ/LZO/BZ2/LZ4FRAME/DEFLATE/SNAPPYBLOCK"),". Default value is ",(0,r.yg)("inlineCode",{parentName:"p"},"UNKNOWN"),", it will automatically infer the type based on the suffix of ",(0,r.yg)("inlineCode",{parentName:"p"},"uri"),"."),(0,r.yg)("p",{parentName:"li"},"  The following 6 parameters are used for loading in json format. For specific usage methods, please refer to: ",(0,r.yg)("a",{parentName:"p",href:"../../../data-operate/import/import-way/load-json-format.md"},"Json Load"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"read_json_by_line"),": (optional) default ",(0,r.yg)("inlineCode",{parentName:"p"},'"true"'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"strip_outer_array"),": (optional) default ",(0,r.yg)("inlineCode",{parentName:"p"},'"false"'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"json_root"),": (optional) default ",(0,r.yg)("inlineCode",{parentName:"p"},'""'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"json_paths"),": (optional) default ",(0,r.yg)("inlineCode",{parentName:"p"},'""'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"num_as_string"),": (optional) default ",(0,r.yg)("inlineCode",{parentName:"p"},"false"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"fuzzy_parse"),": (optional) default ",(0,r.yg)("inlineCode",{parentName:"p"},"false")),(0,r.yg)("version",{since:"dev"},"The following 2 parameters are used for loading in csv format")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"trim_double_quotes"),": Boolean type (optional), the default value is ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),". True means that the outermost double quotes of each field in the csv file are trimmed.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"skip_lines"),": Integer type (optional), the default value is 0. It will skip some lines in the head of csv file. It will be disabled when the format is ",(0,r.yg)("inlineCode",{parentName:"p"},"csv_with_names")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"csv_with_names_and_types"),"."))),(0,r.yg)("p",null,"other kinds of parameters:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"path_partition_keys"),': (optional) Specifies the column names carried in the file path. For example, if the file path is /path/to/city=beijing/date="2023-07-09", you should fill in ',(0,r.yg)("inlineCode",{parentName:"li"},'path_partition_keys="city,date"'),". It will automatically read the corresponding column names and values from the path during load process.")),(0,r.yg)("h3",{id:"examples"},"Examples"),(0,r.yg)("p",null,"Read and access csv format files on hdfs storage."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from hdfs(\n            "uri" = "hdfs://127.0.0.1:842/user/doris/csv_format_test/student.csv",\n            "fs.defaultFS" = "hdfs://127.0.0.1:8424",\n            "hadoop.username" = "doris",\n            "format" = "csv");\n+------+---------+------+\n| c1   | c2      | c3   |\n+------+---------+------+\n| 1    | alice   | 18   |\n| 2    | bob     | 20   |\n| 3    | jack    | 24   |\n| 4    | jackson | 19   |\n| 5    | liming  | 18   |\n+------+---------+------+\n')),(0,r.yg)("p",null,"Read and access csv format files on hdfs storage in HA mode."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> select * from hdfs(\n            "uri" = "hdfs://127.0.0.1:842/user/doris/csv_format_test/student.csv",\n            "fs.defaultFS" = "hdfs://127.0.0.1:8424",\n            "hadoop.username" = "doris",\n            "format" = "csv",\n            "dfs.nameservices" = "my_hdfs",\n            "dfs.ha.namenodes.my_hdfs" = "nn1,nn2",\n            "dfs.namenode.rpc-address.my_hdfs.nn1" = "nanmenode01:8020",\n            "dfs.namenode.rpc-address.my_hdfs.nn2" = "nanmenode02:8020",\n            "dfs.client.failover.proxy.provider.my_hdfs" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider");\n+------+---------+------+\n| c1   | c2      | c3   |\n+------+---------+------+\n| 1    | alice   | 18   |\n| 2    | bob     | 20   |\n| 3    | jack    | 24   |\n| 4    | jackson | 19   |\n| 5    | liming  | 18   |\n+------+---------+------+\n')),(0,r.yg)("p",null,"Can be used with ",(0,r.yg)("inlineCode",{parentName:"p"},"desc function")," :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'MySQL [(none)]> desc function hdfs(\n            "uri" = "hdfs://127.0.0.1:8424/user/doris/csv_format_test/student_with_names.csv",\n            "fs.defaultFS" = "hdfs://127.0.0.1:8424",\n            "hadoop.username" = "doris",\n            "format" = "csv_with_names");\n')),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"hdfs, table-valued-function, tvf\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"),(0,r.yg)("p",null,"  For more detailed usage of HDFS tvf, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-functions/table-functions/s3"},"S3")," tvf, The only difference between them is the way of accessing the storage system."))}u.isMDXComponent=!0}}]);