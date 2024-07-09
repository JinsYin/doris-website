"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[9938],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>m});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),y=a,m=c["".concat(i,".").concat(y)]||c[y]||u[y]||l;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},596587:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(58168),a=(r(296540),r(15680));const l={title:"\u5347\u7ea7\u57fa\u4e8e Doris Operator \u90e8\u7f72\u7684 Apache Doris \u96c6\u7fa4",language:"zh-CN"},o=void 0,s={unversionedId:"install/cluster-deployment/k8s-deploy/doris-cluster-upgrade",id:"version-2.1/install/cluster-deployment/k8s-deploy/doris-cluster-upgrade",title:"\u5347\u7ea7\u57fa\u4e8e Doris Operator \u90e8\u7f72\u7684 Apache Doris \u96c6\u7fa4",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/install/cluster-deployment/k8s-deploy/doris-cluster-upgrade.md",sourceDirName:"install/cluster-deployment/k8s-deploy",slug:"/install/cluster-deployment/k8s-deploy/doris-cluster-upgrade",permalink:"/zh-CN/docs/install/cluster-deployment/k8s-deploy/doris-cluster-upgrade",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u5347\u7ea7\u57fa\u4e8e Doris Operator \u90e8\u7f72\u7684 Apache Doris \u96c6\u7fa4",language:"zh-CN"},sidebar:"docs",previous:{title:"\u8bbf\u95ee Doris \u96c6\u7fa4 ",permalink:"/zh-CN/docs/install/cluster-deployment/k8s-deploy/install-access-cluster"},next:{title:"Root \u7528\u6237\u4f7f\u7528",permalink:"/zh-CN/docs/install/cluster-deployment/k8s-deploy/root-user-use"}},i={},p=[{value:"\u5347\u7ea7\u524d\u6ce8\u610f\u4e8b\u9879",id:"\u5347\u7ea7\u524d\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5347\u7ea7\u64cd\u4f5c",id:"\u5347\u7ea7\u64cd\u4f5c",level:2},{value:"\u5347\u7ea7 BE",id:"\u5347\u7ea7-be",level:3},{value:"\u5347\u7ea7 FE",id:"\u5347\u7ea7-fe",level:3},{value:"\u5347\u7ea7\u5b8c\u6210\u540e",id:"\u5347\u7ea7\u5b8c\u6210\u540e",level:2},{value:"\u9a8c\u8bc1\u96c6\u7fa4\u8282\u70b9\u72b6\u6001",id:"\u9a8c\u8bc1\u96c6\u7fa4\u8282\u70b9\u72b6\u6001",level:3},{value:"\u6062\u590d\u96c6\u7fa4\u526f\u672c\u540c\u6b65\u548c\u5747\u8861",id:"\u6062\u590d\u96c6\u7fa4\u526f\u672c\u540c\u6b65\u548c\u5747\u8861",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 \u66f4\u65b0\u6765\u5347\u7ea7 \u57fa\u4e8e Doris Operator \u90e8\u7f72\u7684 Apache Doris \u96c6\u7fa4\u3002"),(0,a.yg)("p",null,"\u548c\u5e38\u89c4\u90e8\u7f72\u7684\u96c6\u7fa4\u5347\u7ea7\u7c7b\u4f3c\uff0cDoris Operator \u90e8\u7f72\u7684 Doris \u96c6\u7fa4\u4f9d\u7136\u9700\u8981 BE \u5230 FE \u8282\u70b9\u6eda\u52a8\u5347\u7ea7\uff0cDoris Operator \u57fa\u4e8e Kubernetes \u7684 ",(0,a.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/"},"\u6eda\u52a8\u66f4\u65b0\u529f\u80fd")," \u63d0\u4f9b\u4e86\u6eda\u52a8\u5347\u7ea7\u80fd\u529b\u3002"),(0,a.yg)("h2",{id:"\u5347\u7ea7\u524d\u6ce8\u610f\u4e8b\u9879"},"\u5347\u7ea7\u524d\u6ce8\u610f\u4e8b\u9879"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5347\u7ea7\u64cd\u4f5c\u63a8\u8350\u5728\u4e1a\u52a1\u4f4e\u5cf0\u671f\u8fdb\u884c\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u6eda\u52a8\u5347\u7ea7\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u5bfc\u81f4\u8fde\u63a5\u5230\u88ab\u5173\u95ed\u8282\u70b9\u7684\u8fde\u63a5\u5931\u6548\uff0c\u9020\u6210\u8bf7\u6c42\u5931\u8d25\uff0c\u5bf9\u4e8e\u8fd9\u7c7b\u4e1a\u52a1\uff0c\u63a8\u8350\u5728\u5ba2\u6237\u7aef\u6dfb\u52a0\u91cd\u8bd5\u80fd\u529b\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5347\u7ea7\u524d\u53ef\u4ee5\u9605\u8bfb ",(0,a.yg)("a",{parentName:"li",href:"https://doris.apache.org/zh-CN/docs/dev/admin-manual/cluster-management/upgrade"},"\u5e38\u89c4\u5347\u7ea7\u624b\u518c"),"\uff0c\u4fbf\u4e8e\u7406\u89e3\u5347\u7ea7\u4e2d\u7684\u4e00\u4e9b\u539f\u7406\u548c\u6ce8\u610f\u4e8b\u9879\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5347\u7ea7\u524d\u65e0\u6cd5\u5bf9\u6570\u636e\u548c\u5143\u6570\u636e\u7684\u517c\u5bb9\u6027\u8fdb\u884c\u9a8c\u8bc1\uff0c\u56e0\u6b64\u96c6\u7fa4\u5347\u7ea7\u4e00\u5b9a\u8981\u907f\u514d\u6570\u636e\u5b58\u5728 \u5355\u526f\u672c \u60c5\u51b5 \u548c \u96c6\u7fa4\u5355 FE FOLLOWER \u8282\u70b9\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u4f1a\u6709\u8282\u70b9\u91cd\u542f\uff0c\u6240\u4ee5\u53ef\u80fd\u4f1a\u89e6\u53d1\u4e0d\u5fc5\u8981\u7684\u96c6\u7fa4\u5747\u8861\u548c\u526f\u672c\u4fee\u590d\u903b\u8f91\uff0c\u5148\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5173\u95ed")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'admin set frontend config("disable_balance" = "true");\nadmin set frontend config("disable_colocate_balance" = "true");\nadmin set frontend config("disable_tablet_scheduler" = "true");\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Doris \u5347\u7ea7\u8bf7\u9075\u5b88\u4e0d\u8981\u8de8\u4e24\u4e2a\u53ca\u4ee5\u4e0a\u5173\u952e\u8282\u70b9\u7248\u672c\u5347\u7ea7\u7684\u539f\u5219\uff0c\u82e5\u8981\u8de8\u591a\u4e2a\u5173\u952e\u8282\u70b9\u7248\u672c\u5347\u7ea7\uff0c\u5148\u5347\u7ea7\u5230\u6700\u8fd1\u7684\u5173\u952e\u8282\u70b9\u7248\u672c\uff0c\u968f\u540e\u518d\u4f9d\u6b21\u5f80\u540e\u5347\u7ea7\uff0c\u82e5\u662f\u975e\u5173\u952e\u8282\u70b9\u7248\u672c\uff0c\u5219\u53ef\u5ffd\u7565\u8df3\u8fc7\u3002\u5177\u4f53\u53c2\u8003 ",(0,a.yg)("a",{parentName:"li",href:"https://doris.apache.org/zh-CN/docs/dev/admin-manual/cluster-management/upgrade#doris-%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E"},"\u5347\u7ea7\u7248\u672c\u8bf4\u660e"))),(0,a.yg)("h2",{id:"\u5347\u7ea7\u64cd\u4f5c"},"\u5347\u7ea7\u64cd\u4f5c"),(0,a.yg)("p",null,"\u5347\u7ea7\u8fc7\u7a0b\u8282\u70b9\u7c7b\u578b\u987a\u5e8f\u5982\u4e0b\uff0c\u5982\u679c\u67d0\u7c7b\u578b\u8282\u70b9\u4e0d\u5b58\u5728\u5219\u8df3\u8fc7\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"  cn/be -> fe -> broker\n")),(0,a.yg)("p",null,"\u5efa\u8bae\u4f9d\u6b21\u4fee\u6539\u5bf9\u5e94\u96c6\u7fa4\u7ec4\u4ef6\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"image")," \u7136\u540e \u5e94\u7528\u8be5\u914d\u7f6e\uff0c\u5f85\u5f53\u524d\u7c7b\u578b\u7684\u7ec4\u4ef6\u5b8c\u5168\u5347\u7ea7\u6210\u529f\u72b6\u6001\u6062\u590d\u6b63\u5e38\u540e\uff0c\u518d\u8fdb\u884c\u4e0b\u4e00\u4e2a\u7c7b\u578b\u8282\u70b9\u7684\u6eda\u52a8\u5347\u7ea7\u3002"),(0,a.yg)("h3",{id:"\u5347\u7ea7-be"},"\u5347\u7ea7 BE"),(0,a.yg)("p",null,"\u5982\u679c\u4fdd\u7559\u4e86\u96c6\u7fa4\u7684 crd\uff08Doris Operator \u5b9a\u4e49\u4e86 ",(0,a.yg)("inlineCode",{parentName:"p"},"DorisCluster")," \u7c7b\u578b\u8d44\u6e90\u540d\u79f0\u7684\u7b80\u5199\uff09\u6587\u4ef6\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u8be5\u914d\u7f6e\u6587\u4ef6\u5e76\u4e14 ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl apply")," \u7684\u547d\u4ee4\u6765\u8fdb\u884c\u5347\u7ea7\u3002"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4fee\u6539 ",(0,a.yg)("inlineCode",{parentName:"p"},"spec.beSpec.image"),"  "),(0,a.yg)("p",{parentName:"li"},"\u5c06 ",(0,a.yg)("inlineCode",{parentName:"p"},"selectdb/doris.be-ubuntu:2.0.4")," \u53d8\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"selectdb/doris.be-ubuntu:2.1.0")))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ vim doriscluster-sample.yaml\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u4fdd\u5b58\u4fee\u6539\u540e\u5e94\u7528\u672c\u6b21\u4fee\u6539\u8fdb\u884c be \u5347\u7ea7\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ kubectl apply -f doriscluster-sample.yaml -n doris\n")),(0,a.yg)("p",null,"\u4e5f\u53ef\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl edit dcr")," \u7684\u65b9\u5f0f\u76f4\u63a5\u4fee\u6539\u3002"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u67e5\u770b namespace \u4e3a 'doris' \u4e0b\u7684 dcr \u5217\u8868\uff0c\u83b7\u53d6\u9700\u8981\u66f4\u65b0\u7684 ",(0,a.yg)("inlineCode",{parentName:"li"},"cluster_name"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ kubectl get dcr -n doris\nNAME                  FESTATUS    BESTATUS    CNSTATUS\ndoriscluster-sample   available   available\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u4fee\u6539\u3001\u4fdd\u5b58\u5e76\u751f\u6548")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ kubectl edit dcr doriscluster-sample -n doris\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u8fdb\u5165\u6587\u672c\u7f16\u8f91\u5668\u540e\uff0c\u5c06\u627e\u5230`spec.beSpec.image`\uff0c\u5c06 `selectdb/doris.be-ubuntu:2.0.4` \u4fee\u6539\u4e3a `selectdb/doris.be-ubuntu:2.1.0`\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"\u67e5\u770b\u5347\u7ea7\u8fc7\u7a0b\u548c\u7ed3\u679c\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ kubectl get pod -n doris\n")),(0,a.yg)("p",null,"\u5f53\u6240\u6709 Pod \u90fd\u91cd\u5efa\u5b8c\u6bd5\u8fdb\u5165 Running \u72b6\u6001\u540e\uff0c\u5347\u7ea7\u5b8c\u6210\u3002"),(0,a.yg)("h3",{id:"\u5347\u7ea7-fe"},"\u5347\u7ea7 FE"),(0,a.yg)("p",null,"\u5982\u679c\u4fdd\u7559\u4e86\u96c6\u7fa4\u7684 crd\uff08Doris-Operator \u5b9a\u4e49\u4e86 ",(0,a.yg)("inlineCode",{parentName:"p"},"DorisCluster")," \u7c7b\u578b\u8d44\u6e90\u540d\u79f0\u7684\u7b80\u5199\uff09\u6587\u4ef6\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u8be5\u914d\u7f6e\u6587\u4ef6\u5e76\u4e14 ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl apply")," \u7684\u547d\u4ee4\u6765\u8fdb\u884c\u5347\u7ea7\u3002"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4fee\u6539 ",(0,a.yg)("inlineCode",{parentName:"p"},"spec.feSpec.image")),(0,a.yg)("p",{parentName:"li"},"\u5c06 ",(0,a.yg)("inlineCode",{parentName:"p"},"selectdb/doris.fe-ubuntu:2.0.4")," \u53d8\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"selectdb/doris.fe-ubuntu:2.1.0")))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ vim doriscluster-sample.yaml\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u4fdd\u5b58\u4fee\u6539\u540e\u5e94\u7528\u672c\u6b21\u4fee\u6539\u8fdb\u884c be \u5347\u7ea7\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ kubectl apply -f doriscluster-sample.yaml -n doris\n")),(0,a.yg)("p",null,"\u4e5f\u53ef\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl edit dcr")," \u7684\u65b9\u5f0f\u76f4\u63a5\u4fee\u6539\u3002"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u4fee\u6539\u3001\u4fdd\u5b58\u5e76\u751f\u6548")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ kubectl edit dcr doriscluster-sample -n doris\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u8fdb\u5165\u6587\u672c\u7f16\u8f91\u5668\u540e\uff0c\u5c06\u627e\u5230`spec.feSpec.image`\uff0c\u5c06 `selectdb/doris.fe-ubuntu:2.0.4` \u4fee\u6539\u4e3a `selectdb/doris.fe-ubuntu:2.1.0`\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u67e5\u770b\u5347\u7ea7\u8fc7\u7a0b\u548c\u7ed3\u679c")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ kubectl get pod -n doris\n")),(0,a.yg)("p",null,"\u5f53\u6240\u6709 Pod \u90fd\u91cd\u5efa\u5b8c\u6bd5\u8fdb\u5165 Running \u72b6\u6001\u540e\uff0c\u5347\u7ea7\u5b8c\u6210\u3002"),(0,a.yg)("h2",{id:"\u5347\u7ea7\u5b8c\u6210\u540e"},"\u5347\u7ea7\u5b8c\u6210\u540e"),(0,a.yg)("h3",{id:"\u9a8c\u8bc1\u96c6\u7fa4\u8282\u70b9\u72b6\u6001"},"\u9a8c\u8bc1\u96c6\u7fa4\u8282\u70b9\u72b6\u6001"),(0,a.yg)("p",null,"\u901a\u8fc7  ",(0,a.yg)("a",{parentName:"p",href:"../k8s-deploy/install-access-cluster"},"\u8bbf\u95ee Doris \u96c6\u7fa4")," \u6587\u6863\u63d0\u4f9b\u7684\u65b9\u5f0f\uff0c\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"mysql-client")," \u8bbf\u95ee Doris\u3002\n\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"show frontends")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"show backends")," \u7b49 SQL \u67e5\u770b\u5404\u4e2a\u7ec4\u4ef6\u7684 \u7248\u672c \u548c \u72b6\u6001\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> show frontends\\G;\n*************************** 1. row ***************************\n              Name: fe_13c132aa_3281_4f4f_97e8_655d01287425\n              Host: doriscluster-sample-fe-0.doriscluster-sample-fe-internal.doris.svc.cluster.local\n       EditLogPort: 9010\n          HttpPort: 8030\n         QueryPort: 9030\n           RpcPort: 9020\nArrowFlightSqlPort: -1\n              Role: FOLLOWER\n          IsMaster: false\n         ClusterId: 1779160761\n              Join: true\n             Alive: true\n ReplayedJournalId: 2422\n     LastStartTime: 2024-02-19 06:38:47\n     LastHeartbeat: 2024-02-19 09:31:33\n          IsHelper: true\n            ErrMsg:\n           Version: doris-2.1.0\n  CurrentConnected: Yes\n*************************** 2. row ***************************\n              Name: fe_f1a9d008_d110_4780_8e60_13d392faa54e\n              Host: doriscluster-sample-fe-2.doriscluster-sample-fe-internal.doris.svc.cluster.local\n       EditLogPort: 9010\n          HttpPort: 8030\n         QueryPort: 9030\n           RpcPort: 9020\nArrowFlightSqlPort: -1\n              Role: FOLLOWER\n          IsMaster: true\n         ClusterId: 1779160761\n              Join: true\n             Alive: true\n ReplayedJournalId: 2423\n     LastStartTime: 2024-02-19 06:37:35\n     LastHeartbeat: 2024-02-19 09:31:33\n          IsHelper: true\n            ErrMsg:\n           Version: doris-2.1.0\n  CurrentConnected: No\n*************************** 3. row ***************************\n              Name: fe_e42bf9da_006f_4302_b861_770d2c955a47\n              Host: doriscluster-sample-fe-1.doriscluster-sample-fe-internal.doris.svc.cluster.local\n       EditLogPort: 9010\n          HttpPort: 8030\n         QueryPort: 9030\n           RpcPort: 9020\nArrowFlightSqlPort: -1\n              Role: FOLLOWER\n          IsMaster: false\n         ClusterId: 1779160761\n              Join: true\n             Alive: true\n ReplayedJournalId: 2422\n     LastStartTime: 2024-02-19 06:38:17\n     LastHeartbeat: 2024-02-19 09:31:33\n          IsHelper: true\n            ErrMsg:\n           Version: doris-2.1.0\n  CurrentConnected: No\n3 rows in set (0.02 sec)\n")),(0,a.yg)("p",null,"\u82e5 FE \u8282\u70b9 ",(0,a.yg)("inlineCode",{parentName:"p"},"alive")," \u72b6\u6001\u4e3a true\uff0c\u4e14 ",(0,a.yg)("inlineCode",{parentName:"p"},"Version")," \u503c\u4e3a\u65b0\u7248\u672c\uff0c\u5219\u8be5 FE \u8282\u70b9\u5347\u7ea7\u6210\u529f\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'mysql> show backends\\G;\n*************************** 1. row ***************************\n              BackendId: 10002\n                   Host: doriscluster-sample-be-0.doriscluster-sample-be-internal.doris.svc.cluster.local\n          HeartbeatPort: 9050\n                 BePort: 9060\n               HttpPort: 8040\n               BrpcPort: 8060\n     ArrowFlightSqlPort: -1\n          LastStartTime: 2024-02-19 06:37:56\n          LastHeartbeat: 2024-02-19 09:32:43\n                  Alive: true\n   SystemDecommissioned: false\n              TabletNum: 14\n       DataUsedCapacity: 0.000\n     TrashUsedCapcacity: 0.000\n          AvailCapacity: 12.719 GB\n          TotalCapacity: 295.167 GB\n                UsedPct: 95.69 %\n         MaxDiskUsedPct: 95.69 %\n     RemoteUsedCapacity: 0.000\n                    Tag: {"location" : "default"}\n                 ErrMsg:\n                Version: doris-2.1.0\n                 Status: {"lastSuccessReportTabletsTime":"2024-02-19 09:31:48","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false}\nHeartbeatFailureCounter: 0\n               NodeRole: mix\n*************************** 2. row ***************************\n              BackendId: 10003\n                   Host: doriscluster-sample-be-1.doriscluster-sample-be-internal.doris.svc.cluster.local\n          HeartbeatPort: 9050\n                 BePort: 9060\n               HttpPort: 8040\n               BrpcPort: 8060\n     ArrowFlightSqlPort: -1\n          LastStartTime: 2024-02-19 06:37:35\n          LastHeartbeat: 2024-02-19 09:32:43\n                  Alive: true\n   SystemDecommissioned: false\n              TabletNum: 8\n       DataUsedCapacity: 0.000\n     TrashUsedCapcacity: 0.000\n          AvailCapacity: 12.719 GB\n          TotalCapacity: 295.167 GB\n                UsedPct: 95.69 %\n         MaxDiskUsedPct: 95.69 %\n     RemoteUsedCapacity: 0.000\n                    Tag: {"location" : "default"}\n                 ErrMsg:\n                Version: doris-2.1.0\n                 Status: {"lastSuccessReportTabletsTime":"2024-02-19 09:31:43","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false}\nHeartbeatFailureCounter: 0\n               NodeRole: mix\n*************************** 3. row ***************************\n              BackendId: 11024\n                   Host: doriscluster-sample-be-2.doriscluster-sample-be-internal.doris.svc.cluster.local\n          HeartbeatPort: 9050\n                 BePort: 9060\n               HttpPort: 8040\n               BrpcPort: 8060\n     ArrowFlightSqlPort: -1\n          LastStartTime: 2024-02-19 08:50:36\n          LastHeartbeat: 2024-02-19 09:32:43\n                  Alive: true\n   SystemDecommissioned: false\n              TabletNum: 0\n       DataUsedCapacity: 0.000\n     TrashUsedCapcacity: 0.000\n          AvailCapacity: 12.719 GB\n          TotalCapacity: 295.167 GB\n                UsedPct: 95.69 %\n         MaxDiskUsedPct: 95.69 %\n     RemoteUsedCapacity: 0.000\n                    Tag: {"location" : "default"}\n                 ErrMsg:\n                Version: doris-2.1.0\n                 Status: {"lastSuccessReportTabletsTime":"2024-02-19 09:32:04","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false}\nHeartbeatFailureCounter: 0\n               NodeRole: mix\n3 rows in set (0.01 sec)\n')),(0,a.yg)("p",null,"\u82e5 BE \u8282\u70b9 ",(0,a.yg)("inlineCode",{parentName:"p"},"alive")," \u72b6\u6001\u4e3a true\uff0c\u4e14 ",(0,a.yg)("inlineCode",{parentName:"p"},"Version")," \u503c\u4e3a\u65b0\u7248\u672c\uff0c\u5219\u8be5 BE \u8282\u70b9\u5347\u7ea7\u6210\u529f"),(0,a.yg)("h3",{id:"\u6062\u590d\u96c6\u7fa4\u526f\u672c\u540c\u6b65\u548c\u5747\u8861"},"\u6062\u590d\u96c6\u7fa4\u526f\u672c\u540c\u6b65\u548c\u5747\u8861"),(0,a.yg)("p",null,"\u5728\u786e\u8ba4\u5404\u4e2a\u8282\u70b9\u72b6\u6001\u65e0\u8bef\u540e\uff0c\u6267\u884c\u4ee5\u4e0b SQL \u6062\u590d\u96c6\u7fa4\u5747\u8861\u548c\u526f\u672c\u4fee\u590d\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'admin set frontend config("disable_balance" = "false");\nadmin set frontend config("disable_colocate_balance" = "false");\nadmin set frontend config("disable_tablet_scheduler" = "false");\n')))}u.isMDXComponent=!0}}]);