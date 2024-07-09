"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[50002],{15680:(e,a,n)=>{n.d(a,{xA:()=>s,yg:()=>c});var t=n(296540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=t.createContext({}),p=function(e){var a=t.useContext(m),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},s=function(e){var a=p(e.components);return t.createElement(m.Provider,{value:a},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,o=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),y=p(n),u=l,c=y["".concat(m,".").concat(u)]||y[u]||g[u]||o;return n?t.createElement(c,r(r({ref:a},s),{},{components:n})):t.createElement(c,r({ref:a},s))}));function c(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=u;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i[y]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},735802:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=n(58168),l=(n(296540),n(15680));const o={title:"ALTER-TABLE-COLUMN",language:"en"},r=void 0,i={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",id:"version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",title:"ALTER-TABLE-COLUMN",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ALTER-TABLE-COLUMN",language:"en"},sidebar:"docs",previous:{title:"ALTER-DATABASE",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-DATABASE"},next:{title:"ALTER-TABLE-PARTITION",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION"}},m={},p=[{value:"Name",id:"name",level:2},{value:"Description",id:"description",level:3},{value:"Grammar:",id:"grammar",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:p},y="wrapper";function g(e){let{components:a,...n}=e;return(0,l.yg)(y,(0,t.A)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"name"},"Name"),(0,l.yg)("p",null,"ALTER TABLE COLUMN"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"This statement is used to perform a schema change operation on an existing table. The schema change is asynchronous, and the task is returned when the task is submitted successfully. After that, you can use the ",(0,l.yg)("a",{parentName:"p",href:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-ALTER"},"SHOW ALTER TABLE COLUMN")," command to view the progress."),(0,l.yg)("p",null,"Doris has the concept of materialized index after table construction. After successful table construction, it is the base table and the materialized index is the base index. rollup index can be created based on the base table. Both base index and rollup index are materialized indexes. If rollup_index_name is not specified during the schema change operation, the operation is based on the base table by default."),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"Doris 1.2.0 supports light schema change for light scale structure changes, and addition and subtraction operations for value columns can be completed more quickly and synchronously. You can manually specify \"light_schema_change\" = 'true' when creating a table. This parameter is enabled by default for versions 2.0.0 and later.")),(0,l.yg)("h3",{id:"grammar"},"Grammar:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,l.yg)("p",null,"The alter_clause of schema change supports the following modification methods:"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"1. Add a column to the specified position at the specified index")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Grammar")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE [database.]table table_name ADD COLUMN column_name column_type [KEY | agg_type] [DEFAULT "default_value"]\n[AFTER column_name|FIRST]\n[TO rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Add a key column new_col to example_db.my_table after key_1 (non-aggregated model)"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT KEY DEFAULT "0" AFTER key_1;\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Add a value column new_col to example_db.my_table after value_1 (non-aggregate model)"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT DEFAULT "0" AFTER value_1;\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Add a key column new_col (aggregate model) to example_db.my_table after key_1"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT KEY DEFAULT "0" AFTER key_1;\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Add a value column to example_db.my_table after value_1 new_col SUM Aggregation type (aggregation model)"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table   \nADD COLUMN new_col INT SUM DEFAULT "0" AFTER value_1; \n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Add new_col to the first column position of the example_db.my_table table (non-aggregated model)"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN new_col INT KEY DEFAULT "0" FIRST;\n')))),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},"If you add a value column to the aggregation model, you need to specify agg_type"),(0,l.yg)("li",{parentName:"ul"},"For non-aggregated models (such as DUPLICATE KEY), if you add a key column, you need to specify the KEY keyword"),(0,l.yg)("li",{parentName:"ul"},"You cannot add columns that already exist in the base index to the rollup index (you can recreate a rollup index if necessary)"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"2. Add multiple columns to the specified index")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Grammar")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE [database.]table table_name ADD COLUMN (column_name1 column_type [KEY | agg_type] DEFAULT "default_value", ...)\n[TO rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Add multiple columns to example_db.my_table, where new_col and new_col2 are SUM aggregate types (aggregate model)"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN (new_col1 INT SUM DEFAULT "0" ,new_col2 INT SUM DEFAULT "0");\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Add multiple columns to example_db.my_table (non-aggregated model), where new_col1 is the KEY column and new_col2 is the value column"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD COLUMN (new_col1 INT key DEFAULT "0" , new_col2 INT DEFAULT "0");\n')))),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},"If you add a value column to the aggregation model, you need to specify agg_type"),(0,l.yg)("li",{parentName:"ul"},"If you add a key column to the aggregation model, you need to specify the KEY keyword"),(0,l.yg)("li",{parentName:"ul"},"You cannot add columns that already exist in the base index to the rollup index (you can recreate a rollup index if necessary) "))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"3. Delete a column from the specified index")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Grammar*")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table table_name DROP COLUMN column_name\n[FROM rollup_index_name]\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Delete column col1 from example_db.my_table"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table DROP COLUMN col1;\n")))),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},"Cannot drop partition column"),(0,l.yg)("li",{parentName:"ul"},"The aggregate model cannot delete KEY columns"),(0,l.yg)("li",{parentName:"ul"},"If the column is removed from the base index, it will also be removed if it is included in the rollup index "))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"4. Modify the column type and column position of the specified index")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Grammar")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE [database.]table table_name MODIFY COLUMN column_name column_type [KEY | agg_type] [NULL | NOT NULL] [DEFAULT "default_value"]\n[AFTER column_name|FIRST]\n[FROM rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Modify the type of the key column col1 of the base index to BIGINT and move it to the back of the col2 column"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table \nMODIFY COLUMN col1 BIGINT KEY DEFAULT "1" AFTER col2;\n')),(0,l.yg)("admonition",{parentName:"li",type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"Whether you modify the key column or the value column, you need to declare complete column information"))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},'Modify the maximum length of the val1 column of base index. The original val1 is (val1 VARCHAR(32) REPLACE DEFAULT "abc")'),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table \nMODIFY COLUMN val1 VARCHAR(64) REPLACE DEFAULT "abc";\n')),(0,l.yg)("admonition",{parentName:"li",type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"You can only modify the column's data type; other attributes of the column must remain unchanged."))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Modify the length of a field in the Key column of the Duplicate key table"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table \nMODIFY COLUMN k3 VARCHAR(50) KEY NULL COMMENT 'to 50';\n")))),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},"If you modify the value column in the aggregation model, you need to specify agg_type"),(0,l.yg)("li",{parentName:"ul"},"If you modify the key column for non-aggregate types, you need to specify the KEY keyword"),(0,l.yg)("li",{parentName:"ul"},"Only the type of the column can be modified, and other attributes of the column remain as they are (that is, other attributes need to be explicitly written in the statement according to the   original attributes, see example 8)"),(0,l.yg)("li",{parentName:"ul"},"Partitioning and bucketing columns cannot be modified in any way"),(0,l.yg)("li",{parentName:"ul"},"The following types of conversions are currently supported (loss of precision is guaranteed by the user)",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Conversion of TINYINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE types to larger numeric types"),(0,l.yg)("li",{parentName:"ul"},"Convert TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE/DECIMAL to VARCHAR"),(0,l.yg)("li",{parentName:"ul"},"VARCHAR supports modifying the maximum length"),(0,l.yg)("li",{parentName:"ul"},"VARCHAR/CHAR converted to TINTINT/SMALLINT/INT/BIGINT/LARGEINT/FLOAT/DOUBLE"),(0,l.yg)("li",{parentName:"ul"},'Convert VARCHAR/CHAR to DATE (currently supports "%Y-%m-%d", "%y-%m-%d", "%Y%m%d", "%y%m%d", "%Y/%m/%d, "%y/%m/%d" six formats)'),(0,l.yg)("li",{parentName:"ul"},"Convert DATETIME to DATE (only keep year-month-day information, for example: ",(0,l.yg)("inlineCode",{parentName:"li"},"2019-12-09 21:47:05")," <--\x3e ",(0,l.yg)("inlineCode",{parentName:"li"},"2019-12-09"),")"),(0,l.yg)("li",{parentName:"ul"},"DATE is converted to DATETIME (hours, minutes and seconds are automatically filled with zeros, for example: ",(0,l.yg)("inlineCode",{parentName:"li"},"2019-12-09")," <--\x3e ",(0,l.yg)("inlineCode",{parentName:"li"},"2019-12-09 00:00:00"),")"),(0,l.yg)("li",{parentName:"ul"},"Convert FLOAT to DOUBLE"),(0,l.yg)("li",{parentName:"ul"},"INT is converted to DATE (if the INT type data is illegal, the conversion fails, and the original data remains unchanged)"),(0,l.yg)("li",{parentName:"ul"},"All can be converted to STRING except DATE and DATETIME, but STRING cannot be converted to any other type "))))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"5. Reorder the column at the specified index")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Grammar")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE [database.]table table_name ORDER BY (column_name1, column_name2, ...)\n[FROM rollup_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Adjust the order of the key and value columns of example_db.my_table (non-aggregate model)"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `my_table`(\n`k_1` INT NULL,\n`k_2` INT NULL,\n`v_1` INT NULL,\n`v_2` varchar NULL,\n`v_3` varchar NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k_1`, `k_2`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`k_1`) BUCKETS 5\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n\nALTER TABLE example_db.my_table ORDER BY (k_2,k_1,v_3,v_2,v_1);\n\nmysql> desc my_table;\n+-------+------------+------+-------+---------+-------+\n| Field | Type       | Null | Key   | Default | Extra |\n+-------+------------+------+-------+---------+-------+\n| k_2   | INT        | Yes  | true  | NULL    |       |\n| k_1   | INT        | Yes  | true  | NULL    |       |\n| v_3   | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| v_2   | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| v_1   | INT        | Yes  | false | NULL    | NONE  |\n+-------+------------+------+-------+---------+-------+\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Do two actions simultaneously"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `my_table` (\n`k_1` INT NULL,\n`k_2` INT NULL,\n`v_1` INT NULL,\n`v_2` varchar NULL,\n`v_3` varchar NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k_1`, `k_2`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`k_1`) BUCKETS 5\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n\nALTER TABLE example_db.my_table\nADD COLUMN col INT DEFAULT "0" AFTER v_1,\nORDER BY (k_2,k_1,v_3,v_2,v_1,col);\n\nmysql> desc my_table;\n+-------+------------+------+-------+---------+-------+\n| Field | Type       | Null | Key   | Default | Extra |\n+-------+------------+------+-------+---------+-------+\n| k_2   | INT        | Yes  | true  | NULL    |       |\n| k_1   | INT        | Yes  | true  | NULL    |       |\n| v_3   | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| v_2   | VARCHAR(*) | Yes  | false | NULL    | NONE  |\n| v_1   | INT        | Yes  | false | NULL    | NONE  |\n| col   | INT        | Yes  | false | 0       | NONE  |\n+-------+------------+------+-------+---------+-------+\n')))),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},"All columns in index are written out"),(0,l.yg)("li",{parentName:"ul"},"the value column comes after the key column"),(0,l.yg)("li",{parentName:"ul"},"You can adjust the key column only within the range of the key column. The same applies to the value column"))),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, COLUMN, ALTER TABLE\n")),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"))}g.isMDXComponent=!0}}]);