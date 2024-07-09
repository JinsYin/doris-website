"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[89812],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>g});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return t?n.createElement(g,s(s({ref:r},u),{},{components:t})):n.createElement(g,s({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96911:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(58168),a=(t(296540),t(15680));const o={title:"\u670d\u52a1\u81ea\u52a8\u62c9\u8d77",language:"zh-CN"},s=void 0,i={unversionedId:"admin-manual/maint-monitor/automatic-service-start",id:"admin-manual/maint-monitor/automatic-service-start",title:"\u670d\u52a1\u81ea\u52a8\u62c9\u8d77",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/maint-monitor/automatic-service-start.md",sourceDirName:"admin-manual/maint-monitor",slug:"/admin-manual/maint-monitor/automatic-service-start",permalink:"/zh-CN/docs/dev/admin-manual/maint-monitor/automatic-service-start",draft:!1,tags:[],version:"current",frontMatter:{title:"\u670d\u52a1\u81ea\u52a8\u62c9\u8d77",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5143\u6570\u636e\u8fd0\u7ef4",permalink:"/zh-CN/docs/dev/admin-manual/maint-monitor/metadata-operation"},next:{title:"\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55",permalink:"/zh-CN/docs/dev/admin-manual/config/config-dir"}},p={},l=[{value:"Systemd \u914d\u7f6e Doris \u670d\u52a1",id:"systemd-\u914d\u7f6e-doris-\u670d\u52a1",level:2},{value:"sudo \u6743\u9650\u63a7\u5236",id:"sudo-\u6743\u9650\u63a7\u5236",level:3},{value:"\u914d\u7f6e\u6b65\u9aa4",id:"\u914d\u7f6e\u6b65\u9aa4",level:3},{value:"Supervisor \u914d\u7f6e Doris \u670d\u52a1",id:"supervisor-\u914d\u7f6e-doris-\u670d\u52a1",level:2},{value:"\u914d\u7f6e\u6b65\u9aa4",id:"\u914d\u7f6e\u6b65\u9aa4-1",level:3}],u={toc:l},m="wrapper";function c(e){let{components:r,...t}=e;return(0,a.yg)(m,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e Doris \u96c6\u7fa4\u7684\u81ea\u52a8\u62c9\u8d77\uff0c\u4fdd\u8bc1\u751f\u4ea7\u73af\u5883\u4e2d\u51fa\u73b0\u7279\u6b8a\u60c5\u51b5\u5bfc\u81f4\u670d\u52a1\u5b95\u673a\u540e\u672a\u53ca\u65f6\u62c9\u8d77\u670d\u52a1\u4ece\u800c\u5f71\u54cd\u5230\u4e1a\u52a1\u7684\u6b63\u5e38\u8fd0\u884c\u3002"),(0,a.yg)("p",null,"Doris \u96c6\u7fa4\u5fc5\u987b\u5b8c\u5168\u642d\u5efa\u5b8c\u6210\u540e\u518d\u914d\u7f6e FE \u548c BE \u7684\u81ea\u52a8\u62c9\u8d77\u670d\u52a1\u3002"),(0,a.yg)("h2",{id:"systemd-\u914d\u7f6e-doris-\u670d\u52a1"},"Systemd \u914d\u7f6e Doris \u670d\u52a1"),(0,a.yg)("p",null,"systemd \u5177\u4f53\u4f7f\u7528\u4ee5\u53ca\u53c2\u6570\u89e3\u6790\u53ef\u4ee5\u53c2\u8003",(0,a.yg)("a",{parentName:"p",href:"https://systemd.io/"},"\u8fd9\u91cc")," "),(0,a.yg)("h3",{id:"sudo-\u6743\u9650\u63a7\u5236"},"sudo \u6743\u9650\u63a7\u5236"),(0,a.yg)("p",null,"\u5728\u4f7f\u7528 systemd \u63a7\u5236 doris \u670d\u52a1\u65f6\uff0c\u9700\u8981\u6709 sudo \u6743\u9650\u3002\u4e3a\u4e86\u4fdd\u8bc1\u6700\u5c0f\u7c92\u5ea6\u7684 sudo \u6743\u9650\u5206\u914d\uff0c\u53ef\u4ee5\u5c06 doris-fe \u4e0e doris-be \u670d\u52a1\u7684 systemd \u63a7\u5236\u6743\u9650\u5206\u914d\u7ed9\u6307\u5b9a\u7684\u975e root \u7528\u6237\u3002\u5728 visudo \u6765\u914d\u7f6e doris-fe \u4e0e doris-be \u7684 systemctl \u7ba1\u7406\u6743\u9650\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Cmnd_Alias DORISCTL=/usr/bin/systemctl start doris-fe,/usr/bin/systemctl stop doris-fe,/usr/bin/systemctl start doris-be,/usr/bin/systemctl stop doris-be\n\n## Allow root to run any commands anywhere\nroot    ALL=(ALL)       ALL\ndoris   ALL=(ALL)       NOPASSWD:DORISCTL\n")),(0,a.yg)("h3",{id:"\u914d\u7f6e\u6b65\u9aa4"},"\u914d\u7f6e\u6b65\u9aa4"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u5206\u522b\u5728 fe.conf \u548c be.conf \u4e2d\u6dfb\u52a0 JAVA_HOME \u53d8\u91cf\u914d\u7f6e\uff0c\u5426\u5219\u4f7f\u7528 systemctl start \u5c06\u65e0\u6cd5\u542f\u52a8\u670d\u52a1"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'echo "JAVA_HOME=your_java_home" >> /home/doris/fe/conf/fe.conf\necho "JAVA_HOME=your_java_home" >> /home/doris/be/conf/be.conf\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4e0b\u8f7d doris-fe.service \u6587\u4ef6\uff1a",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/blob/master/tools/systemd/doris-fe.service"},"doris-fe.service"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"doris-fe.service \u5177\u4f53\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'# Licensed to the Apache Software Foundation (ASF) under one\n# or more contributor license agreements.  See the NOTICE file\n# distributed with this work for additional information\n# regarding copyright ownership.  The ASF licenses this file\n# to you under the Apache License, Version 2.0 (the\n# "License"); you may not use this file except in compliance\n# with the License.  You may obtain a copy of the License at\n#\n#   http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing,\n# software distributed under the License is distributed on an\n# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n# KIND, either express or implied.  See the License for the\n# specific language governing permissions and limitations\n# under the License.\n\n[Unit]\nDescription=Doris FE\nAfter=network-online.target\nWants=network-online.target\n\n[Service]\nType=forking\nUser=root\nGroup=root\nLimitCORE=infinity\nLimitNOFILE=200000\nRestart=on-failure\nRestartSec=30\nStartLimitInterval=120\nStartLimitBurst=3\nKillMode=none\nExecStart=/home/doris/fe/bin/start_fe.sh --daemon \nExecStop=/home/doris/fe/bin/stop_fe.sh\n\n[Install]\nWantedBy=multi-user.target\n')),(0,a.yg)("admonition",{parentName:"li",type:"caution"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("strong",{parentName:"p"},"\u6ce8\u610f\u4e8b\u9879")),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"ExecStart\u3001ExecStop \u6839\u636e\u5b9e\u9645\u90e8\u7f72\u7684 fe \u7684\u8def\u5f84\u8fdb\u884c\u914d\u7f6e")))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4e0b\u8f7d doris-be.service \u6587\u4ef6\uff1a",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/blob/master/tools/systemd/doris-be.service"},"doris-be.service"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"doris-be.service \u5177\u4f53\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'# Licensed to the Apache Software Foundation (ASF) under one\n# or more contributor license agreements.  See the NOTICE file\n# distributed with this work for additional information\n# regarding copyright ownership.  The ASF licenses this file\n# to you under the Apache License, Version 2.0 (the\n# "License"); you may not use this file except in compliance\n# with the License.  You may obtain a copy of the License at\n#\n#   http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing,\n# software distributed under the License is distributed on an\n# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n# KIND, either express or implied.  See the License for the\n# specific language governing permissions and limitations\n# under the License.\n\n[Unit]\nDescription=Doris BE\nAfter=network-online.target\nWants=network-online.target\n\n[Service]\nType=forking\nUser=root\nGroup=root\nLimitCORE=infinity\nLimitNOFILE=200000\nRestart=on-failure\nRestartSec=30\nStartLimitInterval=120\nStartLimitBurst=3\nKillMode=none\nExecStart=/home/doris/be/bin/start_be.sh --daemon\nExecStop=/home/doris/be/bin/stop_be.sh\n\n[Install]\nWantedBy=multi-user.target\n')),(0,a.yg)("admonition",{parentName:"li",type:"caution"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("strong",{parentName:"p"},"\u6ce8\u610f\u4e8b\u9879")),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"ExecStart\u3001ExecStop \u6839\u636e\u5b9e\u9645\u90e8\u7f72\u7684 be \u7684\u8def\u5f84\u8fdb\u884c\u914d\u7f6e")))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u670d\u52a1\u914d\u7f6e"),(0,a.yg)("p",{parentName:"li"},"\u5c06 doris-fe.service\u3001doris-be.service \u4e24\u4e2a\u6587\u4ef6\u653e\u5230 /usr/lib/systemd/system \u76ee\u5f55\u4e0b")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u81ea\u542f\u52a8"),(0,a.yg)("p",{parentName:"li"},"\u6dfb\u52a0\u6216\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u9700\u8981\u91cd\u65b0\u52a0\u8f7d"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\n")),(0,a.yg)("p",{parentName:"li"},"\u8bbe\u7f6e\u81ea\u542f\u52a8\uff0c\u5b9e\u8d28\u5c31\u662f\u5728 /etc/systemd/system/multi-user.target.wants/ \u6dfb\u52a0\u670d\u52a1\u6587\u4ef6\u7684\u94fe\u63a5"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"systemctl enable doris-fe\nsystemctl enable doris-be\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u670d\u52a1\u542f\u52a8"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"systemctl start doris-fe\nsystemctl start doris-be\n")))),(0,a.yg)("h2",{id:"supervisor-\u914d\u7f6e-doris-\u670d\u52a1"},"Supervisor \u914d\u7f6e Doris \u670d\u52a1"),(0,a.yg)("p",null,"Supervisor \u5177\u4f53\u4f7f\u7528\u4ee5\u53ca\u53c2\u6570\u89e3\u6790\u53ef\u4ee5\u53c2\u8003",(0,a.yg)("a",{parentName:"p",href:"http://supervisord.org/"},"\u8fd9\u91cc")),(0,a.yg)("p",null,"Supervisor \u914d\u7f6e\u81ea\u52a8\u62c9\u8d77\u53ef\u4ee5\u4f7f\u7528 yum \u547d\u4ee4\u76f4\u63a5\u5b89\u88c5\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 pip \u624b\u5de5\u5b89\u88c5\uff0cpip \u624b\u5de5\u5b89\u88c5\u6d41\u7a0b\u6bd4\u8f83\u590d\u6742\uff0c\u53ea\u5c55\u793a yum \u65b9\u5f0f\u90e8\u7f72\uff0c\u624b\u5de5\u90e8\u7f72\u8bf7\u53c2\u8003",(0,a.yg)("a",{parentName:"p",href:"http://supervisord.org/installing.html"},"\u8fd9\u91cc"),"\u8fdb\u884c\u5b89\u88c5\u90e8\u7f72\u3002"),(0,a.yg)("h3",{id:"\u914d\u7f6e\u6b65\u9aa4-1"},"\u914d\u7f6e\u6b65\u9aa4"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"yum \u5b89\u88c5 supervisor"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"yum install epel-release\nyum install -y supervisor\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u542f\u52a8\u670d\u52a1\u5e76\u67e5\u770b\u72b6\u6001"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"systemctl enable supervisord # \u5f00\u673a\u81ea\u542f\u52a8\nsystemctl start supervisord # \u542f\u52a8 supervisord \u670d\u52a1\nsystemctl status supervisord # \u67e5\u770b supervisord \u670d\u52a1\u72b6\u6001\nps -ef|grep supervisord # \u67e5\u770b\u662f\u5426\u5b58\u5728 supervisord \u8fdb\u7a0b\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u914d\u7f6e BE \u8fdb\u7a0b\u7ba1\u7406"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'\u4fee\u6539 start_be.sh \u811a\u672c\uff0c\u53bb\u6389\u6700\u540e\u7684 & \u7b26\u53f7\n\nvim /path/doris/be/bin/start_be.sh\n\u5c06 nohup $LIMIT ${DORIS_HOME}/lib/palo_be "$@" >> $LOG_DIR/be.out 2>&1 </dev/null &\n\u4fee\u6539\u4e3a nohup $LIMIT ${DORIS_HOME}/lib/palo_be "$@" >> $LOG_DIR/be.out 2>&1 </dev/null\n')),(0,a.yg)("p",{parentName:"li"},"\u521b\u5efa BE \u7684 supervisor \u8fdb\u7a0b\u7ba1\u7406\u914d\u7f6e\u6587\u4ef6"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"vim /etc/supervisord.d/doris-be.ini\n\n[program:doris_be]      \nprocess_name=%(program_name)s      \ndirectory=/path/doris/be/be\ncommand=sh /path/doris/be/bin/start_be.sh\nautostart=true\nautorestart=true\nuser=root\nnumprocs=1\nstartretries=3\nstopasgroup=true\nkillasgroup=true\nstartsecs=5\n#redirect_stderr = true\n#stdout_logfile_maxbytes = 20MB\n#stdout_logfile_backups = 10\n#stdout_logfile=/var/log/supervisor-palo_be.log\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u914d\u7f6e FE \u8fdb\u7a0b\u7ba1\u7406"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'\u4fee\u6539 start_fe.sh \u811a\u672c\uff0c\u53bb\u6389\u6700\u540e\u7684 & \u7b26\u53f7\n\nvim /path/doris/fe/bin/start_fe.sh \n\u5c06 nohup $LIMIT $JAVA $final_java_opt org.apache.doris.PaloFe ${HELPER} "$@" >> $LOG_DIR/fe.out 2>&1 </dev/null &\n\u4fee\u6539\u4e3a nohup $LIMIT $JAVA $final_java_opt org.apache.doris.PaloFe ${HELPER} "$@" >> $LOG_DIR/fe.out 2>&1 </dev/null\n')),(0,a.yg)("p",{parentName:"li"},"\u521b\u5efa FE \u7684 supervisor \u8fdb\u7a0b\u7ba1\u7406\u914d\u7f6e\u6587\u4ef6"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'vim /etc/supervisord.d/doris-fe.ini\n\n[program:PaloFe]\nenvironment = JAVA_HOME="/path/jdk8"\nprocess_name=PaloFe\ndirectory=/path/doris/fe\ncommand=sh /path/doris/fe/bin/start_fe.sh\nautostart=true\nautorestart=true\nuser=root\nnumprocs=1\nstartretries=3\nstopasgroup=true\nkillasgroup=true\nstartsecs=10\n#redirect_stderr=true\n#stdout_logfile_maxbytes=20MB\n#stdout_logfile_backups=10\n#stdout_logfile=/var/log/supervisor-PaloFe.log\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u914d\u7f6e Broker \u8fdb\u7a0b\u7ba1\u7406"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'\u4fee\u6539 start_broker.sh \u811a\u672c\uff0c\u53bb\u6389\u6700\u540e\u7684 & \u7b26\u53f7\n\nvim /path/apache_hdfs_broker/bin/start_broker.sh\n\u5c06 nohup $LIMIT $JAVA $JAVA_OPTS org.apache.doris.broker.hdfs.BrokerBootstrap "$@" >> $BROKER_LOG_DIR/apache_hdfs_broker.out 2>&1 </dev/null &\n\u4fee\u6539\u4e3a nohup $LIMIT $JAVA $JAVA_OPTS org.apache.doris.broker.hdfs.BrokerBootstrap "$@" >> $BROKER_LOG_DIR/apache_hdfs_broker.out 2>&1 </dev/null\n')),(0,a.yg)("p",{parentName:"li"},"\u521b\u5efa Broker \u7684 supervisor \u8fdb\u7a0b\u7ba1\u7406\u914d\u7f6e\u6587\u4ef6"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'vim /etc/supervisord.d/doris-broker.ini\n\n[program:BrokerBootstrap]\nenvironment = JAVA_HOME="/usr/local/java"\nprocess_name=%(program_name)s\ndirectory=/path/apache_hdfs_broker\ncommand=sh /path/apache_hdfs_broker/bin/start_broker.sh\nautostart=true\nautorestart=true\nuser=root\nnumprocs=1\nstartretries=3\nstopasgroup=true\nkillasgroup=true\nstartsecs=5\n#redirect_stderr=true\n#stdout_logfile_maxbytes=20MB\n#stdout_logfile_backups=10\n#stdout_logfile=/var/log/supervisor-BrokerBootstrap.log\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u9996\u5148\u786e\u5b9a Doris \u670d\u52a1\u662f\u505c\u6b62\u72b6\u6001\uff0c\u7136\u540e\u4f7f\u7528 supervisor \u5c06 Doris \u81ea\u52a8\u62c9\u8d77\uff0c\u7136\u540e\u786e\u5b9a\u8fdb\u7a0b\u662f\u5426\u6b63\u5e38\u542f\u52a8"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"supervisorctl reload # \u91cd\u65b0\u52a0\u8f7d Supervisor \u4e2d\u7684\u6240\u6709\u914d\u7f6e\u6587\u4ef6\nsupervisorctl status # \u67e5\u770b supervisor \u72b6\u6001\uff0c\u9a8c\u8bc1 Doris \u670d\u52a1\u8fdb\u7a0b\u662f\u5426\u6b63\u5e38\u542f\u52a8\n\n\u5176\u4ed6\u547d\u4ee4 : \nsupervisorctl start all # supervisorctl start \u53ef\u4ee5\u5f00\u542f\u8fdb\u7a0b\nsupervisorctl stop doris-be # \u901a\u8fc7 supervisorctl stop\uff0c\u505c\u6b62\u8fdb\u7a0b\n")))),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528 yum \u5b89\u88c5\u7684 supervisor \u542f\u52a8\u62a5\u9519 :  pkg_resources.DistributionNotFound: The 'supervisor==3.4.0' distribution was not found"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"\u8fd9\u4e2a\u662f python \u7248\u672c\u4e0d\u517c\u5bb9\u95ee\u9898\uff0c\u901a\u8fc7 yum \u547d\u4ee4\u76f4\u63a5\u5b89\u88c5\u7684 supervisor \u53ea\u652f\u6301 python2 \u7248\u672c\uff0c\u6240\u4ee5\u9700\u8981\u5c06 /usr/bin/supervisord \u548c /usr/bin/supervisorctl \u4e2d\u6587\u4ef6\u5185\u5bb9\u5f00\u5934 #!/usr/bin/python \u6539\u4e3a #!/usr/bin/python2\uff0c\u524d\u63d0\u662f\u8981\u88c5 python2 \u7248\u672c\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5982\u679c\u914d\u7f6e\u4e86 supervisor \u5bf9 Doris \u8fdb\u7a0b\u8fdb\u884c\u81ea\u52a8\u62c9\u8d77\uff0c\u6b64\u65f6\u5982\u679c Doris \u51fa\u73b0\u975e\u6b63\u5e38\u56e0\u7d20\u5bfc\u81f4 BE \u8282\u70b9\u5b95\u673a\uff0c\u90a3\u4e48\u6b64\u65f6\u672c\u6765\u5e94\u8be5\u8f93\u51fa\u5230 be.out \u4e2d\u7684\u9519\u8bef\u5806\u6808\u4fe1\u606f\u4f1a\u88ab supervisor \u62e6\u622a\uff0c\u9700\u8981\u5728 supervisor \u7684 log \u4e2d\u67e5\u627e\u6765\u8fdb\u4e00\u6b65\u5206\u6790\u3002")))))}c.isMDXComponent=!0}}]);