"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52756],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},456261:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(58168),i=(t(296540),t(15680));const o={title:"IPV4_STRING_TO_NUM",language:"en"},a=void 0,s={unversionedId:"sql-manual/sql-functions/ip-functions/ipv4-string-to-num",id:"sql-manual/sql-functions/ip-functions/ipv4-string-to-num",title:"IPV4_STRING_TO_NUM",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/ip-functions/ipv4-string-to-num.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/ipv4-string-to-num",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-string-to-num",draft:!1,tags:[],version:"current",frontMatter:{title:"IPV4_STRING_TO_NUM",language:"en"},sidebar:"docs",previous:{title:"IPV4_NUM_TO_STRING",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-num-to-string"},next:{title:"IPV4_STRING_TO_NUM_OR_DEFAULT",permalink:"/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default"}},l={},u=[{value:"IPV4_STRING_TO_NUM",id:"ipv4_string_to_num",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"ipv4_string_to_num"},"IPV4_STRING_TO_NUM"),(0,i.yg)("p",null,"IPV4_STRING_TO_NUM"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BIGINT IPV4_STRING_TO_NUM(VARCHAR ipv4_string)")),(0,i.yg)("p",null,"Takes a string containing an IPv4 address in the format A.B.C.D (dot-separated numbers in decimal form). Returns a BIGINT number representing the corresponding IPv4 address in big endian."),(0,i.yg)("h4",{id:"notice"},"Notice"),(0,i.yg)("p",null,"If the input string is not a valid IPv4 address or ",(0,i.yg)("inlineCode",{parentName:"p"},"NULL"),", an error is returned"),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select ipv4_string_to_num('192.168.0.1'); \n+-----------------------------------+ \n| ipv4_string_to_num('192.168.0.1') | \n+-----------------------------------+ \n| 3232235521                        | \n+-----------------------------------+ \n1 row in set (0.01 sec)\n\nmysql> select ipv4_string_to_num('invalid'); \nERROR 1105 (HY000): errCode = 2, detailMessage = (172.17.0.2)[CANCELLED][INVALID_ARGUMENT][E33] Invalid IPv4 value\n\nmysql> select addr_src, ipv4_string_to_num(addr_src) from ipv4_string_test where addr_src is null;\nERROR 1105 (HY000): errCode = 2, detailMessage = (172.17.0.2)[CANCELLED][E33] Null Input, you may consider convert it to a valid default IPv4 value like '0.0.0.0' first\n")),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("p",null,"IPV4_STRING_TO_NUM, IP"))}d.isMDXComponent=!0}}]);