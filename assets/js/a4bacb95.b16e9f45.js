"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[2566],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>h});var i=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),g=n,h=u["".concat(l,".").concat(g)]||u[g]||p[g]||o;return a?i.createElement(h,r(r({ref:t},d),{},{components:a})):i.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}g.displayName="MDXCreateElement"},561689:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=a(58168),n=(a(296540),a(15680));const o={title:"A/B Testing was a handful, until we found the replacement for Druid",description:"The recipe for successful A/B testing is quick computation, no duplication, and no data loss. For that, we used Apache Flink and Apache Doris to build our data platform.",date:"2023-06-01",author:"Heyu Dou, Xinxin Wang",tags:["Best Practice"],image:"/images/ab-testing-was-a-handful-until-we-found-the-replacement-for-druid.png"},r=void 0,s={permalink:"/blog/AB-Testing-was-a-Handful-Until-we-Found-the-Replacement-for-Druid",source:"@site/blog/AB-Testing-was-a-Handful-Until-we-Found-the-Replacement-for-Druid.md",title:"A/B Testing was a handful, until we found the replacement for Druid",description:"The recipe for successful A/B testing is quick computation, no duplication, and no data loss. For that, we used Apache Flink and Apache Doris to build our data platform.",date:"2023-06-01T00:00:00.000Z",formattedDate:"June 1, 2023",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Heyu Dou, Xinxin Wang"}],frontMatter:{title:"A/B Testing was a handful, until we found the replacement for Druid",description:"The recipe for successful A/B testing is quick computation, no duplication, and no data loss. For that, we used Apache Flink and Apache Doris to build our data platform.",date:"2023-06-01",author:"Heyu Dou, Xinxin Wang",tags:["Best Practice"],image:"/images/ab-testing-was-a-handful-until-we-found-the-replacement-for-druid.png"},prevItem:{title:"Apache Doris announced the official release of version 1.2.4",permalink:"/blog/release-note-1.2.4"},nextItem:{title:"Building a log analytics solution 10 times more cost-effective than Elasticsearch",permalink:"/blog/Building-A-Log-Analytics-Solution-10-Times-More-Cost-Effective-Than-Elasticsearch"}},l={authorsImageUrls:[void 0]},c=[{value:"Platform Architecture 1.0",id:"platform-architecture-10",level:2},{value:"Platform Architecture 2.0",id:"platform-architecture-20",level:2},{value:"Platform Architecture 3.0",id:"platform-architecture-30",level:2},{value:"Quick Computation",id:"quick-computation",level:2},{value:"Data Integrity Guarantee",id:"data-integrity-guarantee",level:2},{value:"Develop a Sink-to-Doris Component",id:"develop-a-sink-to-doris-component",level:3},{value:"Application Display",id:"application-display",level:3},{value:"Cluster Monitoring",id:"cluster-monitoring",level:3},{value:"Key Takeaways",id:"key-takeaways",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,n.yg)(u,(0,i.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Unlike normal reporting, A/B testing collects data of a different combination of dimensions every time. It is also a complicated kind of analysis of immense data. In our case, we have a real-time data volume of millions of OPS (Operations Per Second), with each operation involving around 20 data tags and over a dozen dimensions."),(0,n.yg)("p",null,"For effective A/B testing, as data engineers, we must ensure quick computation as well as high data integrity (which means no duplication and no data loss). I'm sure I'm not the only one to say this: it is hard!"),(0,n.yg)("p",null,"Let me show you our long-term struggle with our previous Druid-based data platform."),(0,n.yg)("h2",{id:"platform-architecture-10"},"Platform Architecture 1.0"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Components"),": Apache Storm + Apache Druid + MySQL"),(0,n.yg)("p",null,'This was our real-time datawarehouse, where Apache Storm was the real-time data processing engine and Apache Druid pre-aggregated the data. However, Druid did not support certain paging and join queries, so we wrote data from Druid to MySQL regularly, making MySQL the "materialized view" of Druid. But that was only a duct tape solution as it couldn\'t support our ever enlarging real-time data size. So data timeliness was unattainable.'),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Apache-Storm-Apache-Druid-MySQL",src:a(121103).A,width:"1709",height:"960"})),(0,n.yg)("h2",{id:"platform-architecture-20"},"Platform Architecture 2.0"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Components"),": Apache Flink + Apache Druid + TiDB"),(0,n.yg)("p",null,"This time, we replaced Storm with Flink, and MySQL with TiDB. Flink was more powerful in terms of semantics and features, while TiDB, with its distributed capability, was more maintainable than MySQL. But architecture 2.0 was nowhere near our goal of end-to-end data consistency, either, because when processing huge data, enabling TiDB transactions largely slowed down data writing. Plus, Druid itself did not support standard SQL, so there were some learning costs and frictions in usage."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Apache-Flink-Apache-Druid-TiDB",src:a(902196).A,width:"1592",height:"1083"})),(0,n.yg)("h2",{id:"platform-architecture-30"},"Platform Architecture 3.0"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Components"),": Apache Flink + ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris"},"Apache Doris")),(0,n.yg)("p",null,"We replaced Apache Druid with Apache Doris as the OLAP engine, which could also serve as a unified data serving gateway. So in Architecture 3.0, we only need to maintain one set of query logic. And we layered our real-time datawarehouse to increase reusability of real-time data."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Apache-Flink-Apache-Doris",src:a(123325).A,width:"1340",height:"1101"})),(0,n.yg)("p",null,"Turns out the combination of Flink and Doris was the answer. We can exploit their features to realize quick computation and data consistency. Keep reading and see how we make it happen."),(0,n.yg)("h2",{id:"quick-computation"},"Quick Computation"),(0,n.yg)("p",null,"As one piece of operation data can be attached to 20 tags, in A/B testing, we compare two groups of data centering only one tag each time. At first, we thought about splitting one piece of operation data (with 20 tags) into 20 pieces of data of only one tag upon data ingestion, and then importing them into Doris for analysis, but that could cause a data explosion and thus huge pressure on our clusters. "),(0,n.yg)("p",null,'Then we tried moving part of such workload to the computation engine. So we tried and "exploded" the data in Flink, but soon regretted it, because when we aggregated the data using the global hash windows in Flink jobs, the network and CPU usage also "exploded".'),(0,n.yg)("p",null,"Our third shot was to aggregate data locally in Flink right after we split it. As is shown below, we create a window in the memory of one operator for local aggregation; then we further aggregate it using the global hash windows. Since two operators chained together are in one thread, transferring data between operators consumes much less network resources. ",(0,n.yg)("strong",{parentName:"p"},"The two-step aggregation method, combined with the")," ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://doris.apache.org/docs/dev/data-table/data-model"},"Aggregate model"))," ",(0,n.yg)("strong",{parentName:"p"},"of Apache Doris, can keep data explosion in a manageable range.")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Apache-Flink-Apache-Doris-2",src:a(726978).A,width:"1642",height:"624"})),(0,n.yg)("p",null,"For convenience in A/B testing, we make the test tag ID the first sorted field in Apache Doris, so we can quickly locate the target data using sorted indexes. To further minimize data processing in queries, we create materialized views with the frequently used dimensions. With constant modification and updates, the materialized views are applicable in 80% of our queries."),(0,n.yg)("p",null,"To sum up, with the application of sorted index and materialized views, we reduce our query response time to merely seconds in A/B testing."),(0,n.yg)("h2",{id:"data-integrity-guarantee"},"Data Integrity Guarantee"),(0,n.yg)("p",null,"Imagine that your algorithm designers worked sweat and tears trying to improve the business, only to find their solution unable to be validated by A/B testing due to data loss. This is an unbearable situation, and we make every effort to avoid it."),(0,n.yg)("h3",{id:"develop-a-sink-to-doris-component"},"Develop a Sink-to-Doris Component"),(0,n.yg)("p",null,"To ensure end-to-end data integrity, we developed a Sink-to-Doris component. It is built on our own Flink Stream API scaffolding and realized by the idempotent writing of Apache Doris and the two-stage commit mechanism of Apache Flink. On top of it, we have a data protection mechanism against anomalies. "),(0,n.yg)("p",null,'It is the result of our long-term evolution. We used to ensure data consistency by implementing "one writing for one tag ID". Then we realized we could make good use of the transactions in Apache Doris and the two-stage commit of Apache Flink. '),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"idempotent-writing-two-stage-commit",src:a(948107).A,width:"3380",height:"3334"})),(0,n.yg)("p",null,"As is shown above, this is how two-stage commit works to guarantee data consistency:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Write data into local files;"),(0,n.yg)("li",{parentName:"ol"},"Stage One: pre-commit data to Apache Doris. Save the Doris transaction ID into status;"),(0,n.yg)("li",{parentName:"ol"},"If checkpoint fails, manually abandon the transaction; if checkpoint succeeds, commit the transaction in Stage Two;"),(0,n.yg)("li",{parentName:"ol"},"If the commit fails after multiple retries, the transaction ID and the relevant data will be saved in HDFS, and we can restore the data via Broker Load.")),(0,n.yg)("p",null,"We make it possible to split a single checkpoint into multiple transactions, so that we can prevent one Stream Load from taking more time than a Flink checkpoint in the event of large data volumes."),(0,n.yg)("h3",{id:"application-display"},"Application Display"),(0,n.yg)("p",null,"This is how we implement Sink-to-Doris. The component has blocked API calls and topology assembly. With simple configuration, we can write data into Apache Doris via Stream Load. "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Sink-to-Doris",src:a(678256).A,width:"3289",height:"1077"})),(0,n.yg)("h3",{id:"cluster-monitoring"},"Cluster Monitoring"),(0,n.yg)("p",null,"For cluster and host monitoring, we adopted the metrics templates provided by the Apache Doris community. For data monitoring, in addition to the template metrics, we added Stream Load request numbers and loading rates."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"stream-load-cluster-monitoring",src:a(275161).A,width:"2001",height:"832"})),(0,n.yg)("p",null,"Other metrics of our concerns include data writing speed and task processing time. In the case of anomalies, we will receive notifications in the form of phone calls, messages, and emails."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"cluster-monitoring",src:a(485774).A,width:"1280",height:"888"})),(0,n.yg)("h2",{id:"key-takeaways"},"Key Takeaways"),(0,n.yg)("p",null,"The recipe for successful A/B testing is quick computation and high data integrity. For this purpose, we implement a two-step aggregation method in Apache Flink, utilize the Aggregate model, materialized view, and short indexes of Apache Doris. Then we develop a Sink-to-Doris component, which is realized by the idempotent writing of Apache Doris and the two-stage commit mechanism of Apache Flink."))}p.isMDXComponent=!0},121103:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/360_1-8cb2f7a87f8ce60f9da14e0ec0ea7bb5.png"},902196:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/360_2-d32b762837d3788bdc43f0370fbf8199.png"},123325:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/360_3-c04ebf18268d873153f0365681d2a5d0.png"},726978:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/360_4-b4cad8ba4f8625718a23e7297885c40d.png"},948107:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/360_5-b5f8490ad14a1b485d4472b3db36e9d6.png"},678256:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/360_6-9d94599760bc55e52be086ec6d44cc69.png"},275161:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/360_7-a8f9f0c95e96e136b287be46bdbc4add.png"},485774:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/360_8-e02d4bf0c8cfab543e5693216fee6357.png"}}]);