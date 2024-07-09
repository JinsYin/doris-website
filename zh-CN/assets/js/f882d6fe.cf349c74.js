"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[71162],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),y=a,g=m["".concat(o,".").concat(y)]||m[y]||c[y]||l;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=y;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},949382:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(58168),a=(t(296540),t(15680));const l={title:"BITMAP_HASH",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-hash",id:"version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-hash",title:"BITMAP_HASH",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-hash.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-hash",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-hash",draft:!1,tags:[],version:"2.0",frontMatter:{title:"BITMAP_HASH",language:"zh-CN"},sidebar:"docs",previous:{title:"TO_BITMAP",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/to-bitmap"},next:{title:"BITMAP_FROM_STRING",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-from-string"}},o={},p=[{value:"bitmap_hash",id:"bitmap_hash",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Return Type",id:"return-type",level:4},{value:"Remarks",id:"remarks",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:p},m="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bitmap_hash"},"bitmap_hash"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"BITMAP_HASH"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u5bf9\u4efb\u610f\u7c7b\u578b\u7684\u8f93\u5165\uff0c\u8ba1\u7b97\u5176 32 \u4f4d\u7684\u54c8\u5e0c\u503c\uff0c\u5e76\u8fd4\u56de\u5305\u542b\u8be5\u54c8\u5e0c\u503c\u7684 bitmap\u3002\u8be5\u51fd\u6570\u4f7f\u7528\u7684\u54c8\u5e0c\u7b97\u6cd5\u4e3a MurMur3\u3002MurMur3 \u7b97\u6cd5\u662f\u4e00\u79cd\u9ad8\u6027\u80fd\u7684\u3001\u4f4e\u78b0\u649e\u7387\u7684\u6563\u5217\u7b97\u6cd5\uff0c\u5176\u8ba1\u7b97\u51fa\u6765\u7684\u503c\u63a5\u8fd1\u4e8e\u968f\u673a\u5206\u5e03\uff0c\u5e76\u4e14\u80fd\u901a\u8fc7\u5361\u65b9\u5206\u5e03\u6d4b\u8bd5\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e0d\u540c\u786c\u4ef6\u5e73\u53f0\u3001\u4e0d\u540c Seed \u503c\u8ba1\u7b97\u51fa\u6765\u7684\u6563\u5217\u503c\u53ef\u80fd\u4e0d\u540c\u3002\u5173\u4e8e\u6b64\u7b97\u6cd5\u7684\u6027\u80fd\u53ef\u4ee5\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"http://rurban.github.io/smhasher/"},"Smhasher")," \u6392\u884c\u699c\u3002"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_HASH(<any_value>)")),(0,a.yg)("h4",{id:"arguments"},"Arguments"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"<any_value>"),"\n\u4efb\u4f55\u503c\u6216\u5b57\u6bb5\u8868\u8fbe\u5f0f\u3002"),(0,a.yg)("h4",{id:"return-type"},"Return Type"),(0,a.yg)("p",null,"BITMAP"),(0,a.yg)("h4",{id:"remarks"},"Remarks"),(0,a.yg)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0cMurMur 32 \u4f4d\u7b97\u6cd5\u5bf9\u4e8e\u5b8c\u5168\u968f\u673a\u7684\u3001\u8f83\u77ed\u7684\u5b57\u7b26\u4e32\u7684\u6563\u5217\u6548\u679c\u8f83\u597d\uff0c\u78b0\u649e\u7387\u80fd\u8fbe\u5230\u51e0\u5341\u4ebf\u5206\u4e4b\u4e00\uff0c\u4f46\u5bf9\u4e8e\u8f83\u957f\u7684\u5b57\u7b26\u4e32\uff0c\u6bd4\u5982\u4f60\u7684\u64cd\u4f5c\u7cfb\u7edf\u8def\u5f84\uff0c\u78b0\u649e\u7387\u4f1a\u6bd4\u8f83\u9ad8\u3002\u5982\u679c\u4f60\u626b\u63cf\u4f60\u7cfb\u7edf\u91cc\u7684\u8def\u5f84\uff0c\u5c31\u4f1a\u53d1\u73b0\u78b0\u649e\u7387\u4ec5\u4ec5\u53ea\u80fd\u8fbe\u5230\u767e\u4e07\u5206\u4e4b\u4e00\u751a\u81f3\u662f\u5341\u4e07\u5206\u4e4b\u4e00\u3002"),(0,a.yg)("p",null,"\u4e0b\u9762\u4e24\u4e2a\u5b57\u7b26\u4e32\u7684 MurMur3 \u6563\u5217\u503c\u662f\u4e00\u6837\u7684\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmap_to_string(bitmap_hash('/System/Volumes/Data/Library/Developer/CommandLineTools/SDKs/MacOSX12.3.sdk/System/Library/Frameworks/KernelManagement.framework/KernelManagement.tbd')) AS a ,\n       bitmap_to_string(bitmap_hash('/System/Library/PrivateFrameworks/Install.framework/Versions/Current/Resources/es_419.lproj/Architectures.strings')) AS b;\n")),(0,a.yg)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"+-----------+-----------+\n| a         | b         |\n+-----------+-----------+\n| 282251871 | 282251871 |\n+-----------+-----------+\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("p",null,"\u5982\u679c\u4f60\u60f3\u8ba1\u7b97\u67d0\u4e2a\u503c\u7684 MurMur3\uff0c\u4f60\u53ef\u4ee5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"select bitmap_to_array(bitmap_hash('hello'))[1];\n")),(0,a.yg)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"+-------------------------------------------------------------+\n| %element_extract%(bitmap_to_array(bitmap_hash('hello')), 1) |\n+-------------------------------------------------------------+\n|                                                  1321743225 |\n+-------------------------------------------------------------+\n")),(0,a.yg)("p",null,"\u5982\u679c\u4f60\u60f3\u7edf\u8ba1\u67d0\u4e00\u5217\u53bb\u91cd\u540e\u7684\u4e2a\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528\u4f4d\u56fe\u7684\u65b9\u5f0f\uff0c\u67d0\u4e9b\u573a\u666f\u4e0b\u6027\u80fd\u6bd4 ",(0,a.yg)("inlineCode",{parentName:"p"},"count distinct")," \u597d\u5f88\u591a\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select bitmap_count(bitmap_union(bitmap_hash(`word`))) from `words`;\n")),(0,a.yg)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"+-------------------------------------------------+\n| bitmap_count(bitmap_union(bitmap_hash(`word`))) |\n+-------------------------------------------------+\n|                                        33263478 |\n+-------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"BITMAP_HASH,BITMAP\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"),(0,a.yg)("p",null,"\u8fd8\u53ef\u53c2\u89c1"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"../bitmap-functions/bitmap-hash64"},"BITMAP_HASH64"))))}c.isMDXComponent=!0}}]);