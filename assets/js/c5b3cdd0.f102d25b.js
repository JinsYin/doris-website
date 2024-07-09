"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[32539],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>c});var t=n(296540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=p(n),m=r,c=g["".concat(s,".").concat(m)]||g[m]||y[m]||o;return n?t.createElement(c,l(l({ref:a},d),{},{components:n})):t.createElement(c,l({ref:a},d))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},244880:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=n(58168),r=(n(296540),n(15680));const o={title:"Paimon Catalog",language:"en"},l=void 0,i={unversionedId:"lakehouse/datalake-analytics/paimon",id:"version-2.1/lakehouse/datalake-analytics/paimon",title:"Paimon Catalog",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/lakehouse/datalake-analytics/paimon.md",sourceDirName:"lakehouse/datalake-analytics",slug:"/lakehouse/datalake-analytics/paimon",permalink:"/docs/lakehouse/datalake-analytics/paimon",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Paimon Catalog",language:"en"},sidebar:"docs",previous:{title:"Iceberg Catalog",permalink:"/docs/lakehouse/datalake-analytics/iceberg"},next:{title:"Alibaba Cloud DLF",permalink:"/docs/lakehouse/datalake-analytics/dlf"}},s={},p=[{value:"Instructions for use",id:"instructions-for-use",level:2},{value:"Create Catalog",id:"create-catalog",level:2},{value:"Creating a Catalog Based on FileSystem",id:"creating-a-catalog-based-on-filesystem",level:3},{value:"HDFS",id:"hdfs",level:4},{value:"MINIO",id:"minio",level:4},{value:"OBS",id:"obs",level:4},{value:"COS",id:"cos",level:4},{value:"OSS",id:"oss",level:4},{value:"Creating a Catalog Based on Hive Metastore",id:"creating-a-catalog-based-on-hive-metastore",level:3},{value:"Column Type Mapping",id:"column-type-mapping",level:2},{value:"FAQ",id:"faq",level:2}],d={toc:p},g="wrapper";function y(e){let{components:a,...n}=e;return(0,r.yg)(g,(0,t.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"instructions-for-use"},"Instructions for use"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"When data in hdfs,need to put core-site.xml, hdfs-site.xml and hive-site.xml in the conf directory of FE and BE. First read the hadoop configuration file in the conf directory, and then read the related to the environment variable ",(0,r.yg)("inlineCode",{parentName:"li"},"HADOOP_CONF_DIR")," configuration file."),(0,r.yg)("li",{parentName:"ol"},"The currently adapted version of the Paimon is 0.8 (since 2.1.4).")),(0,r.yg)("h2",{id:"create-catalog"},"Create Catalog"),(0,r.yg)("p",null,"Paimon Catalog Currently supports two types of Metastore creation catalogs:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"filesystem(default),Store both metadata and data in the file system."),(0,r.yg)("li",{parentName:"ul"},"hive metastore,It also stores metadata in Hive metastore. Users can access these tables directly from Hive.")),(0,r.yg)("h3",{id:"creating-a-catalog-based-on-filesystem"},"Creating a Catalog Based on FileSystem"),(0,r.yg)("h4",{id:"hdfs"},"HDFS"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_hdfs` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "hdfs://HDFS8000871/user/paimon",\n    "dfs.nameservices" = "HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "hadoop.username" = "hadoop"\n);\n\nCREATE CATALOG `paimon_kerberos` PROPERTIES (\n    \'type\'=\'paimon\',\n    "warehouse" = "hdfs://HDFS8000871/user/paimon",\n    "dfs.nameservices" = "HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    \'hadoop.security.authentication\' = \'kerberos\',\n    \'hadoop.kerberos.keytab\' = \'/doris/hdfs.keytab\',   \n    \'hadoop.kerberos.principal\' = \'hdfs@HADOOP.COM\'\n);\n')),(0,r.yg)("h4",{id:"minio"},"MINIO"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_s3` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "s3://bucket_name/paimons3",\n    "s3.endpoint" = "http://<ip>:<port>",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk"\n);\n')),(0,r.yg)("h4",{id:"obs"},"OBS"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_obs` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "obs://bucket_name/paimon",\n    "obs.endpoint"="obs.cn-north-4.myhuaweicloud.com",\n    "obs.access_key"="ak",\n    "obs.secret_key"="sk"\n);\n')),(0,r.yg)("h4",{id:"cos"},"COS"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_cos` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "cosn://paimon-1308700295/paimoncos",\n    "cos.endpoint" = "cos.ap-beijing.myqcloud.com",\n    "cos.access_key" = "ak",\n    "cos.secret_key" = "sk"\n);\n')),(0,r.yg)("h4",{id:"oss"},"OSS"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_oss` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "oss://paimon-zd/paimonoss",\n    "oss.endpoint" = "oss-cn-beijing.aliyuncs.com",\n    "oss.access_key" = "ak",\n    "oss.secret_key" = "sk"\n);\n')),(0,r.yg)("h3",{id:"creating-a-catalog-based-on-hive-metastore"},"Creating a Catalog Based on Hive Metastore"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_hms` PROPERTIES (\n    "type" = "paimon",\n    "paimon.catalog.type" = "hms",\n    "warehouse" = "hdfs://HDFS8000871/user/zhangdong/paimon2",\n    "hive.metastore.uris" = "thrift://172.21.0.44:7004",\n    "dfs.nameservices" = "HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "hadoop.username" = "hadoop"\n);\n\nCREATE CATALOG `paimon_kerberos` PROPERTIES (\n    "type" = "paimon",\n    "paimon.catalog.type" = "hms",\n    "warehouse" = "hdfs://HDFS8000871/user/zhangdong/paimon2",\n    "hive.metastore.uris" = "thrift://172.21.0.44:7004",\n    "hive.metastore.sasl.enabled" = "true",\n    "hive.metastore.kerberos.principal" = "hive/xxx@HADOOP.COM",\n    "dfs.nameservices" = "HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "hadoop.security.authentication" = "kerberos",\n    "hadoop.kerberos.principal" = "hdfs@HADOOP.COM",\n    "hadoop.kerberos.keytab" = "/doris/hdfs.keytab"\n);\n')),(0,r.yg)("h2",{id:"column-type-mapping"},"Column Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Paimon Data Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris Data Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BooleanType"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TinyIntType"),(0,r.yg)("td",{parentName:"tr",align:null},"TinyInt"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SmallIntType"),(0,r.yg)("td",{parentName:"tr",align:null},"SmallInt"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"IntType"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FloatType"),(0,r.yg)("td",{parentName:"tr",align:null},"Float"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BigIntType"),(0,r.yg)("td",{parentName:"tr",align:null},"BigInt"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DoubleType"),(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VarCharType"),(0,r.yg)("td",{parentName:"tr",align:null},"VarChar"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CharType"),(0,r.yg)("td",{parentName:"tr",align:null},"Char"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VarBinaryType, BinaryType"),(0,r.yg)("td",{parentName:"tr",align:null},"Binary"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DecimalType(precision, scale)"),(0,r.yg)("td",{parentName:"tr",align:null},"Decimal(precision, scale)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TimestampType,LocalZonedTimestampType"),(0,r.yg)("td",{parentName:"tr",align:null},"DateTime"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DateType"),(0,r.yg)("td",{parentName:"tr",align:null},"Date"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ArrayType"),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"Support Array nesting")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MapType"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"Support Map nesting")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"RowType"),(0,r.yg)("td",{parentName:"tr",align:null},"Struct"),(0,r.yg)("td",{parentName:"tr",align:null},"Support Struct nesting (since 2.0.10 & 2.1.3)")))),(0,r.yg)("h2",{id:"faq"},"FAQ"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Kerberos"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Make sure principal and keytab are correct."),(0,r.yg)("li",{parentName:"ul"},"You need to start a scheduled task (such as crontab) on the BE node, and execute the ",(0,r.yg)("inlineCode",{parentName:"li"},"kinit -kt your_principal your_keytab")," command every certain time (such as 12 hours)."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Unknown type value: UNSUPPORTED"),(0,r.yg)("p",{parentName:"li"},"This is a compatible issue exist in 2.0.2 with Paimon 0.5, you need to upgrade to 2.0.3 or higher to solve this problem. Or ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/24985"},"patch")," yourself.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'When accessing object storage (OSS, S3, etc.), encounter "file system does not support".'),(0,r.yg)("p",{parentName:"li"},"In versions before 2.0.5 (inclusive), users need to manually download the following jar package and place it in the ",(0,r.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/be/lib/java_extensions/preload-extensions")," directory, and restart BE."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"OSS: ",(0,r.yg)("a",{parentName:"li",href:"https://repo.maven.apache.org/maven2/org/apache/paimon/paimon-oss/0.6.0-incubating/paimon-oss-0.6.0-incubating.jar"},"paimon-oss-0.6.0-incubating.jar")),(0,r.yg)("li",{parentName:"ul"},"Other Object Storage: ",(0,r.yg)("a",{parentName:"li",href:"https://repo.maven.apache.org/maven2/org/apache/paimon/paimon-s3/0.6.0-incubating/paimon-s3-0.6.0-incubating.jar"},"paimon-s3-0.6.0-incubating.jar"))),(0,r.yg)("p",{parentName:"li"},"No need to download these jars since 2.0.6."))))}y.isMDXComponent=!0}}]);