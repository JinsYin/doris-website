"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[67027],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:o,l[1]=r;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},311335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var a=n(58168),o=(n(296540),n(15680));const i={title:"Colocation Join",language:"en"},l=void 0,r={unversionedId:"query/join-optimization/colocation-join",id:"version-2.1/query/join-optimization/colocation-join",title:"Colocation Join",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/query/join-optimization/colocation-join.md",sourceDirName:"query/join-optimization",slug:"/query/join-optimization/colocation-join",permalink:"/docs/query/join-optimization/colocation-join",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Colocation Join",language:"en"},sidebar:"docs",previous:{title:"Bucket Shuffle Join",permalink:"/docs/query/join-optimization/bucket-shuffle-join"},next:{title:"Runtime Filter",permalink:"/docs/query/join-optimization/runtime-filter"}},s={},u=[{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"Principle",id:"principle",level:2},{value:"Usage",id:"usage",level:2},{value:"Establishment of tables",id:"establishment-of-tables",level:3},{value:"Delete table",id:"delete-table",level:3},{value:"View Group",id:"view-group",level:3},{value:"Modify Colocate Group",id:"modify-colocate-group",level:3},{value:"Other related operations",id:"other-related-operations",level:3},{value:"Colocation Duplicate Balancing and Repair",id:"colocation-duplicate-balancing-and-repair",level:2},{value:"Replica Repair",id:"replica-repair",level:3},{value:"Duplicate Equilibrium",id:"duplicate-equilibrium",level:3},{value:"Query",id:"query",level:2},{value:"Advanced Operations",id:"advanced-operations",level:2},{value:"FE Configuration Item",id:"fe-configuration-item",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"colocation-join"},"Colocation Join"),(0,o.yg)("p",null,"Colocation Join is to provide local optimization for some Join queries to reduce data transmission time between nodes and speed up queries."),(0,o.yg)("p",null,"Note: This property will not be synchronized by CCR. If this table is copied by CCR, that is, PROPERTIES contains ",(0,o.yg)("inlineCode",{parentName:"p"},"is_being_synced = true"),", this property will be erased in this table."),(0,o.yg)("h2",{id:"noun-interpretation"},"Noun Interpretation"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access."),(0,o.yg)("li",{parentName:"ul"},"BE: Backend, Doris's back-end node. Responsible for query execution and data storage."),(0,o.yg)("li",{parentName:"ul"},"Colocation Group (CG): A CG contains one or more tables. Tables within the same group have the same Colocation Group Schema and the same data fragmentation distribution."),(0,o.yg)("li",{parentName:"ul"},"Colocation Group Schema (CGS): Used to describe table in a CG and general Schema information related to Colocation. Including bucket column type, bucket number and copy number.")),(0,o.yg)("h2",{id:"principle"},"Principle"),(0,o.yg)("p",null,"The Colocation Join function is to make a CG of a set of tables with the same CGS. Ensure that the corresponding data fragments of these tables will fall on the same BE node. When tables in CG perform Join operations on bucket columns, local data Join can be directly performed to reduce data transmission time between nodes."),(0,o.yg)("p",null,"The data of a table will eventually fall into a barrel according to the barrel column value Hash and the number of barrels modeled. Assuming that the number of buckets in a table is 8, there are eight buckets ",(0,o.yg)("inlineCode",{parentName:"p"},"[0, 1, 2, 3, 4, 5, 6, 7] "),"Buckets'. We call such a sequence a ",(0,o.yg)("inlineCode",{parentName:"p"},"Buckets Sequence"),". Each Bucket has one or more Tablets. When a table is a single partitioned table, there is only one Tablet in a Bucket. If it is a multi-partition table, there will be more than one."),(0,o.yg)("p",null,"In order for a table to have the same data distribution, the table in the same CG must ensure the following attributes are the same:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Barrel row and number of barrels"),(0,o.yg)("p",{parentName:"li"},"Bucket column, that is, the column specified in `DISTRIBUTED BY HASH (col1, col2,...)'in the table building statement. Bucket columns determine which column values are used to Hash data from a table into different Tablets. Tables in the same CG must ensure that the type and number of barrel columns are identical, and the number of barrels is identical, so that the data fragmentation of multiple tables can be controlled one by one.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Number of copies"),(0,o.yg)("p",{parentName:"li"},"The number of copies of all partitions of all tables in the same CG must be the same. If inconsistent, there may be a copy of a Tablet, and there is no corresponding copy of other table fragments on the same BE."))),(0,o.yg)("p",null,"Tables in the same CG do not require consistency in the number, scope, and type of partition columns."),(0,o.yg)("p",null,"After fixing the number of bucket columns and buckets, the tables in the same CG will have the same Buckets Sequence. The number of replicas determines the number of replicas of Tablets in each bucket, which BE they are stored on. Suppose that Buckets Sequence is ",(0,o.yg)("inlineCode",{parentName:"p"},"[0, 1, 2, 3, 4, 5, 6, 7] "),", and that BE nodes have ",(0,o.yg)("inlineCode",{parentName:"p"},"[A, B, C, D] "),"4. A possible distribution of data is as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"+---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+\n| 0 | | 1 | | 2 | | 3 | | 4 | | 5 | | 6 | | 7 |\n+---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+\n| A | | B | | C | | D | | A | | B | | C | | D |\n|   | |   | |   | |   | |   | |   | |   | |   |\n| B | | C | | D | | A | | B | | C | | D | | A |\n|   | |   | |   | |   | |   | |   | |   | |   |\n| C | | D | | A | | B | | C | | D | | A | | B |\n+---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+\n")),(0,o.yg)("p",null,"The data of all tables in CG will be uniformly distributed according to the above rules, which ensures that the data with the same barrel column value are on the same BE node, and local data Join can be carried out."),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("h3",{id:"establishment-of-tables"},"Establishment of tables"),(0,o.yg)("p",null,"When creating a table, you can specify the attribute ",(0,o.yg)("inlineCode",{parentName:"p"},'"colocate_with"="group_name"')," in ",(0,o.yg)("inlineCode",{parentName:"p"},"PROPERTIES"),", which means that the table is a Colocation Join table and belongs to a specified Colocation Group."),(0,o.yg)("p",null,"Examples:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'CREATE TABLE tbl (k1 int, v1 int sum)\nDISTRIBUTED BY HASH(k1)\nBUCKETS 8\nPROPERTIES(\n  "colocate_with" = "group1"\n);\n')),(0,o.yg)("p",null,"If the specified group does not exist, Doris automatically creates a group that contains only the current table. If the Group already exists, Doris checks whether the current table satisfies the Colocation Group Schema. If satisfied, the table is created and added to the Group. At the same time, tables create fragments and replicas based on existing data distribution rules in Groups.\nGroup belongs to a database, and its name is unique in a database. Internal storage is the full name of Group ",(0,o.yg)("inlineCode",{parentName:"p"},"dbId_groupName"),", but users only perceive groupName."),(0,o.yg)("version",{since:"dev"},(0,o.yg)("p",null,"In version 2.0, Doris supports cross-Database Group. When creating a table, you need to use the keyword ",(0,o.yg)("inlineCode",{parentName:"p"},"__global__")," as a prefix of the Group name. like:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'CREATE TABLE tbl (k1 int, v1 int sum)\nDISTRIBUTED BY HASH(k1)\nBUCKETS 8\nPROPERTIES(\n     "colocate_with" = "__global__group1"\n);\n')),(0,o.yg)("p",null,"The Group prefixed with ",(0,o.yg)("inlineCode",{parentName:"p"},"__global__")," no longer belongs to a Database, and its name is also globally unique."),(0,o.yg)("p",null,"Cross-Database Colocate Join can be realized by creating a Global Group.")),(0,o.yg)("h3",{id:"delete-table"},"Delete table"),(0,o.yg)("p",null,"When the last table in Group is deleted completely (deleting completely means deleting from the recycle bin). Usually, when a table is deleted by the ",(0,o.yg)("inlineCode",{parentName:"p"},"DROP TABLE")," command, it will be deleted after the default one-day stay in the recycle bin, and the group will be deleted automatically."),(0,o.yg)("h3",{id:"view-group"},"View Group"),(0,o.yg)("p",null,"The following command allows you to view the existing Group information in the cluster."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"SHOW PROC '/colocation_group';\n\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| GroupId     | GroupName    | TableIds     | BucketsNum | ReplicationNum | DistCols | IsStable |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| 10005.10008 | 10005_group1 | 10007, 10040 | 10         | 3              | int(11)  | true     |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"GroupId: The unique identity of a group's entire cluster, with DB ID in the first half and group ID in the second half."),(0,o.yg)("li",{parentName:"ul"},"GroupName: The full name of Group."),(0,o.yg)("li",{parentName:"ul"},"Tablet Ids: The group contains a list of Tables'ID."),(0,o.yg)("li",{parentName:"ul"},"Buckets Num: Number of barrels."),(0,o.yg)("li",{parentName:"ul"},"Replication Num: Number of copies."),(0,o.yg)("li",{parentName:"ul"},"DistCols: Distribution columns, "),(0,o.yg)("li",{parentName:"ul"},"IsStable: Is the group stable (for the definition of stability, see section `Collocation replica balancing and repair').")),(0,o.yg)("p",null,"You can further view the data distribution of a group by following commands:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"SHOW PROC '/colocation_group/10005.10008';\n\n+-------------+---------------------+\n| BucketIndex | BackendIds          |\n+-------------+---------------------+\n| 0           | 10004, 10002, 10001 |\n| 1           | 10003, 10002, 10004 |\n| 2           | 10002, 10004, 10001 |\n| 3           | 10003, 10002, 10004 |\n| 4           | 10002, 10004, 10003 |\n| 5           | 10003, 10002, 10001 |\n| 6           | 10003, 10004, 10001 |\n| 7           | 10003, 10004, 10002 |\n+-------------+---------------------+\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"BucketIndex: Subscript to the bucket sequence."),(0,o.yg)("li",{parentName:"ul"},"Backend Ids: A list of BE node IDs where data fragments are located in buckets.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"The above commands require ADMIN privileges. Normal user view is not supported at this time.")),(0,o.yg)("h3",{id:"modify-colocate-group"},"Modify Colocate Group"),(0,o.yg)("p",null,"You can modify the Colocation Group property of a table that has been created. Examples:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},'ALTER TABLE tbl SET ("colocate_with" = "group2");')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"If the table has not previously specified a Group, the command checks the Schema and adds the table to the Group (if the Group does not exist, it will be created)."),(0,o.yg)("li",{parentName:"ul"},"If other groups are specified before the table, the command first removes the table from the original group and adds a new group (if the group does not exist, it will be created).")),(0,o.yg)("p",null,"You can also delete the Colocation attribute of a table by following commands:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},'ALTER TABLE tbl SET ("colocate_with" = "");')),(0,o.yg)("h3",{id:"other-related-operations"},"Other related operations"),(0,o.yg)("p",null,"When an ADD PARTITION is added to a table with a Colocation attribute and the number of copies is modified, Doris checks whether the modification violates the Colocation Group Schema and rejects it if it does."),(0,o.yg)("h2",{id:"colocation-duplicate-balancing-and-repair"},"Colocation Duplicate Balancing and Repair"),(0,o.yg)("p",null,"Copy distribution of Colocation tables needs to follow the distribution specified in Group, so it is different from common fragmentation in replica repair and balancing."),(0,o.yg)("p",null,"Group itself has a Stable attribute, when Stable is true, which indicates that all fragments of the table in the current Group are not changing, and the Colocation feature can be used normally. When Stable is false, it indicates that some tables in Group are being repaired or migrated. At this time, Colocation Join of related tables will degenerate into ordinary Join."),(0,o.yg)("h3",{id:"replica-repair"},"Replica Repair"),(0,o.yg)("p",null,"Copies can only be stored on specified BE nodes. So when a BE is unavailable (downtime, Decommission, etc.), a new BE is needed to replace it. Doris will first look for the BE with the lowest load to replace it. After replacement, all data fragments on the old BE in the Bucket will be repaired. During the migration process, Group is marked Unstable."),(0,o.yg)("h3",{id:"duplicate-equilibrium"},"Duplicate Equilibrium"),(0,o.yg)("p",null,"Doris will try to distribute the fragments of the Collocation table evenly across all BE nodes. For the replica balancing of common tables, the granularity is single replica, that is to say, it is enough to find BE nodes with lower load for each replica alone. The equilibrium of the Colocation table is at the Bucket level, where all replicas within a Bucket migrate together. We adopt a simple equalization algorithm, which distributes Buckets Sequence evenly on all BEs, regardless of the actual size of the replicas, but only according to the number of replicas. Specific algorithms can be referred to the code annotations in ",(0,o.yg)("inlineCode",{parentName:"p"},"ColocateTableBalancer.java"),"."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note 1: Current Colocation replica balancing and repair algorithms may not work well for heterogeneous deployed Oris clusters. The so-called heterogeneous deployment, that is, the BE node's disk capacity, number, disk type (SSD and HDD) is inconsistent. In the case of heterogeneous deployment, small BE nodes and large BE nodes may store the same number of replicas."),(0,o.yg)("p",{parentName:"blockquote"},"Note 2: When a group is in an Unstable state, the Join of the table in it will degenerate into a normal Join. At this time, the query performance of the cluster may be greatly reduced. If you do not want the system to balance automatically, you can set the FE configuration item ",(0,o.yg)("inlineCode",{parentName:"p"},"disable_colocate_balance")," to prohibit automatic balancing. Then open it at the right time. (See Section ",(0,o.yg)("inlineCode",{parentName:"p"},"Advanced Operations")," for details)")),(0,o.yg)("h2",{id:"query"},"Query"),(0,o.yg)("p",null,"The Colocation table is queried in the same way as ordinary tables, and users do not need to perceive Colocation attributes. If the Group in which the Colocation table is located is in an Unstable state, it will automatically degenerate to a normal Join."),(0,o.yg)("p",null,"Examples are given to illustrate:"),(0,o.yg)("p",null,"Table 1:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'CREATE TABLE `tbl1` (\n    `k1` date NOT NULL COMMENT "",\n    `k2` int(11) NOT NULL COMMENT "",\n    `v1` int(11) SUM NOT NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`k1`, `k2`)\nPARTITION BY RANGE(`k1`)\n(\n    PARTITION p1 VALUES LESS THAN (\'2019-05-31\'),\n    PARTITION p2 VALUES LESS THAN (\'2019-06-30\')\n)\nDISTRIBUTED BY HASH(`k2`) BUCKETS 8\nPROPERTIES (\n    "colocate_with" = "group1"\n);\n')),(0,o.yg)("p",null,"Table 2:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'CREATE TABLE `tbl2` (\n    `k1` datetime NOT NULL COMMENT "",\n    `k2` int(11) NOT NULL COMMENT "",\n    `v1` double SUM NOT NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`k1`, `k2`)\nDISTRIBUTED BY HASH(`k2`) BUCKETS 8\nPROPERTIES (\n    "colocate_with" = "group1"\n);\n')),(0,o.yg)("p",null,"View the query plan:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"DESC SELECT * FROM tbl1 INNER JOIN tbl2 ON (tbl1.k2 = tbl2.k2);\n\n+----------------------------------------------------+\n| Explain String                                     |\n+----------------------------------------------------+\n| PLAN FRAGMENT 0                                    |\n|  OUTPUT EXPRS:`tbl1`.`k1` |                        |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   RESULT SINK                                      |\n|                                                    |\n|   2:HASH JOIN                                      |\n|   |  join op: INNER JOIN                           |\n|   |  hash predicates:                              |\n|   |  colocate: true                                |\n|   |    `tbl1`.`k2` = `tbl2`.`k2`                   |\n|   |  tuple ids: 0 1                                |\n|   |                                                |\n|   |----1:OlapScanNode                              |\n|   |       TABLE: tbl2                              |\n|   |       PREAGGREGATION: OFF. Reason: null        |\n|   |       partitions=0/1                           |\n|   |       rollup: null                             |\n|   |       buckets=0/0                              |\n|   |       cardinality=-1                           |\n|   |       avgRowSize=0.0                           |\n|   |       numNodes=0                               |\n|   |       tuple ids: 1                             |\n|   |                                                |\n|   0:OlapScanNode                                   |\n|      TABLE: tbl1                                   |\n|      PREAGGREGATION: OFF. Reason: No AggregateInfo |\n|      partitions=0/2                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 0                                  |\n+----------------------------------------------------+\n")),(0,o.yg)("p",null,"If Colocation Join works, the Hash Join Node will show ",(0,o.yg)("inlineCode",{parentName:"p"},"colocate: true"),"."),(0,o.yg)("p",null,"If not, the query plan is as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"+----------------------------------------------------+\n| Explain String                                     |\n+----------------------------------------------------+\n| PLAN FRAGMENT 0                                    |\n|  OUTPUT EXPRS:`tbl1`.`k1` |                        |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   RESULT SINK                                      |\n|                                                    |\n|   2:HASH JOIN                                      |\n|   |  join op: INNER JOIN (BROADCAST)               |\n|   |  hash predicates:                              |\n|   |  colocate: false, reason: group is not stable  |\n|   |    `tbl1`.`k2` = `tbl2`.`k2`                   |\n|   |  tuple ids: 0 1                                |\n|   |                                                |\n|   |----3:EXCHANGE                                  |\n|   |       tuple ids: 1                             |\n|   |                                                |\n|   0:OlapScanNode                                   |\n|      TABLE: tbl1                                   |\n|      PREAGGREGATION: OFF. Reason: No AggregateInfo |\n|      partitions=0/2                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 0                                  |\n|                                                    |\n| PLAN FRAGMENT 1                                    |\n|  OUTPUT EXPRS:                                     |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   STREAM DATA SINK                                 |\n|     EXCHANGE ID: 03                                |\n|     UNPARTITIONED                                  |\n|                                                    |\n|   1:OlapScanNode                                   |\n|      TABLE: tbl2                                   |\n|      PREAGGREGATION: OFF. Reason: null             |\n|      partitions=0/1                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 1                                  |\n+----------------------------------------------------+\n")),(0,o.yg)("p",null,"The HASH JOIN node displays the corresponding reason: ",(0,o.yg)("inlineCode",{parentName:"p"},"colocate: false, reason: group is not stable"),". At the same time, an EXCHANGE node will be generated."),(0,o.yg)("h2",{id:"advanced-operations"},"Advanced Operations"),(0,o.yg)("h3",{id:"fe-configuration-item"},"FE Configuration Item"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"disable","_","colocate","_","relocate")),(0,o.yg)("p",null,"Whether to close Doris's automatic Colocation replica repair. The default is false, i.e. not closed. This parameter only affects the replica repair of the Colocation table, but does not affect the normal table."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"disable","_","colocate","_","balance")),(0,o.yg)("p",null,"Whether to turn off automatic Colocation replica balancing for Doris. The default is false, i.e. not closed. This parameter only affects the replica balance of the Collocation table, but does not affect the common table."),(0,o.yg)("p",null,"User can set these configurations at runtime. See ",(0,o.yg)("inlineCode",{parentName:"p"},"HELP ADMIN SHOW CONFIG;")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"HELP ADMIN SET CONFIG;"),"."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"disable","_","colocate","_","join")),(0,o.yg)("p",null,"Whether to turn off the Colocation Join function or not. In 0.10 and previous versions, the default is true, that is, closed. In a later version, it will default to false, that is, open."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"use","_","new","_","tablet","_","scheduler")),(0,o.yg)("p",null,"In 0.10 and previous versions, the new replica scheduling logic is incompatible with the Colocation Join function, so in 0.10 and previous versions, if ",(0,o.yg)("inlineCode",{parentName:"p"},"disable_colocate_join = false"),", you need to set ",(0,o.yg)("inlineCode",{parentName:"p"},"use_new_tablet_scheduler = false"),", that is, close the new replica scheduler. In later versions, ",(0,o.yg)("inlineCode",{parentName:"p"},"use_new_tablet_scheduler")," will be equal to true."),(0,o.yg)("p",null,"###HTTP Restful API"),(0,o.yg)("p",null,"Doris provides several HTTP Restful APIs related to Colocation Join for viewing and modifying Colocation Group."),(0,o.yg)("p",null,"The API is implemented on the FE side and accessed using ",(0,o.yg)("inlineCode",{parentName:"p"},"fe_host: fe_http_port"),". ADMIN privileges are required."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"View all Colocation information for the cluster"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'GET /api/colocate\n\nReturn the internal Colocation info in JSON format:\n\n{\n    "msg": "success",\n  "code": 0,\n  "data": {\n    "infos": [\n      ["10003.12002", "10003_group1", "10037, 10043", "1", "1", "int(11)", "true"]\n    ],\n    "unstableGroupIds": [],\n    "allGroupIds": [{\n      "dbId": 10003,\n      "grpId": 12002\n    }]\n  },\n  "count": 0 \n}\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Mark Group as Stable or Unstable"))),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Mark as Stable"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"```\nDELETE /api/colocate/group_stable?db_id=10005&group_id=10008\n\nReturns: 200\n```\n"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Mark as Unstable"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"```\nPOST /api/colocate/group_stable?db_id=10005&group_id=10008\n\nReturns: 200\n```\n")))),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Setting Data Distribution for Group"),(0,o.yg)("p",{parentName:"li"},"The interface can force the number distribution of a group."),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"POST /api/colocate/bucketseq?db_id=10005&group_id=10008\n\nBody:\n[[10004,10002],[10003,10002],[10002,10004],[10003,10002],[10002,10004],[10003,10002],[10003,10004],[10003,10004],[10003,10004],[10002,10004]]\n\nReturns: 200\n")),(0,o.yg)("p",{parentName:"li"},"Body is a Buckets Sequence represented by a nested array and the ID of the BE where the fragments are distributed in each Bucket."),(0,o.yg)("p",{parentName:"li"},"Note that using this command, you may need to set the FE configuration ",(0,o.yg)("inlineCode",{parentName:"p"},"disable_colocate_relocate")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"disable_colocate_balance")," to true. That is to shut down the system for automatic Colocation replica repair and balancing. Otherwise, it may be automatically reset by the system after modification."))))}d.isMDXComponent=!0}}]);