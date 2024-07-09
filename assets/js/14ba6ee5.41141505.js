"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[17486],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=l(a),u=n,d=f["".concat(s,".").concat(u)]||f[u]||y[u]||i;return a?r.createElement(d,c(c({ref:t},p),{},{components:a})):r.createElement(d,c({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[f]="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},260669:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=a(58168),n=(a(296540),a(15680));const i={title:"MySQL Client Certificate",language:"en"},c=void 0,o={unversionedId:"admin-manual/auth/certificate",id:"admin-manual/auth/certificate",title:"MySQL Client Certificate",description:"\x3c!--",source:"@site/docs/admin-manual/auth/certificate.md",sourceDirName:"admin-manual/auth",slug:"/admin-manual/auth/certificate",permalink:"/docs/dev/admin-manual/auth/certificate",draft:!1,tags:[],version:"current",frontMatter:{title:"MySQL Client Certificate",language:"en"},sidebar:"docs",previous:{title:"Integration with Apache Ranger",permalink:"/docs/dev/admin-manual/auth/ranger"},next:{title:"FE SSL Certificate",permalink:"/docs/dev/admin-manual/auth/fe-certificate"}},s={},l=[{value:"Custom key certificate file",id:"custom-key-certificate-file",level:2}],p={toc:l},f="wrapper";function y(e){let{components:t,...a}=e;return(0,n.yg)(f,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Enabling SSL functionality in Doris requires configuring both a CA key certificate and a server-side key certificate. To enable mutual authentication, a client-side key certificate must also be generated:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The default CA key certificate file is located at ",(0,n.yg)("inlineCode",{parentName:"p"},"Doris/fe/mysql_ssl_default_certificate/ca_certificate.p12"),", with a default password of ",(0,n.yg)("inlineCode",{parentName:"p"},"doris"),". You can modify the FE configuration file ",(0,n.yg)("inlineCode",{parentName:"p"},"conf/fe.conf")," to add ",(0,n.yg)("inlineCode",{parentName:"p"},"mysql_ssl_default_ca_certificate = /path/to/your/certificate")," to change the CA key certificate file. You can also add ",(0,n.yg)("inlineCode",{parentName:"p"},"mysql_ssl_default_ca_certificate_password = your_password")," to specify the password for your custom key certificate file.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The default server-side key certificate file is located at ",(0,n.yg)("inlineCode",{parentName:"p"},"Doris/fe/mysql_ssl_default_certificate/server_certificate.p12"),", with a default password of ",(0,n.yg)("inlineCode",{parentName:"p"},"doris"),". You can modify the FE configuration file ",(0,n.yg)("inlineCode",{parentName:"p"},"conf/fe.conf")," to add ",(0,n.yg)("inlineCode",{parentName:"p"},"mysql_ssl_default_server_certificate = /path/to/your/certificate")," to change the server-side key certificate file. You can also add ",(0,n.yg)("inlineCode",{parentName:"p"},"mysql_ssl_default_server_certificate_password = your_password")," to specify the password for your custom key certificate file.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"By default, a client-side key certificate is also generated and stored in ",(0,n.yg)("inlineCode",{parentName:"p"},"Doris/fe/mysql_ssl_default_certificate/client-key.pem")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"Doris/fe/mysql_ssl_default_certificate/client_certificate/"),"."))),(0,n.yg)("h2",{id:"custom-key-certificate-file"},"Custom key certificate file"),(0,n.yg)("p",null,"In addition to the Doris default certificate file, you can also generate a custom certificate file through ",(0,n.yg)("inlineCode",{parentName:"p"},"openssl"),". Here are the steps (refer to ",(0,n.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/creating-ssl-files-using-openssl.html"},"Creating SSL Certificates and Keys Using OpenSSL"),"):"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Generate the CA, server-side, and client-side keys and certificates:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# Generate the CA certificate\nopenssl genrsa 2048 > ca-key.pem\nopenssl req -new -x509 -nodes -days 3600 \\\n        -key ca-key.pem -out ca.pem\n\n# Generate the server certificate and sign it with the above CA\n# server-cert.pem = public key, server-key.pem = private key\nopenssl req -newkey rsa:2048 -days 3600 \\\n        -nodes -keyout server-key.pem -out server-req.pem\nopenssl rsa -in server-key.pem -out server-key.pem\nopenssl x509 -req -in server-req.pem -days 3600 \\\n        -CA ca.pem -CAkey ca-key.pem -set_serial 01 -out server-cert.pem\n\n# Generate the client certificate and sign it with the above CA\n# client-cert.pem = public key, client-key.pem = private key\nopenssl req -newkey rsa:2048 -days 3600 \\\n        -nodes -keyout client-key.pem -out client-req.pem\nopenssl rsa -in client-key.pem -out client-key.pem\nopenssl x509 -req -in client-req.pem -days 3600 \\\n        -CA ca.pem -CAkey ca-key.pem -set_serial 01 -out client-cert.pem\n")),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Verify the created certificates:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"openssl verify -CAfile ca.pem server-cert.pem client-cert.pem\n")),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"Combine your key and certificate in a PKCS#12 (P12) bundle. You can also specify a certificate format (PKCS12 by default). You can modify the conf/fe.conf configuration file and add parameter ssl_trust_store_type to specify the certificate format.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# Package the CA key and certificate\nopenssl pkcs12 -inkey ca-key.pem -in ca.pem -export -out ca_certificate.p12\n\n# Package the server-side key and certificate\nopenssl pkcs12 -inkey server-key.pem -in server.pem -export -out server_certificate.p12\n")),(0,n.yg)("admonition",{title:"Note",type:"info"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/api-connect/2018.x?topic=overview-generating-self-signed-certificate-using-openssl"},"reference documents"))))}y.isMDXComponent=!0}}]);