"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[95231],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),i=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(p.Provider,{value:n},e.children)},O="mdxType",E={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),O=i(t),m=r,u=O["".concat(p,".").concat(m)]||O[m]||E[m]||s;return t?a.createElement(u,o(o({ref:n},c),{},{components:t})):a.createElement(u,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[O]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},556393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>E,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var a=t(58168),r=(t(296540),t(15680));const s={title:"CREATE-REPOSITORY",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",id:"version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",title:"CREATE-REPOSITORY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",draft:!1,tags:[],version:"2.1",frontMatter:{title:"CREATE-REPOSITORY",language:"zh-CN"},sidebar:"docs",previous:{title:"DROP-JOB",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-JOB"},next:{title:"DROP-REPOSITORY",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY"}},p={},i=[{value:"CREATE-REPOSITORY",id:"create-repository",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:i},O="wrapper";function E(e){let{components:n,...t}=e;return(0,r.yg)(O,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-repository"},"CREATE-REPOSITORY"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CREATE REPOSITORY"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u4ed3\u5e93\u3002\u4ed3\u5e93\u7528\u4e8e\u5c5e\u4e8e\u5907\u4efd\u6216\u6062\u590d\u3002\u4ec5 root \u6216 superuser \u7528\u6237\u53ef\u4ee5\u521b\u5efa\u4ed3\u5e93\u3002"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE [READ ONLY] REPOSITORY `repo_name`\nWITH [BROKER `broker_name`|S3|hdfs]\nON LOCATION `repo_location`\nPROPERTIES ("key"="value", ...);\n')),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u4ed3\u5e93\u7684\u521b\u5efa\uff0c\u4f9d\u8d56\u4e8e\u5df2\u5b58\u5728\u7684 broker \u6216\u8005\u76f4\u63a5\u901a\u8fc7AWS s3 \u534f\u8bae\u8bbf\u95ee\u4e91\u5b58\u50a8\uff0c\u6216\u8005\u76f4\u63a5\u8bbf\u95eeHDFS"),(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u662f\u53ea\u8bfb\u4ed3\u5e93\uff0c\u5219\u53ea\u80fd\u5728\u4ed3\u5e93\u4e0a\u8fdb\u884c\u6062\u590d\u3002\u5982\u679c\u4e0d\u662f\uff0c\u5219\u53ef\u4ee5\u8fdb\u884c\u5907\u4efd\u548c\u6062\u590d\u64cd\u4f5c\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u6839\u636e broker \u6216\u8005S3\u3001hdfs\u7684\u4e0d\u540c\u7c7b\u578b\uff0cPROPERTIES \u6709\u6240\u4e0d\u540c\uff0c\u5177\u4f53\u89c1\u793a\u4f8b\u3002"),(0,r.yg)("li",{parentName:"ul"},"ON LOCATION ,\u5982\u679c\u662f S3 , \u8fd9\u91cc\u540e\u9762\u8ddf\u7684\u662f Bucket Name\u3002")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'\u521b\u5efa\u540d\u4e3a bos_repo \u7684\u4ed3\u5e93\uff0c\u4f9d\u8d56 BOS broker "bos_broker"\uff0c\u6570\u636e\u6839\u76ee\u5f55\u4e3a\uff1abos://palo_backup')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `bos_repo`\nWITH BROKER `bos_broker`\nON LOCATION "bos://palo_backup"\nPROPERTIES\n(\n    "bos_endpoint" = "http://gz.bcebos.com",\n    "bos_accesskey" = "bos_accesskey",\n    "bos_secret_accesskey"="bos_secret_accesskey"\n);\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u521b\u5efa\u548c\u793a\u4f8b 1 \u76f8\u540c\u7684\u4ed3\u5e93\uff0c\u4f46\u5c5e\u6027\u4e3a\u53ea\u8bfb\uff1a")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE READ ONLY REPOSITORY `bos_repo`\nWITH BROKER `bos_broker`\nON LOCATION "bos://palo_backup"\nPROPERTIES\n(\n    "bos_endpoint" = "http://gz.bcebos.com",\n    "bos_accesskey" = "bos_accesskey",\n    "bos_secret_accesskey"="bos_accesskey"\n);\n')),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},'\u521b\u5efa\u540d\u4e3a hdfs_repo \u7684\u4ed3\u5e93\uff0c\u4f9d\u8d56 Baidu hdfs broker "hdfs_broker"\uff0c\u6570\u636e\u6839\u76ee\u5f55\u4e3a\uff1ahdfs://hadoop-name-node:54310/path/to/repo/')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `hdfs_repo`\nWITH BROKER `hdfs_broker`\nON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\nPROPERTIES\n(\n    "username" = "user",\n    "password" = "password"\n);\n')),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"\u521b\u5efa\u540d\u4e3a s3_repo \u7684\u4ed3\u5e93\uff0c\u76f4\u63a5\u94fe\u63a5\u4e91\u5b58\u50a8\uff0c\u800c\u4e0d\u901a\u8fc7broker.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `s3_repo`\nWITH S3\nON LOCATION "s3://s3-repo"\nPROPERTIES\n(\n    "s3.endpoint" = "http://s3-REGION.amazonaws.com",\n    "s3.access_key" = "AWS_ACCESS_KEY",\n    "s3.secret_key"="AWS_SECRET_KEY",\n    "s3.region" = "REGION"\n);\n')),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"\u521b\u5efa\u540d\u4e3a hdfs_repo \u7684\u4ed3\u5e93\uff0c\u76f4\u63a5\u94fe\u63a5HDFS\uff0c\u800c\u4e0d\u901a\u8fc7broker.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `hdfs_repo`\nWITH hdfs\nON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\nPROPERTIES\n(\n    "fs.defaultFS"="hdfs://hadoop-name-node:54310",\n    "hadoop.username"="user"\n);\n')),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"\u521b\u5efa\u540d\u4e3a minio_repo \u7684\u4ed3\u5e93\uff0c\u76f4\u63a5\u901a\u8fc7 s3 \u534f\u8bae\u94fe\u63a5 minio.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `minio_repo`\nWITH S3\nON LOCATION "s3://minio_repo"\nPROPERTIES\n(\n    "s3.endpoint" = "http://minio.com",\n    "s3.access_key" = "MINIO_USER",\n    "s3.secret_key"="MINIO_PASSWORD",\n    "s3.region" = "REGION"\n    "use_path_style" = "true"\n);\n')),(0,r.yg)("ol",{start:7},(0,r.yg)("li",{parentName:"ol"},"\u4f7f\u7528\u4e34\u65f6\u79d8\u94a5\u521b\u5efa\u540d\u4e3a minio_repo \u7684\u4ed3\u5e93")),(0,r.yg)("version",{since:"1.2"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'CREATE REPOSITORY `minio_repo`\nWITH S3\nON LOCATION "s3://minio_repo"\nPROPERTIES\n(\n    "s3.endpoint" = "AWS_ENDPOINT",\n    "s3.access_key" = "AWS_TEMP_ACCESS_KEY",\n    "s3.secret_key" = "AWS_TEMP_SECRET_KEY",\n    "s3.session_token" = "AWS_TEMP_TOKEN",\n    "s3.region" = "AWS_REGION"\n)\n')),(0,r.yg)("ol",{start:8},(0,r.yg)("li",{parentName:"ol"},"\u4f7f\u7528\u817e\u8baf\u4e91 COS \u521b\u5efa\u4ed3\u5e93")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'CREATE REPOSITORY `cos_repo`\nWITH S3\nON LOCATION "s3://backet1/"\nPROPERTIES\n(\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.endpoint" = "http://cos.ap-beijing.myqcloud.com",\n    "s3.region" = "ap-beijing"\n);\n')),(0,r.yg)("ol",{start:9},(0,r.yg)("li",{parentName:"ol"},"\u521b\u5efa\u4ed3\u5e93\u5e76\u5220\u9664\u5df2\u7ecf\u5b58\u5728\u7684 snapshot")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `s3_repo`\nWITH S3\nON LOCATION "s3://s3-repo"\nPROPERTIES\n(\n    "s3.endpoint" = "http://s3-REGION.amazonaws.com",\n    "s3.region" = "s3-REGION",\n    "s3.access_key" = "AWS_ACCESS_KEY",\n    "s3.secret_key"="AWS_SECRET_KEY",\n    "s3.region" = "REGION",\n    "delete_if_exists" = "true"\n);\n')),(0,r.yg)("p",null,'\u6ce8\uff1a\u76ee\u524d\u53ea\u6709 s3 \u652f\u6301 "delete_if_exists" \u5c5e\u6027\u3002'),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE, REPOSITORY\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u4e00\u4e2a\u96c6\u7fa4\u53ef\u4ee5\u521b\u5efa\u8fc7\u591a\u4e2a\u4ed3\u5e93\u3002\u53ea\u6709\u62e5\u6709 ADMIN \u6743\u9650\u7684\u7528\u6237\u624d\u80fd\u521b\u5efa\u4ed3\u5e93\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u4efb\u4f55\u7528\u6237\u90fd\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/sql-manual/sql-statements/Show-Statements/SHOW-REPOSITORIES"},"SHOW REPOSITORIES")," \u547d\u4ee4\u67e5\u770b\u5df2\u7ecf\u521b\u5efa\u7684\u4ed3\u5e93\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5728\u505a\u6570\u636e\u8fc1\u79fb\u64cd\u4f5c\u65f6\uff0c\u9700\u8981\u5728\u6e90\u96c6\u7fa4\u548c\u76ee\u7684\u96c6\u7fa4\u521b\u5efa\u5b8c\u5168\u76f8\u540c\u7684\u4ed3\u5e93\uff0c\u4ee5\u4fbf\u76ee\u7684\u96c6\u7fa4\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u4ed3\u5e93\uff0c\u67e5\u770b\u5230\u6e90\u96c6\u7fa4\u5907\u4efd\u7684\u6570\u636e\u5feb\u7167\u3002")))}E.isMDXComponent=!0}}]);