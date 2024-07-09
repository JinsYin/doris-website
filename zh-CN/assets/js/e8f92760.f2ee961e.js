"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[74908],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>d});var o=a(296540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=o.createContext({}),p=function(e){var n=o.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},g=function(e){var n=p(e.components);return o.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=t,d=c["".concat(i,".").concat(m)]||c[m]||u[m]||r;return a?o.createElement(d,l(l({ref:n},g),{},{components:a})):o.createElement(d,l({ref:n},g))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:t,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},205084:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=a(58168),t=(a(296540),a(15680));const r={title:"\u914d\u7f6e Doris \u96c6\u7fa4",language:"zh-CN"},l=void 0,s={unversionedId:"install/cluster-deployment/k8s-deploy/install-config-cluster",id:"install/cluster-deployment/k8s-deploy/install-config-cluster",title:"\u914d\u7f6e Doris \u96c6\u7fa4",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/install/cluster-deployment/k8s-deploy/install-config-cluster.md",sourceDirName:"install/cluster-deployment/k8s-deploy",slug:"/install/cluster-deployment/k8s-deploy/install-config-cluster",permalink:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/install-config-cluster",draft:!1,tags:[],version:"current",frontMatter:{title:"\u914d\u7f6e Doris \u96c6\u7fa4",language:"zh-CN"},sidebar:"docs",previous:{title:"\u90e8\u7f72 Doris Operator",permalink:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/install-operator"},next:{title:"\u90e8\u7f72 Doris \u96c6\u7fa4",permalink:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/install-doris-cluster"}},i={},p=[{value:"\u914d\u7f6e\u6570\u636e\u53ca\u6301\u4e45\u5316\u5b58\u50a8",id:"\u914d\u7f6e\u6570\u636e\u53ca\u6301\u4e45\u5316\u5b58\u50a8",level:2},{value:"\u6301\u4e45\u5316\u76ee\u5f55\u7c7b\u578b",id:"\u6301\u4e45\u5316\u76ee\u5f55\u7c7b\u578b",level:3},{value:"\u6570\u636e\u6301\u4e45\u5316\u5230\u7f51\u7edc PV",id:"\u6570\u636e\u6301\u4e45\u5316\u5230\u7f51\u7edc-pv",level:3},{value:"\u96c6\u7fa4\u90e8\u7f72\u914d\u7f6e",id:"\u96c6\u7fa4\u90e8\u7f72\u914d\u7f6e",level:2},{value:"\u96c6\u7fa4\u540d\u79f0",id:"\u96c6\u7fa4\u540d\u79f0",level:3},{value:"\u955c\u50cf\u7248\u672c",id:"\u955c\u50cf\u7248\u672c",level:3},{value:"\u96c6\u7fa4\u62d3\u6251",id:"\u96c6\u7fa4\u62d3\u6251",level:3},{value:"\u670d\u52a1\u914d\u7f6e",id:"\u670d\u52a1\u914d\u7f6e",level:3},{value:"\u96c6\u7fa4\u53c2\u6570\u914d\u7f6e",id:"\u96c6\u7fa4\u53c2\u6570\u914d\u7f6e",level:2},{value:"FE ConfigMap",id:"fe-configmap",level:3},{value:"BE ConfigMap",id:"be-configmap",level:3},{value:"\u4e3a conf \u76ee\u5f55\u6dfb\u52a0\u5916\u90e8\u914d\u7f6e\u6587\u4ef6",id:"\u4e3a-conf-\u76ee\u5f55\u6dfb\u52a0\u5916\u90e8\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u4e3a BE \u914d\u7f6e\u591a\u76d8\u5b58\u50a8",id:"\u4e3a-be-\u914d\u7f6e\u591a\u76d8\u5b58\u50a8",level:3}],g={toc:p},c="wrapper";function u(e){let{components:n,...a}=e;return(0,t.yg)(c,(0,o.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"\u914d\u7f6e\u6570\u636e\u53ca\u6301\u4e45\u5316\u5b58\u50a8"},"\u914d\u7f6e\u6570\u636e\u53ca\u6301\u4e45\u5316\u5b58\u50a8"),(0,t.yg)("p",null,"\u5728 Doris \u96c6\u7fa4\u4e2d\uff0c\u5305\u62ec FE\u3001BE\u3001CN \u548c\u76d1\u63a7\u7ec4\u4ef6\u5728\u5185\u7684\u7ec4\u4ef6\u90fd\u9700\u8981\u5c06\u6570\u636e\u6301\u4e45\u5316\u5230\u7269\u7406\u5b58\u50a8\u4e2d\u3002Kubernetes \u63d0\u4f9b\u4e86 ",(0,t.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"Persistent Volumes")," \u7684\u80fd\u529b\u5c06\u6570\u636e\u6301\u4e45\u5316\u5230\u7269\u7406\u5b58\u50a8\u4e2d\u3002\u5728 Kubernetes \u73af\u5883\u4e2d\uff0c\u4e3b\u8981\u5b58\u5728\u4e24\u79cd\u7c7b\u578b\u7684 Persistent Volumes\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u672c\u5730 PV \u5b58\u50a8\uff08Local Persistent Volumes\uff09\uff1a\u672c\u5730 PV \u662f Kubernetes \u76f4\u63a5\u4f7f\u7528\u5bbf\u4e3b\u673a\u7684\u672c\u5730\u78c1\u76d8\u76ee\u5f55\u6765\u6301\u4e45\u5316\u5b58\u50a8\u5bb9\u5668\u7684\u6570\u636e\u3002\u672c\u5730 PV \u63d0\u4f9b\u66f4\u5c0f\u7684\u7f51\u7edc\u5ef6\u8fdf\uff0c\u5728\u4f7f\u7528 SSD \u7b49\u9ad8\u6027\u80fd\u786c\u76d8\u65f6\uff0c\u53ef\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u8bfb\u5199\u80fd\u529b\u3002\u7531\u4e8e\u672c\u5730 PV \u4e0e\u5bbf\u4e3b\u673a\u7ed1\u5b9a\uff0c\u5728\u5bbf\u4e3b\u673a\u51fa\u73b0\u6545\u969c\u65f6\uff0c\u672c\u5730 PV \u8fdb\u884c\u6545\u969c\u6f02\u79fb\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u7f51\u7edc PV \u5b58\u50a8\uff08Network Persistent Volumes\uff09\uff1a\u7f51\u7edc PV \u662f\u901a\u8fc7\u7f51\u7edc\u8bbf\u95ee\u7684\u5b58\u50a8\u8d44\u6e90\u3002\u7f51\u7edc PV \u53ef\u4ee5\u88ab\u96c6\u7fa4\u4e2d\u7684\u4efb\u4e00\u8282\u70b9\u8bbf\u95ee\uff0c\u5728\u5bbf\u4e3b\u673a\u51fa\u73b0\u6545\u969c\u65f6\uff0c\u7f51\u7edc PV \u53ef\u4ee5\u6302\u8f7d\u5230\u5176\u4ed6\u8282\u70b9\u7ee7\u7eed\u4f7f\u7528\u3002")),(0,t.yg)("p",null,"StorageClass \u53ef\u4ee5\u7528\u4e8e\u5b9a\u4e49 PV \u7684\u7c7b\u578b\u548c\u884c\u4e3a\uff0c\u901a\u8fc7 StorageClass \u53ef\u4ee5\u5c06\u78c1\u76d8\u8d44\u6e90\u4e0e\u5bb9\u5668\u89e3\u8026\uff0c\u4ece\u800c\u5b9e\u73b0\u6570\u636e\u7684\u6301\u4e45\u6027\u4e0e\u53ef\u9760\u6027\u3002\u5728 Doris Operator \u4e2d\uff0c\u5728 Kubernetes \u4e0a\u90e8\u7f72 Doris\uff0c\u53ef\u4ee5\u652f\u6301\u672c\u5730 PV \u4e0e\u7f51\u7edc PV\uff0c\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u8fdb\u884c\u9009\u62e9\u3002"),(0,t.yg)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,t.yg)("p",{parentName:"admonition"},"\u5efa\u8bae\u5728\u90e8\u7f72\u65f6\u5c06\u6570\u636e\u6301\u4e45\u5316\u5230\u5b58\u50a8\u4e2d\u3002\n\u5982\u679c\u90e8\u7f72\u65f6\u672a\u914d\u7f6e PersistentVolumeClaim\uff0cDoris Operator \u9ed8\u8ba4\u4f1a\u4f7f\u7528 emptyDir \u6a21\u5f0f\u6765\u5b58\u50a8\u5143\u6570\u636e\u3001\u6570\u636e\u4ee5\u53ca\u65e5\u5fd7\u3002\u5f53 pod \u91cd\u542f\u65f6\uff0c\u76f8\u5173\u6570\u636e\u4f1a\u4e22\u5931\u6389\u3002")),(0,t.yg)("h3",{id:"\u6301\u4e45\u5316\u76ee\u5f55\u7c7b\u578b"},"\u6301\u4e45\u5316\u76ee\u5f55\u7c7b\u578b"),(0,t.yg)("p",null,"\u5728 Doris \u4e2d\uff0c\u5efa\u8bae\u6301\u4e45\u5316\u5b58\u50a8\u4ee5\u4e0b\u76ee\u5f55\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"FE \u8282\u70b9\uff1adoris-meta\u3001log"),(0,t.yg)("li",{parentName:"ul"},"BE \u8282\u70b9\uff1astorage\u3001log"),(0,t.yg)("li",{parentName:"ul"},"CN \u8282\u70b9\uff1astorage\u3001log"),(0,t.yg)("li",{parentName:"ul"},"Broker \u8282\u70b9\uff1alog")),(0,t.yg)("p",null,"\u5728 Doris \u4e2d\u5b58\u5728\u591a\u79cd\u65e5\u5fd7\u7c7b\u578b\uff0c\u5982 INFO \u65e5\u5fd7\u3001OUT \u65e5\u5fd7\u3001GC \u65e5\u5fd7\u4ee5\u53ca\u5ba1\u8ba1\u65e5\u5fd7\u3002Doris Operator \u53ef\u4ee5\u5c06\u65e5\u5fd7\u540c\u65f6\u8f93\u51fa\u5230 console \u4e0e\u6307\u5b9a\u76ee\u5f55\u4e0b\u3002\u5982\u679c\u7528\u6237\u7684 Kubernetes \u6709\u5b8c\u6574\u7684\u65e5\u5fd7\u6536\u96c6\u80fd\u529b\uff0c\u53ef\u4ee5\u901a\u8fc7 console \u8f93\u51fa\u6765\u6536\u96c6 Doris \u7684 INFO \u65e5\u5fd7\u3002\u5efa\u8bae\u5c06 Doris \u7684\u6240\u6709\u65e5\u5fd7\u901a\u8fc7 PVC \u914d\u7f6e\u6301\u4e45\u5316\u5230\u6307\u5b9a\u5b58\u50a8\u4e2d\uff0c\u8fd9\u5c06\u6709\u52a9\u4e8e\u95ee\u9898\u7684\u5b9a\u4f4d\u4e0e\u6392\u67e5\u3002"),(0,t.yg)("h3",{id:"\u6570\u636e\u6301\u4e45\u5316\u5230\u7f51\u7edc-pv"},"\u6570\u636e\u6301\u4e45\u5316\u5230\u7f51\u7edc PV"),(0,t.yg)("p",null,"Doris Operator \u4f7f\u7528 Kubernetes \u9ed8\u8ba4\u7684 StorageClass \u6765\u652f\u6301 FE \u4e0e BE \u7684\u5b58\u50a8\u3002\u5728 DorisCluster \u7684 CR \u4e2d\uff0c\u901a\u4fee\u6539 StorageClass \u6307\u5b9a ",(0,t.yg)("inlineCode",{parentName:"p"},"persistentVolumeClaimSpec.storageClassName"),"\uff0c\u53ef\u4ee5\u914d\u7f6e\u6307\u5b9a\u7684\u7f51\u7edc PV\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"persistentVolumes:\n    - mountPath: /opt/apache-doris/fe/doris-meta\n      name: storage0\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        storageClassName: ${your_storageclass}\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          # notice: if the storage size less 5G, fe will not start normal.\n          requests:\n            storage: 100Gi\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"FE \u914d\u7f6e\u6301\u4e45\u5316\u5b58\u50a8")),(0,t.yg)("p",null,"\u5728\u90e8\u7f72\u96c6\u7fa4\u65f6\uff0c\u5efa\u8bae\u5bf9 FE \u4e2d\u7684 doris-meta \u4e0e log \u76ee\u5f55\u505a\u6301\u4e45\u5316\u5b58\u50a8\u3002doris-meta \u7528\u6237\u5b58\u653e\u5143\u6570\u636e\uff0c\u4e00\u822c\u5728\u51e0\u767e MB \u5230\u51e0\u5341 GB\uff0c\u5efa\u8bae\u9884\u7559 100GB\u3002log \u76ee\u5f55\u7528\u6765\u5b58\u653e FE \u65e5\u5fd7\uff0c\u4e00\u822c\u5efa\u8bae\u9884\u7559 50GB\u3002"),(0,t.yg)("p",null,"\u4e0b\u4f8b\u4e2d FE \u4f7f\u7528 StorageClass \u6302\u8f7d\u4e86\u5143\u6570\u636e\u5b58\u50a8\u4e0e\u65e5\u5fd7\u5b58\u50a8\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"feSpec:\n    persistentVolumes:\n    - name: fe-meta\n      mountPath: /opt/apache-doris/fe/doris-meta\n      persistentVolumeClaimSpec:\n        storageClassName: ${storageClassName}\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 50Gi\n    - name: fe-log            \n      mountPath: /opt/apache-doris/fe/log\n      persistentVolumeClaimSpec:\n        storageClassName: ${storageClassName}\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 100Gi\n")),(0,t.yg)("p",null,"\u5176\u4e2d\uff0c\u9700\u8981\u5728 ${storageClassName} \u6307\u5b9a ",(0,t.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/"},"StorageClass")," \u7684\u540d\u79f0\u3002\u53ef\u4ee5\u901a\u8fc7 \u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u5f53\u524d Kubernetes \u96c6\u7fa4\u5185\u652f\u6301\u7684 StorageClass\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get sc\n")),(0,t.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"NAME                          PROVISIONER                    RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE\nopenebs-hostpath              openebs.io/local               Delete          WaitForFirstConsumer   false                  212d\nopenebs-device                openebs.io/local               Delete          WaitForFirstConsumer   false                  212d\nopenebs-jiva-csi-default      jiva.csi.openebs.io            Delete          Immediate              true                   212d\nlocal-storage                 kubernetes.io/no-provisioner   Delete          WaitForFirstConsumer   false                  149d\nmicrok8s-hostpath (default)   microk8s.io/hostpath           Delete          Immediate              false                  219d\ndoris-storage                 openebs.io/local               Delete          WaitForFirstConsumer   false                  54d\n")),(0,t.yg)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,t.yg)("p",{parentName:"admonition"},"\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,t.yg)("a",{parentName:"p",href:"#FE%20ConfigMap"},"ConfigMap")," \u4fee\u6539\u9ed8\u8ba4\u7684\u5143\u6570\u636e\u8def\u5f84\u4e0e\u65e5\u5fd7\u8def\u5f84\uff1a"),(0,t.yg)("ol",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ol"},"fe-meta \u7684 mounthPath \u914d\u7f6e\u9700\u8981\u4e0e ConfigMap \u4e2d\u7684 meta_dir \u53d8\u91cf\u914d\u7f6e\u8def\u5f84\u4e00\u81f4\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5143\u6570\u636e\u4f1a\u5199\u5165  /opt/apache-doris/fe/doris-meta \u76ee\u5f55\u4e0b\uff1b"),(0,t.yg)("li",{parentName:"ol"},"fe-log \u7684 mounthPath \u914d\u7f6e\u9700\u8981\u4e0e ConfigMap \u4e2d\u7684 LOG_DIR \u53d8\u91cf\u8def\u5f84\u4e00\u81f4\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u65e5\u5fd7\u6570\u636e\u4f1a\u5199\u5165\u5230 /opt/apache-doris/fe/log \u76ee\u5f55\u4e0b\u3002"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"BE \u914d\u7f6e\u6301\u4e45\u5316\u5b58\u50a8")),(0,t.yg)("p",null,"\u5728\u90e8\u7f72\u96c6\u7fa4\u65f6\uff0c\u5efa\u8bae\u5bf9 BE \u4e2d\u7684 storage \u4e0e log \u76ee\u5f55\u505a\u6301\u4e45\u5316\u5b58\u50a8\u3002storage \u7528\u6237\u5b58\u653e\u6570\u636e\uff0c\u9700\u8981\u6839\u636e\u4e1a\u52a1\u6570\u636e\u91cf\u8861\u91cf\u3002log \u76ee\u5f55\u7528\u6765\u5b58\u653e FE \u65e5\u5fd7\uff0c\u4e00\u822c\u5efa\u8bae\u9884\u7559 50GB\u3002"),(0,t.yg)("p",null,"\u4e0b\u4f8b\u4e2d BE \u4f7f\u7528 StorageClass \u6302\u8f7d\u4e86\u6570\u636e\u5b58\u50a8\u4e0e\u65e5\u5fd7\u5b58\u50a8\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"beSpec:\n  persistentVolumes:\n  - mountPath: /opt/apache-doris/be/storage\n    name: be-storage\n    persistentVolumeClaimSpec:\n      storageClassName: {storageClassName}\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 1Ti\n  - mountPath: /opt/apache-doris/be/log\n    name: belog\n    persistentVolumeClaimSpec:\n      storageClassName: {storageClassName}\n      accessModes:\n      - ReadWriteOnce\n      resources:\n        requests:\n          storage: 100Gi\n")),(0,t.yg)("h2",{id:"\u96c6\u7fa4\u90e8\u7f72\u914d\u7f6e"},"\u96c6\u7fa4\u90e8\u7f72\u914d\u7f6e"),(0,t.yg)("h3",{id:"\u96c6\u7fa4\u540d\u79f0"},"\u96c6\u7fa4\u540d\u79f0"),(0,t.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 DorisCluster Custom Resource \u4e2d\u7684 metadata.name \u6765\u914d\u7f6e\u96c6\u7fa4\u540d\u79f0\u3002"),(0,t.yg)("h3",{id:"\u955c\u50cf\u7248\u672c"},"\u955c\u50cf\u7248\u672c"),(0,t.yg)("p",null,"\u5728\u90e8\u7f72 Doris \u96c6\u7fa4\u65f6\uff0c\u53ef\u4ee5\u6307\u5b9a\u96c6\u7fa4\u7684\u7248\u672c\u3002\u90e8\u7f72\u96c6\u7fa4\u65f6\u5e94\u8be5\u4fdd\u8bc1\u96c6\u7fa4\u4e2d\u7684\u5404\u4e2a\u7ec4\u4ef6\u7248\u672c\u4e00\u81f4\u3002\u901a\u8fc7\u4fee\u6539 ",(0,t.yg)("inlineCode",{parentName:"p"},"spec.{feSpec|beSpec}.image")," \u914d\u7f6e\u5404\u4e2a\u7ec4\u4ef6\u7684\u7248\u672c\u3002"),(0,t.yg)("h3",{id:"\u96c6\u7fa4\u62d3\u6251"},"\u96c6\u7fa4\u62d3\u6251"),(0,t.yg)("p",null,"\u5728\u90e8\u7f72 Doris \u96c6\u7fa4\u524d\uff0c\u9700\u8981\u6839\u636e\u4e1a\u52a1\u89c4\u5212\u96c6\u7fa4\u7684\u62d3\u6251\u7ed3\u6784\u3002\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 spec.{feSpec|beSpec}.replicas \u914d\u7f6e\u5404\u4e2a\u7ec4\u4ef6\u7684\u8282\u70b9\u6570\u3002\u57fa\u4e8e\u751f\u4ea7\u8282\u70b9\u7684\u6570\u636e\u9ad8\u53ef\u7528\u539f\u5219\uff0cDoris Operator \u89c4\u5b9a\u96c6\u7fa4\u4e2d Kubernetes \u96c6\u7fa4\u4e2d\u81f3\u5c11\u6709 3 \u4e2a\u8282\u70b9\u3002\u540c\u65f6\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u96c6\u7fa4\u7684\u53ef\u7528\u6027\uff0c\u5efa\u8bae\u81f3\u5c11\u90e8\u7f72 3 \u4e2a FE \u4e0e BE \u8282\u70b9\u3002"),(0,t.yg)("h3",{id:"\u670d\u52a1\u914d\u7f6e"},"\u670d\u52a1\u914d\u7f6e"),(0,t.yg)("p",null,"Kubernetes \u63d0\u4f9b\u4e0d\u540c\u7684 Serivce \u65b9\u5f0f\u66b4\u9732 Doris \u7684\u5bf9\u5916\u8bbf\u95ee\u63a5\u53e3\uff0c\u5982 ",(0,t.yg)("inlineCode",{parentName:"p"},"ClusterIP"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"NodePort"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"LoadBalancer")," \u7b49\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"ClusterIP")),(0,t.yg)("p",null,"ClusterIP \u7c7b\u578b\u7684 service \u4f1a\u5728\u96c6\u7fa4\u5185\u90e8\u521b\u5efa\u865a\u62df IP\u3002\u901a\u8fc7 ClusterIP \u53ea\u80fd\u5728 Kubernetes \u96c6\u7fa4\u5185\u8bbf\u95ee\uff0c\u5bf9\u5916\u4e0d\u53ef\u89c1\u3002\u5728 Doris Custom Resource \u4e2d\uff0c\u9ed8\u8ba4\u4f7f\u7528 ClusterIP \u7c7b\u578b\u7684 Service\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"NodePort")),(0,t.yg)("p",null,"\u5728\u6ca1\u6709 LoadBalancer \u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 NodePort \u66b4\u9732\u3002NodePort \u662f\u901a\u8fc7\u8282\u70b9\u7684 IP \u548c\u9759\u6001\u7aef\u53e3\u66b4\u9732\u670d\u52a1\u3002\u901a\u8fc7\u8bf7\u6c42 ",(0,t.yg)("inlineCode",{parentName:"p"},"NodeIP + NodePort"),"\uff0c\u53ef\u4ee5\u4ece\u96c6\u7fa4\u7684\u5916\u90e8\u8bbf\u95ee\u4e00\u4e2a NodePort \u670d\u52a1\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"...\nfeSpec:\n  replicas: 3\n  service:\n    type: NodePort\n...\nbeSpec:\n  replicas: 3\n  service:\n    type: NodePort\n...\n")),(0,t.yg)("h2",{id:"\u96c6\u7fa4\u53c2\u6570\u914d\u7f6e"},"\u96c6\u7fa4\u53c2\u6570\u914d\u7f6e"),(0,t.yg)("p",null,"Doris \u5728 Kubernetes \u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"ConfigMap")," \u5b9e\u73b0\u914d\u7f6e\u6587\u4ef6\u548c\u670d\u52a1\u89e3\u8026\u3002Doris \u7ec4\u4ef6\u7684\u6240\u6709\u8282\u70b9\u5728 Kubernetes \u4f7f\u7528 ConfigMap \u4f5c\u4e3a\u7edf\u4e00\u5316\u914d\u7f6e\u7ba1\u7406\uff0c\u7ec4\u4ef6\u7684\u6240\u6709\u8282\u70b9\u90fd\u4f7f\u7528\u76f8\u540c\u7684\u914d\u7f6e\u4fe1\u606f\u542f\u52a8\u3002\u5728 ConfigMap \u4e2d\u4f7f\u7528\u952e\u503c\u5bf9\u7684\u65b9\u5f0f\u5b58\u50a8 Doris \u7684\u7cfb\u7edf\u53c2\u6570\u3002\u5728\u90e8\u7f72 doris \u96c6\u7fa4\u65f6\uff0c\u9700\u8981\u63d0\u524d\u5728\u76f8\u540c namespace \u4e0b\u90e8\u7f72 ConfigMap\u3002"),(0,t.yg)("p",null,"\u5728 Doris Cluster \u7684 CR \u4e2d\uff0c\u63d0\u4f9b ConfigMapInfo \u5b9a\u4e49\u7ed9\u5404\u4e2a\u7ec4\u4ef6\u6302\u8f7d\u914d\u7f6e\u4fe1\u606f\u3002ConfigMapInfo \u5305\u542b\u4e24\u4e2a\u53d8\u91cf\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"ConfigMapName \u8868\u793a\u60f3\u8981\u4f7f\u7528\u7684 ConfigMap \u7684\u540d\u79f0"),(0,t.yg)("li",{parentName:"ul"},"ResolveKey \u8868\u793a\u5bf9\u5e94\u7684\u914d\u7f6e\u6587\u4ef6\uff0cFE \u914d\u7f6e\u9009\u62e9 fe.conf\uff0cBE \u914d\u7f6e\u9009\u62e9 be.conf")),(0,t.yg)("h3",{id:"fe-configmap"},"FE ConfigMap"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u5b9a\u4e49 FE ConfigMap")),(0,t.yg)("p",null,"\u5728\u4f7f\u7528 ConfigMap \u5b9a\u4e49 FE \u914d\u7f6e\u65f6\uff0c\u9700\u8981\u5148\u5b9a\u4e49\u5e76\u4e0b\u53d1 ConfigMap \u5230 Kubernetes \u96c6\u7fa4\u4e2d\u3002"),(0,t.yg)("p",null,"\u4e0b\u4f8b\u4e2d\u5b9a\u4e49\u4e86\u540d\u4e3a fe-conf \u7684 ConfigMap\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: fe-conf\n  labels:\n    app.kubernetes.io/component: fe\ndata:\n  fe.conf: |\n    CUR_DATE=`date +%Y%m%d-%H%M%S`\n\n    # the output dir of stderr and stdout\n    LOG_DIR = ${DORIS_HOME}/log\n\n    JAVA_OPTS="-Djavax.security.auth.useSubjectCredsOnly=false -Xss4m -Xmx8192m -XX:+UseMembar -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xloggc:$DORIS_HOME/log/fe.gc.log.$CUR_DATE"\n\n    # For jdk 9+, this JAVA_OPTS will be used as default JVM options\n    JAVA_OPTS_FOR_JDK_9="-Djavax.security.auth.useSubjectCredsOnly=false -Xss4m -Xmx8192m -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xlog:gc*:$DORIS_HOME/log/fe.gc.log.$CUR_DATE:time"\n\n    # INFO, WARN, ERROR, FATAL\n    sys_log_level = INFO\n\n    # NORMAL, BRIEF, ASYNC\n    sys_log_mode = NORMAL\n\n    # Default dirs to put jdbc drivers,default value is ${DORIS_HOME}/jdbc_drivers\n    # jdbc_drivers_dir = ${DORIS_HOME}/jdbc_drivers\n\n    http_port = 8030\n    rpc_port = 9020\n    query_port = 9030\n    edit_log_port = 9010\n')),(0,t.yg)("p",null,"\u5176\u4e2d\uff0c\u5728 metadata.name \u4e2d\u5b9a\u4e49 FE ConfigMap \u7684\u540d\u5b57\uff0c\u5728 data \u4e2d\u5b9a\u4e49 fe.conf \u4e2d\u7684\u6570\u636e\u5e93\u914d\u7f6e\u3002"),(0,t.yg)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,t.yg)("p",{parentName:"admonition"},"\u5728 ConfigMap \u4e2d\u4f7f\u7528 data \u5b57\u6bb5\u5b58\u50a8\u952e\u503c\u5bf9\u3002\u5728\u4e0a\u8ff0 FE ConfigMap \u4e2d\uff1a"),(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},"fe.conf \u662f\u952e\u503c\u5bf9\u4e2d\u7684 key\uff0c\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"li"},"|")," \u8868\u793a\u5c06\u4fdd\u7559\u540e\u7eed\u5b57\u7b26\u4e32\u4e2d\u7684\u6362\u884c\u7b26\u548c\u7f29\u8fdb"),(0,t.yg)("li",{parentName:"ul"},"\u540e\u7eed\u914d\u7f6e\u4e3a\u952e\u503c\u5bf9\u4e2d\u7684 value\uff0c\u4e0e fe.conf \u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u76f8\u540c\n\u5728 data \u5b57\u6bb5\u4e2d\uff0c\u7531\u4e8e\u4f7f\u7528\u4e86 ",(0,t.yg)("inlineCode",{parentName:"li"},"|")," \u7b26\u53f7\u4fdd\u7559\u540e\u7eed\u5b57\u7b26\u4e32\u683c\u5f0f\uff0c\u540e\u7eed\u7684\u914d\u7f6e\u4e2d\u9700\u8981\u4fdd\u6301\u4e24\u4e2a\u7a7a\u683c\u7f29\u8fdb\u3002"))),(0,t.yg)("p",null,"\u5728\u5b9a\u4e49 FE ConfigMap \u540e\uff0c\u9700\u8981\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"kubectl apply")," \u547d\u4ee4\u4e0b\u53d1\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u4f7f\u7528 FE ConfigMap")),(0,t.yg)("p",null,"\u5982\u679c\u9700\u8981\u4f7f\u7528 FE ConfigMap\uff0c\u9700\u8981\u518d Doris Cluster \u7684 RC \u4e2d\u901a\u8fc7 spec.feSpec.configMapInfo \u6307\u5b9a\u5b9a\u4e49\u7684 ConfigMap\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"kind: DorisCluster\nmetadata:\n  name: doriscluster-sample-configmap\nspec:\n  feSpec:\n    configMapInfo:\n      configMapName: {feConfigMapName}\n      resolveKey: fe.conf\n...\n")),(0,t.yg)("p",null,"\u5c06\u4e0a\u4f8b\u4e2d\u7684 ${feConfigMapName} \u66ff\u6362\u4e3a fe-conf \u8868\u793a\u4f7f\u7528\u4e0a\u4f8b\u4e2d\u5b9a\u4e49\u7684 FE ConfigMap\u3002\u5bf9\u4e8e FE ConfigMap\uff0c\u9700\u8981\u4fdd\u6301 resolveKey \u5b57\u6bb5\u56fa\u5b9a\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"fe.conf"),"\u3002"),(0,t.yg)("h3",{id:"be-configmap"},"BE ConfigMap"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u5b9a\u4e49 BE ConfigMap")),(0,t.yg)("p",null,"\u5728\u4f7f\u7528 ConfigMap \u5b9a\u4e49 BE \u914d\u7f6e\u65f6\uff0c\u9700\u8981\u5148\u5b9a\u4e49\u5e76\u4e0b\u53d1 ConfigMap \u5230 Kubernetes \u96c6\u7fa4\u4e2d\u3002"),(0,t.yg)("p",null,"\u4e0b\u4f8b\u4e2d\u5b9a\u4e49\u4e86\u540d\u4e3a be-conf \u7684 ConfigMap\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: be-conf\n  labels:\n    app.kubernetes.io/component: be\ndata:\n  be.conf: |\n    CUR_DATE=`date +%Y%m%d-%H%M%S`\n\n    PPROF_TMPDIR="$DORIS_HOME/log/"\n\n    JAVA_OPTS="-Xmx1024m -DlogPath=$DORIS_HOME/log/jni.log -Xloggc:$DORIS_HOME/log/be.gc.log.$CUR_DATE -Djavax.security.auth.useSubjectCredsOnly=false -Dsun.java.command=DorisBE -XX:-CriticalJNINatives -DJDBC_MIN_POOL=1 -DJDBC_MAX_POOL=100 -DJDBC_MAX_IDLE_TIME=300000 -DJDBC_MAX_WAIT_TIME=5000"\n\n    # For jdk 9+, this JAVA_OPTS will be used as default JVM options\n    JAVA_OPTS_FOR_JDK_9="-Xmx1024m -DlogPath=$DORIS_HOME/log/jni.log -Xlog:gc:$DORIS_HOME/log/be.gc.log.$CUR_DATE -Djavax.security.auth.useSubjectCredsOnly=false -Dsun.java.command=DorisBE -XX:-CriticalJNINatives -DJDBC_MIN_POOL=1 -DJDBC_MAX_POOL=100 -DJDBC_MAX_IDLE_TIME=300000 -DJDBC_MAX_WAIT_TIME=5000"\n\n    # since 1.2, the JAVA_HOME need to be set to run BE process.\n    # JAVA_HOME=/path/to/jdk/\n\n    # https://github.com/apache/doris/blob/master/docs/zh-CN/community/developer-guide/debug-tool.md#jemalloc-heap-profile\n    # https://jemalloc.net/jemalloc.3.html\n    JEMALLOC_CONF="percpu_arena:percpu,background_thread:true,metadata_thp:auto,muzzy_decay_ms:15000,dirty_decay_ms:15000,oversize_threshold:0,lg_tcache_max:20,prof:false,lg_prof_interval:32,lg_prof_sample:19,prof_gdump:false,prof_accum:false,prof_leak:false,prof_final:false"\n    JEMALLOC_PROF_PRFIX=""\n\n    # INFO, WARNING, ERROR, FATAL\n    sys_log_level = INFO\n\n    # ports for admin, web, heartbeat service\n    be_port = 9060\n    webserver_port = 8040\n    heartbeat_service_port = 9050\n    brpc_port = 8060\n')),(0,t.yg)("p",null,"\u5176\u4e2d\uff0c\u5728 metadata.name \u4e2d\u5b9a\u4e49 BE ConfigMap \u7684\u540d\u5b57\uff0c\u5728 data \u4e2d\u5b9a\u4e49 be.conf \u4e2d\u7684\u6570\u636e\u5e93\u914d\u7f6e\u3002"),(0,t.yg)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,t.yg)("p",{parentName:"admonition"},"\u5728 ConfigMap \u4e2d\u4f7f\u7528 data \u5b57\u6bb5\u5b58\u50a8\u952e\u503c\u5bf9\u3002\u5728\u4e0a\u8ff0 BE ConfigMap \u4e2d\uff1a"),(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},"be.conf \u662f\u952e\u503c\u5bf9\u4e2d\u7684 key\uff0c\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"li"},"|")," \u8868\u793a\u5c06\u4fdd\u7559\u540e\u7eed\u5b57\u7b26\u4e32\u4e2d\u7684\u6362\u884c\u7b26\u548c\u7f29\u8fdb"),(0,t.yg)("li",{parentName:"ul"},"\u540e\u7eed\u914d\u7f6e\u4e3a\u952e\u503c\u5bf9\u4e2d\u7684 value\uff0c\u4e0e be.conf \u6587\u4ef6\u4e2d\u7684\u914d\u7f6e\u76f8\u540c\n\u5728 data \u5b57\u6bb5\u4e2d\uff0c\u7531\u4e8e\u4f7f\u7528\u4e86 ",(0,t.yg)("inlineCode",{parentName:"li"},"|")," \u7b26\u53f7\u4fdd\u7559\u540e\u7eed\u5b57\u7b26\u4e32\u683c\u5f0f\uff0c\u540e\u7eed\u7684\u914d\u7f6e\u4e2d\u9700\u8981\u4fdd\u6301\u4e24\u4e2a\u7a7a\u683c\u7f29\u8fdb\u3002"))),(0,t.yg)("p",null,"\u5728\u5b9a\u4e49 BE ConfigMap \u540e\uff0c\u9700\u8981\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"kubectl apply")," \u547d\u4ee4\u4e0b\u53d1\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u4f7f\u7528 BE ConfigMap")),(0,t.yg)("p",null,"\u5982\u679c\u9700\u8981\u4f7f\u7528 BE ConfigMap\uff0c\u9700\u8981\u518d Doris Cluster \u7684 RC \u4e2d\u901a\u8fc7 spec.beSpec.configMapInfo \u6307\u5b9a\u5b9a\u4e49\u7684 ConfigMap\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"kind: DorisCluster\nmetadata:\n  name: doriscluster-sample-configmap\nspec:\n  beSpec:\n    configMapInfo:\n      configMapName: {beConfigMapName}\n      resolveKey: be.conf\n...\n")),(0,t.yg)("p",null,"\u5c06\u4e0a\u4f8b\u4e2d\u7684 ${beConfigMapName} \u66ff\u6362\u4e3a be-conf \u8868\u793a\u4f7f\u7528\u4e0a\u4f8b\u4e2d\u5b9a\u4e49\u7684 BE ConfigMap\u3002\u5bf9\u4e8e BE ConfigMap\uff0c\u9700\u8981\u4fdd\u6301 resolveKey \u5b57\u6bb5\u56fa\u5b9a\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"be.conf"),"\u3002"),(0,t.yg)("h3",{id:"\u4e3a-conf-\u76ee\u5f55\u6dfb\u52a0\u5916\u90e8\u914d\u7f6e\u6587\u4ef6"},"\u4e3a conf \u76ee\u5f55\u6dfb\u52a0\u5916\u90e8\u914d\u7f6e\u6587\u4ef6"),(0,t.yg)("p",null,"\u5728\u4f7f\u7528 Catalog \u529f\u80fd\u8bbf\u95ee\u5916\u90e8\u6570\u636e\u6e90\u65f6\uff0c\u9700\u8981\u5c06\u76f8\u5173\u914d\u7f6e\u6587\u4ef6\u6dfb\u52a0\u5230 Doris \u8282\u70b9\u7684 conf \u76ee\u5f55\u4e0b\uff0c\u5982\u5728\u8bbf\u95ee hive catalog \u65f6\uff0c\u9700\u8981\u5c06 core-site.xml\uff0chdfs-site.xml \u4e0e hive-site.xml \u6587\u4ef6\u653e\u5230 FE \u4e0e BE \u7684 conf \u76ee\u5f55\u3002"),(0,t.yg)("p",null,"\u5728 Kubernetes \u73af\u5883\u4e2d\uff0c\u9700\u8981\u5c06 catalog \u7684\u76f8\u5173\u914d\u7f6e\u6587\u4ef6\uff0c\u4ee5 ConfigMap \u7684\u5f62\u5f0f\u52a0\u8f7d\u5230 Doris \u4e2d\u3002\u4e0b\u4f8b\u5c55\u793a\u4e86\u5c06 core-site.xml \u6587\u4ef6\u52a0\u8f7d\u5230 BE\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: be-configmap\n  labels:\n    app.kubernetes.io/component: be\ndata:\n  be.conf: |\n    be_port = 9060\n    webserver_port = 8040\n    heartbeat_service_port = 9050\n    brpc_port = 8060\n  core-site.xml: |\n    <?xml version="1.0" encoding="UTF-8"?>\n    <?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n    <configuration>\n      <property>\n      <name>hadoop.security.authentication</name>\n        <value>kerberos</value>\n      </property>\n    </configuration>\n    ...\n')),(0,t.yg)("p",null,"\u5176\u4e2d\uff0c\u5728 data \u5b57\u6bb5\u4e2d\u5b58\u50a8\u4e86\u914d\u7f6e\u7684\u952e\u503c\u5bf9\uff0c\u5728\u4e0a\u4f8b\u4e2d\u5b58\u50a8\u4e86 key \u5206\u522b\u4e3a be.conf \u4e0e core-site.xml \u7684\u952e\u503c\u5bf9\u3002"),(0,t.yg)("p",null,"\u5728 data \u5b57\u6bb5\u4e2d\uff0c\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u7684\u952e\u503c\u7ed3\u6784\u6620\u5c04\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"data:\n filename_1: |\n   config_string\n filename_2: |\n   config_string\n filename_3: |\n   config_string\n")),(0,t.yg)("h3",{id:"\u4e3a-be-\u914d\u7f6e\u591a\u76d8\u5b58\u50a8"},"\u4e3a BE \u914d\u7f6e\u591a\u76d8\u5b58\u50a8"),(0,t.yg)("p",null,"Doris \u652f\u6301\u4e3a BE \u6302\u8f7d\u591a\u5757 PV\u3002\u901a\u8fc7\u914d\u7f6e BE \u53c2\u6570 ",(0,t.yg)("inlineCode",{parentName:"p"},"storage_root_path")," \u53ef\u4ee5\u6307\u5b9a BE \u4f7f\u7528\u591a\u76d8\u5b58\u50a8\u3002\u5728 Kubernetes \u73af\u5883\u4e2d\uff0c\u53ef\u4ee5\u5728 DorisCluster CR \u4e2d\u5bf9 pv \u8fdb\u884c\u6620\u5c04\uff0c\u901a\u8fc7 ConfigMap \u4e3a BE \u914d\u7f6e ",(0,t.yg)("inlineCode",{parentName:"p"},"storage_root_path")," \u53c2\u6570\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u4e3a BE \u591a\u76d8\u5b58\u50a8\u914d\u7f6e pv \u6620\u5c04")),(0,t.yg)("p",null,"\u5728 DorisCluster CR \u6587\u4ef6\u4e2d\uff0c\u76f8\u6bd4\u4e8e\u5355\u76d8\u914d\u7f6e\uff0c\u9700\u8981\u6dfb\u52a0 ",(0,t.yg)("inlineCode",{parentName:"p"},"configMapInfo")," \u4e0e ",(0,t.yg)("inlineCode",{parentName:"p"},"persistentVolumeClaimSpec")," \u7684\u63cf\u8ff0\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"li"},"configMapInfo")," \u914d\u7f6e\u53ef\u4ee5\u6807\u8bc6\u4f7f\u7528\u76f8\u540c namespace \u4e0b\u7684\u6307\u5b9a ConfigMap\uff0cresolveKey \u56fa\u5b9a\u4e3a be.conf"),(0,t.yg)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"li"},"persistentVolumeClaimSpec")," \u53ef\u4ee5\u4e3a BE \u5b58\u50a8\u76ee\u5f55\u914d\u7f6e\u591a\u4e2a pv \u6620\u5c04")),(0,t.yg)("p",null,"\u4e0b\u4f8b\u4e2d\u4e3a BE \u914d\u7f6e\u4e86\u4e24\u5757\u76d8\u7684 pv  \u6620\u5c04\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"...\n  beSpec:\n    replicas: 3\n    image: selectdb/doris.be-ubuntu:2.0.2\n    limits:\n      cpu: 8\n      memory: 16Gi\n    requests:\n      cpu: 8\n      memory: 16Gi\n    configMapInfo:\n      configMapName: be-configmap\n      resolveKey: be.conf\n    persistentVolumes:\n    - mountPath: /opt/apache-doris/be/storage1\n      name: storage2\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        #storageClassName: openebs-jiva-csi-default\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 100Gi\n    - mountPath: /opt/apache-doris/be/storage2\n      name: storage3\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        #storageClassName: openebs-jiva-csi-default\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 100Gi\n    - mountPath: /opt/apache-doris/be/log\n      name: storage4\n      persistentVolumeClaimSpec:\n        # when use specific storageclass, the storageClassName should reConfig, example as annotation.\n        #storageClassName: openebs-jiva-csi-default\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 100Gi\n")),(0,t.yg)("p",null,"\u5728\u4e0a\u4f8b\u4e2d Doris \u96c6\u7fa4\u6307\u5b9a\u4e86\u591a\u76d8\u5b58\u50a8"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"beSpec.persistentVolumes \u4ee5\u6570\u7ec4\u7684\u65b9\u5f0f\u6307\u5b9a\u4e86\u591a\u5757 pv\uff0c\u6620\u5c04\u4e86 ",(0,t.yg)("inlineCode",{parentName:"li"},"/opt/apache-doris/be/storage{1,2}")," \u4e24\u4e2a\u6570\u636e\u5b58\u50a8 pv"),(0,t.yg)("li",{parentName:"ul"},"beSpec.configMapInfo \u4e2d\u6307\u5b9a\u4e86\u9700\u8981\u6302\u8f7d\u540d\u4e3a ",(0,t.yg)("inlineCode",{parentName:"li"},"be-configmap")," \u7684 ConfigMap")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u914d\u7f6e BE ConfigMap \u6307\u5b9a storage_root_path \u53c2\u6570")),(0,t.yg)("p",null,"\u6839\u636e DorisCluster CR \u4e2d\u6307\u5b9a\u7684 BE ConfigMap \u540d\uff0c\u9700\u8981\u521b\u5efa\u76f8\u5e94\u7684 ConfigMap \u5e76\u6307\u5b9a storage_root_path \u53c2\u6570\u3002"),(0,t.yg)("p",null,"\u4e0b\u4f8b\u4e2d\u5728\u540d\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"be-configmap")," \u7684 ConfigMap \u4e2d\u6307\u5b9a\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"storage_root_path")," \u53c2\u6570\u4f7f\u7528\u4e24\u5757\u76d8\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: be-configmap\n  labels:\n    app.kubernetes.io/component: be\ndata:\n  be.conf: |\n    CUR_DATE=`date +%Y%m%d-%H%M%S`\n\n    PPROF_TMPDIR="$DORIS_HOME/log/"\n\n    JAVA_OPTS="-Xmx1024m -DlogPath=$DORIS_HOME/log/jni.log -Xloggc:$DORIS_HOME/log/be.gc.log.$CUR_DATE -Djavax.security.auth.useSubjectCredsOnly=false -Dsun.java.command=DorisBE -XX:-CriticalJNINatives -DJDBC_MIN_POOL=1 -DJDBC_MAX_POOL=100 -DJDBC_MAX_IDLE_TIME=300000 -DJDBC_MAX_WAIT_TIME=5000"\n\n    # For jdk 9+, this JAVA_OPTS will be used as default JVM options\n    JAVA_OPTS_FOR_JDK_9="-Xmx1024m -DlogPath=$DORIS_HOME/log/jni.log -Xlog:gc:$DORIS_HOME/log/be.gc.log.$CUR_DATE -Djavax.security.auth.useSubjectCredsOnly=false -Dsun.java.command=DorisBE -XX:-CriticalJNINatives -DJDBC_MIN_POOL=1 -DJDBC_MAX_POOL=100 -DJDBC_MAX_IDLE_TIME=300000 -DJDBC_MAX_WAIT_TIME=5000"\n\n    # since 1.2, the JAVA_HOME need to be set to run BE process.\n    # JAVA_HOME=/path/to/jdk/\n\n    # https://github.com/apache/doris/blob/master/docs/zh-CN/community/developer-guide/debug-tool.md#jemalloc-heap-profile\n    # https://jemalloc.net/jemalloc.3.html\n    JEMALLOC_CONF="percpu_arena:percpu,background_thread:true,metadata_thp:auto,muzzy_decay_ms:15000,dirty_decay_ms:15000,oversize_threshold:0,lg_tcache_max:20,prof:false,lg_prof_interval:32,lg_prof_sample:19,prof_gdump:false,prof_accum:false,prof_leak:false,prof_final:false"\n    JEMALLOC_PROF_PRFIX=""\n\n    # INFO, WARNING, ERROR, FATAL\n    sys_log_level = INFO\n\n    # ports for admin, web, heartbeat service\n    be_port = 9060\n    webserver_port = 8040\n    heartbeat_service_port = 9050\n    brpc_port = 8060\n    \n    storage_root_path = /opt/apache-doris/be/storage,medium:ssd;/opt/apache-doris/be/storage1,medium:ssd\n')),(0,t.yg)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,t.yg)("p",{parentName:"admonition"},"\u5728\u521b\u5efa BE ConfigMap \u65f6\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,t.yg)("ol",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ol"},"metadata.name \u9700\u8981\u4e0e DorisCluster CR \u4e2d beSpec.configMapInfo.configMapName \u76f8\u540c\uff0c\u8868\u793a\u8be5\u96c6\u7fa4\u4f7f\u7528\u6307\u5b9a\u7684 ConfigMap\uff1b"),(0,t.yg)("li",{parentName:"ol"},"ConfigMap \u4e2d\u7684 storage_root_path \u53c2\u6570\u8981\u4e0e DorisCluster CR \u4e2d\u7684 persistentVolume \u6570\u636e\u76d8\u4e00\u4e00\u5bf9\u5e94\u3002"))))}u.isMDXComponent=!0}}]);