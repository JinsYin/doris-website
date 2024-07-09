"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[59407],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>m});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,m=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(m,i(i({ref:t},g),{},{components:a})):n.createElement(m,i({ref:t},g))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},664721:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(58168),r=(a(296540),a(15680));const o={title:"Release 2.1.3",language:"en"},i=void 0,s={unversionedId:"releasenotes/release-2.1.3",id:"releasenotes/release-2.1.3",title:"Release 2.1.3",description:"\x3c!--",source:"@site/docs/releasenotes/release-2.1.3.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-2.1.3",permalink:"/docs/dev/releasenotes/release-2.1.3",draft:!1,tags:[],version:"current",frontMatter:{title:"Release 2.1.3",language:"en"},sidebar:"docs",previous:{title:"Release 2.1.4",permalink:"/docs/dev/releasenotes/release-2.1.4"},next:{title:"Release 2.1.2",permalink:"/docs/dev/releasenotes/release-2.1.2"}},p={},l=[{value:"Feature Enhancements",id:"feature-enhancements",level:2},{value:"Optimization and Improvements",id:"optimization-and-improvements",level:2},{value:"Behavioral Changes",id:"behavioral-changes",level:2},{value:"Upgrade Issues",id:"upgrade-issues",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2}],g={toc:l},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Apache Doris 2.1.3 was officially released on May 21, 2024. This version has updated several improvements, including writing data back to Hive, materialized view, permission management and bug fixes. It further enhances the performance and stability of the system."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Quick Download:")," ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"GitHub Release:")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,r.yg)("h2",{id:"feature-enhancements"},"Feature Enhancements"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. Support writing back data to hive tables via Hive Catalog")),(0,r.yg)("p",null,"Starting from version 2.1.3, Apache Doris supports DDL and DML operations on Hive. Users can directly create libraries and tables in Hive through Apache Doris and write data to Hive tables by executing ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO")," statements. This feature allows users to perform complete data query and write operations on Hive through Apache Doris, further simplifying the integrated lakehouse architecture."),(0,r.yg)("p",null,"Please refer: ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/lakehouse/datalake-building/hive-build/"},"https://doris.apache.org/docs/lakehouse/datalake-building/hive-build/")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. Support building new asynchronous materialized views on top of existing ones")),(0,r.yg)("p",null,"Users can create new asynchronous materialized views on top of existing ones, directly reusing pre-computed intermediate results for data processing. This simplifies complex aggregation and computation operations, reducing resource consumption and maintenance costs while further accelerating query performance and improving data availability. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32984"},"#32984")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"3. Support rewriting through nested materialized views")),(0,r.yg)("p",null,"Materialized View (MV) is a database object used to store query results. Now, Apache Doris supports rewriting through nested materialized views, which helps optimize query performance. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33362"},"#33362")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"4. New ",(0,r.yg)("inlineCode",{parentName:"strong"},"SHOW VIEWS")," statement")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW VIEWS")," statement can be used to query views in the database, facilitating better management and understanding of view objects in the database. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32358"},"#32358")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"5. Workload Group supports binding to specific BE nodes")),(0,r.yg)("p",null,"Workload Group can be bound to specific BE nodes, enabling more refined control over query execution to optimize resource usage and improve performance. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32874"},"#32874")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"6. Broker Load supports compressed JSON format")),(0,r.yg)("p",null,"Broker Load now supports importing compressed JSON format data, significantly reducing bandwidth requirements for data transmission and accelerating data import performance. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/30809"},"#30809")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"7. TRUNCATE Function can use columns as scale parameters")),(0,r.yg)("p",null,"The TRUNCATE function can now accept columns as scale parameters, providing more flexibility when processing numerical data. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32746"},"#32746")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"8. Add new functions ",(0,r.yg)("inlineCode",{parentName:"strong"},"uuid_to_int")," and ",(0,r.yg)("inlineCode",{parentName:"strong"},"int_to_uuid"))),(0,r.yg)("p",null,"These two functions allow users to convert between UUID and integer, significantly helping in scenarios that require handling UUID data. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33005"},"#33005")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"9. Add ",(0,r.yg)("inlineCode",{parentName:"strong"},"bypass_workload_group")," session variable to bypass query queue")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"bypass_workload_group")," session variable allows certain queries to bypass the Workload Group queue and execute directly, which is useful for handling critical queries that require quick responses. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33101"},"#33101")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"10. Add strcmp function")),(0,r.yg)("p",null,"The strcmp function compares two strings and returns their comparison result, simplifying text data processing. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33272"},"#33272")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"11. Support HLL functions ",(0,r.yg)("inlineCode",{parentName:"strong"},"hll_from_base64")," and ",(0,r.yg)("inlineCode",{parentName:"strong"},"hll_to_base64"))),(0,r.yg)("p",null,"HyperLogLog (HLL) is an algorithm for cardinality estimation. These two functions allow users to decode HLL data from a Base64-encoded string or encode HLL data as a Base64 string, which is very useful for storing and transmitting HLL data. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32089"},"#32089")),(0,r.yg)("h2",{id:"optimization-and-improvements"},"Optimization and Improvements"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. Replace SipHash with XXHash to improve shuffle performance")),(0,r.yg)("p",null,"Both SipHash and XXHash are hashing functions, but XXHash may provide faster hashing speeds and better performance in certain scenarios. This optimization aims to improve performance during data shuffling by adopting XXHash. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32919"},"#32919")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. Asynchronous materialized views support NULL partition columns in OLAP tables")),(0,r.yg)("p",null,"This enhancement allows asynchronous materialized views to support NULL partition columns in OLAP tables, enhancing data processing flexibility.",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32698"},"#32698")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"3. Limit maximum string length to 1024 when collecting column statistics to control BE memory usage")),(0,r.yg)("p",null,"Limiting the string length when collecting column statistics prevents excessive data from consuming too much BE memory, helping maintain system stability and performance. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32470"},"#32470")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"4. Support dynamic deletion of Bitmap cache to improve performance")),(0,r.yg)("p",null,"Dynamically deleting no longer needed Bitmap Cache can free up memory and improve system performance. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32991"},"#32991")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"5. Reduce memory usage during ALTER operations")),(0,r.yg)("p",null,"Reducing memory usage during ALTER operations improves the efficiency of system resource utilization. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33474"},"#33474")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"6. Support constant folding for complex types")),(0,r.yg)("p",null,"Supports constant folding for Array/Map/Struct complex types.",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32867"},"#32867")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"7. Add support for Variant type in Aggregate Key Model")),(0,r.yg)("p",null,"The Variant data type can store multiple data types. This optimization allows aggregation operations on Variant type data, enhancing the flexibility of semi-structured data analysis. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33493"},"#33493")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"8. Support new inverted index format in CCR")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33415"},"#33415")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"9. Optimize rewriting performance for nested materialized views")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34127"},"#34127")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"10. Support decimal256 type in row-based storage format")),(0,r.yg)("p",null,"Supporting the decimal256 type in row-based storage extends the system's ability to handle high-precision numerical data. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34887"},"#34887")),(0,r.yg)("h2",{id:"behavioral-changes"},"Behavioral Changes"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. Authorization")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Grant_priv permission changes"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"Grant_priv")," can no longer be arbitrarily granted. When performing a ",(0,r.yg)("inlineCode",{parentName:"p"},"GRANT")," operation, the user not only needs to have ",(0,r.yg)("inlineCode",{parentName:"p"},"Grant_priv")," but also the permissions to be granted. For example, to grant ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT")," permission on ",(0,r.yg)("inlineCode",{parentName:"p"},"table1"),", the user needs both ",(0,r.yg)("inlineCode",{parentName:"p"},"GRANT")," permission and ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT")," permission on ",(0,r.yg)("inlineCode",{parentName:"p"},"table1"),", enhancing security and consistency in permission management. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32825"},"#32825"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Workload group and resource usage_priv"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"Usage_priv")," for Workload Group and Resource is no longer global but limited to Resource and Workload Group, making permission granting and usage more specific. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32907"},"#32907"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Authorization for operations"),": Operations that were previously unauthorized now have corresponding authorizations for more detailed and comprehensive operational permission control. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33347"},"#33347")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. LOG directory configuration")),(0,r.yg)("p",null,"The log directory configuration for FE and BE now uniformly uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"LOG_DIR")," environment variable. All other different types of logs will be stored with ",(0,r.yg)("inlineCode",{parentName:"p"},"LOG_DIR")," as the root directory. To maintain compatibility between versions, the previous configuration item ",(0,r.yg)("inlineCode",{parentName:"p"},"sys_log_dir")," can still be used. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32933"},"#32933")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"3. S3 Table Function (TVF)")),(0,r.yg)("p",null,"Due to issues with correctly recognizing or processing S3 URLs in certain cases, the parsing logic for object storage paths has been refactored. For file paths in S3 table functions, the ",(0,r.yg)("inlineCode",{parentName:"p"},"force_parsing_by_standard_uri")," parameter needs to be passed to ensure correct parsing. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33858"},"#33858")),(0,r.yg)("h2",{id:"upgrade-issues"},"Upgrade Issues"),(0,r.yg)("p",null,"Since many users use certain keywords as column names or attribute values, the following keywords have been set as non-reserved, allowing users to use them as identifiers. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34613"},"#34613")),(0,r.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. Fix no data error when reading Hive tables on Tencent Cloud COSN")),(0,r.yg)("p",null,"Resolved the no data error that could occur when reading Hive tables on Tencent Cloud COSN, enhancing compatibility with Tencent Cloud storage services."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. Fix incorrect results returned by ",(0,r.yg)("inlineCode",{parentName:"strong"},"milliseconds_diff")," function")),(0,r.yg)("p",null,"Fixed an issue where the ",(0,r.yg)("inlineCode",{parentName:"p"},"milliseconds_diff")," function returned incorrect results in some cases, ensuring the accuracy of time difference calculations. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32897"},"#32897")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"3. User-defined variables should be rorwarded to the Master node")),(0,r.yg)("p",null,"Ensured that user-defined variables are correctly passed to the Master node for consistency and correct execution logic across the entire system. ","[#33013]",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33013"},"https://github.com/apache/doris/pull/33013")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"4. Fix Schema Change issues when adding complex type columns")),(0,r.yg)("p",null,"Resolved Schema Change issues that could arise when adding complex type columns, ensuring the correctness of Schema Changes. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/31824"},"#31824")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"5. Fix data loss issue in Routine Load when FE Master node changes")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Routine Load")," is often used to subscribe to Kafka message queues. This fix addresses potential data loss issues that may occur during FE Master node changes. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33678"},"#33678")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"6. Fix Routine Load failure when Workload Group cannot be found")),(0,r.yg)("p",null,"Resolved an issue where ",(0,r.yg)("inlineCode",{parentName:"p"},"Routine Load")," would fail if the specified Workload Group could not be found. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33596"},"#33596")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"7. Support column string64 to avoid join failures when string size overflows unit32")),(0,r.yg)("p",null,"In some cases, string sizes may exceed the unit32 limit. Supporting the ",(0,r.yg)("inlineCode",{parentName:"p"},"string64")," type ensures correct execution of string JOIN operations. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33850"},"#33850")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"8. Allow Hadoop users to create Paimon Catalog")),(0,r.yg)("p",null,"Permitted authorized Hadoop users to create Paimon Catalogs.",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33833"},"#33833")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"9. Fix ",(0,r.yg)("inlineCode",{parentName:"strong"},"function_ipxx_cidr")," function issues with constant parameters")),(0,r.yg)("p",null,"Resolved problems with the ",(0,r.yg)("inlineCode",{parentName:"p"},"function_ipxx_cidr")," function when handling constant parameters, ensuring the correctness of function execution.",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33968"},"#33968")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"10. Fix file download errors when restoring using HDFS")),(0,r.yg)("p",null,'Resolved "failed to download" errors encountered during data restoration using HDFS, ensuring the accuracy and reliability of data recovery. ',(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/issues/33303"},"#33303")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"11. Fix column permission issues related to hidden columns")),(0,r.yg)("p",null,"In some cases, permission settings for hidden columns may be incorrect. This fix ensures the correctness and security of column permission settings. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34849"},"#34849")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"12. Fix issue where Arrow Flight cannot obtain the correct IP in K8s deployments")),(0,r.yg)("p",null,"This fix resolves an issue where Arrow Flight cannot correctly obtain the IP address in Kubernetes deployment environments.",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34850"},"#34850")))}c.isMDXComponent=!0}}]);