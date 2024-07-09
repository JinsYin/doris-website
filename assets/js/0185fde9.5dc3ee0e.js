"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[51755],{15680:(e,n,a)=>{a.d(n,{xA:()=>i,yg:()=>u});var t=a(296540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=t.createContext({}),o=function(e){var n=t.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},i=function(e){var n=o(e.components);return t.createElement(m.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=o(a),y=l,u=c["".concat(m,".").concat(y)]||c[y]||d[y]||r;return a?t.createElement(u,s(s({ref:n},i),{},{components:a})):t.createElement(u,s({ref:n},i))}));function u(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=y;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=e,p[c]="string"==typeof e?e:l,s[1]=p;for(var o=2;o<r;o++)s[o]=a[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},499256:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var t=a(58168),l=(a(296540),a(15680));const r={title:"MAP",language:"en"},s=void 0,p={unversionedId:"sql-manual/sql-types/Data-Types/MAP",id:"sql-manual/sql-types/Data-Types/MAP",title:"MAP",description:"\x3c!--",source:"@site/docs/sql-manual/sql-types/Data-Types/MAP.md",sourceDirName:"sql-manual/sql-types/Data-Types",slug:"/sql-manual/sql-types/Data-Types/MAP",permalink:"/docs/dev/sql-manual/sql-types/Data-Types/MAP",draft:!1,tags:[],version:"current",frontMatter:{title:"MAP",language:"en"},sidebar:"docs",previous:{title:"ARRAY",permalink:"/docs/dev/sql-manual/sql-types/Data-Types/ARRAY"},next:{title:"STRUCT",permalink:"/docs/dev/sql-manual/sql-types/Data-Types/STRUCT"}},m={},o=[{value:"MAP",id:"map",level:2},{value:"name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],i={toc:o},c="wrapper";function d(e){let{components:n,...a}=e;return(0,l.yg)(c,(0,t.A)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"map"},"MAP"),(0,l.yg)("h3",{id:"name"},"name"),(0,l.yg)("p",null,"MAP"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"MAP<K, V>")),(0,l.yg)("p",null,"A Map of K, V items, it cannot be used as a key column. Now MAP can only used in Duplicate and Unique Model Tables."),(0,l.yg)("p",null,"Need to manually enable the support, it is disabled by default."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'admin set frontend config("enable_map_type" = "true");\n')),(0,l.yg)("p",null,"K,V could be any of:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DECIMALV3, DATE,\nDATEV2, DATETIME, DATETIMEV2, CHAR, VARCHAR, STRING\n")),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("p",null,"Create table example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},' CREATE TABLE IF NOT EXISTS test.simple_map (\n              `id` INT(11) NULL COMMENT "",\n              `m` Map<STRING, INT> NULL COMMENT ""\n            ) ENGINE=OLAP\n            DUPLICATE KEY(`id`)\n            DISTRIBUTED BY HASH(`id`) BUCKETS 1\n            PROPERTIES (\n            "replication_allocation" = "tag.location.default: 1",\n            "storage_format" = "V2"\n            );\n')),(0,l.yg)("p",null,"Insert data example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> INSERT INTO simple_map VALUES(1, {'a': 100, 'b': 200});\n")),(0,l.yg)("p",null,"stream_load examples\uff1a\nSee ",(0,l.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/data-operate/import/import-way/stream-load-manual"},"STREAM TABLE")," for syntax details."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'# load the map data from json file\ncurl --location-trusted -uroot: -T events.json -H "format: json" -H "read_json_by_line: true" http://fe_host:8030/api/test/simple_map/_stream_load\n# \u8fd4\u56de\u7ed3\u679c\n{\n    "TxnId": 106134,\n    "Label": "5666e573-9a97-4dfc-ae61-2d6b61fdffd2",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 10293125,\n    "NumberLoadedRows": 10293125,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 2297411459,\n    "LoadTimeMs": 66870,\n    "BeginTxnTimeMs": 1,\n    "StreamLoadPutTimeMs": 80,\n    "ReadDataTimeMs": 6415,\n    "WriteDataTimeMs": 10550,\n    "CommitAndPublishTimeMs": 38\n}\n')),(0,l.yg)("p",null,"Select all data example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> SELECT * FROM simple_map;\n+------+-----------------------------+\n| id   | m                           |\n+------+-----------------------------+\n|    1 | {'a':100, 'b':200}          |\n|    2 | {'b':100, 'c':200, 'd':300} |\n|    3 | {'a':10, 'd':200}           |\n+------+-----------------------------+\n")),(0,l.yg)("p",null,"Select map column example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> SELECT m FROM simple_map;\n+-----------------------------+\n| m                           |\n+-----------------------------+\n| {'a':100, 'b':200}          |\n| {'b':100, 'c':200, 'd':300} |\n| {'a':10, 'd':200}           |\n+-----------------------------+\n")),(0,l.yg)("p",null,"Select map value according given key example: "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> SELECT m['a'] FROM simple_map;\n+-----------------------------+\n| %element_extract%(`m`, 'a') |\n+-----------------------------+\n|                         100 |\n|                        NULL |\n|                          10 |\n+-----------------------------+\n")),(0,l.yg)("p",null,"map functions examples: "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"# map construct\n\nmysql> SELECT map('k11', 1000, 'k22', 2000)['k11'];\n+---------------------------------------------------------+\n| %element_extract%(map('k11', 1000, 'k22', 2000), 'k11') |\n+---------------------------------------------------------+\n|                                                    1000 |\n+---------------------------------------------------------+\n\nmysql> SELECT map('k11', 1000, 'k22', 2000)['nokey'];\n+-----------------------------------------------------------+\n| %element_extract%(map('k11', 1000, 'k22', 2000), 'nokey') |\n+-----------------------------------------------------------+\n|                                                      NULL |\n+-----------------------------------------------------------+\n1 row in set (0.06 sec)\n\n# map size\n\nmysql> SELECT map_size(map('k11', 1000, 'k22', 2000));\n+-----------------------------------------+\n| map_size(map('k11', 1000, 'k22', 2000)) |\n+-----------------------------------------+\n|                                       2 |\n+-----------------------------------------+\n\nmysql> SELECT id, m, map_size(m) FROM simple_map ORDER BY id;\n+------+-----------------------------+---------------+\n| id   | m                           | map_size(`m`) |\n+------+-----------------------------+---------------+\n|    1 | {\"a\":100, \"b\":200}          |             2 |\n|    2 | {\"b\":100, \"c\":200, \"d\":300} |             3 |\n|    2 | {\"a\":10, \"d\":200}           |             2 |\n+------+-----------------------------+---------------+\n3 rows in set (0.04 sec)\n\n# map_contains_key\n\nmysql> SELECT map_contains_key(map('k11', 1000, 'k22', 2000), 'k11');\n+--------------------------------------------------------+\n| map_contains_key(map('k11', 1000, 'k22', 2000), 'k11') |\n+--------------------------------------------------------+\n|                                                      1 |\n+--------------------------------------------------------+\n1 row in set (0.08 sec)\n\nmysql> SELECT id, m, map_contains_key(m, 'k1') FROM simple_map ORDER BY id;\n+------+-----------------------------+-----------------------------+\n| id   | m                           | map_contains_key(`m`, 'k1') |\n+------+-----------------------------+-----------------------------+\n|    1 | {\"a\":100, \"b\":200}          |                           0 |\n|    2 | {\"b\":100, \"c\":200, \"d\":300} |                           0 |\n|    2 | {\"a\":10, \"d\":200}           |                           0 |\n+------+-----------------------------+-----------------------------+\n3 rows in set (0.10 sec)\n\nmysql> SELECT id, m, map_contains_key(m, 'a') FROM simple_map ORDER BY id;\n+------+-----------------------------+----------------------------+\n| id   | m                           | map_contains_key(`m`, 'a') |\n+------+-----------------------------+----------------------------+\n|    1 | {\"a\":100, \"b\":200}          |                          1 |\n|    2 | {\"b\":100, \"c\":200, \"d\":300} |                          0 |\n|    2 | {\"a\":10, \"d\":200}           |                          1 |\n+------+-----------------------------+----------------------------+\n3 rows in set (0.17 sec)\n\n# map_contains_value\n\nmysql> SELECT map_contains_value(map('k11', 1000, 'k22', 2000), NULL);\n+---------------------------------------------------------+\n| map_contains_value(map('k11', 1000, 'k22', 2000), NULL) |\n+---------------------------------------------------------+\n|                                                       0 |\n+---------------------------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> SELECT id, m, map_contains_value(m, '100') FROM simple_map ORDER BY id;\n+------+-----------------------------+------------------------------+\n| id   | m                           | map_contains_value(`m`, 100) |\n+------+-----------------------------+------------------------------+\n|    1 | {\"a\":100, \"b\":200}          |                            1 |\n|    2 | {\"b\":100, \"c\":200, \"d\":300} |                            1 |\n|    2 | {\"a\":10, \"d\":200}           |                            0 |\n+------+-----------------------------+------------------------------+\n3 rows in set (0.11 sec)\n\n# map_keys\n\nmysql> SELECT map_keys(map('k11', 1000, 'k22', 2000));\n+-----------------------------------------+\n| map_keys(map('k11', 1000, 'k22', 2000)) |\n+-----------------------------------------+\n| [\"k11\", \"k22\"]                          |\n+-----------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> SELECT id, map_keys(m) FROM simple_map ORDER BY id;\n+------+-----------------+\n| id   | map_keys(`m`)   |\n+------+-----------------+\n|    1 | [\"a\", \"b\"]      |\n|    2 | [\"b\", \"c\", \"d\"] |\n|    2 | [\"a\", \"d\"]      |\n+------+-----------------+\n3 rows in set (0.19 sec)\n\n# map_values\n\nmysql> SELECT map_values(map('k11', 1000, 'k22', 2000));\n+-------------------------------------------+\n| map_values(map('k11', 1000, 'k22', 2000)) |\n+-------------------------------------------+\n| [1000, 2000]                              |\n+-------------------------------------------+\n1 row in set (0.03 sec)\n\nmysql> SELECT id, map_values(m) FROM simple_map ORDER BY id;\n+------+-----------------+\n| id   | map_values(`m`) |\n+------+-----------------+\n|    1 | [100, 200]      |\n|    2 | [100, 200, 300] |\n|    2 | [10, 200]       |\n+------+-----------------+\n3 rows in set (0.18 sec)\n\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"MAP\n")))}d.isMDXComponent=!0}}]);