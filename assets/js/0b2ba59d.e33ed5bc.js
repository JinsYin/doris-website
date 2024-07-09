"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[72576],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>h});var n=t(296540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=i,h=p["".concat(o,".").concat(u)]||p[u]||g[u]||r;return t?n.createElement(h,l(l({ref:a},d),{},{components:t})):n.createElement(h,l({ref:a},d))}));function h(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},160261:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=t(58168),i=(t(296540),t(15680));const r={title:"Data Lakehouse Overview",language:"en"},l=void 0,s={unversionedId:"lakehouse/lakehouse-overview",id:"lakehouse/lakehouse-overview",title:"Data Lakehouse Overview",description:"\x3c!--",source:"@site/docs/lakehouse/lakehouse-overview.md",sourceDirName:"lakehouse",slug:"/lakehouse/lakehouse-overview",permalink:"/docs/dev/lakehouse/lakehouse-overview",draft:!1,tags:[],version:"current",frontMatter:{title:"Data Lakehouse Overview",language:"en"},sidebar:"docs",previous:{title:"Remote User Defined Function Service",permalink:"/docs/dev/query/udf/remote-user-defined-function"},next:{title:"Hive Catalog",permalink:"/docs/dev/lakehouse/datalake-analytics/hive"}},o={},c=[{value:"Applicable scenarios",id:"applicable-scenarios",level:2},{value:"Doris-based data lakehouse architecture",id:"doris-based-data-lakehouse-architecture",level:2},{value:"Core technologies",id:"core-technologies",level:2},{value:"Extensible connection framework",id:"extensible-connection-framework",level:3},{value:"Efficient caching strategy",id:"efficient-caching-strategy",level:3},{value:"Native Reader",id:"native-reader",level:3},{value:"Merge I/O",id:"merge-io",level:3},{value:"Statistics collection",id:"statistics-collection",level:3},{value:"Multi-Catalog",id:"multi-catalog",level:2},{value:"Basic concepts",id:"basic-concepts",level:3},{value:"Examples",id:"examples",level:3},{value:"Connect to Hive",id:"connect-to-hive",level:3},{value:"Column type mapping",id:"column-type-mapping",level:3},{value:"Privilege management",id:"privilege-management",level:3},{value:"Database synchronization management",id:"database-synchronization-management",level:3},{value:"Metadata refresh",id:"metadata-refresh",level:3}],d={toc:c},p="wrapper";function g(e){let{components:a,...r}=e;return(0,i.yg)(p,(0,n.A)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Before the integration of data lake and data warehouse, the history of data analysis went through three eras: database, data warehouse, and data lake analytics."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Database, the fundamental concept, was primarily responsible for online transaction processing and providing basic data analysis capabilities.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"As data volumes grew, data warehouses emerged. They store valuable data that has been cleansed, processed, and modeled, providing analytics capabilities for business.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The advent of data lakes was to serve the needs of enterprises for storing, managing, and reprocessing raw data. They required low-cost storage for structured, semi-structured, and even unstructured data, and they also needed an integrated solution encompassing data processing, data management, and data governance."))),(0,i.yg)("p",null,'Data warehouses addresses the need for fast data analysis, while data lakes are good at data storage and management. The integration of them, known as "lakehouse", is to facilitate the seamless integration and free flow of data between the data lake and data warehouse. It enables users to leverage the analytic capabilities of the data warehouse while harnessing the data management power of the data lake.'),(0,i.yg)("h2",{id:"applicable-scenarios"},"Applicable scenarios"),(0,i.yg)("p",null,"We design the Doris Data Lakehouse solution for the following four applicable scenarios:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Lakehouse query acceleration: As a highly efficient OLAP query engine, Doris has excellent MPP-based vectorized distributed query capabilities. Data lake analysis with Doris will benefit from the efficient query engine.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Unified data analysis gateway: Doris provides data query and writing capabilities for various and heterogeneous data sources. Users can unify these external data sources onto Doris' data mapping structure, allowing for a consistent query experience when accessing external data sources through Doris.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Unified data integration: Doris, through its data lake integration capabilities, enables incremental or full data synchronization from multiple data sources to Doris. Doris processes the synchronized data and makes it available for querying. The processed data can also be exported to downstream systems as full or incremental data services. Using Doris, you can have less reliance on external tools and enable end-to-end connectivity from ata synchronization to data processing."))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"More open data platform: Many data warehouses have their own storage formats. They require external data to be imported into themselve before the data queryable. This creates a closed ecosystem where data in the data warehouse can only be accessed by the data warehouse itself. In this case, users might concern if data will be locked into a specific data warehouse or wonder if there are any other easy way for data export. The Doris lakehouse solution provides open data formats, such as Parquet/ORC, to allow data access by various external systems. Additionally, just like Iceberg and Hudi providing open metadata management capabilities, metadata, whether stored in Doris, Hive Metastore, or other unified metadata centers, can be accessed through publicly available APIs. An open data ecosystem makes it easy for enterprises to migrate to new data management systems and reduces the costs and risks in this process.")),(0,i.yg)("h2",{id:"doris-based-data-lakehouse-architecture"},"Doris-based data lakehouse architecture"),(0,i.yg)("p",null,"Apache Doris can work as a data lakehouse with its ",(0,i.yg)("a",{parentName:"p",href:"../lakehouse/lakehouse-overview#multi-catalog"},"Multi Catalog")," feature. It can access databases and data lakes including Apache Hive, Apache Iceberg, Apache Hudi, Apache Paimon, LakeSoul, Elasticsearch, MySQL, Oracle, and SQLServer. It also supports Apache Ranger for privilege management."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"doris-based-data-lakehouse-architecture",src:t(646864).A,width:"2560",height:"1280"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Data access steps:")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create metadata mapping: Apache Doris fetches metadata via Catalog and caches it for metadata management. For metadata mapping, it supports JDBC username-password authentication, Kerberos/Ranger-based authentication, and KMS-based data encryption. ")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Launch query request: When the user launches a query request from the Doris frontend (FE), Doris generates a query plan based on its cached metadata. Then, it utilizes the Native Reader to fetch data from external storage (HDFS, S3) for data computation and analysis. During query execution, it caches the hot data to prepare for similar queries in the future.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Return result: When a query is finished, it returns the query result on the frontend.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Write result to data lake: For users who need to write the result back to the data lake instead of returning it on the frontend, Doris supports result writeback in CSV, Parquet, and ORC formats via the export method to the data lake. "))),(0,i.yg)("h2",{id:"core-technologies"},"Core technologies"),(0,i.yg)("p",null,"Apache Doris empowers data lake analytics with its extensible connection framework, metadata caching, data caching, NativeReader, I/O optimization, and statistics collection capabilities."),(0,i.yg)("h3",{id:"extensible-connection-framework"},"Extensible connection framework"),(0,i.yg)("p",null,"The data connection framework in Apache Doris includes metadata connection and data reading."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Metadata connection: Metadata connection is conducted in the frontend of Doris. The MetaData Manager in the frontend can access and manage metadata from Hive Metastore, JDBC, and data files.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Data reading: Apache Doris has a NativeReader for efficient data reading from HDFS and object storage. It supports Parquet, ORC, and text data. You can also connect Apache Doris to the Java big data ecosystem via its JNI Connector."))),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"extensible-connection-framework",src:t(667245).A,width:"2560",height:"1280"})),(0,i.yg)("h3",{id:"efficient-caching-strategy"},"Efficient caching strategy"),(0,i.yg)("p",null,"Apache Doris caches metadata, data, and query results to improve query performance."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Metadata caching")),(0,i.yg)("p",null,"Apache Doris supports metadata synchronization by three methods: auto synchronization, periodic synchronization, and metadata subscription (for Hive Metastore only). It accesses metadata from the data lake and stores it in the memory of its frontend. When a user issues a query request, Doris can quickly fetch metadata from its own memory and generate a query plan accordingly. Apache Doris improves synchronization efficiency by merging the concurrent metadata events. It can process over 100 metadata events per second. "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"metadata-caching",src:t(550843).A,width:"2560",height:"1500"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Data caching")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"File caching: Apache Doris caches hot data from the data lake onto its local disks to reduce data transfer via the network and increase data access efficiency.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Cache distribution: Apache Doris distributes the cached data across all backend nodes via consistent hashing to avoid cache expiration caused by cluster scaling.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Cache eviction(update): When Apache Doris detects changes in the metadata of a data file, it promptly updates its cached data to ensure data consistency."))),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"data-caching",src:t(203952).A,width:"2560",height:"1806"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Query result caching & partition caching")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Query result caching: Apache Doris caches the results of previous SQL queries, so it can reuse them when similar queries are launched. It will read the corresponding result from the cache directly and return it to the client. This increases query efficiency and concurrency.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Partition caching: Apache Doris allows you to cache part of your data partitions in the backend to increase query efficiency. For example, if you need the data from the past 7 days (counting today), you can cache the data from the previous 6 days and merge it with today's data. This can largely reduce real-time computation burden and increase speed."))),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"query-result-caching-and-partition-caching",src:t(961051).A,width:"2560",height:"1470"})),(0,i.yg)("h3",{id:"native-reader"},"Native Reader"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Self-developed Native Reader to avoid data conversion: Apache Doris has its own columnar storage format, which is different from Parquet and ORC. To avoid overheads caused by data format conversion, we have built our own Native Reader for Parquet and ORC files.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Lazy materialization: The Native Reader can utilize indexes and filters to improve data reading. For example, when the user needs to do filtering based on the ID column, what the Native Reader does is to read and filter the ID column, take note of the relevant row numbers, and then read the corresponding rows of the other columns based on the row numbers recorded. This reduces data scanning and speeds up data reading."))),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"native-reader",src:t(21021).A,width:"2560",height:"2156"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Vectorized data reading: We have vectorized data file reading in Apache Doris to increase reading speed.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"vectorized-data-reading",src:t(35521).A,width:"2560",height:"1842"})),(0,i.yg)("h3",{id:"merge-io"},"Merge I/O"),(0,i.yg)("p",null,"A large number of small file network I/O requests can reduce I/O performance. To solve that, we introduce an I/O merging mechanism. "),(0,i.yg)("p",null,"For example, if you decide to merge any I/O requests smaller than 3MB, then instead of dealing with all 8 small I/O requests separately, the system only needs to read 5 timess. That's how it improves data access efficiency."),(0,i.yg)("p",null,"The downside of I/O merging is that it might read some irrelevant data, because it merges and reads together some intermediate data that might not be needed. Despite that, I/O merging can still bring a significant increase in overall throughput, especially for use cases with a large number of small files (1KB~1MB). Besides, users can mitigate the downside by adjusting the size of I/O merging."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"merge-io",src:t(77125).A,width:"2560",height:"2480"})),(0,i.yg)("h3",{id:"statistics-collection"},"Statistics collection"),(0,i.yg)("p",null,"Apache Doris collects statistical information to help the CBO understand data distribution, so that the CBO can evaluate the feasibility of each predicate and the cost of each execution plan. This helps the CBO figure out the most efficient query plan. It is also applicable in data lake analytics scenarios."),(0,i.yg)("p",null,"Methods of statistics collection include manual collection and auto collection."),(0,i.yg)("p",null,"Meanwhile, to avoid pressure on the Doris backend, we have enabled sampling collection of statistics."),(0,i.yg)("p",null,"In some cases, some data is frequently accessed while others are not, so Apache Doris allows partition-based statistics collection, so it can ensure high efficiency in hot data queries while mitigating the impact of statistics collection on the backend."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"statistics-collection",src:t(776236).A,width:"2560",height:"1814"})),(0,i.yg)("h2",{id:"multi-catalog"},"Multi-Catalog"),(0,i.yg)("p",null,"Multi-Catalog is designed to facilitate connection to external data catalogs and enhance the data lake analysis and federated data query capabilities of Doris."),(0,i.yg)("p",null,"In older versions of Doris, user data is in a two-tiered structure: database and table. Thus, connections to external catalogs could only be done at the database or table level. For example, users could create a mapping to a table in an external catalog via ",(0,i.yg)("inlineCode",{parentName:"p"},"create external table"),", or to a database via ",(0,i.yg)("inlineCode",{parentName:"p"},"create external database"),". If there are large amounts of databases or tables in the external catalog, users will need to create mappings to them one by one, which could be tedious."),(0,i.yg)("p",null,"With Multi-Catalog, Doris now has a new three-tiered metadata hierarchy (catalog -> database -> table), which means users can connect to external data at the catalog level directly. Currently it supports external catalogs including:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Apache Hive")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Apache Iceberg")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Apache Hudi")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Elasticsearch")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"JDBC")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Apache Paimon"))),(0,i.yg)("p",null,"Multi-Catalog works as an additional and enhanced external table connection method. It helps users conduct multi-catalog federated queries quickly."),(0,i.yg)("h3",{id:"basic-concepts"},"Basic concepts"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Internal Catalog")),(0,i.yg)("p",null,"Existing databases and tables in Doris are all under the Internal Catalog, which is the default catalog in Doris and cannot be modified or deleted."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"External Catalog")),(0,i.yg)("p",null,"Users can create an External Catalog using the ",(0,i.yg)("a",{parentName:"p",href:"../sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-CATALOG/"},"CREATE CATALOG")," command, and view the existing Catalogs via the ",(0,i.yg)("a",{parentName:"p",href:"../sql-manual/sql-statements/Show-Statements/SHOW-CATALOGS/"},"SHOW CATALOGS")," command."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Switch Catalog")),(0,i.yg)("p",null,"After logging in to Doris, you will enter the Internal Catalog by default. Then, you can view or switch to your target database via ",(0,i.yg)("inlineCode",{parentName:"p"},"SHOW DATABASES")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"USE DB")," . "),(0,i.yg)("p",null,"Example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Plain"},"SWITCH internal;\nSWITCH hive_catalog;\n")),(0,i.yg)("p",null,"After switching catalog, you can view or switch to your target database in that catalog via ",(0,i.yg)("inlineCode",{parentName:"p"},"SHOW DATABASES")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"USE DB"),". You can view and access data in External Catalogs the same way as doing that in the Internal Catalog."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Delete Catalog")),(0,i.yg)("p",null,"You cand delete an External Catalog via the ",(0,i.yg)("a",{parentName:"p",href:"../sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-CATALOG/"},"DROP CATALOG")," command. (The Internal Catalog cannot be deleted.) The deletion only removes the mapping in Doris to the corresponding catalog. It doesn't change the external catalog in external data sources by all means."),(0,i.yg)("h3",{id:"examples"},"Examples"),(0,i.yg)("h3",{id:"connect-to-hive"},"Connect to Hive"),(0,i.yg)("p",null,"The following is the instruction on how to connect to a Hive catalog using the Catalog feature."),(0,i.yg)("p",null,"For more information about connecting to Hive, please see ",(0,i.yg)("a",{parentName:"p",href:"../lakehouse/datalake-analytics/hive"},"Hive"),"."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Create Catalog")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004'\n);\n")),(0,i.yg)("p",null,"Syntax help: ",(0,i.yg)("a",{parentName:"p",href:"../sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-CATALOG/"},"CREATE CATALOG")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"View Catalog")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"View existing Catalogs via the ",(0,i.yg)("inlineCode",{parentName:"p"},"SHOW CATALOGS")," command:"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Plain"},"mysql> SHOW CATALOGS;\n+-----------+-------------+----------+-----------+-------------------------+---------------------+------------------------+\n| CatalogId | CatalogName | Type     | IsCurrent | CreateTime              | LastUpdateTime      | Comment                |\n+-----------+-------------+----------+-----------+-------------------------+---------------------+------------------------+\n|     10024 | hive        | hms      | yes       | 2023-12-25 16:11:41.687 | 2023-12-25 20:43:18 | NULL                   |\n|         0 | internal    | internal |           | UNRECORDED              | NULL                | Doris internal catalog |\n+-----------+-------------+----------+-----------+-------------------------+---------------------+------------------------+\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"../sql-manual/sql-statements/Show-Statements/SHOW-CATALOGS/"},"SHOW CATALOGS"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"You can view the CREATE CATALOG statement via ",(0,i.yg)("a",{parentName:"p",href:"../sql-manual/sql-statements/Show-Statements/SHOW-CREATE-CATALOG"},"SHOW CREATE CATALOG"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"You can modify the Catalog PROPERTIES via ",(0,i.yg)("a",{parentName:"p",href:"../sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-CATALOG"},"ALTER CATALOG"),"."))),(0,i.yg)("ol",{start:4},(0,i.yg)("li",{parentName:"ol"},"Switch Catalog")),(0,i.yg)("p",null,"Switch to the Hive Catalog using the ",(0,i.yg)("inlineCode",{parentName:"p"},"SWITCH")," command, and view the databases in it:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Plain"},"mysql> SWITCH hive;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SHOW DATABASES;\n+-----------+\n| Database  |\n+-----------+\n| default   |\n| random    |\n| ssb100    |\n| tpch1     |\n| tpch100   |\n| tpch1_orc |\n+-----------+\n")),(0,i.yg)("p",null,"Syntax help: ",(0,i.yg)("a",{parentName:"p",href:"../sql-manual/sql-statements/Utility-Statements/SWITCH/"},"SWITCH")),(0,i.yg)("ol",{start:5},(0,i.yg)("li",{parentName:"ol"},"Use the Catalog")),(0,i.yg)("p",null,"After switching to the Hive Catalog, you can use the relevant features."),(0,i.yg)("p",null,"For example, you can switch to Database tpch100, and view the tables in it:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Plain"},"mysql> USE tpch100;\nDatabase changed\n\nmysql> SHOW TABLES;\n+-------------------+\n| Tables_in_tpch100 |\n+-------------------+\n| customer          |\n| lineitem          |\n| nation            |\n| orders            |\n| part              |\n| partsupp          |\n| region            |\n| supplier          |\n+-------------------+\n")),(0,i.yg)("p",null,"You can view the schema of Table lineitem:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Plain"},"mysql> DESC lineitem;\n+-----------------+---------------+------+------+---------+-------+\n| Field           | Type          | Null | Key  | Default | Extra |\n+-----------------+---------------+------+------+---------+-------+\n| l_shipdate      | DATE          | Yes  | true | NULL    |       |\n| l_orderkey      | BIGINT        | Yes  | true | NULL    |       |\n| l_linenumber    | INT           | Yes  | true | NULL    |       |\n| l_partkey       | INT           | Yes  | true | NULL    |       |\n| l_suppkey       | INT           | Yes  | true | NULL    |       |\n| l_quantity      | DECIMAL(15,2) | Yes  | true | NULL    |       |\n| l_extendedprice | DECIMAL(15,2) | Yes  | true | NULL    |       |\n| l_discount      | DECIMAL(15,2) | Yes  | true | NULL    |       |\n| l_tax           | DECIMAL(15,2) | Yes  | true | NULL    |       |\n| l_returnflag    | TEXT          | Yes  | true | NULL    |       |\n| l_linestatus    | TEXT          | Yes  | true | NULL    |       |\n| l_commitdate    | DATE          | Yes  | true | NULL    |       |\n| l_receiptdate   | DATE          | Yes  | true | NULL    |       |\n| l_shipinstruct  | TEXT          | Yes  | true | NULL    |       |\n| l_shipmode      | TEXT          | Yes  | true | NULL    |       |\n| l_comment       | TEXT          | Yes  | true | NULL    |       |\n+-----------------+---------------+------+------+---------+-------+\n")),(0,i.yg)("p",null,"You can perform a query:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Plain"},"mysql> SELECT l_shipdate, l_orderkey, l_partkey FROM lineitem limit 10;\n+------------+------------+-----------+\n| l_shipdate | l_orderkey | l_partkey |\n+------------+------------+-----------+\n| 1998-01-21 |   66374304 |    270146 |\n| 1997-11-17 |   66374304 |    340557 |\n| 1997-06-17 |   66374400 |   6839498 |\n| 1997-08-21 |   66374400 |  11436870 |\n| 1997-08-07 |   66374400 |  19473325 |\n| 1997-06-16 |   66374400 |   8157699 |\n| 1998-09-21 |   66374496 |  19892278 |\n| 1998-08-07 |   66374496 |   9509408 |\n| 1998-10-27 |   66374496 |   4608731 |\n| 1998-07-14 |   66374592 |  13555929 |\n+------------+------------+-----------+\n")),(0,i.yg)("p",null,"Or you can conduct a join query:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Plain"},"mysql> SELECT l.l_shipdate FROM hive.tpch100.lineitem l WHERE l.l_partkey IN (SELECT p_partkey FROM internal.db1.part) LIMIT 10;\n+------------+\n| l_shipdate |\n+------------+\n| 1993-02-16 |\n| 1995-06-26 |\n| 1995-08-19 |\n| 1992-07-23 |\n| 1998-05-23 |\n| 1997-07-12 |\n| 1994-03-06 |\n| 1996-02-07 |\n| 1997-06-01 |\n| 1996-08-23 |\n+------------+\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The table is identified in the format of ",(0,i.yg)("inlineCode",{parentName:"p"},"catalog.database.table"),". For example, ",(0,i.yg)("inlineCode",{parentName:"p"},"internal.db1.part")," in the above snippet.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If the target table is in the current Database of the current Catalog, ",(0,i.yg)("inlineCode",{parentName:"p"},"catalog")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"database")," in the format can be omitted.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"You can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"INSERT INTO")," command to insert table data from the Hive Catalog into a table in the Internal Catalog. This is how you can import data from External Catalogs to the Internal Catalog:"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Plain"},"mysql> SWITCH internal;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> USE db1;\nDatabase changed\n\nmysql> INSERT INTO part SELECT * FROM hive.tpch100.part limit 1000;\nQuery OK, 1000 rows affected (0.28 sec)\n{'label':'insert_212f67420c6444d5_9bfc184bf2e7edb8', 'status':'VISIBLE', 'txnId':'4'}\n")),(0,i.yg)("h3",{id:"column-type-mapping"},"Column type mapping"),(0,i.yg)("p",null,"After you create a Catalog, Doris will automatically synchronize the databases and tables from the corresponding external catalog to it. The following shows how Doris maps different types of catalogs and tables."),(0,i.yg)("p",null,"As for types that cannot be mapped to a Doris column type, such as ",(0,i.yg)("inlineCode",{parentName:"p"},"UNION")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"INTERVAL")," , Doris will map them as the UNSUPPORTED type. Here are examples of queries in a table containing UNSUPPORTED types:"),(0,i.yg)("p",null,"Suppose the table is of the following schema:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Plain"},"k1 INT,\nk2 INT,\nk3 UNSUPPORTED,\nk4 INT\nselect * from table;                // Error: Unsupported type 'UNSUPPORTED_TYPE' in 'k3\nselect * except(k3) from table;     // Query OK.\nselect k1, k3 from table;           // Error: Unsupported type 'UNSUPPORTED_TYPE' in 'k3\nselect k1, k4 from table;           // Query OK.\n")),(0,i.yg)("p",null,"You can find more details of the mapping of various data sources (Hive, Iceberg, Hudi, Elasticsearch, and JDBC) in the corresponding pages."),(0,i.yg)("h3",{id:"privilege-management"},"Privilege management"),(0,i.yg)("p",null,"When using Doris to access the data in the External Catalog, by default, it relies on Doris's own permission access management function."),(0,i.yg)("p",null,"Along with the new Multi-Catalog feature, we also added privilege management at the Catalog level (See ",(0,i.yg)("a",{parentName:"p",href:"/docs/dev/admin-manual/auth/authentication-and-authorization"},"Authentication and Authorization")," for details)."),(0,i.yg)("p",null,"Users can also specify a custom authentication class through ",(0,i.yg)("inlineCode",{parentName:"p"},"access_controller.class"),". For example, if you specify it as"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},'"access_controller.class"="org.apache.doris.catalog.authorizer.ranger.hive.RangerHiveAccessControllerFactory"'),", then you can use Apache Range to perform authentication management on Hive Catalog. For more information see: ",(0,i.yg)("a",{parentName:"p",href:"../lakehouse/datalake-analytics/hive"},"Hive")),(0,i.yg)("h3",{id:"database-synchronization-management"},"Database synchronization management"),(0,i.yg)("p",null,"Set ",(0,i.yg)("inlineCode",{parentName:"p"},"include_database_list")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"exclude_database_list")," in Catalog properties to specify the databases to synchronize."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"include_database_list"),": only synchronize the specified databases, split with ",(0,i.yg)("inlineCode",{parentName:"p"},","),". The default setting is to synchronize all databases. The database names are case-sensitive."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"exclude_database_list"),": databases that do not need to synchronize, split with ",(0,i.yg)("inlineCode",{parentName:"p"},","),". The default setting is to exclude no databases. The database names are case-sensitive."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"If there is overlap between ",(0,i.yg)("inlineCode",{parentName:"p"},"include_database_list")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"exclude_database_list"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"exclude_database_list"),"will take precedence over ",(0,i.yg)("inlineCode",{parentName:"p"},"include_database_list"),"."),(0,i.yg)("p",{parentName:"blockquote"},"To connect to JDBC data sources, these two properties should work with ",(0,i.yg)("inlineCode",{parentName:"p"},"only_specified_database"),". See ",(0,i.yg)("a",{parentName:"p",href:"../lakehouse/database/jdbc"},"JDBC")," for more details.")),(0,i.yg)("h3",{id:"metadata-refresh"},"Metadata refresh"),(0,i.yg)("p",null,"By default, metadata changes in external catalogs, such as creating and dropping tables, adding and dropping columns, etc., will not be synchronized to Doris."),(0,i.yg)("p",null,"Users can refresh metadata in the following ways."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Manual refresh")),(0,i.yg)("p",null,"Users need to manually refresh the metadata through the ",(0,i.yg)("a",{parentName:"p",href:"../sql-manual/sql-statements/Utility-Statements/REFRESH"},"REFRESH")," command."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Regular refresh")),(0,i.yg)("p",null,"When creating the catalog, specify the refresh time parameter ",(0,i.yg)("inlineCode",{parentName:"p"},"metadata_refresh_interval_sec")," in the properties. It is measured in seconds. If this is set when creating the catalog, the FE master node will refresh the catalog regularly accordingly. Currently, Doris supports regular refresh for three types of catalogs:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"hms: Hive MetaStore")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"es: Elasticsearch")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Jdbc: standard interface for database access (JDBC)"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Plain"},'-- Set the catalog refresh interval to 20 seconds\nCREATE CATALOG es PROPERTIES (\n    "type"="es",\n    "hosts"="http://127.0.0.1:9200",\n    "metadata_refresh_interval_sec"="20"\n);\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Auto Refresh")),(0,i.yg)("p",null,"Currently Doris supports auto-refresh for ",(0,i.yg)("a",{parentName:"p",href:"../lakehouse/datalake-analytics/hive"},"Hive")," Catalog."))}g.isMDXComponent=!0},203952:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/data-caching-444edb5263d7bc341dc6df1e02974e6e.png"},646864:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/doris-based-data-lakehouse-architecture-fcb167042d9737581f2de39703a1f024.png"},667245:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/extensible-connection-framework-433087e32c6af447c2c4d365122182c9.png"},77125:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/merge-io-f04c0c15ff9f6223bfa417d1c5764fec.png"},550843:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/metadata-caching-54dbc98756ba30fda9dabb3ce245806b.png"},21021:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/native-reader-9f46b45eb7d77fe5150d57578a89f399.png"},961051:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/query-result-caching-and-partition-caching-bdd0f82f01cfcf4d844b0d2684538052.png"},776236:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/statistics-collection-e6cc78797019e68a091d5c3f06c0e7f8.png"},35521:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/vectorized-data-reading-dd73f63a3a5530ddfc95377cad74e2ea.png"}}]);