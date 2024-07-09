"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[12112],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>h});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||g[m]||i;return t?n.createElement(h,o(o({ref:a},c),{},{components:t})):n.createElement(h,o({ref:a},c))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},926446:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(58168),r=(t(296540),t(15680));const i={title:"Lakehouse FAQ",language:"en"},o=void 0,l={unversionedId:"faq/lakehouse-faq",id:"version-2.1/faq/lakehouse-faq",title:"Lakehouse FAQ",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/faq/lakehouse-faq.md",sourceDirName:"faq",slug:"/faq/lakehouse-faq",permalink:"/docs/faq/lakehouse-faq",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Lakehouse FAQ",language:"en"},sidebar:"docs",previous:{title:"SQL Error",permalink:"/docs/faq/sql-faq"},next:{title:"Release 2.1.4",permalink:"/docs/releasenotes/release-2.1.4"}},s={},p=[{value:"Certificate Issues",id:"certificate-issues",level:2},{value:"Kerberos",id:"kerberos",level:2},{value:"JDBC Catalog",id:"jdbc-catalog",level:2},{value:"Hive Catalog",id:"hive-catalog",level:2},{value:"HDFS",id:"hdfs",level:2},{value:"DLF Catalog",id:"dlf-catalog",level:2},{value:"Other Issues",id:"other-issues",level:2}],c={toc:p},d="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"certificate-issues"},"Certificate Issues"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When querying, an error ",(0,r.yg)("inlineCode",{parentName:"p"},"curl 77: Problem with the SSL CA cert.")," occurs. This indicates that the current system certificate is too old and needs to be updated locally."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"You can download the latest CA certificate from ",(0,r.yg)("inlineCode",{parentName:"li"},"https://curl.haxx.se/docs/caextract.html"),"."),(0,r.yg)("li",{parentName:"ul"},"Place the downloaded ",(0,r.yg)("inlineCode",{parentName:"li"},"cacert-xxx.pem")," into the ",(0,r.yg)("inlineCode",{parentName:"li"},"/etc/ssl/certs/")," directory, for example: ",(0,r.yg)("inlineCode",{parentName:"li"},"sudo cp cacert-xxx.pem /etc/ssl/certs/ca-certificates.crt"),"."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When querying, an error occurs: ",(0,r.yg)("inlineCode",{parentName:"p"},"ERROR 1105 (HY000): errCode = 2, detailMessage = (x.x.x.x)[CANCELLED][INTERNAL_ERROR]error setting certificate verify locations: CAfile: /etc/ssl/certs/ca-certificates.crt CApath: none"),"."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"yum install -y ca-certificates\nln -s /etc/pki/ca-trust/extracted/openssl/ca-bundle.trust.crt /etc/ssl/certs/ca-certificates.crt\n")),(0,r.yg)("h2",{id:"kerberos"},"Kerberos"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When connecting to a Hive Metastore authenticated with Kerberos, an error ",(0,r.yg)("inlineCode",{parentName:"p"},"GSS initiate failed")," is encountered."),(0,r.yg)("p",{parentName:"li"},"This is usually due to incorrect Kerberos authentication information. You can troubleshoot by following these steps:"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In versions prior to 1.2.1, the libhdfs3 library that Doris depends on did not enable gsasl. Please update to versions 1.2.2 and later.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Ensure that correct keytab and principal are set for each component and verify that the keytab file exists on all FE and BE nodes."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"hadoop.kerberos.keytab"),"/",(0,r.yg)("inlineCode",{parentName:"li"},"hadoop.kerberos.principal"),": Used for Hadoop hdfs access, fill in the corresponding values for hdfs."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"hive.metastore.kerberos.principal"),": Used for hive metastore."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Try replacing the IP in the principal with a domain name (do not use the default ",(0,r.yg)("inlineCode",{parentName:"p"},"_HOST")," placeholder).")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Ensure that the ",(0,r.yg)("inlineCode",{parentName:"p"},"/etc/krb5.conf")," file exists on all FE and BE nodes.")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When connecting to a Hive database through the Hive Catalog, an error occurs: ",(0,r.yg)("inlineCode",{parentName:"p"},"RemoteException: SIMPLE authentication is not enabled. Available:[TOKEN, KERBEROS]"),"."),(0,r.yg)("p",{parentName:"li"},"If the error occurs during the query when there are no issues with ",(0,r.yg)("inlineCode",{parentName:"p"},"show databases")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"show tables"),", follow these two steps:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Place core-site.xml and hdfs-site.xml in the fe/conf and be/conf directories."),(0,r.yg)("li",{parentName:"ul"},"Execute Kerberos kinit on the BE node, restart BE, and then proceed with the query.")),(0,r.yg)("p",{parentName:"li"},"When encountering the error ",(0,r.yg)("inlineCode",{parentName:"p"},"GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos Ticket)")," while querying a table configured with Kerberos, restarting FE and BE nodes usually resolves the issue."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Before restarting all nodes, configure ",(0,r.yg)("inlineCode",{parentName:"li"},"-Djavax.security.auth.useSubjectCredsOnly=false")," in the JAVA_OPTS parameter in ",(0,r.yg)("inlineCode",{parentName:"li"},'"${DORIS_HOME}/be/conf/be.conf"')," to obtain JAAS credentials information through the underlying mechanism rather than the application."),(0,r.yg)("li",{parentName:"ul"},"Refer to ",(0,r.yg)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/Troubleshooting.html"},"JAAS Troubleshooting")," for solutions to common JAAS errors.")),(0,r.yg)("p",{parentName:"li"},"To resolve the error ",(0,r.yg)("inlineCode",{parentName:"p"},"Unable to obtain password from user")," when configuring Kerberos in the Catalog:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Ensure the principal used is listed in klist by checking with ",(0,r.yg)("inlineCode",{parentName:"li"},"klist -kt your.keytab"),"."),(0,r.yg)("li",{parentName:"ul"},"Verify the catalog configuration for any missing settings such as ",(0,r.yg)("inlineCode",{parentName:"li"},"yarn.resourcemanager.principal"),"."),(0,r.yg)("li",{parentName:"ul"},"If the above checks are fine, it may be due to the JDK version installed by the system's package manager not supporting certain encryption algorithms. Consider installing JDK manually and setting the ",(0,r.yg)("inlineCode",{parentName:"li"},"JAVA_HOME")," environment variable."),(0,r.yg)("li",{parentName:"ul"},"Kerberos typically uses AES-256 for encryption. For Oracle JDK, JCE must be installed. Some distributions of OpenJDK automatically provide unlimited strength JCE, eliminating the need for separate installation."),(0,r.yg)("li",{parentName:"ul"},"JCE versions correspond to JDK versions; download the appropriate JCE zip package and extract it to the ",(0,r.yg)("inlineCode",{parentName:"li"},"$JAVA_HOME/jre/lib/security")," directory based on the JDK version:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"JDK6: ",(0,r.yg)("a",{parentName:"li",href:"http://www.oracle.com/technetwork/java/javase/downloads/jce-6-download-429243.html"},"JCE6")),(0,r.yg)("li",{parentName:"ul"},"JDK7: ",(0,r.yg)("a",{parentName:"li",href:"http://www.oracle.com/technetwork/java/embedded/embedded-se/downloads/jce-7-download-432124.html"},"JCE7")),(0,r.yg)("li",{parentName:"ul"},"JDK8: ",(0,r.yg)("a",{parentName:"li",href:"http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html"},"JCE8"))))),(0,r.yg)("p",{parentName:"li"},"When encountering the error ",(0,r.yg)("inlineCode",{parentName:"p"},"java.security.InvalidKeyException: Illegal key size")," while accessing HDFS with KMS, upgrade the JDK version to >= Java 8 u162 or install the corresponding JCE Unlimited Strength Jurisdiction Policy Files."),(0,r.yg)("p",{parentName:"li"},"If configuring Kerberos in the Catalog results in the error ",(0,r.yg)("inlineCode",{parentName:"p"},"SIMPLE authentication is not enabled. Available:[TOKEN, KERBEROS]"),", place the ",(0,r.yg)("inlineCode",{parentName:"p"},"core-site.xml")," file in the ",(0,r.yg)("inlineCode",{parentName:"p"},'"${DORIS_HOME}/be/conf"')," directory."),(0,r.yg)("p",{parentName:"li"},"If accessing HDFS results in the error ",(0,r.yg)("inlineCode",{parentName:"p"},"No common protection layer between client and server"),", ensure that the ",(0,r.yg)("inlineCode",{parentName:"p"},"hadoop.rpc.protection")," properties on the client and server are consistent."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n\n<configuration>\n\n    <property>\n        <name>hadoop.security.authentication</name>\n        <value>kerberos</value>\n    </property>\n    \n</configuration>\n')),(0,r.yg)("p",{parentName:"li"},"When using Broker Load with Kerberos configured and encountering the error ",(0,r.yg)("inlineCode",{parentName:"p"},"Cannot locate default realm."),":"),(0,r.yg)("p",{parentName:"li"},"Add the configuration item ",(0,r.yg)("inlineCode",{parentName:"p"},"-Djava.security.krb5.conf=/your-path")," to the ",(0,r.yg)("inlineCode",{parentName:"p"},"JAVA_OPTS")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"start_broker.sh")," script for Broker Load.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When using Kerberos configuration in the Catalog, the ",(0,r.yg)("inlineCode",{parentName:"p"},"hadoop.username")," property cannot be used simultaneously.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Accessing Kerberos with JDK 17"),(0,r.yg)("p",{parentName:"li"},"When running Doris with JDK 17 and accessing Kerberos services, you may encounter issues accessing due to the use of deprecated encryption algorithms. You need to add the ",(0,r.yg)("inlineCode",{parentName:"p"},"allow_weak_crypto=true")," property in krb5.conf or upgrade the encryption algorithm in Kerberos."),(0,r.yg)("p",{parentName:"li"},"For more details, refer to: ",(0,r.yg)("a",{parentName:"p",href:"https://seanjmullan.org/blog/2021/09/14/jdk17#kerberos"},"https://seanjmullan.org/blog/2021/09/14/jdk17#kerberos")))),(0,r.yg)("h2",{id:"jdbc-catalog"},"JDBC Catalog"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Error connecting to SQLServer via JDBC Catalog: ",(0,r.yg)("inlineCode",{parentName:"p"},"unable to find valid certification path to requested target")),(0,r.yg)("p",{parentName:"li"},"Add the ",(0,r.yg)("inlineCode",{parentName:"p"},"trustServerCertificate=true")," option in the ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_url"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Connecting to MySQL database via JDBC Catalog results in Chinese character garbling or incorrect Chinese character query conditions"),(0,r.yg)("p",{parentName:"li"},"Add ",(0,r.yg)("inlineCode",{parentName:"p"},"useUnicode=true&characterEncoding=utf-8")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_url"),"."),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Note: Starting from version 1.2.3, when connecting to MySQL database via JDBC Catalog, these parameters will be automatically added."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Error connecting to MySQL database via JDBC Catalog: ",(0,r.yg)("inlineCode",{parentName:"p"},"Establishing SSL connection without server's identity verification is not recommended")),(0,r.yg)("p",{parentName:"li"},"Add ",(0,r.yg)("inlineCode",{parentName:"p"},"useSSL=true")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"jdbc_url"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When synchronizing MySQL data to Doris using JDBC Catalog, date data synchronization error occurs. Verify if the MySQL version matches the MySQL driver package, for example, MySQL 8 and above require the driver com.mysql.cj.jdbc.Driver."))),(0,r.yg)("h2",{id:"hive-catalog"},"Hive Catalog"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Error accessing Iceberg table via Hive Metastore: ",(0,r.yg)("inlineCode",{parentName:"p"},"failed to get schema")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Storage schema reading not supported")),(0,r.yg)("p",{parentName:"li"},"Place the relevant ",(0,r.yg)("inlineCode",{parentName:"p"},"iceberg")," runtime jar files in Hive's lib/ directory."),(0,r.yg)("p",{parentName:"li"},"Configure in ",(0,r.yg)("inlineCode",{parentName:"p"},"hive-site.xml"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"metastore.storage.schema.reader.impl=org.apache.hadoop.hive.metastore.SerDeStorageSchemaReader\n")),(0,r.yg)("p",{parentName:"li"},"After configuration, restart the Hive Metastore.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Error connecting to Hive Catalog: ",(0,r.yg)("inlineCode",{parentName:"p"},"Caused by: java.lang.NullPointerException")),(0,r.yg)("p",{parentName:"li"},"If the fe.log contains the following stack trace:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"Caused by: java.lang.NullPointerException\n    at org.apache.hadoop.hive.ql.security.authorization.plugin.AuthorizationMetaStoreFilterHook.getFilteredObjects(AuthorizationMetaStoreFilterHook.java:78) ~[hive-exec-3.1.3-core.jar:3.1.3]\n    at org.apache.hadoop.hive.ql.security.authorization.plugin.AuthorizationMetaStoreFilterHook.filterDatabases(AuthorizationMetaStoreFilterHook.java:55) ~[hive-exec-3.1.3-core.jar:3.1.3]\n    at org.apache.hadoop.hive.metastore.HiveMetaStoreClient.getAllDatabases(HiveMetaStoreClient.java:1548) ~[doris-fe.jar:3.1.3]\n    at org.apache.hadoop.hive.metastore.HiveMetaStoreClient.getAllDatabases(HiveMetaStoreClient.java:1542) ~[doris-fe.jar:3.1.3]\n    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[?:1.8.0_181]\n")),(0,r.yg)("p",{parentName:"li"},"Try adding ",(0,r.yg)("inlineCode",{parentName:"p"},'"metastore.filter.hook" = "org.apache.hadoop.hive.metastore.DefaultMetaStoreFilterHookImpl"')," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"create catalog")," statement to resolve.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If after creating Hive Catalog, ",(0,r.yg)("inlineCode",{parentName:"p"},"show tables")," works fine but querying results in ",(0,r.yg)("inlineCode",{parentName:"p"},"java.net.UnknownHostException: xxxxx")),(0,r.yg)("p",{parentName:"li"},"Add the following in the CATALOG's PROPERTIES:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"'fs.defaultFS' = 'hdfs://<your_nameservice_or_actually_HDFS_IP_and_port>'\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Tables in orc format in Hive 1.x may encounter system column names in the underlying orc file schema as ",(0,r.yg)("inlineCode",{parentName:"p"},"_col0"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"_col1"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"_col2"),", etc. In this case, add ",(0,r.yg)("inlineCode",{parentName:"p"},"hive.version")," as 1.x.x in the catalog configuration to map with the column names in the hive table."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hive PROPERTIES (\n    'hive.version' = '1.x.x'\n);\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When querying table data using Catalog, errors related to Hive Metastore such as ",(0,r.yg)("inlineCode",{parentName:"p"},"Invalid method name")," are encountered, set the ",(0,r.yg)("inlineCode",{parentName:"p"},"hive.version")," parameter.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When querying a table in ORC format, if the FE reports ",(0,r.yg)("inlineCode",{parentName:"p"},"Could not obtain block")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Caused by: java.lang.NoSuchFieldError: types"),", it may be due to the FE accessing HDFS to retrieve file information and perform file splitting by default. In some cases, the FE may not be able to access HDFS. This can be resolved by adding the following parameter: ",(0,r.yg)("inlineCode",{parentName:"p"},'"hive.exec.orc.split.strategy" = "BI"'),". Other options include HYBRID (default) and ETL.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In Hive, you can find the partition field values of a Hudi table, but in Doris, you cannot. Doris and Hive currently have different ways of querying Hudi. In Doris, you need to add the partition fields in the avsc file structure of the Hudi table. If not added, Doris will query with partition_val being empty (even if ",(0,r.yg)("inlineCode",{parentName:"p"},"hoodie.datasource.hive_sync.partition_fields=partition_val")," is set)."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "type": "record",\n    "name": "record",\n    "fields": [{\n        "name": "partition_val",\n        "type": [\n            "null",\n            "string"\n            ],\n        "doc": "Preset partition field, empty string when not partitioned",\n        "default": null\n        },\n        {\n        "name": "name",\n        "type": "string",\n        "doc": "Name"\n        },\n        {\n        "name": "create_time",\n        "type": "string",\n        "doc": "Creation Time"\n        }\n    ]\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When querying a Hive external table, if you encounter the error ",(0,r.yg)("inlineCode",{parentName:"p"},"java.lang.ClassNotFoundException: Class com.hadoop.compression.lzo.LzoCodec not found"),", search for ",(0,r.yg)("inlineCode",{parentName:"p"},"hadoop-lzo-*.jar")," in the Hadoop environment, place it in the ",(0,r.yg)("inlineCode",{parentName:"p"},'"${DORIS_HOME}/fe/lib/"')," directory, and restart the FE. Starting from version 2.0.2, you can place this file in the ",(0,r.yg)("inlineCode",{parentName:"p"},"custom_lib/")," directory of the FE (if it does not exist, create it manually) to prevent file loss when upgrading the cluster due to the lib directory being replaced.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When creating a Hive table specifying the serde as ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.hadoop.hive.contrib.serde2.MultiDelimitserDe"),", and encountering the error ",(0,r.yg)("inlineCode",{parentName:"p"},"storage schema reading not supported")," when accessing the table, add the following configuration to the hive-site.xml file and restart the HMS service:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"<property>\n  <name>metastore.storage.schema.reader.impl</name>\n  <value>org.apache.hadoop.hive.metastore.SerDeStorageSchemaReader</value>\n</property> \n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Error: ",(0,r.yg)("inlineCode",{parentName:"p"},"java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty"),". The complete error message in the FE log is as follows:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"org.apache.doris.common.UserException: errCode = 2, detailMessage = S3 list path failed. path=s3://bucket/part-*,msg=errors while get file status listStatus on s3://bucket: com.amazonaws.SdkClientException: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\norg.apache.doris.common.UserException: errCode = 2, detailMessage = S3 list path exception. path=s3://bucket/part-*, err: errCode = 2, detailMessage = S3 list path failed. path=s3://bucket/part-*,msg=errors while get file status listStatus on s3://bucket: com.amazonaws.SdkClientException: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\norg.apache.hadoop.fs.s3a.AWSClientIOException: listStatus on s3://bucket: com.amazonaws.SdkClientException: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\nCaused by: com.amazonaws.SdkClientException: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\nCaused by: javax.net.ssl.SSLException: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\nCaused by: java.lang.RuntimeException: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\nCaused by: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\n")),(0,r.yg)("p",{parentName:"li"},"Try updating the CA certificate on the FE node using ",(0,r.yg)("inlineCode",{parentName:"p"},"update-ca-trust (CentOS/RockyLinux)"),", and then restart the FE process.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"BE error: ",(0,r.yg)("inlineCode",{parentName:"p"},"java.lang.InternalError"),". If you see an error similar to the following in ",(0,r.yg)("inlineCode",{parentName:"p"},"be.INFO"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"W20240506 15:19:57.553396 266457 jni-util.cpp:259] java.lang.InternalError\n        at org.apache.hadoop.io.compress.zlib.ZlibDecompressor.init(Native Method)\n        at org.apache.hadoop.io.compress.zlib.ZlibDecompressor.<init>(ZlibDecompressor.java:114)\n        at org.apache.hadoop.io.compress.GzipCodec$GzipZlibDecompressor.<init>(GzipCodec.java:229)\n        at org.apache.hadoop.io.compress.GzipCodec.createDecompressor(GzipCodec.java:188)\n        at org.apache.hadoop.io.compress.CodecPool.getDecompressor(CodecPool.java:183)\n        at org.apache.parquet.hadoop.CodecFactory$HeapBytesDecompressor.<init>(CodecFactory.java:99)\n        at org.apache.parquet.hadoop.CodecFactory.createDecompressor(CodecFactory.java:223)\n        at org.apache.parquet.hadoop.CodecFactory.getDecompressor(CodecFactory.java:212)\n        at org.apache.parquet.hadoop.CodecFactory.getDecompressor(CodecFactory.java:43)\n")),(0,r.yg)("p",{parentName:"li"},"It is because the Doris built-in ",(0,r.yg)("inlineCode",{parentName:"p"},"libz.a")," conflicts with the system environment's ",(0,r.yg)("inlineCode",{parentName:"p"},"libz.so"),". To resolve this issue, first execute ",(0,r.yg)("inlineCode",{parentName:"p"},"export LD_LIBRARY_PATH=/path/to/be/lib:$LD_LIBRARY_PATH"),", and then restart the BE process."))),(0,r.yg)("h2",{id:"hdfs"},"HDFS"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When accessing HDFS 3.x, if you encounter the error ",(0,r.yg)("inlineCode",{parentName:"p"},"java.lang.VerifyError: xxx"),", in versions prior to 1.2.1, Doris depends on Hadoop version 2.8. You need to update to 2.10.2 or upgrade Doris to versions after 1.2.2.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Using Hedged Read to optimize slow HDFS reads. In some cases, high load on HDFS may lead to longer read times for data replicas on a specific HDFS, thereby slowing down overall query efficiency. The HDFS Client provides the Hedged Read feature. This feature initiates another read thread to read the same data if a read request exceeds a certain threshold without returning, and the result returned first is used."),(0,r.yg)("p",{parentName:"li"},"Note: This feature may increase the load on the HDFS cluster, so use it judiciously."),(0,r.yg)("p",{parentName:"li"},"You can enable this feature in two ways:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Specify it in the parameters when creating the Catalog:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"create catalog regression properties (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.16.47:7004',\n    'dfs.client.hedged.read.threadpool.size' = '128',\n    'dfs.client.hedged.read.threshold.millis' = \"500\"\n);\n")))))),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"dfs.client.hedged.read.threadpool.size")," represents the number of threads used for Hedged Read, which are shared by an HDFS Client. Typically, for an HDFS cluster, BE nodes will share an HDFS Client."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"dfs.client.hedged.read.threshold.millis")," is the read threshold in milliseconds. When a read request exceeds this threshold without returning, a Hedged Read is triggered."),(0,r.yg)("p",null,"When enabled, you can see the related parameters in the Query Profile:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"TotalHedgedRead"),": Number of times Hedged Read was initiated."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"HedgedReadWins"),": Number of successful Hedged Reads (times when the request was initiated and returned faster than the original request)"),(0,r.yg)("p",null,"Note that these values are cumulative for a single HDFS Client, not for a single query. The same HDFS Client can be reused by multiple queries."),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"Couldn't create proxy provider class org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider")),(0,r.yg)("p",{parentName:"li"},"In the start scripts of FE and BE, the environment variable ",(0,r.yg)("inlineCode",{parentName:"p"},"HADOOP_CONF_DIR")," is added to the CLASSPATH. If ",(0,r.yg)("inlineCode",{parentName:"p"},"HADOOP_CONF_DIR")," is set incorrectly, such as pointing to a non-existent or incorrect path, it may load the wrong xxx-site.xml file, resulting in reading incorrect information."),(0,r.yg)("p",{parentName:"li"},"Check if ",(0,r.yg)("inlineCode",{parentName:"p"},"HADOOP_CONF_DIR")," is configured correctly or remove this environment variable.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"BlockMissingExcetpion: Could not obtain block: BP-XXXXXXXXX No live nodes contain current block")),(0,r.yg)("p",{parentName:"li"},"Possible solutions include:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Use ",(0,r.yg)("inlineCode",{parentName:"li"},"hdfs fsck file -files -blocks -locations")," to check if the file is healthy."),(0,r.yg)("li",{parentName:"ul"},"Check connectivity with datanodes using ",(0,r.yg)("inlineCode",{parentName:"li"},"telnet"),"."),(0,r.yg)("li",{parentName:"ul"},"Check datanode logs.")),(0,r.yg)("p",{parentName:"li"},"If you encounter the following error:"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.hadoop.hdfs.server.datanode.DataNode: Failed to read expected SASL data transfer protection handshake from client at /XXX.XXX.XXX.XXX:XXXXX. Perhaps the client is running an older version of Hadoop which does not support SASL data transfer protection"),"\nit means that the current hdfs has enabled encrypted transmission, but the client has not, causing the error."),(0,r.yg)("p",{parentName:"li"},"Use any of the following solutions:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Copy hdfs-site.xml and core-site.xml to be/conf and fe/conf directories. (Recommended)"),(0,r.yg)("li",{parentName:"ul"},"In hdfs-site.xml, find the corresponding configuration ",(0,r.yg)("inlineCode",{parentName:"li"},"dfs.data.transfer.protection")," and set this parameter in the catalog.")))),(0,r.yg)("h2",{id:"dlf-catalog"},"DLF Catalog"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When using the DLF Catalog, if ",(0,r.yg)("inlineCode",{parentName:"p"},"Invalid address")," occurs during BE reading JindoFS data, add the domain name appearing in the logs to IP mapping in ",(0,r.yg)("inlineCode",{parentName:"p"},"/etc/hosts"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"If there is no permission to read data, use the ",(0,r.yg)("inlineCode",{parentName:"p"},"hadoop.username")," property to specify a user with permission.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The metadata in the DLF Catalog should be consistent with DLF. When managing metadata using DLF, newly imported partitions in Hive may not be synchronized by DLF, leading to inconsistencies between DLF and Hive metadata. To address this, ensure that Hive metadata is fully synchronized by DLF."))),(0,r.yg)("h2",{id:"other-issues"},"Other Issues"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Query results in garbled characters after mapping Binary type to Doris"),(0,r.yg)("p",{parentName:"li"},"Doris natively does not support the Binary type, so when mapping Binary types from various data lakes or databases to Doris, it is usually done using the String type. The String type can only display printable characters. If you need to query the content of Binary data, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"TO_BASE64()")," function to convert it to Base64 encoding before further processing.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Analyzing Parquet files"),(0,r.yg)("p",{parentName:"li"},"When querying Parquet files, due to potential differences in the format of Parquet files generated by different systems, such as the number of RowGroups, index values, etc., sometimes it is necessary to check the metadata of Parquet files for issue identification or performance analysis. Here is a tool provided to help users analyze Parquet files more conveniently:"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download and unzip ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/morningman/tools/releases/download/apache-parquet-cli-1.14.0/apache-parquet-cli-1.14.0.tar.xz"},"Apache Parquet Cli 1.14.0"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download the Parquet file to be analyzed to your local machine, assuming the path is ",(0,r.yg)("inlineCode",{parentName:"p"},"/path/to/file.parquet"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use the following command to analyze the metadata of the Parquet file:"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"./parquet-tools meta /path/to/file.parquet"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"For more functionalities, refer to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/parquet-java/tree/apache-parquet-1.14.0/parquet-cli"},"Apache Parquet Cli documentation")))))))}g.isMDXComponent=!0}}]);