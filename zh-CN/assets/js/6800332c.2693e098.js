"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[67610],{15680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>m});var a=o(296540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(o),h=r,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return o?a.createElement(m,n(n({ref:t},p),{},{components:o})):a.createElement(m,n({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,n=new Array(i);n[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,n[1]=s;for(var u=2;u<i;u++)n[u]=o[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},731489:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=o(58168),r=(o(296540),o(15680));const i={title:"Multi-tenant workload isolation: a better balance between isolation and utilization",summary:"Apache Doris supports workload isolation based on Resource Tag and Workload Group. It provides solutions for different tradeoffs among the level of isolation, resource utilization, and stable performance.",description:"Apache Doris supports workload isolation based on Resource Tag and Workload Group. It provides solutions for different tradeoffs among the level of isolation, resource utilization, and stable performance.",date:"2024-05-14",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/multi-tenant-workload-group.jpg"},n=void 0,s={permalink:"/zh-CN/blog/multi-tenant-workload-isolation-in-apache-doris",source:"@site/blog/multi-tenant-workload-isolation-in-apache-doris.md",title:"Multi-tenant workload isolation: a better balance between isolation and utilization",description:"Apache Doris supports workload isolation based on Resource Tag and Workload Group. It provides solutions for different tradeoffs among the level of isolation, resource utilization, and stable performance.",date:"2024-05-14T00:00:00.000Z",formattedDate:"2024\u5e745\u670814\u65e5",tags:[{label:"Tech Sharing",permalink:"/zh-CN/blog/tags/tech-sharing"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Multi-tenant workload isolation: a better balance between isolation and utilization",summary:"Apache Doris supports workload isolation based on Resource Tag and Workload Group. It provides solutions for different tradeoffs among the level of isolation, resource utilization, and stable performance.",description:"Apache Doris supports workload isolation based on Resource Tag and Workload Group. It provides solutions for different tradeoffs among the level of isolation, resource utilization, and stable performance.",date:"2024-05-14",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/multi-tenant-workload-group.jpg"},prevItem:{title:"Apache Doris version 2.0.10 has been released",permalink:"/zh-CN/blog/release-note-2.0.10"},nextItem:{title:"From Presto, Trino, ClickHouse, and Hive to Apache Doris: SQL convertor for easy migration",permalink:"/zh-CN/blog/from-presto-trino-clickhouse-and-hive-to-apache-doris-sql-convertor-for-easy-migration"}},l={authorsImageUrls:[void 0]},u=[{value:"Resource isolation based on Resource Tag",id:"resource-isolation-based-on-resource-tag",level:2},{value:"Workload isolation based on Workload Group",id:"workload-isolation-based-on-workload-group",level:2},{value:"CPU soft limit",id:"cpu-soft-limit",level:3},{value:"CPU hard limit",id:"cpu-hard-limit",level:3},{value:"Memory resource limit",id:"memory-resource-limit",level:3},{value:"Query queue",id:"query-queue",level:3},{value:"Tests",id:"tests",level:2},{value:"CPU soft limit test",id:"cpu-soft-limit-test",level:3},{value:"CPU hard limit test",id:"cpu-hard-limit-test",level:3},{value:"Test in simulated production environment",id:"test-in-simulated-production-environment",level:2},{value:"Recommendations &amp; plans",id:"recommendations--plans",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...i}=e;return(0,r.yg)(d,(0,a.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This is an in-depth introduction to the workload isolation capabilities of ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org"},"Apache Doris"),". But first of all, why and when do you need workload isolation? If you relate to any of the following situations, read on and you will end up with a solution:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"You have different business departments or tenants sharing the same cluster and you want to prevent the interference of workloads among them.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"You have query tasks of varying priority levels and you want to give priority to your critical tasks (such as real-time data analytics and online transactions) in terms of resources and execution. ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"You need workload isolation but also want high cost-effectiveness and resource utilization rates."))),(0,r.yg)("p",null,"Apache Doris supports workload isolation based on Resource Tag and Workload Group. Resource Tag isolates the CPU and memory resources for different workloads at the level of backend nodes, while the Workload Group mechanism can further divide the resources within a backend node for higher resource utilization.  "),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Wd3l5C4k8Ok&t=1s"},"Demo")," of using the Workload Manager in Apache Doris to set a CPU soft/hard limit for Workload Groups.")),(0,r.yg)("h2",{id:"resource-isolation-based-on-resource-tag"},"Resource isolation based on Resource Tag"),(0,r.yg)("p",null,"Let's begin with the architecture of Apache Doris. Doris has two ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/get-starting/what-is-apache-doris#technical-overview"},"types of nodes"),": frontends (FEs) and backends (BEs). FE nodes store metadata, manage clusters, process user requests, and parse query plans, while BE nodes are responsible for computation and data storage. Thus, BE nodes are the major resource consumers. "),(0,r.yg)("p",null,"The main idea of a Resource Tag-based isolation solution is to divide computing resources into groups by assigning tags to BE nodes in a cluster, where BE nodes of the same tag constitute a Resource Group. A Resource Group can be deemed as a unit for data storage and computation. For data ingested into Doris, the system will write data replicas into different Resource Groups according to the configurations. Queries will also be assigned to their corresponding ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/admin-manual/resource-admin/multi-tenant#tag-division-and-cpu-limitation-are-new-features-in-version-015-in-order-to-ensure-a-smooth-upgrade-from-the-old-version-doris-has-made-the-following-forward-compatibility"},"Resource Groups")," for execution. "),(0,r.yg)("p",null,"For example, if you want to separate read and write workloads in a 3-BE cluster, you can follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Assign Resource Tags to BE nodes"),': Bind 2 BEs to the "Read" tag and 1 BE to the "Write" tag. ')),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Assign Resource Tags to data replicas"),': Assuming that Table 1 has 3 replicas, bind 2 of them to the "Read" tag and 1 to the "Write" tag. Data written into Replica 3 will be synchronized to Replica 1 and Replica 2 and the data synchronization process consumes few resources of BE 1 and BE2.')),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Assign workload groups to Resource Tags"),': Queries that include the "Read" tag in their SQLs will be automatically routed to the nodes tagged with "Read" (in this case, BE 1 and BE 2). For data writing tasks, you also need to assign them with the "Write" tag, so they can be routed to the corresponding node (BE 3). In this way, there will be no resource contention between read and write workloads except the data synchronization overheads from replica 3 to replicate 1 and 2.'))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Resource isolation based on Resource Tag",src:o(710945).A,width:"1280",height:"719"})),(0,r.yg)("p",null,"Resource Tag also enables ",(0,r.yg)("strong",{parentName:"p"},"multi-tenancy"),' in Apache Doris. For example, computing and storage resources tagged with "User A" are for User A only, while those tagged with "User B" are exclusive to User B. This is how Doris implements multi-tenant resource isolation with Resource Tags at the BE side.'),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Resource isolation based on Resource Tag",src:o(59392).A,width:"1280",height:"609"})),(0,r.yg)("p",null,"Dividing the BE nodes into groups ensures ",(0,r.yg)("strong",{parentName:"p"},"a high level of isolation"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"CPU, memory, and I/O of different tenants are physically isolated.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"One tenant will never be affected by the failures (such as process crashes) of another tenant."))),(0,r.yg)("p",null,"But it has a few downsides:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},'In read-write separation, when the data writing stops, the BE nodes tagged with "Write" become idle. This reduces overall cluster utilization.')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Under multi-tenancy, if you want to further isolate different workloads of the same tenant by assigning separate BE nodes to each of them, you will need to endure significant costs and low resource utilization.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The number of tenants is tied to the number of data replicas. So if you have 5 tenants, you will need 5 data replicas. That's huge storage redundancy."))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"To improve on this,we provide a workload isolation solution based on Workload Group in Apache Doris 2.0.0, and enhanced it in ",(0,r.yg)("a",{parentName:"strong",href:"https://doris.apache.org/blog/release-note-2.1.0"},"Apache Doris 2.1.0"))),(0,r.yg)("h2",{id:"workload-isolation-based-on-workload-group"},"Workload isolation based on Workload Group"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/admin-manual/resource-admin/workload-group"},"Workload Group"),"-based solution realizes a more granular division of resources. It further divides CPU and memory resources within processes on BE nodes, meaning that the queries in one BE node can be isolated from each other to some extent. This avoids resource competition within BE processes and optimizes resource utilization."),(0,r.yg)("p",null,"Users can relate queries to Workload Groups, and thus limit the percentage of CPU and memory resources that a query can use. Under high cluster loads, Doris can automatically kill the most resource-consuming queries in a Workload Group. Under low cluster loads, Doris can allow multiple Workload Groups to share idle resources. "),(0,r.yg)("p",null,"Doris supports both CPU soft limit and CPU hard limit. The soft limit allows Workload Groups to break the limit and utilize idle resources, enabling more efficient utilization. The hard limit is a hard guarantee of stable performance because it prevents the mutual impact of Workload Groups. "),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"(CPU soft limit and CPU hard limit are contradictory to each other. You can choose between them based on your own use case.)")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Workload isolation based on Workload Group",src:o(276072).A,width:"1280",height:"710"})),(0,r.yg)("p",null,"Its differences from the Resource Tag-based solution include: "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Workload Groups are formed within processes. Multiple Workload Groups compete for resources within the same BE node.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The consideration of data replica distribution is out of the picture because Workload Group is only a way of resource management."))),(0,r.yg)("h3",{id:"cpu-soft-limit"},"CPU soft limit"),(0,r.yg)("p",null,"CPU soft limit is implemented by the ",(0,r.yg)("inlineCode",{parentName:"p"},"cpu_share")," parameter, which is similar to weights conceptually. Workload Groups with higher ",(0,r.yg)("inlineCode",{parentName:"p"},"cpu_share")," will be allocated more CPU time during a time slot. "),(0,r.yg)("p",null,"For example, if Group A is configured with a ",(0,r.yg)("inlineCode",{parentName:"p"},"cpu_share")," of 1, and Group B, 9. In a time slot of 10 seconds, when both Group A and Group B are fully loaded, Group A and Group B will be able to consume 1s and 9s of CPU time, respectively.  "),(0,r.yg)("p",null,"What happens in real-world cases is that, not all workloads in the cluster run at full capacity. Under the soft limit, if Group B has low or zero workload, then Group A will be able to use all 10s of CPU time, thus increasing the overall CPU utilization in the cluster."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"CPU soft limit",src:o(509301).A,width:"1280",height:"732"})),(0,r.yg)("p",null,"A soft limit brings flexibility and a higher resource utilization rate. On the flip side, it might cause performance fluctuations."),(0,r.yg)("h3",{id:"cpu-hard-limit"},"CPU hard limit"),(0,r.yg)("p",null,"CPU hard limit in Apache Doris 2.1.0 is designed for users who require stable performance. In simple terms, the CPU hard limit defines that a Workload Group cannot use more CPU resources than its limit whether there are idle CPU resources or not."),(0,r.yg)("p",null,"This is how it works: "),(0,r.yg)("p",null,"Suppose that Group A is set with ",(0,r.yg)("inlineCode",{parentName:"p"},"cpu_hard_limit=10%")," and Group B with ",(0,r.yg)("inlineCode",{parentName:"p"},"cpu_hard_limit=90%"),". If both Group A and Group B run at full load, Group A and Group B will respectively use 10% and 90% of the overall CPU time. The difference lies in when the workload of Group B decreases. In such cases, regardless of how high the query load of Group A is, it should not use more than the 10% CPU resources allocated to it. "),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"CPU hard limit",src:o(136858).A,width:"1280",height:"746"})),(0,r.yg)("p",null,"As opposed to soft limit, a hard limit guarantees stable system performance at the cost of flexibility and the possibility of a higher resource utilization rate. "),(0,r.yg)("h3",{id:"memory-resource-limit"},"Memory resource limit"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The memory of a BE node comprises the following parts:"),(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Reserved memory for the operating system.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Memory consumed by non-queries, which is not considered in the Workload Group's memory statistics.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Memory consumed by queries, including data writing. This can be tracked and controlled by Workload Group.")))),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"memory_limit")," parameter defines the maximum (%) memory available to a Workload Group within the BE process. It also affects the priority of Resource Groups."),(0,r.yg)("p",null,"Under initial status, a high-priority Resource Group will be allocated more memory. By setting ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_memory_overcommit"),", you can allow Resource Groups to occupy more memory than the limits when there is idle space. When memory is tight, Doris will cancel tasks to reclaim the memory resources that they commit.  In this case, the system will retain memory resources for high-priority resource groups as much as possible."),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"/images/memory-resource-limit.png",alt:"Memory resource limit",style:{display:"inline-block",width:300}})),(0,r.yg)("h3",{id:"query-queue"},"Query queue"),(0,r.yg)("p",null,"It happens that the cluster is undertaking more loads than it can handle. In this case, submitting new query requests will not only be fruitless but also interruptive to the queries in progress."),(0,r.yg)("p",null,"To improve on this, Apache Doris provides the ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/admin-manual/resource-admin/workload-group#query-queue"},"query queue")," mechanism. Users can put a limit on the number of queries that can run concurrently in the cluster. A query will be rejected when the query queue is full or after a waiting timeout, thus ensuring system stability under high loads."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Query queue",src:o(143144).A,width:"1280",height:"682"})),(0,r.yg)("p",null,"The query queue mechanism involves three parameters: ",(0,r.yg)("inlineCode",{parentName:"p"},"max_concurrency"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"max_queue_size"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"queue_timeout"),"."),(0,r.yg)("h2",{id:"tests"},"Tests"),(0,r.yg)("p",null,"To demonstrate the effectiveness of the CPU soft limit and hard limit, we did a few tests."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Environment: single machine, 16 cores, 64GB ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Deployment: 1 FE + 1 BE")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Dataset: ClickBench, TPC-H")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Load testing tool: Apache JMeter"))),(0,r.yg)("h3",{id:"cpu-soft-limit-test"},"CPU soft limit test"),(0,r.yg)("p",null,"Start two clients and continuously submit queries (ClickBench Q23) with and without using Workload Groups, respectively. Note that Page Cache should be disabled to prevent it from affecting the test results."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"CPU soft limit test",src:o(332188).A,width:"1280",height:"374"})),(0,r.yg)("p",null,"Comparing the throughputs of the two clients in both tests, it can be concluded that:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Without configuring Workload Groups"),", the two clients consume the CPU resources on an equal basis.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Configuring Workload Groups")," and setting the ",(0,r.yg)("inlineCode",{parentName:"p"},"cpu_share")," to 2:1, the throughput ratio of the two clients is 2:1. With a higher ",(0,r.yg)("inlineCode",{parentName:"p"},"cpu_share"),", Client 1 is provided with a higher portion of CPU resources, and it delivers a higher throughput. "))),(0,r.yg)("h3",{id:"cpu-hard-limit-test"},"CPU hard limit test"),(0,r.yg)("p",null,"Start a client, set ",(0,r.yg)("inlineCode",{parentName:"p"},"cpu_hard_limit=50%")," for the Workload Group, and execute ClickBench Q23 for 5 minutes under a concurrency level of 1, 2, and 4, respectively. "),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"CPU hard limit test",src:o(969501).A,width:"1280",height:"838"})),(0,r.yg)("p",null,"As the query concurrency increases, the CPU utilization rate remains at around 800%, meaning that 8 cores are used. On a 16-core machine, that's ",(0,r.yg)("strong",{parentName:"p"},"50% utilization"),", which is as expected. In addition, since CPU hard limits are imposed, the increase in TP99 latency as concurrency rises is also an expected outcome."),(0,r.yg)("h2",{id:"test-in-simulated-production-environment"},"Test in simulated production environment"),(0,r.yg)("p",null,"In real-world usage, users are particularly concerned about query latency rather than just query throughput, since latency is more easily perceptible in user experience. That's why we decided to validate the effectiveness of Workload Group in a simulated production environment."),(0,r.yg)("p",null,"We picked out a SQL set consisting of queries that should be finished within 1s (ClickBench Q15, Q17, Q23 and TPC-H Q3, Q7, Q19), including single-table aggregations and join queries. The size of the TPC-H dataset is 100GB."),(0,r.yg)("p",null,"Similarly, we conduct tests with and without configuring Workload Groups."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Test in simulated production environment",src:o(527855).A,width:"1280",height:"619"})),(0,r.yg)("p",null,"As the results show:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Without Workload Group")," (comparing Test 1 & 2): When dialing up the concurrency of Client 2, both clients experience a 2~3-time increase in query latency.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Configuring Workload Group")," (comparing Test 3 & 4): As the concurrency of Client 2 goes up, the performance fluctuation in Client 1 is much smaller, which is proof of how it is effectively protected by workload isolation."))),(0,r.yg)("h2",{id:"recommendations--plans"},"Recommendations & plans"),(0,r.yg)("p",null,"The Resource Tag-based solution is a thorough workload isolation plan. The Workload Group-based solution realizes a better balance between resource isolation and utilization, and it is complemented by the query queue mechanism for stability guarantee."),(0,r.yg)("p",null,"So which one to choose for your use case? Here is our recommendation:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Resource Tag"),": for use cases where different business lines of departments share the same cluster, so the resources and data are physically isolated for different tenants.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Workload Group"),": for use cases where one cluster undertakes various query workloads for flexible resource allocation."))),(0,r.yg)("p",null,"In future releases, we will keep improving user experience of the Workload Group and query queue features:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Freeing up memory space by canceling queries is a brutal method. We plan to implement that by disk spilling, which will bring higher stability in query performance.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Since memory consumed by non-queries in the BE is not included in Workload Group's memory statistics, users might observe a disparity between the BE process memory usage and Workload Group memory usage. We will address this issue to avoid confusion.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"In the query queue mechanism,  cluster load is controlled by setting the maximum query concurrency. We plan to enable dynamic maximum query concurrency based on resource availability at the BE. This is to create backpressure on the client side and thus improve the availability of Doris when clients keep submitting high loads.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The main idea of Resource Tag is to group the BE nodes, while that of Workload Group is to further divide the resources of a single BE node. For users to grasp these ideas, they need to learn about the concept of BE nodes in Doris first. However, from an operational perspective, users only need to understand the resource consumption percentage of each of their workloads and what priority they should have when cluster load is saturated. Thus, we will try and figure out a way to flatten the learning curve for users, such as keeping the concept of BE nodes in the black box. "))),(0,r.yg)("p",null,"For further assistance on workload isolation in Apache Doris, join the ",(0,r.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2kl08hzc0-SPJe4VWmL_qzrFd2u2XYQA"},"Apache Doris community"),"."))}c.isMDXComponent=!0},969501:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/CPU-hard-limit-test-55edf1e86571dd5256567852fecefa08.png"},136858:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/CPU-hard-limit-cff5be57e984d26b7df9039ce69e5018.png"},332188:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/CPU-soft-limit-test-6398c8f7b4a0be54817a4443c05343a6.png"},509301:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/CPU-soft-limit-c549d1cefbc8648c861695b19e405b6a.png"},143144:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/query-queue-863a0ad9b10c79e223d84abe16783f3c.png"},59392:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/resource-isolation-based-on-resource-tag-2-30b41e82f10cf3f14ee9363bdcea06b1.PNG"},710945:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/resource-isolation-based-on-resource-tag-af8fea20b39cee40b735034a21e723d6.PNG"},527855:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/test-in-simulated-production-environment-a97b3764ec737366e55558d2ffb5f89e.png"},276072:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/workload-isolation-based-on-workload-group-432d800f87b879c1ed7412a4f31e81ca.png"}}]);