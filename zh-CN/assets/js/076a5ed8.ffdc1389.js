"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[66349],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var o=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||n;return a?o.createElement(y,p(p({ref:t},c),{},{components:a})):o.createElement(y,p({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,p=new Array(n);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<n;l++)p[l]=a[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},715411:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var o=a(58168),r=(a(296540),a(15680));const n={title:"AutoMQ Load",language:"zh-CN"},p=void 0,i={unversionedId:"ecosystem/automq-load",id:"version-1.2/ecosystem/automq-load",title:"AutoMQ Load",description:"AutoMQ \u662f\u57fa\u4e8e\u4e91\u91cd\u65b0\u8bbe\u8ba1\u7684\u4e91\u539f\u751f Kafka\u3002\u901a\u8fc7\u5c06\u5b58\u50a8\u5206\u79bb\u81f3\u5bf9\u8c61\u5b58\u50a8\uff0c\u5728\u4fdd\u6301\u548c Apache Kafka 100% \u517c\u5bb9\u7684\u524d\u63d0\u4e0b\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u9ad8\u8fbe 10 \u500d\u7684\u6210\u672c\u4f18\u52bf\u4ee5\u53ca\u767e\u500d\u7684\u5f39\u6027\u4f18\u52bf\u3002\u901a\u8fc7\u5176\u521b\u65b0\u7684\u5171\u4eab\u5b58\u50a8\u67b6\u6784\uff0c\u5728\u4fdd\u8bc1\u9ad8\u541e\u5410\u3001\u4f4e\u5ef6\u8fdf\u7684\u6027\u80fd\u6307\u6807\u4e0b\u5b9e\u73b0\u4e86\u79d2\u7ea7\u5206\u533a\u8fc1\u79fb\u3001\u6d41\u91cf\u81ea\u5e73\u8861\u3001\u79d2\u7ea7\u81ea\u52a8\u5f39\u6027\u7b49\u80fd\u529b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/ecosystem/automq-load.md",sourceDirName:"ecosystem",slug:"/ecosystem/automq-load",permalink:"/zh-CN/docs/1.2/ecosystem/automq-load",draft:!1,tags:[],version:"1.2",frontMatter:{title:"AutoMQ Load",language:"zh-CN"},sidebar:"docs",previous:{title:"CloudCanal \u6570\u636e\u5bfc\u5165",permalink:"/zh-CN/docs/1.2/ecosystem/cloudcanal"},next:{title:"Hive Bitmap UDF",permalink:"/zh-CN/docs/1.2/ecosystem/hive-bitmap-udf"}},s={},l=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u51c6\u5907 Apache Doris \u548c\u6d4b\u8bd5\u6570\u636e",id:"\u51c6\u5907-apache-doris-\u548c\u6d4b\u8bd5\u6570\u636e",level:3},{value:"\u51c6\u5907 Kafka \u547d\u4ee4\u884c\u5de5\u5177",id:"\u51c6\u5907-kafka-\u547d\u4ee4\u884c\u5de5\u5177",level:3},{value:"\u51c6\u5907 AutoMQ \u548c\u6d4b\u8bd5\u6570\u636e",id:"\u51c6\u5907-automq-\u548c\u6d4b\u8bd5\u6570\u636e",level:3},{value:"\u521b\u5efa Routine Load \u5bfc\u5165\u4f5c\u4e1a",id:"\u521b\u5efa-routine-load-\u5bfc\u5165\u4f5c\u4e1a",level:2},{value:"\u9a8c\u8bc1\u6570\u636e\u5bfc\u5165",id:"\u9a8c\u8bc1\u6570\u636e\u5bfc\u5165",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/AutoMQ/automq"},"AutoMQ")," \u662f\u57fa\u4e8e\u4e91\u91cd\u65b0\u8bbe\u8ba1\u7684\u4e91\u539f\u751f Kafka\u3002\u901a\u8fc7\u5c06\u5b58\u50a8\u5206\u79bb\u81f3\u5bf9\u8c61\u5b58\u50a8\uff0c\u5728\u4fdd\u6301\u548c Apache Kafka 100% \u517c\u5bb9\u7684\u524d\u63d0\u4e0b\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u9ad8\u8fbe 10 \u500d\u7684\u6210\u672c\u4f18\u52bf\u4ee5\u53ca\u767e\u500d\u7684\u5f39\u6027\u4f18\u52bf\u3002\u901a\u8fc7\u5176\u521b\u65b0\u7684\u5171\u4eab\u5b58\u50a8\u67b6\u6784\uff0c\u5728\u4fdd\u8bc1\u9ad8\u541e\u5410\u3001\u4f4e\u5ef6\u8fdf\u7684\u6027\u80fd\u6307\u6807\u4e0b\u5b9e\u73b0\u4e86\u79d2\u7ea7\u5206\u533a\u8fc1\u79fb\u3001\u6d41\u91cf\u81ea\u5e73\u8861\u3001\u79d2\u7ea7\u81ea\u52a8\u5f39\u6027\u7b49\u80fd\u529b\u3002"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"AutoMQ Storage Architecture",src:a(608279).A,width:"828",height:"948"})),(0,r.yg)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,r.yg)("h3",{id:"\u51c6\u5907-apache-doris-\u548c\u6d4b\u8bd5\u6570\u636e"},"\u51c6\u5907 Apache Doris \u548c\u6d4b\u8bd5\u6570\u636e"),(0,r.yg)("p",null,"\u786e\u4fdd\u5f53\u524d\u5df2\u51c6\u5907\u597d\u53ef\u7528\u7684 Apache Doris \u96c6\u7fa4\u3002\u4e3a\u4e86\u4fbf\u4e8e\u6f14\u793a\uff0c\u6211\u4eec\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/install/cluster-deployment/run-docker-cluster"},"Docker \u90e8\u7f72 Doris")," \u6587\u6863\u5728 Linux \u4e0a\u90e8\u7f72\u4e86\u4e00\u5957\u6d4b\u8bd5\u7528\u7684 Apache Doris \u73af\u5883\u3002\n\u521b\u5efa\u5e93\u548c\u6d4b\u8bd5\u8868\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"create database automq_db;\nCREATE TABLE automq_db.users (\n                                 id bigint NOT NULL,\n                                 name string NOT NULL,\n                                 timestamp string NULL,\n                                 status string NULL\n\n) DISTRIBUTED BY hash (id) PROPERTIES ('replication_num' = '1');\n")),(0,r.yg)("h3",{id:"\u51c6\u5907-kafka-\u547d\u4ee4\u884c\u5de5\u5177"},"\u51c6\u5907 Kafka \u547d\u4ee4\u884c\u5de5\u5177"),(0,r.yg)("p",null,"\u4ece ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/AutoMQ/automq"},"AutoMQ Releases")," \u4e0b\u8f7d\u6700\u65b0\u7684 TGZ \u5305\u5e76\u89e3\u538b\u3002\u5047\u8bbe\u89e3\u538b\u76ee\u5f55\u4e3a $AUTOMQ_HOME\uff0c\u5728\u672c\u6587\u4e2d\u5c06\u4f1a\u4f7f\u7528 $AUTOMQ_HOME/bin \u4e0b\u7684\u5de5\u5177\u547d\u4ee4\u6765\u521b\u5efa\u4e3b\u9898\u548c\u751f\u6210\u6d4b\u8bd5\u6570\u636e\u3002"),(0,r.yg)("h3",{id:"\u51c6\u5907-automq-\u548c\u6d4b\u8bd5\u6570\u636e"},"\u51c6\u5907 AutoMQ \u548c\u6d4b\u8bd5\u6570\u636e"),(0,r.yg)("p",null,"\u53c2\u8003 AutoMQ ",(0,r.yg)("a",{parentName:"p",href:"https://docs.automq.com/docs/automq-opensource/EvqhwAkpriAomHklOUzcUtybn7g"},"\u5b98\u65b9\u90e8\u7f72\u6587\u6863"),"\u90e8\u7f72\u4e00\u5957\u53ef\u7528\u7684\u96c6\u7fa4\uff0c\u786e\u4fdd AutoMQ \u4e0e Apache Doris \u4e4b\u95f4\u4fdd\u6301\u7f51\u7edc\u8fde\u901a\u3002\n\u5728 AutoMQ \u4e2d\u5feb\u901f\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a example_topic \u7684\u4e3b\u9898\uff0c\u5e76\u5411\u5176\u4e2d\u5199\u5165\u4e00\u6761\u6d4b\u8bd5 JSON \u6570\u636e\uff0c\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u521b\u5efa Topic")),(0,r.yg)("p",null,"\u4f7f\u7528 Apache Kafka \u547d\u4ee4\u884c\u5de5\u5177\u521b\u5efa\u4e3b\u9898\uff0c\u9700\u8981\u786e\u4fdd\u5f53\u524d\u62e5\u6709 Kafka \u73af\u5883\u7684\u8bbf\u95ee\u6743\u9650\u5e76\u4e14 Kafka \u670d\u52a1\u6b63\u5728\u8fd0\u884c\u3002\u4ee5\u4e0b\u662f\u521b\u5efa\u4e3b\u9898\u7684\u547d\u4ee4\u793a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$AUTOMQ_HOME/bin/kafka-topics.sh --create --topic exampleto_topic --bootstrap-server 127.0.0.1:9092  --partitions 1 --replication-factor 1\n")),(0,r.yg)("p",null,"\u5728\u6267\u884c\u547d\u4ee4\u65f6\uff0c\u9700\u8981\u5c06 topic \u548c bootstarp-server \u66ff\u6362\u4e3a\u5b9e\u9645\u4f7f\u7528\u7684 AutoMQ Bootstarp Server \u5730\u5740\u3002\n\u521b\u5efa\u5b8c\u4e3b\u9898\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u9a8c\u8bc1\u4e3b\u9898\u662f\u5426\u5df2\u6210\u529f\u521b\u5efa\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$AUTOMQ_HOME/bin/kafka-topics.sh --describe example_topic --bootstrap-server 127.0.0.1:9092\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u751f\u6210\u6d4b\u8bd5\u6570\u636e")),(0,r.yg)("p",null,"\u751f\u6210\u4e00\u6761 JSON \u683c\u5f0f\u7684\u6d4b\u8bd5\u6570\u636e\uff0c\u548c\u524d\u6587\u7684\u8868\u9700\u8981\u5bf9\u5e94\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "id": 1,\n  "name": "\u6d4b\u8bd5\u7528\u6237",\n  "timestamp": "2023-11-10T12:00:00",\n  "status": "active"\n}\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u5199\u5165\u6d4b\u8bd5\u6570\u636e")),(0,r.yg)("p",null,"\u901a\u8fc7 Kafka \u7684\u547d\u4ee4\u884c\u5de5\u5177\u6216\u7f16\u7a0b\u65b9\u5f0f\u5c06\u6d4b\u8bd5\u6570\u636e\u5199\u5165\u5230\u540d\u4e3a example_topic \u7684\u4e3b\u9898\u4e2d\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u4f7f\u7528\u547d\u4ee4\u884c\u5de5\u5177\u7684\u793a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'echo \'{"id": 1, "name": "\u6d4b\u8bd5\u7528\u6237", "timestamp": "2023-11-10T12:00:00", "status": "active"}\' | sh kafka-console-producer.sh --broker-list 127.0.0.1:9092 --topic example_topic\n')),(0,r.yg)("p",null,"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u521a\u5199\u5165\u7684 topic \u6570\u636e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"sh $AUTOMQ_HOME/bin/kafka-console-consumer.sh --bootstrap-server 127.0.0.1:9092 --topic example_topic --from-beginning\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5728\u6267\u884c\u547d\u4ee4\u65f6\uff0c\u9700\u8981\u5c06 topic \u548c bootstarp-server \u66ff\u6362\u4e3a\u5b9e\u9645\u4f7f\u7528\u7684 AutoMQ Bootstarp Server \u5730\u5740\u3002")),(0,r.yg)("h2",{id:"\u521b\u5efa-routine-load-\u5bfc\u5165\u4f5c\u4e1a"},"\u521b\u5efa Routine Load \u5bfc\u5165\u4f5c\u4e1a"),(0,r.yg)("p",null,"\u5728 Apache Doris \u7684\u547d\u4ee4\u884c\u4e2d\u521b\u5efa\u4e00\u4e2a\u63a5\u6536 JSON \u6570\u636e\u7684 Routine Load \u4f5c\u4e1a\uff0c\u7528\u6765\u6301\u7eed\u5bfc\u5165 AutoMQ Kafka topic \u4e2d\u7684\u6570\u636e\u3002\u5177\u4f53 Routine Load \u7684\u53c2\u6570\u8bf4\u660e\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/data-operate/import/routine-load-manual"},"Doris Routine Load"),"\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'CREATE ROUTINE LOAD automq_example_load ON users\nCOLUMNS(id, name, timestamp, status)\nPROPERTIES\n(\n    "format" = "json",\n    "jsonpaths" = "[\\"$.id\\",\\"$.name\\",\\"$.timestamp\\",\\"$.status\\"]"\n )\nFROM KAFKA\n(\n    "kafka_broker_list" = "127.0.0.1:9092",\n    "kafka_topic" = "example_topic",\n    "property.kafka_default_offsets" = "OFFSET_BEGINNING"\n);\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5728\u6267\u884c\u547d\u4ee4\u65f6\uff0c\u9700\u8981\u5c06 kafka_broker_list \u66ff\u6362\u4e3a\u5b9e\u9645\u4f7f\u7528\u7684 AutoMQ Bootstarp Server \u5730\u5740\u3002")),(0,r.yg)("h2",{id:"\u9a8c\u8bc1\u6570\u636e\u5bfc\u5165"},"\u9a8c\u8bc1\u6570\u636e\u5bfc\u5165"),(0,r.yg)("p",null,"\u9996\u5148\uff0c\u68c0\u67e5 Routine Load \u5bfc\u5165\u4f5c\u4e1a\u7684\u72b6\u6001\uff0c\u786e\u4fdd\u4efb\u52a1\u6b63\u5728\u8fd0\u884c\u4e2d\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"show routine load\\G;\n")),(0,r.yg)("p",null,"\u7136\u540e\u67e5\u8be2 Apache Doris \u6570\u636e\u5e93\u4e2d\u7684\u76f8\u5173\u8868\uff0c\u53ef\u4ee5\u770b\u5230\u6570\u636e\u5df2\u7ecf\u88ab\u6210\u529f\u5bfc\u5165\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"select * from users;\n+------+--------------+---------------------+--------+\n| id   | name         | timestamp           | status |\n+------+--------------+---------------------+--------+\n|    1 | \u6d4b\u8bd5\u7528\u6237     | 2023-11-10T12:00:00 | active |\n|    2 | \u6d4b\u8bd5\u7528\u6237     | 2023-11-10T12:00:00 | active |\n+------+--------------+---------------------+--------+\n2 rows in set (0.01 sec)\n")))}m.isMDXComponent=!0},608279:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/automq_storage_architecture-ae9745cd9eb2b4c42ef8e10d44e9fe7a.png"}}]);