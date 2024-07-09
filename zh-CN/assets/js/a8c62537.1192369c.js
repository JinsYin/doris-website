"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[54962],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var T=r.createContext({}),s=function(e){var n=r.useContext(T),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(T.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},E=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,T=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),E=a,y=p["".concat(T,".").concat(E)]||p[E]||u[E]||l;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=E;var i={};for(var T in n)hasOwnProperty.call(n,T)&&(i[T]=n[T]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}E.displayName="MDXCreateElement"},18229:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>T,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const l={title:"QUANTILE_STATE",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/QUANTILE_STATE",id:"version-1.2/sql-manual/sql-reference/Data-Types/QUANTILE_STATE",title:"QUANTILE_STATE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Types/QUANTILE_STATE.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/QUANTILE_STATE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/QUANTILE_STATE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"QUANTILE_STATE",language:"zh-CN"},sidebar:"docs",previous:{title:"BITMAP",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/BITMAP"},next:{title:"ARRAY",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/ARRAY"}},T={},s=[{value:"QUANTILE_STATE",id:"quantile_state",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"notice",id:"notice",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"quantile_state"},"QUANTILE_STATE"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"QUANTILE_STATE\nQUANTILE_STATE\u4e0d\u80fd\u4f5c\u4e3akey\u5217\u4f7f\u7528\uff0c\u5efa\u8868\u65f6\u914d\u5408\u805a\u5408\u7c7b\u578b\u4e3aQUANTILE_UNION\u3002\n\u7528\u6237\u4e0d\u9700\u8981\u6307\u5b9a\u957f\u5ea6\u548c\u9ed8\u8ba4\u503c\u3002\u957f\u5ea6\u6839\u636e\u6570\u636e\u7684\u805a\u5408\u7a0b\u5ea6\u7cfb\u7edf\u5185\u63a7\u5236\u3002\n\u5e76\u4e14QUANTILE_STATE\u5217\u53ea\u80fd\u901a\u8fc7\u914d\u5957\u7684QUANTILE_PERCENT\u3001QUANTILE_UNION\u3001TO_QUANTILE_STATE\u7b49\u51fd\u6570\u8fdb\u884c\u67e5\u8be2\u6216\u4f7f\u7528\u3002\n\nQUANTILE_STATE \u662f\u4e00\u79cd\u8ba1\u7b97\u5206\u4f4d\u6570\u8fd1\u4f3c\u503c\u7684\u7c7b\u578b\uff0c\u5728\u5bfc\u5165\u65f6\u4f1a\u5bf9\u76f8\u540c\u7684key\uff0c\u4e0d\u540c value \u8fdb\u884c\u9884\u805a\u5408\uff0c\u5f53value\u6570\u91cf\u4e0d\u8d85\u8fc72048\u65f6\u91c7\u7528\u660e\u7ec6\u8bb0\u5f55\u6240\u6709\u6570\u636e\uff0c\u5f53 value \u6570\u91cf\u5927\u4e8e2048\u65f6\u91c7\u7528 [TDigest](https://github.com/tdunning/t-digest/blob/main/docs/t-digest-paper/histo.pdf) \u7b97\u6cd5\uff0c\u5bf9\u6570\u636e\u8fdb\u884c\u805a\u5408\uff08\u805a\u7c7b\uff09\u4fdd\u5b58\u805a\u7c7b\u540e\u7684\u8d28\u5fc3\u70b9\u3002\n\n\u76f8\u5173\u51fd\u6570:\n\n  QUANTILE_UNION(QUANTILE_STATE):\n  \u6b64\u51fd\u6570\u4e3a\u805a\u5408\u51fd\u6570\uff0c\u7528\u4e8e\u5c06\u4e0d\u540c\u7684\u5206\u4f4d\u6570\u8ba1\u7b97\u4e2d\u95f4\u7ed3\u679c\u8fdb\u884c\u805a\u5408\u64cd\u4f5c\u3002\u6b64\u51fd\u6570\u8fd4\u56de\u7684\u7ed3\u679c\u4ecd\u662fQUANTILE_STATE\n\n  \n  TO_QUANTILE_STATE(INT/FLOAT/DOUBLE raw_data [,FLOAT compression]):\n  \u6b64\u51fd\u6570\u5c06\u6570\u503c\u7c7b\u578b\u8f6c\u5316\u6210QUANTILE_STATE\u7c7b\u578b\n  compression\u53c2\u6570\u662f\u53ef\u9009\u9879\uff0c\u53ef\u8bbe\u7f6e\u8303\u56f4\u662f[2048, 10000]\uff0c\u503c\u8d8a\u5927\uff0c\u540e\u7eed\u5206\u4f4d\u6570\u8fd1\u4f3c\u8ba1\u7b97\u7684\u7cbe\u5ea6\u8d8a\u9ad8\uff0c\u5185\u5b58\u6d88\u8017\u8d8a\u5927\uff0c\u8ba1\u7b97\u8017\u65f6\u8d8a\u957f\u3002 \n  compression\u53c2\u6570\u672a\u6307\u5b9a\u6216\u8bbe\u7f6e\u7684\u503c\u5728[2048, 10000]\u8303\u56f4\u5916\uff0c\u4ee52048\u7684\u9ed8\u8ba4\u503c\u8fd0\u884c\n\n  QUANTILE_PERCENT(QUANTILE_STATE):\n  \u6b64\u51fd\u6570\u5c06\u5206\u4f4d\u6570\u8ba1\u7b97\u7684\u4e2d\u95f4\u7ed3\u679c\u53d8\u91cf\uff08QUANTILE_STATE\uff09\u8f6c\u5316\u4e3a\u5177\u4f53\u7684\u5206\u4f4d\u6570\u6570\u503c\n")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"select QUANTILE_PERCENT(QUANTILE_UNION(v1)) from test_table group by k1, k2, k3;\n")),(0,a.yg)("h3",{id:"notice"},"notice"),(0,a.yg)("p",null,"\u4f7f\u7528\u524d\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u6253\u5f00 QUANTILE_STATE \u5f00\u5173:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'$ mysql-client > admin set frontend config("enable_quantile_state_type"="true");\n')),(0,a.yg)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u4e0b QUANTILE_STATE \u5f00\u5173\u4f1a\u5728Fe\u8fdb\u7a0b\u91cd\u542f\u540e\u91cd\u7f6e\uff0c\u6216\u8005\u5728fe.conf\u4e2d\u6dfb\u52a0",(0,a.yg)("inlineCode",{parentName:"p"},"enable_quantile_state_type=true"),"\u914d\u7f6e\u9879\u53ef\u6c38\u4e45\u751f\u6548\u3002"),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"QUANTILE_STATE, QUANTILE_UNION, TO_QUANTILE_STATE, QUANTILE_PERCENT\n")))}u.isMDXComponent=!0}}]);