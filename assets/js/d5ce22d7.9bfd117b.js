"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[35161],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>h});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),g=n,h=c["".concat(p,".").concat(g)]||c[g]||m[g]||l;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},80441:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(58168),n=(a(296540),a(15680));const l={title:"Release 1.1.4",language:"en"},o=void 0,i={unversionedId:"releasenotes/release-1.1.4",id:"version-2.0/releasenotes/release-1.1.4",title:"Release 1.1.4",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/releasenotes/release-1.1.4.md",sourceDirName:"releasenotes",slug:"/releasenotes/release-1.1.4",permalink:"/docs/2.0/releasenotes/release-1.1.4",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Release 1.1.4",language:"en"}},p={},s=[],u={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"In this release, Doris Team has fixed about 60 issues or performance improvement since 1.1.3. This release is a bugfix release on 1.1 and all users are encouraged to upgrade to this release."),(0,n.yg)("h1",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Support obs broker load for Huawei Cloud. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13523"},"#13523"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"SparkLoad support parquet and orc file.",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13438"},"#13438")))),(0,n.yg)("h1",{id:"improvements"},"Improvements"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Do not acquire mutex in metric hook since it will affect query performance during heavy load.",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/10941"},"#10941"))),(0,n.yg)("h1",{id:"bugfix"},"BugFix"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The where condition does not take effect when spark load loads the file. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13804"},"#13804"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"If function return error result when there is nullable column in vectorized mode. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13779"},"#13779"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fix incorrect result when using anti join with other join predicates. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13743"},"#13743"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"BE crash when call function concat(ifnull). ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13693"},"#13693"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fix planner bug when there is a function in group by clause. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13613"},"#13613"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Table name and column name is not recognized correctly in lateral view clause. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13600"},"#13600"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Unknown column when use MV and table alias. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13605"},"#13605"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"JSONReader release memory of both value and parse allocator. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13513"},"#13513"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fix allow create mv using to_bitmap() on negative value columns when enable_vectorized_alter_table is true. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13448"},"#13448"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Microsecond in function from_date_format_str is lost. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13446"},"#13446"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Sort exprs nullability property may not be right after subsitute using child's smap info. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13328"},"#13328"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fix core dump on case when have 1000 condition. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13315"},"#13315"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Fix bug that last line of data lost for stream load. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/13066"},"#13066"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Restore table or partition with the same replication num as before the backup. ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/11942"},"#11942")))))}m.isMDXComponent=!0}}]);