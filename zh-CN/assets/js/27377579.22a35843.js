"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[24900],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,y=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},865818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const l={title:"LDAP",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/LDAP",id:"version-2.0/sql-manual/sql-reference/Account-Management-Statements/LDAP",title:"LDAP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Account-Management-Statements/LDAP.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/LDAP",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/LDAP",draft:!1,tags:[],version:"2.0",frontMatter:{title:"LDAP",language:"zh-CN"},sidebar:"docs",previous:{title:"SET-PROPERTY",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY"},next:{title:"GRANT",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/GRANT"}},i={},s=[{value:"LDAP",id:"ldap",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"ldap"},"LDAP"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"LDAP"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"SET LDAP_ADMIN_PASSWORD"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"}," SET LDAP_ADMIN_PASSWORD = PASSWORD('plain password')\n")),(0,a.yg)("p",null," SET LDAP_ADMIN_PASSWORD \u547d\u4ee4\u7528\u4e8e\u8bbe\u7f6eLDAP\u7ba1\u7406\u5458\u5bc6\u7801\u3002\u4f7f\u7528LDAP\u8ba4\u8bc1\u65f6\uff0cdoris\u9700\u4f7f\u7528\u7ba1\u7406\u5458\u8d26\u6237\u548c\u5bc6\u7801\u6765\u5411LDAP\u670d\u52a1\u67e5\u8be2\u767b\u5f55\u7528\u6237\u7684\u4fe1\u606f\u3002"),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u8bbe\u7f6eLDAP\u7ba1\u7406\u5458\u5bc6\u7801")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET LDAP_ADMIN_PASSWORD = PASSWORD('123456')\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"LDAP, PASSWORD, LDAP_ADMIN_PASSWORD\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);