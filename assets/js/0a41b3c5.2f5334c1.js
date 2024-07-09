"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[32034],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var o=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},f="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),p=i,d=f["".concat(s,".").concat(p)]||f[p]||h[p]||a;return n?o.createElement(d,r(r({ref:t},c),{},{components:n})):o.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},522381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(58168),i=(n(296540),n(15680));const a={title:"Bucket Shuffle Join",language:"en"},r=void 0,l={unversionedId:"query-acceleration/join-optimization/bucket-shuffle-join",id:"version-1.2/query-acceleration/join-optimization/bucket-shuffle-join",title:"Bucket Shuffle Join",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/query-acceleration/join-optimization/bucket-shuffle-join.md",sourceDirName:"query-acceleration/join-optimization",slug:"/query-acceleration/join-optimization/bucket-shuffle-join",permalink:"/docs/1.2/query-acceleration/join-optimization/bucket-shuffle-join",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Bucket Shuffle Join",language:"en"},sidebar:"docs",previous:{title:"Materialized view",permalink:"/docs/1.2/query-acceleration/materialized-view"},next:{title:"Colocation Join",permalink:"/docs/1.2/query-acceleration/join-optimization/colocation-join"}},s={},u=[{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"Principle",id:"principle",level:2},{value:"Usage",id:"usage",level:2},{value:"Set session variable",id:"set-session-variable",level:3},{value:"View the type of join",id:"view-the-type-of-join",level:3},{value:"Planning rules of Bucket Shuffle Join",id:"planning-rules-of-bucket-shuffle-join",level:2}],c={toc:u},f="wrapper";function h(e){let{components:t,...a}=e;return(0,i.yg)(f,(0,o.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"bucket-shuffle-join"},"Bucket Shuffle Join"),(0,i.yg)("p",null,"Bucket Shuffle Join is a new function officially added in Doris 0.14. The purpose is to provide local optimization for some join queries to reduce the time-consuming of data transmission between nodes and speed up the query."),(0,i.yg)("p",null,"It's design, implementation can be referred to ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-doris/issues/4394"},"ISSUE 4394"),"\u3002"),(0,i.yg)("h2",{id:"noun-interpretation"},"Noun Interpretation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access."),(0,i.yg)("li",{parentName:"ul"},"BE: Backend, Doris's back-end node. Responsible for query execution and data storage."),(0,i.yg)("li",{parentName:"ul"},"Left table: the left table in join query. Perform probe expr. The order can be adjusted by join reorder."),(0,i.yg)("li",{parentName:"ul"},"Right table: the right table in join query. Perform build expr The order can be adjusted by join reorder.")),(0,i.yg)("h2",{id:"principle"},"Principle"),(0,i.yg)("p",null,"The conventional distributed join methods supported by Doris is: ",(0,i.yg)("inlineCode",{parentName:"p"},"Shuffle Join, Broadcast Join"),". Both of these join will lead to some network overhead."),(0,i.yg)("p",null,"For example, there are join queries for table A and table B. the join method is hashjoin. The cost of different join types is as follows:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Broadcast Join"),": If table a has three executing hashjoinnodes according to the data distribution, table B needs to be sent to the three HashJoinNode. Its network overhead is ",(0,i.yg)("inlineCode",{parentName:"li"},"3B "),", and its memory overhead is ",(0,i.yg)("inlineCode",{parentName:"li"},"3B"),". "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Shuffle Join"),": Shuffle join will distribute the data of tables A and B to the nodes of the cluster according to hash calculation, so its network overhead is ",(0,i.yg)("inlineCode",{parentName:"li"},"A + B")," and memory overhead is ",(0,i.yg)("inlineCode",{parentName:"li"},"B"),".")),(0,i.yg)("p",null,"The data distribution information of each Doris table is saved in FE. If the join statement hits the data distribution column of the left table, we should use the data distribution information to reduce the network and memory overhead of the join query. This is the source of the idea of bucket shuffle join."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Shuffle Join.png",src:n(694925).A,width:"2560",height:"1416"})),(0,i.yg)("p",null,"The picture above shows how the Bucket Shuffle Join works. The SQL query is A table join B table. The equivalent expression of join hits the data distribution column of A. According to the data distribution information of table A. Bucket Shuffle Join sends the data of table B to the corresponding data storage and calculation node of table A. The cost of Bucket Shuffle Join is as follows:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"network cost: ",(0,i.yg)("inlineCode",{parentName:"p"},"B < min(3B, A + B)"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"memory cost: ",(0,i.yg)("inlineCode",{parentName:"p"},"B <= min(3B, B)")))),(0,i.yg)("p",null,"Therefore, compared with Broadcast Join and Shuffle Join, Bucket shuffle join has obvious performance advantages. It reduces the time-consuming of data transmission between nodes and the memory cost of join. Compared with Doris's original join method, it has the following advantages"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"First of all, Bucket Shuffle Join reduces the network and memory cost which makes some join queries have better performance. Especially when FE can perform partition clipping and bucket clipping of the left table."),(0,i.yg)("li",{parentName:"ul"},"Secondly, unlike Colorate Join, it is not intrusive to the data distribution of tables, which is transparent to users. There is no mandatory requirement for the data distribution of the table, which is not easy to lead to the problem of data skew."),(0,i.yg)("li",{parentName:"ul"},"Finally, it can provide more optimization space for join reorder.")),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("h3",{id:"set-session-variable"},"Set session variable"),(0,i.yg)("p",null,"Set session variable ",(0,i.yg)("inlineCode",{parentName:"p"},"enable_bucket_shuffle_join")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"true"),", FE will automatically plan queries that can be converted to Bucket Shuffle Join."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"set enable_bucket_shuffle_join = true;\n")),(0,i.yg)("p",null,"In FE's distributed query planning, the priority order is Colorate Join -> Bucket Shuffle Join -> Broadcast Join -> Shuffle Join. However, if the user explicitly hints the type of join, for example: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"select * from test join [shuffle] baseall on test.k1 = baseall.k1;\n")),(0,i.yg)("p",null,"the above order of preference will not take effect."),(0,i.yg)("p",null,"The session variable is set to ",(0,i.yg)("inlineCode",{parentName:"p"},"true")," by default in version 0.14, while it needs to be set to ",(0,i.yg)("inlineCode",{parentName:"p"},"true")," manually in version 0.13."),(0,i.yg)("h3",{id:"view-the-type-of-join"},"View the type of join"),(0,i.yg)("p",null,"You can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"explain")," command to check whether the join is a Bucket Shuffle Join"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"|   2:HASH JOIN                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |\n|   |  join op: INNER JOIN (BUCKET_SHUFFLE)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |\n|   |  hash predicates:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |\n|   |  colocate: false, reason: table not in the same group                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |\n|   |  equal join conjunct: `test`.`k1` = `baseall`.`k1`                                         \n")),(0,i.yg)("p",null,"The join type indicates that the join method to be used is:",(0,i.yg)("inlineCode",{parentName:"p"},"BUCKET_SHUFFLE"),"\u3002"),(0,i.yg)("h2",{id:"planning-rules-of-bucket-shuffle-join"},"Planning rules of Bucket Shuffle Join"),(0,i.yg)("p",null,"In most scenarios, users only need to turn on the session variable by default to transparently use the performance improvement brought by this join method. However, if we understand the planning rules of Bucket Shuffle Join, we can use it to write more efficient SQL."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Bucket Shuffle Join only works when the join condition is equivalent. The reason is similar to Colorate Join. They all rely on hash to calculate the determined data distribution."),(0,i.yg)("li",{parentName:"ul"},"The bucket column of two tables is included in the equivalent join condition. When the bucket column of the left table is an equivalent join condition, it has a high probability of being planned as a Bucket Shuffle Join."),(0,i.yg)("li",{parentName:"ul"},"Because the hash values of different data types have different calculation results. Bucket Shuffle Join requires that the bucket column type of the left table and the equivalent join column type of the right table should be consistent, otherwise the corresponding planning cannot be carried out."),(0,i.yg)("li",{parentName:"ul"},"Bucket Shuffle Join only works on Doris native OLAP tables. For ODBC, MySQL, ES External Table, when they are used as left tables, they cannot be planned as Bucket Shuffle Join."),(0,i.yg)("li",{parentName:"ul"},"For partitioned tables, because the data distribution rules of each partition may be different, the Bucket Shuffle Join can only guarantee that the left table is a single partition. Therefore, in SQL execution, we need to use the ",(0,i.yg)("inlineCode",{parentName:"li"},"where")," condition as far as possible to make the partition clipping policy effective."),(0,i.yg)("li",{parentName:"ul"},"If the left table is a colorate table, the data distribution rules of each partition are determined. So the bucket shuffle join can perform better on the colorate table.")))}h.isMDXComponent=!0},694925:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/bucket_shuffle_join-f259f8e9a6bd51f78c85ce56f17bad5c.png"}}]);