"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52452],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),o=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=o(t),y=r,m=d["".concat(i,".").concat(y)]||d[y]||p[y]||s;return t?a.createElement(m,c(c({ref:n},u),{},{components:t})):a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,c=new Array(s);c[0]=y;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:r,c[1]=l;for(var o=2;o<s;o++)c[o]=t[o];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},13208:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var a=t(58168),r=(t(296540),t(15680));const s={title:"Encrption and Masking Function ",language:"en"},c=void 0,l={unversionedId:"query/query-data/encryption-function",id:"version-2.1/query/query-data/encryption-function",title:"Encrption and Masking Function ",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/query/query-data/encryption-function.md",sourceDirName:"query/query-data",slug:"/query/query-data/encryption-function",permalink:"/docs/query/query-data/encryption-function",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Encrption and Masking Function ",language:"en"},sidebar:"docs",previous:{title:"Window Function",permalink:"/docs/query/query-data/window-function"},next:{title:"Variable",permalink:"/docs/query/query-variables/variables"}},i={},o=[{value:"AES_ENCRYPT",id:"aes_encrypt",level:2},{value:"AES_DECRYPT",id:"aes_decrypt",level:2},{value:"MD5",id:"md5",level:2},{value:"MD5SUM",id:"md5sum",level:2},{value:"SM4_ENCRYPT",id:"sm4_encrypt",level:2},{value:"SM3",id:"sm3",level:2},{value:"SM3SUM",id:"sm3sum",level:2},{value:"SHA",id:"sha",level:2},{value:"SHA2",id:"sha2",level:2},{value:"DIGITAL_MASKING",id:"digital_masking",level:2}],u={toc:o},d="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Doris provides the following built-in encryption and masking functions. For detailed usage, please refer to the SQL manual."),(0,r.yg)("h2",{id:"aes_encrypt"},"AES_ENCRYPT"),(0,r.yg)("p",null,"An AES encryption function. "),(0,r.yg)("p",null,"This function behaves the same as the",(0,r.yg)("inlineCode",{parentName:"p"}," AES_ENCRYPT")," function in MySQL. It uses the AES_128_ECB algorithm by default, with PKCS7 padding mode. Encryption is performed using the OpenSSL library as the underlying mechanism. Reference: ",(0,r.yg)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_aes-decrypt"},"https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_aes-decrypt")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select to_base64(aes_encrypt('text','F3229A0B371ED2D9441B830D21A390C3'));\n\n+--------------------------------+\n| to_base64(aes_encrypt('text')) |\n+--------------------------------+\n| wr2JEDVXzL9+2XtRhgIloA==       |\n+--------------------------------+\n1 row in set (0.01 sec)\n")),(0,r.yg)("h2",{id:"aes_decrypt"},"AES_DECRYPT"),(0,r.yg)("p",null,"An AES decryption function. This function behaves the same as the ",(0,r.yg)("inlineCode",{parentName:"p"},"AES_DECRYPT")," function in MySQL. It uses the AES_128_ECB algorithm by default, with PKCS7 padding mode. Decryption is performed using the OpenSSL library as the underlying mechanism."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select aes_decrypt(from_base64('wr2JEDVXzL9+2XtRhgIloA=='),'F3229A0B371ED2D9441B830D21A390C3');\n+------------------------------------------------------+\n| aes_decrypt(from_base64('wr2JEDVXzL9+2XtRhgIloA==')) |\n+------------------------------------------------------+\n| text                                                 |\n+------------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,r.yg)("h2",{id:"md5"},"MD5"),(0,r.yg)("p",null,"Calculates the MD5 128-bit hash."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL [(none)]> select md5(\"abc\");\n+----------------------------------+\n| md5('abc')                       |\n+----------------------------------+\n| 900150983cd24fb0d6963f7d28e17f72 |\n+----------------------------------+\n1 row in set (0.013 sec)\n")),(0,r.yg)("h2",{id:"md5sum"},"MD5SUM"),(0,r.yg)("p",null,"Calculates the MD5 128-bit hash for multiple strings."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL > select md5(\"abcd\");\n+----------------------------------+\n| md5('abcd')                      |\n+----------------------------------+\n| e2fc714c4727ee9395f324cd2e7f331f |\n+----------------------------------+\n1 row in set (0.011 sec)\n\nMySQL > select md5sum(\"ab\",\"cd\");\n+----------------------------------+\n| md5sum('ab', 'cd')               |\n+----------------------------------+\n| e2fc714c4727ee9395f324cd2e7f331f |\n+----------------------------------+\n1 row in set (0.008 sec)\n")),(0,r.yg)("h2",{id:"sm4_encrypt"},"SM4_ENCRYPT"),(0,r.yg)("p",null,"SM4 encryption function."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL > select TO_BASE64(SM4_ENCRYPT('text','F3229A0B371ED2D9441B830D21A390C3'));\n+--------------------------------+\n| to_base64(sm4_encrypt('text')) |\n+--------------------------------+\n| aDjwRflBrDjhBZIOFNw3Tg==       |\n+--------------------------------+\n1 row in set (0.010 sec)\n\nMySQL > set block_encryption_mode=\"SM4_128_CBC\";\nQuery OK, 0 rows affected (0.001 sec)\n\nMySQL > select to_base64(SM4_ENCRYPT('text','F3229A0B371ED2D9441B830D21A390C3', '0123456789'));\n+----------------------------------------------------------------------------------+\n| to_base64(sm4_encrypt('text', 'F3229A0B371ED2D9441B830D21A390C3', '0123456789')) |\n+----------------------------------------------------------------------------------+\n| G7yqOKfEyxdagboz6Qf01A==                                                         |\n+----------------------------------------------------------------------------------+\n1 row in set (0.014 sec)\n")),(0,r.yg)("h2",{id:"sm3"},"SM3"),(0,r.yg)("p",null,"Calculates the SM3 256-bit hash for multiple strings."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL > select sm3(\"abcd\");\n+------------------------------------------------------------------+\n| sm3('abcd')                                                      |\n+------------------------------------------------------------------+\n| 82ec580fe6d36ae4f81cae3c73f4a5b3b5a09c943172dc9053c69fd8e18dca1e |\n+------------------------------------------------------------------+\n1 row in set (0.009 sec)\n")),(0,r.yg)("h2",{id:"sm3sum"},"SM3SUM"),(0,r.yg)("p",null,"Calculates the SM3 256-bit hash for multiple strings."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL > select sm3(\"abcd\");\n+------------------------------------------------------------------+\n| sm3('abcd')                                                      |\n+------------------------------------------------------------------+\n| 82ec580fe6d36ae4f81cae3c73f4a5b3b5a09c943172dc9053c69fd8e18dca1e |\n+------------------------------------------------------------------+\n1 row in set (0.009 sec)\n\nMySQL > select sm3sum(\"ab\",\"cd\");\n+------------------------------------------------------------------+\n| sm3sum('ab', 'cd')                                               |\n+------------------------------------------------------------------+\n| 82ec580fe6d36ae4f81cae3c73f4a5b3b5a09c943172dc9053c69fd8e18dca1e |\n+------------------------------------------------------------------+\n1 row in set (0.009 sec)\n")),(0,r.yg)("h2",{id:"sha"},"SHA"),(0,r.yg)("p",null,"Calculates the SHA1 hash using the SHA1 algorithm."),(0,r.yg)("h2",{id:"sha2"},"SHA2"),(0,r.yg)("p",null,"Calculates the SHA2 hash using SHA2 algorithm."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select sha2('abc', 224);\n+----------------------------------------------------------+\n| sha2('abc', 224)                                         |\n+----------------------------------------------------------+\n| 23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7 |\n+----------------------------------------------------------+\n1 row in set (0.13 sec)\n\nmysql> select sha2('abc', 384);\n+--------------------------------------------------------------------------------------------------+\n| sha2('abc', 384)                                                                                 |\n+--------------------------------------------------------------------------------------------------+\n| cb00753f45a35e8bb5a03d699ac65007272c32ab0eded1631a8b605a43ff5bed8086072ba1e7cc2358baeca134c825a7 |\n+--------------------------------------------------------------------------------------------------+\n1 row in set (0.13 sec)\n\nmysql> select sha2(NULL, 512);\n+-----------------+\n| sha2(NULL, 512) |\n+-----------------+\n| NULL            |\n+-----------------+\n1 row in set (0.09 sec)\n")),(0,r.yg)("h2",{id:"digital_masking"},"DIGITAL_MASKING"),(0,r.yg)("p",null,"An alias function with the original function being ",(0,r.yg)("inlineCode",{parentName:"p"},"CONCAT(LEFT(id,3),'****',RIGHT(id,4))"),". Performs data masking on the input ",(0,r.yg)("inlineCode",{parentName:"p"},"digital_number")," and returns the masked result. "),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"digital_number")," is of type ",(0,r.yg)("inlineCode",{parentName:"p"},"BIGINT"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql select digital_masking(13812345678);\n+------------------------------+\n| digital_masking(13812345678) |\n+------------------------------+\n| 138****5678                  |\n+------------------------------+\n")))}p.isMDXComponent=!0}}]);