"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[11134],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>p});var i=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=d(n),g=o,p=m["".concat(s,".").concat(g)]||m[g]||u[g]||l;return n?i.createElement(p,a(a({ref:t},c),{},{components:n})):i.createElement(p,a({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:o,a[1]=r;for(var d=2;d<l;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},240981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=n(58168),o=(n(296540),n(15680));const l={title:"BloomFilter Index",language:"en"},a=void 0,r={unversionedId:"table-design/index/bloomfilter",id:"version-2.1/table-design/index/bloomfilter",title:"BloomFilter Index",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/table-design/index/bloomfilter.md",sourceDirName:"table-design/index",slug:"/table-design/index/bloomfilter",permalink:"/docs/table-design/index/bloomfilter",draft:!1,tags:[],version:"2.1",frontMatter:{title:"BloomFilter Index",language:"en"},sidebar:"docs",previous:{title:"Inverted Index",permalink:"/docs/table-design/index/inverted-index"},next:{title:"N-Gram BloomFilter Index",permalink:"/docs/table-design/index/ngram-bloomfilter-index"}},s={},d=[{value:"Indexing Principles",id:"indexing-principles",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Creating a BloomFilter Index When Creating a Table",id:"creating-a-bloomfilter-index-when-creating-a-table",level:3},{value:"Viewing BloomFilter Indexes",id:"viewing-bloomfilter-indexes",level:3},{value:"Adding or Removing BloomFilter Indexes on an Existing Table",id:"adding-or-removing-bloomfilter-indexes-on-an-existing-table",level:3},{value:"Usage Example",id:"usage-example",level:2},{value:"Creating a BloomFilter Index",id:"creating-a-bloomfilter-index",level:3}],c={toc:d},m="wrapper";function u(e){let{components:t,...l}=e;return(0,o.yg)(m,(0,i.A)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"indexing-principles"},"Indexing Principles"),(0,o.yg)("p",null,"The BloomFilter index is a type of skip list index based on BloomFilter. Its principle is to use BloomFilter to skip data blocks that do not meet the specified conditions for equality queries, thereby reducing IO and accelerating queries."),(0,o.yg)("p",null,"BloomFilter is a fast lookup algorithm proposed by Bloom in 1970, which uses multiple hash functions. It is commonly used in scenarios where quick determination of whether an element belongs to a set is needed without requiring 100% accuracy. BloomFilter has the following characteristics:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"A space-efficient probabilistic data structure used to check if an element is in a set."),(0,o.yg)("li",{parentName:"ul"},"For a membership check, BloomFilter returns one of two results: possibly in the set or definitely not in the set.")),(0,o.yg)("p",null,"A BloomFilter consists of a very long binary bit array and a series of hash functions. The bit array is initially all set to 0. When an element is to be checked, it is hashed by a series of hash functions to generate a series of values, and the bits at these positions in the array are set to 1."),(0,o.yg)("p",null,"The figure below shows an example of a BloomFilter with m=18 and k=3 (where m is the size of the bit array and k is the number of hash functions). Elements x, y, and z in the set are hashed by 3 different hash functions into the bit array. When querying element w, if any bit calculated by the hash functions is 0, then w is not in the set. Conversely, if all bits are 1, it only indicates that w may be in the set, but not definitely, due to possible hash collisions."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Bloom_filter.svg",src:n(315846).A,width:"2560",height:"960"})),(0,o.yg)("p",null,'Thus, if all bits at the calculated positions are 1, it only indicates that the element may be in the set, not definitely, due to possible hash collisions. This is the "false positive" nature of BloomFilter. Therefore, a BloomFilter-based index can only skip data that does not meet the conditions but cannot precisely locate data that does.'),(0,o.yg)("p",null,"The Doris BloomFilter index is built on a per-page basis, with each data block storing a BloomFilter. During writing, each value in the data block is hashed into the corresponding BloomFilter. During querying, for equality conditions, it is checked if the BloomFilter of each data block contains the value. If not, the data block is skipped, reducing IO and speeding up the query."),(0,o.yg)("h2",{id:"use-cases"},"Use Cases"),(0,o.yg)("p",null,"BloomFilter indexes can accelerate equality queries (including = and IN) and are effective for high cardinality fields, such as unique id fields like userid."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"BloomFilter has the following limitations:"),(0,o.yg)("ol",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ol"},"It has no effect on queries other than in and =, such as !=, NOT IN, >, <, etc."),(0,o.yg)("li",{parentName:"ol"},"It does not support BloomFilter indexing on columns of type Tinyint, Float, Double."),(0,o.yg)("li",{parentName:"ol"},'It has limited acceleration effect on low cardinality fields. For example, a "gender" field with only two values will likely be included in almost every data block, making the BloomFilter index meaningless.')),(0,o.yg)("p",{parentName:"admonition"},"To check the effect of a BloomFilter index on a query, you can analyze relevant metrics in the Query Profile."),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"BlockConditionsFilteredBloomFilterTime is the time consumed by the BloomFilter index."),(0,o.yg)("li",{parentName:"ul"},"RowsBloomFilterFiltered is the number of rows filtered out by the BloomFilter. You can compare it with other Rows values to analyze the filtering effect of the BloomFilter index."))),(0,o.yg)("h2",{id:"syntax"},"Syntax"),(0,o.yg)("h3",{id:"creating-a-bloomfilter-index-when-creating-a-table"},"Creating a BloomFilter Index When Creating a Table"),(0,o.yg)("p",null,'Due to historical reasons, the syntax for defining BloomFilter indexes differs from the general INDEX syntax used for inverted indexes. BloomFilter indexes are specified in the table\'s PROPERTIES using "bloom_filter_columns", which can specify one or more fields.'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'PROPERTIES (\n"bloom_filter_columns" = "column_name1,column_name2"\n);\n')),(0,o.yg)("h3",{id:"viewing-bloomfilter-indexes"},"Viewing BloomFilter Indexes"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE table_name;\n")),(0,o.yg)("h3",{id:"adding-or-removing-bloomfilter-indexes-on-an-existing-table"},"Adding or Removing BloomFilter Indexes on an Existing Table"),(0,o.yg)("p",null,"Modify the table's bloom_filter_columns property via ALTER TABLE to add or remove BloomFilter indexes."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Add a BloomFilter index for column_name3")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE table_name SET ("bloom_filter_columns" = "column_name1,column_name2,column_name3");\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Remove the BloomFilter index for column_name1")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE table_name SET ("bloom_filter_columns" = "column_name2,column_name3");\n')),(0,o.yg)("h2",{id:"usage-example"},"Usage Example"),(0,o.yg)("p",null,"Here is an example of how to create a BloomFilter index in Doris."),(0,o.yg)("h3",{id:"creating-a-bloomfilter-index"},"Creating a BloomFilter Index"),(0,o.yg)("p",null,'The BloomFilter index in Doris is created by adding the "bloom_filter_columns" property in the CREATE TABLE statement, with k1, k2, k3 being the key columns for the BloomFilter index. For example, the following creates BloomFilter indexes on saler_id and category_id.'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS sale_detail_bloom  (\n    sale_date date NOT NULL COMMENT "Sale date",\n    customer_id int NOT NULL COMMENT "Customer ID",\n    saler_id int NOT NULL COMMENT "Salesperson",\n    sku_id int NOT NULL COMMENT "Product ID",\n    category_id int NOT NULL COMMENT "Product category",\n    sale_count int NOT NULL COMMENT "Sales quantity",\n    sale_price DECIMAL(12,2) NOT NULL COMMENT "Unit price",\n    sale_amt DECIMAL(20,2)  COMMENT "Total sales amount"\n)\nDUPLICATE KEY(sale_date, customer_id, saler_id, sku_id, category_id)\nDISTRIBUTED BY HASH(saler_id) BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"bloom_filter_columns"="saler_id,category_id"\n);\n')))}u.isMDXComponent=!0},315846:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Bloom_filter.svg-e437ea5c65c96143c00cdb97711e1b10.png"}}]);