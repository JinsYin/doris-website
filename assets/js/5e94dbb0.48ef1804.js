"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[91494],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),y=a,f=c["".concat(l,".").concat(y)]||c[y]||d[y]||s;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=y;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},225297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=t(58168),a=(t(296540),t(15680));const s={title:"JSON_SET",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-functions/json-functions/json-set",id:"sql-manual/sql-functions/json-functions/json-set",title:"JSON_SET",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/json-functions/json-set.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-set",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/json-set",draft:!1,tags:[],version:"current",frontMatter:{title:"JSON_SET",language:"en"},sidebar:"docs",previous:{title:"JSON_REPLACE",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/json-replace"},next:{title:"JSON_KEYS",permalink:"/docs/dev/sql-manual/sql-functions/json-functions/json-keys"}},l={},u=[{value:"json_set",id:"json_set",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"json_set"},"json_set"),(0,a.yg)("version",{since:"dev"}),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR json_set(VARCHAR json_str, VARCHAR path, VARCHAR val[, VARCHAR path, VARCHAR val] ...)")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"json_set")," function inserts or updates data in a JSON and returns the result.Returns NULL if ",(0,a.yg)("inlineCode",{parentName:"p"},"json_str")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"path")," is NULL. Otherwise, an error occurs if the ",(0,a.yg)("inlineCode",{parentName:"p"},"json_str")," argument is not a valid JSON or any path argument is not a valid path expression or contains a * wildcard."),(0,a.yg)("p",null,"The path-value pairs are evaluated left to right."),(0,a.yg)("p",null,"A path-value pair for an existing path in the json overwrites the existing json value with the new value. A path-value pair for a nonexisting path in the json adds the value to the json if the path identifies one of these types of values:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"A member not present in an existing object. The member is added to the object and associated with the new value.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"A position past the end of an existing array. The array is extended with the new value. If the existing value is not an array, it is autowrapped as an array, then extended with the new value."))),(0,a.yg)("p",null,"Otherwise, a path-value pair for a nonexisting path in the json is ignored and has no effect."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"MySQL> select json_set(null, null, null);\n+------------------------------+\n| json_set(NULL, NULL, 'NULL') |\n+------------------------------+\n| NULL                         |\n+------------------------------+\n\nMySQL> select json_set('{\"k\": 1}', \"$.k\", 2);\n+------------------------------------+\n| json_set('{\\\"k\\\": 1}', '$.k', '2') |\n+------------------------------------+\n| {\"k\":2}                            |\n+------------------------------------+\n\nMySQL> select json_set('{\"k\": 1}', \"$.j\", 2);\n+------------------------------------+\n| json_set('{\\\"k\\\": 1}', '$.j', '2') |\n+------------------------------------+\n| {\"k\":1,\"j\":2}                      |\n+------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"JSON, json_set"))}d.isMDXComponent=!0}}]);