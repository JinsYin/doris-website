"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[655],{15680:(e,n,t)=>{t.d(n,{xA:()=>r,yg:()=>y});var a=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},r=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,r=p(e,["components","mdxType","originalType","parentName"]),g=m(t),s=o,y=g["".concat(l,".").concat(s)]||g[s]||u[s]||i;return t?a.createElement(y,c(c({ref:n},r),{},{components:t})):a.createElement(y,c({ref:n},r))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[g]="string"==typeof e?e:o,c[1]=p;for(var m=2;m<i;m++)c[m]=t[m];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},60295:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=t(58168),o=(t(296540),t(15680));const i={title:"Compaction \u4f18\u5316",language:"zh-CN"},c=void 0,p={unversionedId:"admin-manual/compaction",id:"admin-manual/compaction",title:"Compaction \u4f18\u5316",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/compaction.md",sourceDirName:"admin-manual",slug:"/admin-manual/compaction",permalink:"/zh-CN/docs/dev/admin-manual/compaction",draft:!1,tags:[],version:"current",frontMatter:{title:"Compaction \u4f18\u5316",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6587\u4ef6\u7ba1\u7406\u5668",permalink:"/zh-CN/docs/dev/admin-manual/small-file-mgr"},next:{title:"\u7cfb\u7edf\u8868",permalink:"/zh-CN/docs/dev/admin-manual/rowsets"}},l={},m=[{value:"Vertical compaction",id:"vertical-compaction",level:2},{value:"Segment compaction",id:"segment-compaction",level:2},{value:"\u5355\u526f\u672c compaction",id:"\u5355\u526f\u672c-compaction",level:2},{value:"Compaction \u7b56\u7565",id:"compaction-\u7b56\u7565",level:2},{value:"size_based compaction \u7b56\u7565",id:"size_based-compaction-\u7b56\u7565",level:3},{value:"time_series compaction \u7b56\u7565",id:"time_series-compaction-\u7b56\u7565",level:3},{value:"Compaction \u5e76\u53d1\u63a7\u5236",id:"compaction-\u5e76\u53d1\u63a7\u5236",level:2}],r={toc:m},g="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(g,(0,a.A)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Doris \u901a\u8fc7\u7c7b\u4f3c LSM-Tree \u7684\u7ed3\u6784\u5199\u5165\u6570\u636e\uff0c\u5728\u540e\u53f0\u901a\u8fc7 Compaction \u673a\u5236\u4e0d\u65ad\u5c06\u5c0f\u6587\u4ef6\u5408\u5e76\u6210\u6709\u5e8f\u7684\u5927\u6587\u4ef6\uff0c\u540c\u65f6\u4e5f\u4f1a\u5904\u7406\u6570\u636e\u7684\u5220\u9664\u3001\u66f4\u65b0\u7b49\u64cd\u4f5c\u3002\u9002\u5f53\u7684\u8c03\u6574 Compaction \u7684\u7b56\u7565\uff0c\u53ef\u4ee5\u6781\u5927\u5730\u63d0\u5347\u5bfc\u5165\u6548\u7387\u548c\u67e5\u8be2\u6548\u7387\u3002\nDoris \u63d0\u4f9b\u5982\u4e0b\u51e0\u79cd compaction \u65b9\u5f0f\u8fdb\u884c\u8c03\u4f18\uff1a"),(0,o.yg)("h2",{id:"vertical-compaction"},"Vertical compaction"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"\u81ea Doris 1.2.2 \u7248\u672c\u8d77\u652f\u6301 Vertical compaction")),(0,o.yg)("p",null,"Vertical compaction \u662f Doris 1.2.2 \u7248\u672c\u4e2d\u5b9e\u73b0\u7684\u65b0\u7684 Compaction \u7b97\u6cd5\uff0c\u7528\u4e8e\u89e3\u51b3\u5927\u5bbd\u8868\u573a\u666f\u4e0b\u7684 Compaction \u6267\u884c\u6548\u7387\u548c\u8d44\u6e90\u5f00\u9500\u95ee\u9898\u3002\u53ef\u4ee5\u6709\u6548\u964d\u4f4e Compaction \u7684\u5185\u5b58\u5f00\u9500\uff0c\u5e76\u63d0\u5347 Compaction \u7684\u6267\u884c\u901f\u5ea6\u3002"),(0,o.yg)("p",null,"\u5b9e\u9645\u6d4b\u8bd5\u4e2d\uff0cVertical compaction \u4f7f\u7528\u5185\u5b58\u4ec5\u4e3a\u539f\u6709 compaction \u7b97\u6cd5\u7684 1/10\uff0c\u540c\u65f6 compaction \u901f\u7387\u63d0\u5347 15%\u3002"),(0,o.yg)("p",null,"Vertical compaction \u4e2d\u5c06\u6309\u884c\u5408\u5e76\u7684\u65b9\u5f0f\u6539\u53d8\u4e3a\u6309\u5217\u7ec4\u5408\u5e76\uff0c\u6bcf\u6b21\u53c2\u4e0e\u5408\u5e76\u7684\u7c92\u5ea6\u53d8\u6210\u5217\u7ec4\uff0c\u964d\u4f4e\u5355\u6b21 compaction \u5185\u90e8\u53c2\u4e0e\u7684\u6570\u636e\u91cf\uff0c\u51cf\u5c11 compaction \u671f\u95f4\u7684\u5185\u5b58\u4f7f\u7528\u3002"),(0,o.yg)("p",null,"\u5f00\u542f\u548c\u914d\u7f6e\u65b9\u6cd5 (BE \u914d\u7f6e)\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"enable_vertical_compaction = true")," \u53ef\u4ee5\u5f00\u542f\u8be5\u529f\u80fd")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"vertical_compaction_num_columns_per_group = 5")," \u6bcf\u4e2a\u5217\u7ec4\u5305\u542b\u7684\u5217\u4e2a\u6570\uff0c\u7ecf\u6d4b\u8bd5\uff0c\u9ed8\u8ba4 5 \u5217\u4e00\u7ec4 compaction \u7684\u6548\u7387\u53ca\u5185\u5b58\u4f7f\u7528\u8f83\u53cb\u597d")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"vertical_compaction_max_segment_size")," \u7528\u4e8e\u914d\u7f6e vertical compaction \u4e4b\u540e\u843d\u76d8\u6587\u4ef6\u7684\u5927\u5c0f\uff0c\u9ed8\u8ba4\u503c 268435456(\u5b57\u8282)"))),(0,o.yg)("h2",{id:"segment-compaction"},"Segment compaction"),(0,o.yg)("p",null,"Segment compaction \u4e3b\u8981\u5e94\u5bf9\u5355\u6279\u6b21\u5927\u6570\u636e\u91cf\u7684\u5bfc\u5165\u573a\u666f\u3002\u548c Vertical compaction \u7684\u89e6\u53d1\u673a\u5236\u4e0d\u540c\uff0cSegment compaction \u662f\u5728\u5bfc\u5165\u8fc7\u7a0b\u4e2d\uff0c\u9488\u5bf9\u4e00\u6279\u6b21\u6570\u636e\u5185\uff0c\u591a\u4e2a Segment \u8fdb\u884c\u7684\u5408\u5e76\u64cd\u4f5c\u3002\u8fd9\u79cd\u673a\u5236\u53ef\u4ee5\u6709\u6548\u51cf\u5c11\u6700\u7ec8\u751f\u6210\u7684 Segment \u6570\u91cf\uff0c\u907f\u514d -238\uff08OLAP_ERR_TOO_MANY_SEGMENTS\uff09\u9519\u8bef\u7684\u51fa\u73b0\u3002\nSegment compaction \u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u51cf\u5c11\u5bfc\u5165\u4ea7\u751f\u7684 segment \u6570\u91cf")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u5408\u5e76\u8fc7\u7a0b\u4e0e\u5bfc\u5165\u8fc7\u7a0b\u5e76\u884c\uff0c\u4e0d\u4f1a\u989d\u5916\u589e\u52a0\u5bfc\u5165\u65f6\u95f4")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u7684\u5185\u5b58\u548c\u8ba1\u7b97\u8d44\u6e90\u7684\u4f7f\u7528\u91cf\u4f1a\u6709\u589e\u52a0\uff0c\u4f46\u56e0\u4e3a\u5e73\u644a\u5728\u6574\u4e2a\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u6240\u4ee5\u6da8\u5e45\u8f83\u4f4e")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u7ecf\u8fc7 Segment compaction \u540e\u7684\u6570\u636e\u5728\u8fdb\u884c\u540e\u7eed\u67e5\u8be2\u4ee5\u53ca\u6807\u51c6 compaction \u65f6\u4f1a\u6709\u8d44\u6e90\u548c\u6027\u80fd\u4e0a\u7684\u4f18\u52bf"))),(0,o.yg)("p",null,"\u5f00\u542f\u548c\u914d\u7f6e\u65b9\u6cd5 (BE \u914d\u7f6e)\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"enable_segcompaction = true")," \u53ef\u4ee5\u4f7f\u80fd\u8be5\u529f\u80fd")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"segcompaction_batch_size")," \u7528\u4e8e\u914d\u7f6e\u5408\u5e76\u7684\u95f4\u9694\u3002\u9ed8\u8ba4 10 \u8868\u793a\u6bcf\u751f\u6210 10 \u4e2a segment \u6587\u4ef6\u5c06\u4f1a\u8fdb\u884c\u4e00\u6b21 segment compaction\u3002\u4e00\u822c\u8bbe\u7f6e\u4e3a 10 - 30\uff0c\u8fc7\u5927\u7684\u503c\u4f1a\u589e\u52a0 segment compaction \u7684\u5185\u5b58\u7528\u91cf\u3002"))),(0,o.yg)("p",null,"\u5982\u6709\u4ee5\u4e0b\u573a\u666f\u6216\u95ee\u9898\uff0c\u5efa\u8bae\u5f00\u542f\u6b64\u529f\u80fd\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u5bfc\u5165\u5927\u91cf\u6570\u636e\u89e6\u53d1 OLAP_ERR_TOO_MANY_SEGMENTS (errcode -238) \u9519\u8bef\u5bfc\u81f4\u5bfc\u5165\u5931\u8d25\u3002\u6b64\u65f6\u5efa\u8bae\u6253\u5f00 segment compaction \u7684\u529f\u80fd\uff0c\u5728\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u5bf9 segment \u8fdb\u884c\u5408\u5e76\u63a7\u5236\u6700\u7ec8\u7684\u6570\u91cf\u3002")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u5927\u91cf\u7684\u5c0f\u6587\u4ef6\uff1a\u867d\u7136\u5bfc\u5165\u6570\u636e\u91cf\u4e0d\u5927\uff0c\u4f46\u56e0\u4e3a\u4f4e\u57fa\u6570\u6570\u636e\uff0c\u6216\u56e0\u4e3a\u5185\u5b58\u7d27\u5f20\u89e6\u53d1 memtable \u63d0\u524d\u4e0b\u5237\uff0c\u4ea7\u751f\u5927\u91cf\u5c0f segment  \u6587\u4ef6\u4e5f\u53ef\u80fd\u4f1a\u89e6\u53d1 OLAP_ERR_TOO_MANY_SEGMENTS \u5bfc\u81f4\u5bfc\u5165\u5931\u8d25\u3002\u6b64\u65f6\u5efa\u8bae\u6253\u5f00\u8be5\u529f\u80fd\u3002")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u5bfc\u5165\u5927\u91cf\u6570\u636e\u540e\u7acb\u5373\u8fdb\u884c\u67e5\u8be2\uff1a\u521a\u5bfc\u5165\u5b8c\u6210\u3001\u6807\u51c6 compaction \u8fd8\u6ca1\u6709\u5b8c\u6210\u5de5\u4f5c\u65f6\uff0c\u6b64\u65f6 segment \u6587\u4ef6\u8fc7\u591a\u4f1a\u5f71\u54cd\u540e\u7eed\u67e5\u8be2\u6548\u7387\u3002\u5982\u679c\u7528\u6237\u6709\u5bfc\u5165\u540e\u7acb\u5373\u67e5\u8be2\u7684\u9700\u6c42\uff0c\u5efa\u8bae\u6253\u5f00\u8be5\u529f\u80fd\u3002")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u5bfc\u5165\u540e\u6807\u51c6 compaction \u538b\u529b\u5927\uff1asegment compaction \u672c\u8d28\u4e0a\u662f\u628a\u6807\u51c6 compaction \u7684\u4e00\u90e8\u5206\u538b\u529b\u653e\u5728\u4e86\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u8fdb\u884c\u5904\u7406\uff0c\u6b64\u65f6\u5efa\u8bae\u6253\u5f00\u8be5\u529f\u80fd\u3002"))),(0,o.yg)("p",null,"\u4e0d\u5efa\u8bae\u4f7f\u7528\u7684\u60c5\u51b5\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u5bfc\u5165\u64cd\u4f5c\u672c\u8eab\u5df2\u7ecf\u8017\u5c3d\u4e86\u5185\u5b58\u8d44\u6e90\u65f6\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528 segment compaction \u4ee5\u514d\u8fdb\u4e00\u6b65\u589e\u52a0\u5185\u5b58\u538b\u529b\u4f7f\u5bfc\u5165\u5931\u8d25\u3002")),(0,o.yg)("p",null,"\u5173\u4e8e segment compaction \u7684\u5b9e\u73b0\u548c\u6d4b\u8bd5\u7ed3\u679c\u53ef\u4ee5\u67e5\u9605",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/12866"},"\u6b64\u94fe\u63a5"),"\u3002"),(0,o.yg)("h2",{id:"\u5355\u526f\u672c-compaction"},"\u5355\u526f\u672c compaction"),(0,o.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u591a\u4e2a\u526f\u672c\u7684 compaction \u662f\u72ec\u7acb\u8fdb\u884c\u7684\uff0c\u6bcf\u4e2a\u526f\u672c\u5728\u90fd\u9700\u8981\u6d88\u8017 CPU \u548c IO \u8d44\u6e90\u3002\u5f00\u542f\u5355\u526f\u672c compaction \u540e\uff0c\u5728\u4e00\u4e2a\u526f\u672c\u8fdb\u884c compaction \u540e\uff0c\u5176\u4ed6\u51e0\u4e2a\u526f\u672c\u62c9\u53d6 compaction \u540e\u7684\u6587\u4ef6\uff0c\u56e0\u6b64 CPU \u8d44\u6e90\u53ea\u9700\u8981\u6d88\u8017 1\u6b21\uff0c\u8282\u7701\u4e86 N - 1 \u500d CPU \u6d88\u8017\uff08 N \u662f\u526f\u672c\u6570\uff09\u3002"),(0,o.yg)("p",null,"\u5355\u526f\u672c compaction \u5728\u8868\u7684 PROPERTIES \u4e2d\u901a\u8fc7\u53c2\u6570 ",(0,o.yg)("inlineCode",{parentName:"p"},"enable_single_replica_compaction")," \u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a false \u4e0d\u5f00\u542f\uff0c\u8bbe\u7f6e\u4e3a true \u5f00\u542f\u3002"),(0,o.yg)("p",null,"\u8be5\u53c2\u6570\u53ef\u4ee5\u5728\u5efa\u8868\u65f6\u6307\u5b9a\uff0c\u6216\u8005\u901a\u8fc7 ",(0,o.yg)("inlineCode",{parentName:"p"},'ALTER TABLE table_name SET("enable_single_replica_compaction" = "true")')," \u6765\u4fee\u6539\u3002"),(0,o.yg)("h2",{id:"compaction-\u7b56\u7565"},"Compaction \u7b56\u7565"),(0,o.yg)("p",null,"Compaction \u7b56\u7565\u51b3\u5b9a\u4ec0\u4e48\u65f6\u5019\u5c06\u54ea\u4e9b\u5c0f\u6587\u4ef6\u5408\u5e76\u6210\u5927\u6587\u4ef6\u3002Doris \u5f53\u524d\u63d0\u4f9b\u4e86 2\u79cd compaction \u7b56\u7565\uff0c\u901a\u8fc7\u8868\u5c5e\u6027\u7684 ",(0,o.yg)("inlineCode",{parentName:"p"},"compaction_policy")," \u53c2\u6570\u6307\u5b9a\u3002"),(0,o.yg)("h3",{id:"size_based-compaction-\u7b56\u7565"},"size_based compaction \u7b56\u7565"),(0,o.yg)("p",null,"size_based compaction \u7b56\u7565\u662f\u9ed8\u8ba4\u7b56\u7565\uff0c\u5bf9\u5927\u591a\u6570\u573a\u666f\u9002\u7528\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'"compaction_policy" = "size_based"\n')),(0,o.yg)("h3",{id:"time_series-compaction-\u7b56\u7565"},"time_series compaction \u7b56\u7565"),(0,o.yg)("p",null,"time_series compaction \u7b56\u7565\u662f\u4e3a\u65e5\u5fd7\u3001\u65f6\u5e8f\u7b49\u573a\u666f\u4f18\u5316\u7684\u7b56\u7565\u3002\u5b83\u5229\u7528\u65f6\u5e8f\u6570\u636e\u5177\u6709\u65f6\u95f4\u5c40\u90e8\u6027\u7684\u7279\u70b9\uff0c\u5c06\u76f8\u90bb\u65f6\u95f4\u5199\u5165\u7684\u5c0f\u6587\u4ef6\u5408\u5e76\u6210\u5927\u6587\u4ef6\uff0c\u6bcf\u4e2a\u6587\u4ef6\u53ea\u4f1a\u53c2\u4e0e\u4e00\u6b21 compaction \u5c31\u5408\u5e76\u6210\u6bd4\u8f83\u5927\u7684\u6587\u4ef6\uff0c\u51cf\u5c11\u53cd\u590d compaction \u5e26\u6765\u7684\u5199\u653e\u5927\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'"compaction_policy" = "time_series"\n')),(0,o.yg)("p",null,"time_series compaction \u7b56\u7565\u5728\u4e0b\u9762 3 \u4e2a\u6761\u4ef6\u4efb\u610f\u4e00\u4e2a\u6ee1\u8db3\u7684\u65f6\u5019\u89e6\u53d1\u5c0f\u6587\u4ef6\u5408\u5e76\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u672a\u5408\u5e76\u7684\u6587\u4ef6\u5927\u5c0f\u8d85\u8fc7 ",(0,o.yg)("inlineCode",{parentName:"li"},"time_series_compaction_goal_size_mbytes")," (\u9ed8\u8ba4 1GB)"),(0,o.yg)("li",{parentName:"ul"},"\u672a\u5408\u5e76\u7684\u6587\u4ef6\u4e2a\u6570\u8d85\u8fc7 ",(0,o.yg)("inlineCode",{parentName:"li"},"time_series_compaction_file_count_threshold")," (\u9ed8\u8ba4 2000)"),(0,o.yg)("li",{parentName:"ul"},"\u8ddd\u79bb\u4e0a\u6b21\u5408\u5e76\u7684\u65f6\u95f4\u8d85\u8fc7 ",(0,o.yg)("inlineCode",{parentName:"li"},"time_series_compaction_time_threshold_seconds")," (\u9ed8\u8ba4 1\u5c0f\u65f6)")),(0,o.yg)("p",null,"\u4e0a\u8ff0\u53c2\u6570\u5728\u8868\u7684 PROPERTIES \u4e2d\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u5728\u5efa\u8868\u65f6\u6307\u5b9a\uff0c\u6216\u8005\u901a\u8fc7 ",(0,o.yg)("inlineCode",{parentName:"p"},'ALTER TABLE table_name SET("name" = "value")')," \u4fee\u6539\u3002"),(0,o.yg)("h2",{id:"compaction-\u5e76\u53d1\u63a7\u5236"},"Compaction \u5e76\u53d1\u63a7\u5236"),(0,o.yg)("p",null,"Compaction \u5728\u540e\u53f0\u6267\u884c\u9700\u8981\u6d88\u8017 CPU \u548c IO \u8d44\u6e90\uff0c\u53ef\u4ee5\u901a\u8fc7\u63a7\u5236 compaction \u5e76\u53d1\u7ebf\u7a0b\u6570\u6765\u63a7\u5236\u8d44\u6e90\u6d88\u8017\u3002"),(0,o.yg)("p",null,"compaction \u5e76\u53d1\u7ebf\u7a0b\u6570\u5728 BE \u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\uff0c\u5305\u62ec\u4e0b\u9762\u51e0\u4e2a\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"max_base_compaction_threads"),"\uff1abase compaction \u7684\u7ebf\u7a0b\u6570\uff0c\u9ed8\u8ba4\u662f 4"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"max_cumu_compaction_threads"),"\uff1acumulative compaction \u7684\u7ebf\u7a0b\u6570\uff0c\u9ed8\u8ba4\u662f 10"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"max_single_replica_compaction_threads"),"\uff1a\u5355\u526f\u672c compaction \u62c9\u53d6\u6570\u636e\u6587\u4ef6\u7684\u7ebf\u7a0b\u6570\uff0c\u9ed8\u8ba4\u662f 10")))}u.isMDXComponent=!0}}]);