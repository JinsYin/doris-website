"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[78563],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>f});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),g=a,f=p["".concat(s,".").concat(g)]||p[g]||c[g]||i;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},919767:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(58168),a=(t(296540),t(15680));const i={title:"RETENTION",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/retention",id:"version-2.0/sql-manual/sql-functions/aggregate-functions/retention",title:"RETENTION",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/aggregate-functions/retention.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/retention",permalink:"/docs/2.0/sql-manual/sql-functions/aggregate-functions/retention",draft:!1,tags:[],version:"2.0",frontMatter:{title:"RETENTION",language:"en"},sidebar:"docs",previous:{title:"VARIANCE,VAR_POP,VARIANCE_POP",permalink:"/docs/2.0/sql-manual/sql-functions/aggregate-functions/variance"},next:{title:"SEQUENCE_MATCH",permalink:"/docs/2.0/sql-manual/sql-functions/aggregate-functions/sequence-match"}},s={},u=[{value:"RETENTION",id:"retention",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:5},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:u},p="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"retention"},"RETENTION"),(0,a.yg)("p",null,"RETENTION"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"retention(event1, event2, ... , eventN);")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"retention")," function takes as arguments a set of conditions from 1 to 32 arguments of type ",(0,a.yg)("inlineCode",{parentName:"p"},"UInt8")," that indicate whether a certain condition was met for the event. Any condition can be specified as an argument."),(0,a.yg)("p",null,"The conditions, except the first, apply in pairs: the result of the second will be true if the first and second are true, of the third if the first and third are true, etc."),(0,a.yg)("p",null,"To put it simply, the first digit of the return value array indicates whether ",(0,a.yg)("inlineCode",{parentName:"p"},"event1")," is true or false, the second digit represents the truth and falseness of ",(0,a.yg)("inlineCode",{parentName:"p"},"event1")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"event2"),", and the third digit represents whether ",(0,a.yg)("inlineCode",{parentName:"p"},"event1")," is true or false and ",(0,a.yg)("inlineCode",{parentName:"p"},"event3")," is true False and, and so on. If ",(0,a.yg)("inlineCode",{parentName:"p"},"event1")," is false, return an array full of zeros."),(0,a.yg)("h4",{id:"arguments"},"Arguments"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"event")," \u2014 An expression that returns a ",(0,a.yg)("inlineCode",{parentName:"p"},"UInt8")," result (1 or 0)."),(0,a.yg)("h5",{id:"returned-value"},"Returned value"),(0,a.yg)("p",null,"An array of 1s and 0s with a maximum length of 32 bits, the final output array has the same length as the input parameter."),(0,a.yg)("p",null,"1 \u2014 Condition was met for the event."),(0,a.yg)("p",null,"0 \u2014 Condition wasn\u2019t met for the event."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS retention_test;\n\nCREATE TABLE retention_test(\n                `uid` int COMMENT 'user id', \n                `date` datetime COMMENT 'date time' \n                )\nDUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT into retention_test (uid, date) values (0, '2022-10-12'),\n                                        (0, '2022-10-13'),\n                                        (0, '2022-10-14'),\n                                        (1, '2022-10-12'),\n                                        (1, '2022-10-13'),\n                                        (2, '2022-10-12'); \n\nSELECT * from retention_test;\n\n+------+---------------------+\n| uid  | date                |\n+------+---------------------+\n|    0 | 2022-10-14 00:00:00 |\n|    0 | 2022-10-13 00:00:00 |\n|    0 | 2022-10-12 00:00:00 |\n|    1 | 2022-10-13 00:00:00 |\n|    1 | 2022-10-12 00:00:00 |\n|    2 | 2022-10-12 00:00:00 |\n+------+---------------------+\n\nSELECT \n    uid,     \n    retention(date = '2022-10-12')\n        AS r \n            FROM retention_test \n            GROUP BY uid \n            ORDER BY uid ASC;\n\n+------+------+\n| uid  | r    |\n+------+------+\n|    0 | [1]  | \n|    1 | [1]  |\n|    2 | [1]  |\n+------+------+\n\nSELECT \n    uid,     \n    retention(date = '2022-10-12', date = '2022-10-13')\n        AS r \n            FROM retention_test \n            GROUP BY uid \n            ORDER BY uid ASC;\n\n+------+--------+\n| uid  | r      |\n+------+--------+\n|    0 | [1, 1] |\n|    1 | [1, 1] |\n|    2 | [1, 0] |\n+------+--------+\n\nSELECT \n    uid,     \n    retention(date = '2022-10-12', date = '2022-10-13', date = '2022-10-14')\n        AS r \n            FROM retention_test \n            GROUP BY uid \n            ORDER BY uid ASC;\n\n+------+-----------+\n| uid  | r         |\n+------+-----------+\n|    0 | [1, 1, 1] |\n|    1 | [1, 1, 0] |\n|    2 | [1, 0, 0] |\n+------+-----------+\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"RETENTION"))}c.isMDXComponent=!0}}]);