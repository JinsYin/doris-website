"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[4008],{15680:(e,l,t)=>{t.d(l,{xA:()=>u,yg:()=>d});var o=t(296540);function n(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function r(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);l&&(o=o.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?r(Object(t),!0).forEach((function(l){n(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function a(e,l){if(null==e)return{};var t,o,n=function(e,l){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=o.createContext({}),p=function(e){var l=o.useContext(m),t=l;return e&&(t="function"==typeof e?e(l):i(i({},l),e)),t},u=function(e){var l=p(e.components);return o.createElement(m.Provider,{value:l},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var l=e.children;return o.createElement(o.Fragment,{},l)}},g=o.forwardRef((function(e,l){var t=e.components,n=e.mdxType,r=e.originalType,m=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(t),g=n,d=s["".concat(m,".").concat(g)]||s[g]||c[g]||r;return t?o.createElement(d,i(i({ref:l},u),{},{components:t})):o.createElement(d,i({ref:l},u))}));function d(e,l){var t=arguments,n=l&&l.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=g;var a={};for(var m in l)hasOwnProperty.call(l,m)&&(a[m]=l[m]);a.originalType=e,a[s]="string"==typeof e?e:n,i[1]=a;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},679743:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var o=t(58168),n=(t(296540),t(15680));const r={title:"BloomFilter \u7d22\u5f15",language:"zh-CN"},i=void 0,a={unversionedId:"table-design/index/bloomfilter",id:"table-design/index/bloomfilter",title:"BloomFilter \u7d22\u5f15",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/table-design/index/bloomfilter.md",sourceDirName:"table-design/index",slug:"/table-design/index/bloomfilter",permalink:"/zh-CN/docs/dev/table-design/index/bloomfilter",draft:!1,tags:[],version:"current",frontMatter:{title:"BloomFilter \u7d22\u5f15",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5012\u6392\u7d22\u5f15",permalink:"/zh-CN/docs/dev/table-design/index/inverted-index"},next:{title:"N-Gram \u7d22\u5f15",permalink:"/zh-CN/docs/dev/table-design/index/ngram-bloomfilter-index"}},m={},p=[{value:"\u7d22\u5f15\u539f\u7406",id:"\u7d22\u5f15\u539f\u7406",level:2},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u4f7f\u7528\u8bed\u6cd5",id:"\u4f7f\u7528\u8bed\u6cd5",level:2},{value:"\u5efa\u8868\u65f6\u521b\u5efa BloomFilter \u7d22\u5f15",id:"\u5efa\u8868\u65f6\u521b\u5efa-bloomfilter-\u7d22\u5f15",level:3},{value:"\u67e5\u770b BloomFilter \u7d22\u5f15",id:"\u67e5\u770b-bloomfilter-\u7d22\u5f15",level:3},{value:"\u5df2\u6709\u8868\u589e\u52a0\u3001\u5220\u9664 BloomFilter \u7d22\u5f15",id:"\u5df2\u6709\u8868\u589e\u52a0\u5220\u9664-bloomfilter-\u7d22\u5f15",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u521b\u5efa BloomFilter \u7d22\u5f15",id:"\u521b\u5efa-bloomfilter-\u7d22\u5f15",level:3}],u={toc:p},s="wrapper";function c(e){let{components:l,...r}=e;return(0,n.yg)(s,(0,o.A)({},u,r,{components:l,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u7d22\u5f15\u539f\u7406"},"\u7d22\u5f15\u539f\u7406"),(0,n.yg)("p",null,"BloomFilter \u7d22\u5f15\u662f\u57fa\u4e8e BloomFilter \u7684\u4e00\u79cd\u8df3\u6570\u7d22\u5f15\u3002\u5b83\u7684\u539f\u7406\u662f\u5229\u7528 BloomFilter \u8df3\u8fc7\u7b49\u503c\u67e5\u8be2\u6307\u5b9a\u6761\u4ef6\u4e0d\u6ee1\u8db3\u7684\u6570\u636e\u5757\uff0c\u8fbe\u5230\u51cf\u5c11 I/O \u67e5\u8be2\u52a0\u901f\u7684\u76ee\u7684\u3002"),(0,n.yg)("p",null,"BloomFilter \u662f\u7531 Bloom \u5728 1970 \u5e74\u63d0\u51fa\u7684\u4e00\u79cd\u591a\u54c8\u5e0c\u51fd\u6570\u6620\u5c04\u7684\u5feb\u901f\u67e5\u627e\u7b97\u6cd5\u3002\u901a\u5e38\u5e94\u7528\u5728\u4e00\u4e9b\u9700\u8981\u5feb\u901f\u5224\u65ad\u67d0\u4e2a\u5143\u7d20\u662f\u5426\u5c5e\u4e8e\u96c6\u5408\uff0c\u4f46\u662f\u5e76\u4e0d\u4e25\u683c\u8981\u6c42 100% \u6b63\u786e\u7684\u573a\u5408\uff0cBloomFilter \u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u7a7a\u95f4\u6548\u7387\u9ad8\u7684\u6982\u7387\u578b\u6570\u636e\u7ed3\u6784\uff0c\u7528\u6765\u68c0\u67e5\u4e00\u4e2a\u5143\u7d20\u662f\u5426\u5728\u4e00\u4e2a\u96c6\u5408\u4e2d\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5bf9\u4e8e\u4e00\u4e2a\u5143\u7d20\u68c0\u6d4b\u662f\u5426\u5b58\u5728\u7684\u8c03\u7528\uff0cBloomFilter \u4f1a\u544a\u8bc9\u8c03\u7528\u8005\u4e24\u4e2a\u7ed3\u679c\u4e4b\u4e00\uff1a\u53ef\u80fd\u5b58\u5728\u6216\u8005\u4e00\u5b9a\u4e0d\u5b58\u5728\u3002"))),(0,n.yg)("p",null,"BloomFilter \u662f\u7531\u4e00\u4e2a\u8d85\u957f\u7684\u4e8c\u8fdb\u5236\u4f4d\u6570\u7ec4\u548c\u4e00\u7cfb\u5217\u7684\u54c8\u5e0c\u51fd\u6570\u7ec4\u6210\u3002\u4e8c\u8fdb\u5236\u4f4d\u6570\u7ec4\u521d\u59cb\u5168\u90e8\u4e3a 0\uff0c\u5f53\u7ed9\u5b9a\u4e00\u4e2a\u5f85\u67e5\u8be2\u7684\u5143\u7d20\u65f6\uff0c\u8fd9\u4e2a\u5143\u7d20\u4f1a\u88ab\u4e00\u7cfb\u5217\u54c8\u5e0c\u51fd\u6570\u8ba1\u7b97\u6620\u5c04\u51fa\u4e00\u7cfb\u5217\u7684\u503c\uff0c\u6240\u6709\u7684\u503c\u5728\u4f4d\u6570\u7ec4\u7684\u504f\u79fb\u91cf\u5904\u7f6e\u4e3a 1\u3002"),(0,n.yg)("p",null,"\u4e0b\u56fe\u6240\u793a\u51fa\u4e00\u4e2a m=18, k=3\uff08m \u662f\u8be5 Bit \u6570\u7ec4\u7684\u5927\u5c0f\uff0ck \u662f Hash \u51fd\u6570\u7684\u4e2a\u6570\uff09\u7684 BloomFilter \u793a\u4f8b\u3002\u96c6\u5408\u4e2d\u7684 x\u3001y\u3001z \u4e09\u4e2a\u5143\u7d20\u901a\u8fc7 3 \u4e2a\u4e0d\u540c\u7684\u54c8\u5e0c\u51fd\u6570\u6563\u5217\u5230\u4f4d\u6570\u7ec4\u4e2d\u3002\u5f53\u67e5\u8be2\u5143\u7d20 w \u65f6\uff0c\u901a\u8fc7 Hash \u51fd\u6570\u8ba1\u7b97\u4e4b\u540e\u53ea\u8981\u6709\u4e00\u4e2a\u4f4d\u4e3a 0\uff0c\u56e0\u6b64 w \u4e0d\u5728\u8be5\u96c6\u5408\u4e2d\u3002\u4f46\u662f\u53cd\u8fc7\u6765\u5168\u90e8\u90fd\u662f 1 \u53ea\u80fd\u8bf4\u660e\u53ef\u80fd\u5728\u96c6\u5408\u4e2d\u3001\u4e0d\u80fd\u80af\u5b9a\u4e00\u5b9a\u5728\u96c6\u5408\u4e2d\uff0c\u56e0\u4e3a Hash \u51fd\u6570\u53ef\u80fd\u51fa\u73b0 Hash \u78b0\u649e\u3002"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Bloom_filter.svg",src:t(315846).A,width:"2560",height:"960"})),(0,n.yg)("p",null,"\u53cd\u8fc7\u6765\u5982\u679c\u67d0\u4e2a\u5143\u7d20\u7ecf\u8fc7\u54c8\u5e0c\u51fd\u6570\u8ba1\u7b97\u540e\u5f97\u5230\u6240\u6709\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u82e5\u8fd9\u4e9b\u4f4d\u7f6e\u5168\u90fd\u4e3a 1\uff0c\u53ea\u80fd\u8bf4\u660e\u53ef\u80fd\u5728\u96c6\u5408\u4e2d\u3001\u4e0d\u80fd\u80af\u5b9a\u4e00\u5b9a\u5728\u96c6\u5408\u4e2d\uff0c\u56e0\u4e3a Hash \u51fd\u6570\u53ef\u80fd\u51fa\u73b0 Hash \u78b0\u649e\u3002\u8fd9\u5c31\u662f BloomFilter\u201c\u5047\u9633\u6027\u201d\uff0c\u56e0\u6b64\u57fa\u4e8e BloomFilter \u7684\u7d22\u5f15\u53ea\u80fd\u8df3\u8fc7\u4e0d\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u636e\uff0c\u4e0d\u80fd\u7cbe\u786e\u5b9a\u4f4d\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u636e\u3002"),(0,n.yg)("p",null,"Doris BloomFilter \u7d22\u5f15\u4ee5\u6570\u636e\u5757\uff08page\uff09\u4e3a\u5355\u4f4d\u6784\u5efa\uff0c\u6bcf\u4e2a\u6570\u636e\u5757\u5b58\u50a8\u4e00\u4e2a BloomFilter\u3002\u5199\u5165\u65f6\uff0c\u5bf9\u4e8e\u6570\u636e\u5757\u4e2d\u7684\u6bcf\u4e2a\u503c\uff0c\u7ecf\u8fc7 Hash \u5b58\u5165\u6570\u636e\u5757\u5bf9\u5e94\u7684 BloomFilter\u3002\u67e5\u8be2\u65f6\uff0c\u6839\u636e\u7b49\u503c\u6761\u4ef6\u7684\u503c\uff0c\u5224\u65ad\u6bcf\u4e2a\u6570\u636e\u5757\u5bf9\u5e94\u7684 BloomFilter \u662f\u5426\u5305\u542b\u8fd9\u4e2a\u503c\uff0c\u4e0d\u5305\u542b\u5219\u8df3\u8fc7\u5bf9\u5e94\u7684\u6570\u636e\u5757\u4e0d\u8bfb\u53d6\uff0c\u8fbe\u5230\u51cf\u5c11 I/O \u67e5\u8be2\u52a0\u901f\u7684\u76ee\u7684\u3002"),(0,n.yg)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,n.yg)("p",null,"BloomFilter \u7d22\u5f15\u80fd\u591f\u5bf9\u7b49\u503c\u67e5\u8be2\uff08\u5305\u62ec = \u548c IN\uff09\u52a0\u901f\uff0c\u5bf9\u9ad8\u57fa\u6570\u5b57\u6bb5\u6548\u679c\u8f83\u597d\uff0c\u6bd4\u5982 ",(0,n.yg)("inlineCode",{parentName:"p"},"userid")," \u7b49\u552f\u4e00 ID \u5b57\u6bb5\u3002"),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"BloomFilter \u7684\u4f7f\u7528\u6709\u4e0b\u9762\u4e00\u4e9b\u9650\u5236\uff1a"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5bf9 IN \u548c = \u4e4b\u5916\u7684\u67e5\u8be2\u6ca1\u6709\u6548\u679c\uff0c\u6bd4\u5982 !=, NOT INT, >, < \u7b49")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4e0d\u652f\u6301\u5bf9 Tinyint\u3001Float\u3001Double \u7c7b\u578b\u7684\u5217\u5efa BloomFilter \u7d22\u5f15\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5bf9\u4f4e\u57fa\u6570\u5b57\u6bb5\u7684\u52a0\u901f\u6548\u679c\u5f88\u6709\u9650\uff0c\u6bd4\u5982\u201c\u6027\u522b\u201d\u5b57\u6bb5\u4ec5\u6709\u4e24\u79cd\u503c\uff0c\u51e0\u4e4e\u6bcf\u4e2a\u6570\u636e\u5757\u90fd\u4f1a\u5305\u542b\u6240\u6709\u53d6\u503c\uff0c\u5bfc\u81f4 BloomFilter \u7d22\u5f15\u5931\u53bb\u610f\u4e49\u3002"))),(0,n.yg)("p",{parentName:"admonition"},"\u5982\u679c\u8981\u67e5\u770b\u67d0\u4e2a\u67e5\u8be2 BloomFilter \u7d22\u5f15\u6548\u679c\uff0c\u53ef\u4ee5\u901a\u8fc7 Query Profile \u4e2d\u7684\u76f8\u5173\u6307\u6807\u8fdb\u884c\u5206\u6790\u3002"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"BlockConditionsFilteredBloomFilterTime \u662f BloomFilter \u7d22\u5f15\u6d88\u8017\u7684\u65f6\u95f4")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"RowsBloomFilterFiltered \u662f BloomFilter \u8fc7\u6ee4\u6389\u7684\u884c\u6570\uff0c\u53ef\u4ee5\u4e0e\u5176\u4ed6\u51e0\u4e2a Rows \u503c\u5bf9\u6bd4\u5206\u6790 BloomFilter \u7d22\u5f15\u8fc7\u6ee4\u6548\u679c")))),(0,n.yg)("h2",{id:"\u4f7f\u7528\u8bed\u6cd5"},"\u4f7f\u7528\u8bed\u6cd5"),(0,n.yg)("h3",{id:"\u5efa\u8868\u65f6\u521b\u5efa-bloomfilter-\u7d22\u5f15"},"\u5efa\u8868\u65f6\u521b\u5efa BloomFilter \u7d22\u5f15"),(0,n.yg)("p",null,'\u7531\u4e8e\u5386\u53f2\u539f\u56e0\uff0cBloomFilter \u7d22\u5f15\u5b9a\u4e49\u7684\u8bed\u6cd5\u4e0e\u5012\u6392\u7d22\u5f15\u7b49\u901a\u7528 INDEX \u8bed\u6cd5\u4e0d\u4e00\u6837\u3002BloomFilter \u7d22\u5f15\u901a\u8fc7\u8868\u7684 PROPERTIES  "bloom_filter_columns" \u6307\u5b9a\u54ea\u4e9b\u5b57\u6bb5\u5efa BloomFilter \u7d22\u5f15\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5b57\u6bb5\u3002'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'PROPERTIES (\n"bloom_filter_columns" = "column_name1,column_name2"\n);\n')),(0,n.yg)("h3",{id:"\u67e5\u770b-bloomfilter-\u7d22\u5f15"},"\u67e5\u770b BloomFilter \u7d22\u5f15"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE table_name;\n")),(0,n.yg)("h3",{id:"\u5df2\u6709\u8868\u589e\u52a0\u5220\u9664-bloomfilter-\u7d22\u5f15"},"\u5df2\u6709\u8868\u589e\u52a0\u3001\u5220\u9664 BloomFilter \u7d22\u5f15"),(0,n.yg)("p",null,"\u901a\u8fc7 ALTER TABLE \u4fee\u6539\u8868\u7684 bloom_filter_columns \u5c5e\u6027\u6765\u5b8c\u6210\u3002"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u4e3a column_name3 \u589e\u52a0 BloomFilter \u7d22\u5f15")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-SQL"},'ALTER TABLE table_name SET ("bloom_filter_columns" = "column_name1,column_name2,column_name3");\n')),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"\u5220\u9664 column_name1 \u7684 BloomFilter \u7d22\u5f15")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-SQL"},'ALTER TABLE table_name SET ("bloom_filter_columns" = "column_name2,column_name3");\n')),(0,n.yg)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,n.yg)("p",null,"\u4e0b\u9762\u901a\u8fc7\u5b9e\u4f8b\u6765\u770b\u770b Doris \u600e\u4e48\u521b\u5efa BloomFilter \u7d22\u5f15\u3002"),(0,n.yg)("h3",{id:"\u521b\u5efa-bloomfilter-\u7d22\u5f15"},"\u521b\u5efa BloomFilter \u7d22\u5f15"),(0,n.yg)("p",null,'Doris BloomFilter \u7d22\u5f15\u7684\u521b\u5efa\u662f\u901a\u8fc7\u5728\u5efa\u8868\u8bed\u53e5\u7684 PROPERTIES \u91cc\u52a0\u4e0a "bloom_filter_columns"="k1,k2,k3", \u8fd9\u4e2a\u5c5e\u6027\uff0ck1,k2,k3 \u662f\u8981\u521b\u5efa\u7684 BloomFilter \u7d22\u5f15\u7684 Key \u5217\u540d\u79f0\uff0c\u4f8b\u5982\u4e0b\u9762\u5bf9\u8868\u91cc\u7684 saler_id,category_id \u521b\u5efa\u4e86 BloomFilter \u7d22\u5f15\u3002'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS sale_detail_bloom  (\n    sale_date date NOT NULL COMMENT "\u9500\u552e\u65f6\u95f4",\n    customer_id int NOT NULL COMMENT "\u5ba2\u6237\u7f16\u53f7",\n    saler_id int NOT NULL COMMENT "\u9500\u552e\u5458",\n    sku_id int NOT NULL COMMENT "\u5546\u54c1\u7f16\u53f7",\n    category_id int NOT NULL COMMENT "\u5546\u54c1\u5206\u7c7b",\n    sale_count int NOT NULL COMMENT "\u9500\u552e\u6570\u91cf",\n    sale_price DECIMAL(12,2) NOT NULL COMMENT "\u5355\u4ef7",\n    sale_amt DECIMAL(20,2)  COMMENT "\u9500\u552e\u603b\u91d1\u989d"\n)\nDuplicate  KEY(sale_date, customer_id,saler_id,sku_id,category_id)\nDISTRIBUTED BY HASH(saler_id) BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"bloom_filter_columns"="saler_id,category_id"\n);\n')))}c.isMDXComponent=!0},315846:(e,l,t)=>{t.d(l,{A:()=>o});const o=t.p+"assets/images/Bloom_filter.svg-e437ea5c65c96143c00cdb97711e1b10.png"}}]);