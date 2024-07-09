"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[37071],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var a=r(296540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(y,i(i({ref:t},p),{},{components:r})):a.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},929503:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(58168),n=(r(296540),r(15680));const o={title:"From Presto, Trino, ClickHouse, and Hive to Apache Doris: SQL convertor for easy migration",description:"Users can execute queries with their old SQL syntaxes directly in Doris or batch convert their existing SQL statements on the visual SQL conversion interface.",date:"2024-05-06",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/sql-convertor-feature.jpeg"},i=void 0,s={permalink:"/blog/from-presto-trino-clickhouse-and-hive-to-apache-doris-sql-convertor-for-easy-migration",source:"@site/blog/from-presto-trino-clickhouse-and-hive-to-apache-doris-sql-convertor-for-easy-migration.md",title:"From Presto, Trino, ClickHouse, and Hive to Apache Doris: SQL convertor for easy migration",description:"Users can execute queries with their old SQL syntaxes directly in Doris or batch convert their existing SQL statements on the visual SQL conversion interface.",date:"2024-05-06T00:00:00.000Z",formattedDate:"May 6, 2024",tags:[{label:"Tech Sharing",permalink:"/blog/tags/tech-sharing"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"From Presto, Trino, ClickHouse, and Hive to Apache Doris: SQL convertor for easy migration",description:"Users can execute queries with their old SQL syntaxes directly in Doris or batch convert their existing SQL statements on the visual SQL conversion interface.",date:"2024-05-06",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/sql-convertor-feature.jpeg"},prevItem:{title:"Multi-tenant workload isolation: a better balance between isolation and utilization",permalink:"/blog/multi-tenant-workload-isolation-in-apache-doris"},nextItem:{title:"Cross-cluster replication for read-write separation: story of a grocery store brand",permalink:"/blog/cross-cluster-replication-for-read-write"}},l={authorsImageUrls:[void 0]},c=[{value:"Doris SQL Convertor",id:"doris-sql-convertor",level:2},{value:"Installation &amp; usage",id:"installation--usage",level:2},{value:"SQL conversion service",id:"sql-conversion-service",level:3},{value:"Visual interface",id:"visual-interface",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/"},"Apache Doris")," is an all-in-one data platform that is capable of real-time reporting, ad-hoc queries, data lakehousing, log management and analysis, and batch data processing. As more and more companies have been replacing their component-heavy data architecture with Apache Doris, there is an increasing need for a more convenient data migration solution. ",(0,n.yg)("strong",{parentName:"p"},"That's why the Doris SQL Convertor is made.")),(0,n.yg)("p",null,"Most database systems run their own SQL dialects. Thus, migration between systems often entails modifications of SQL syntaxes. Since SQLs work closely with a company's business logic, in many cases, users have to modify their business logic, too. To reduce the transition pain for users, Apache Doris 2.1 provides the Doris SQL Convertor. It supports the SQL syntaxes of Presto, Trino, Hive, ClickHouse, and PostgreSQL. With it, users can execute queries with their old SQL syntaxes directly in Doris or batch convert their existing SQL statements on the visual interface."),(0,n.yg)("h2",{id:"doris-sql-convertor"},"Doris SQL Convertor"),(0,n.yg)("p",null,"The Doris SQL Convertor requires ",(0,n.yg)("strong",{parentName:"p"},"zero rewriting")," of SQL. Simply ",(0,n.yg)("inlineCode",{parentName:"p"},'set sql_dialect = "trino"')," in the session variable, then you can execute queries in Doris using Trino SQLs. "),(0,n.yg)("p",null,"The SQL compatibility of it has been proven by extensive tests. For example, a user tested the Doris SQL Convertor with over 30,000 SQL queries from their production environment. Turned out that the Convertor successfully converted 99.6% of the Trino SQLs and 98% of the ClickHouse SQLs."),(0,n.yg)("p",null,"Currently, Presto, Trino, Hive, ClickHouse, and PostgreSQL dialects are supported. We are working to add Teradata, SQL Server, and Snowflake to the list, and consistently increase the compatibility level of each SQL dialect."),(0,n.yg)("h2",{id:"installation--usage"},"Installation & usage"),(0,n.yg)("h3",{id:"sql-conversion-service"},"SQL conversion service"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Download")," ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://selectdb-doris-1308700295.cos.ap-beijing.myqcloud.com/doris-sql-convertor/doris-sql-convertor-1.0.3-bin-x86.tar.gz"},"Doris SQL Convertor")))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"On any frontend (FE) node, start the service using the following command."))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The SQL conversion service is stateless and can be started or stopped at any time.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"port=5001")," in the command specifies the service port. (You can use any available port.)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"It is advisable to start a service individually for each FE node."))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Shell"},"nohup ./doris-sql-convertor-1.0.1-bin-x86 run --host=0.0.0.0 --port=5001 &\n")),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Start a Doris cluster ",(0,n.yg)("strong",{parentName:"p"},"(Use Doris 2.1.0 or newer)"),".")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Set the URL for SQL conversion service in Doris. ",(0,n.yg)("inlineCode",{parentName:"p"},"127.0.0.1:5001")," in the command represents the IP and port number of the node where the service is deployed."))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Shell"},'MySQL> set global sql_converter_service_url = "http://127.0.0.1:5001/api/v1/convert"\n')),(0,n.yg)("p",null,"After deployment, you can execute SQL directly in the command line. You can start the service by ",(0,n.yg)("inlineCode",{parentName:"p"},"set sql_dialect = XXX"),". The following examples are based on ClickHouse SQL dialects."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Presto")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> set sql_dialect=presto;                                                                                                                                                                                                             \nQuery OK, 0 rows affected (0.00 sec) \n\nmysql> SELECT cast(start_time as varchar(20)) as col1,                                                                                                                                                                                     \n            array_distinct(arr_int) as col2,                                                                                                                                                                                             \n            FILTER(arr_str, x -> x LIKE '%World%') as col3,                                                                                                                                                                              \n            to_date(value,'%Y-%m-%d') as col4,                                                                                                                                                                                           \n            YEAR(start_time) as col5,                                                                                                                                                                                                    \n            date_add('month', 1, start_time) as col6,                                                                                                                                                                                    \n            REGEXP_EXTRACT_ALL(value, '-.') as col7,                                                                                                                                                                                     \n            JSON_EXTRACT('{\"id\": \"33\"}', '$.id')as col8,                                                                                                                                                                                 \n            element_at(arr_int, 1) as col9,                                                                                                                                                                                              \n            date_trunc('day',start_time) as col10                                                                                                                                                                                        \n         FROM test_sqlconvert                                                                                                                                                                                                            \n         where date_trunc('day',start_time)= DATE'2024-05-20'                                                                                                                                                                            \n     order by id;                                                                                                                                                                                                                        \n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+                                                                                                \n| col1                | col2      | col3      | col4       | col5 | col6                | col7        | col8 | col9 | col10               |                                                                                                \n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+                                                                                                \n| 2024-05-20 13:14:52 | [1, 2, 3] | [\"World\"] | 2024-01-14 | 2024 | 2024-06-20 13:14:52 | ['-0','-1'] | \"33\" |    1 | 2024-05-20 00:00:00 |                                                                                                \n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+                                                                                                \n1 row in set (0.03 sec)    \n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"ClickHouse")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> set sql_dialect=clickhouse;                                                                                                                                             \nQuery OK, 0 rows affected (0.00 sec)                                                                                                                                           \n                                                                                                                                                                               \nmysql> select  toString(start_time) as col1,                                                                                                                                   \n             arrayCompact(arr_int) as col2,                                                                                                                                  \n             arrayFilter(x -> x like '%World%',arr_str)as col3,                                                                                                              \n             toDate(value) as col4,                                                                                                                                          \n             toYear(start_time)as col5,                                                                                                                                      \n             addMonths(start_time, 1)as col6,                                                                                                                                \n             extractAll(value, '-.')as col7,                                                                                                                                 \n             JSONExtractString('{\"id\": \"33\"}' , 'id')as col8,                                                                                                                \n             arrayElement(arr_int, 1) as col9,                                                                                                                               \n             date_trunc('day',start_time) as col10                                                                                                                           \n          FROM test_sqlconvert                                                                                                                                               \n          where date_trunc('day',start_time)= '2024-05-20 00:00:00'                                                                                                          \n     order by id;                                                                                                                                                   \n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+                                    \n| col1                | col2      | col3      | col4       | col5 | col6                | col7        | col8 | col9 | col10               |                                    \n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+                                    \n| 2024-05-20 13:14:52 | [1, 2, 3] | [\"World\"] | 2024-01-14 | 2024 | 2024-06-20 13:14:52 | ['-0','-1'] | \"33\" |    1 | 2024-05-20 00:00:00 |                                    \n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+                                    \n1 row in set (0.02 sec)\n")),(0,n.yg)("h3",{id:"visual-interface"},"Visual interface"),(0,n.yg)("p",null,"For large-scale conversion, it is recommended to use the visual interface, on which you can batch upload the files for dialect conversion."),(0,n.yg)("p",null,"Follow these steps to deploy the visual conversion interface:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Environment: Docker, Docker-Compose")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Get Doris-SQL-Convertor Docker image")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Create a network for the image"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"docker network create app_network\n")),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"Decompress the package")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"tar xzvf doris-sql-convertor-1.0.1.tar.gz\n\ncd doris-sql-convertor\n")),(0,n.yg)("ol",{start:5},(0,n.yg)("li",{parentName:"ol"},"Edit the environment variables")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"FLASK_APP=server/app.py\nFLASK_DEBUG=1\nAPI_HOST=http://doris-sql-convertor-api:5000\n\n# DOCKER TAG\nAPI_TAG=latest\nWEB_TAG=latest\n")),(0,n.yg)("ol",{start:6},(0,n.yg)("li",{parentName:"ol"},"Start it up")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"sh start.sh\n")),(0,n.yg)("p",null,"After deployment, you can access the service by ",(0,n.yg)("inlineCode",{parentName:"p"},"ip:8080")," via your local browser. ",(0,n.yg)("inlineCode",{parentName:"p"},"8080"),' is the default port. You can change the mapping port. On the visual interface, you can select the source dialect type and target dialect type, and then click "Convert".'),(0,n.yg)("admonition",{title:"Note",type:"info"},(0,n.yg)("ol",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"For batch conversion, each SQL statement should end with ",(0,n.yg)("inlineCode",{parentName:"p"},"; "),".")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"The Doris SQL Convertor supports 239 UNION ALL conversions at most.")))),(0,n.yg)("p",null,"Join the ",(0,n.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2kl08hzc0-SPJe4VWmL_qzrFd2u2XYQA"},"Apache Doris community")," to seek guidance from the Doris makers or provide your feedback!"))}d.isMDXComponent=!0}}]);