"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[83679],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>h});var r=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=n,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return t?r.createElement(h,i(i({ref:a},m),{},{components:t})):r.createElement(h,i({ref:a},m))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},584010:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(58168),n=(t(296540),t(15680));const o={title:"Data Backup",language:"en"},i=void 0,l={unversionedId:"admin-manual/data-admin/backup",id:"version-2.0/admin-manual/data-admin/backup",title:"Data Backup",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/data-admin/backup.md",sourceDirName:"admin-manual/data-admin",slug:"/admin-manual/data-admin/backup",permalink:"/docs/2.0/admin-manual/data-admin/backup",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Data Backup",language:"en"},sidebar:"docs",previous:{title:"FQDN",permalink:"/docs/2.0/admin-manual/cluster-management/fqdn"},next:{title:"Data Restore",permalink:"/docs/2.0/admin-manual/data-admin/restore"}},s={},p=[{value:"A brief explanation of the principle",id:"a-brief-explanation-of-the-principle",level:2},{value:"Start Backup",id:"start-backup",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Backup",id:"backup",level:3},{value:"Data Migration",id:"data-migration",level:3},{value:"Highlights",id:"highlights",level:2},{value:"Related Commands",id:"related-commands",level:2},{value:"More Help",id:"more-help",level:2}],m={toc:p},u="wrapper";function c(e){let{components:a,...t}=e;return(0,n.yg)(u,(0,r.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"data-backup"},"Data Backup"),(0,n.yg)("p",null,"Doris supports backing up the current data in the form of files to the remote storage system through the broker. Afterwards, you can restore data from the remote storage system to any Doris cluster through the restore command. Through this function, Doris can support periodic snapshot backup of data. You can also use this function to migrate data between different clusters."),(0,n.yg)("p",null,"This feature requires Doris version 0.8.2+"),(0,n.yg)("p",null,"To use this function, you need to deploy the broker corresponding to the remote storage. Such as BOS, HDFS, etc. You can view the currently deployed broker through ",(0,n.yg)("inlineCode",{parentName:"p"},"SHOW BROKER;"),"."),(0,n.yg)("h2",{id:"a-brief-explanation-of-the-principle"},"A brief explanation of the principle"),(0,n.yg)("p",null,"The backup operation is to upload the data of the specified table or partition directly to the remote warehouse for storage in the form of files stored by Doris. When a user submits a Backup request, the system will perform the following operations:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Snapshot and snapshot upload"),(0,n.yg)("p",{parentName:"li"},"The snapshot phase takes a snapshot of the specified table or partition data file. After that, backups are all operations on snapshots. After the snapshot, changes, imports, etc. to the table no longer affect the results of the backup. Snapshots only generate a hard link to the current data file, which takes very little time. After the snapshot is completed, the snapshot files will be uploaded one by one. Snapshot uploads are done concurrently by each Backend.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Metadata preparation and upload"),(0,n.yg)("p",{parentName:"li"},"After the data file snapshot upload is complete, Frontend will first write the corresponding metadata to a local file, and then upload the local metadata file to the remote warehouse through the broker. Completing the final backup job")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Dynamic Partition Table Description"),(0,n.yg)("p",{parentName:"li"},"If the table is a dynamic partition table, the dynamic partition attribute will be automatically disabled after backup. When restoring, you need to manually enable the dynamic partition attribute of the table. The command is as follows:"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE tbl1 SET ("dynamic_partition.enable"="true")\n')),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"Backup and Restore operation will NOT keep the ",(0,n.yg)("inlineCode",{parentName:"li"},"colocate_with")," property of a table.")),(0,n.yg)("h2",{id:"start-backup"},"Start Backup"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Create a hdfs remote warehouse example_repo:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `example_repo`\nWITH BROKER `hdfs_broker`\nON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\nPROPERTIES\n(\n   "username" = "user",\n   "password" = "password"\n);\n'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Create a remote repository for s3 : s3_repo"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},'CREATE REPOSITORY `s3_repo`\nWITH S3\nON LOCATION "s3://bucket_name/test"\nPROPERTIES\n(\n    "AWS_ENDPOINT" = "http://xxxx.xxxx.com",\n    "AWS_ACCESS_KEY" = "xxxx",\n    "AWS_SECRET_KEY" = "xxx",\n    "AWS_REGION" = "xxx"\n); \n')),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"Note that."),(0,n.yg)("p",{parentName:"blockquote"},"ON LOCATION is followed by Bucket Name here"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Full backup of table example_tbl under example_db to warehouse example_repo:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'BACKUP SNAPSHOT example_db.snapshot_label1\nTO example_repo\nON (example_tbl)\nPROPERTIES ("type" = "full");\n'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Under the full backup example_db, the p1, p2 partitions of the table example_tbl, and the table example_tbl2 to the warehouse example_repo:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"BACKUP SNAPSHOT example_db.snapshot_label2\nTO example_repo\nON\n(\n   example_tbl PARTITION (p1,p2),\n   example_tbl2\n);\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"View the execution of the most recent backup job:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show BACKUP\\G;\n*************************** 1. row ***************************\n               JobId: 17891847\n        SnapshotName: snapshot_label1\n              DbName: example_db\n               State: FINISHED\n          BackupObjs: [default_cluster:example_db.example_tbl]\n          CreateTime: 2022-04-08 15:52:29\nSnapshotFinishedTime: 2022-04-08 15:52:32\n  UploadFinishedTime: 2022-04-08 15:52:38\n        FinishedTime: 2022-04-08 15:52:44\n     UnfinishedTasks:\n            Progress:\n          TaskErrMsg:\n              Status: [OK]\n             Timeout: 86400\n1 row in set (0.01 sec)\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"View existing backups in remote repositories:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SHOW SNAPSHOT ON example_repo WHERE SNAPSHOT = "snapshot_label1";\n+-----------------+---------------------+--------+\n| Snapshot        | Timestamp           | Status |\n+-----------------+---------------------+--------+\n| snapshot_label1 | 2022-04-08-15-52-29 | OK     |\n+-----------------+---------------------+--------+\n1 row in set (0.15 sec)\n')))),(0,n.yg)("p",null,"For the detailed usage of BACKUP, please refer to ",(0,n.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/BACKUP"},"here"),"."),(0,n.yg)("h2",{id:"best-practices"},"Best Practices"),(0,n.yg)("h3",{id:"backup"},"Backup"),(0,n.yg)("p",null,"Currently, we support full backup with the smallest partition (Partition) granularity (incremental backup may be supported in future versions). If you need to back up data regularly, you first need to plan the partitioning and bucketing of the table reasonably when building the table, such as partitioning by time. Then, in the subsequent running process, regular data backups are performed according to the partition granularity."),(0,n.yg)("h3",{id:"data-migration"},"Data Migration"),(0,n.yg)("p",null,"Users can back up the data to the remote warehouse first, and then restore the data to another cluster through the remote warehouse to complete the data migration. Because data backup is done in the form of snapshots, new imported data after the snapshot phase of the backup job will not be backed up. Therefore, after the snapshot is completed and until the recovery job is completed, the data imported on the original cluster needs to be imported again on the new cluster."),(0,n.yg)("p",null,"It is recommended to import the new and old clusters in parallel for a period of time after the migration is complete. After verifying the correctness of data and services, migrate services to a new cluster."),(0,n.yg)("h2",{id:"highlights"},"Highlights"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Operations related to backup and recovery are currently only allowed to be performed by users with ADMIN privileges."),(0,n.yg)("li",{parentName:"ol"},"Within a database, only one backup or restore job is allowed to be executed."),(0,n.yg)("li",{parentName:"ol"},"Both backup and recovery support operations at the minimum partition (Partition) level. When the amount of data in the table is large, it is recommended to perform operations by partition to reduce the cost of failed retry."),(0,n.yg)("li",{parentName:"ol"},"Because of the backup and restore operations, the operations are the actual data files. Therefore, when a table has too many shards, or a shard has too many small versions, it may take a long time to backup or restore even if the total amount of data is small. Users can use ",(0,n.yg)("inlineCode",{parentName:"li"},"SHOW PARTITIONS FROM table_name;")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"SHOW TABLETS FROM table_name;")," to view the number of shards in each partition and the number of file versions in each shard to estimate job execution time. The number of files has a great impact on the execution time of the job. Therefore, it is recommended to plan partitions and buckets reasonably when creating tables to avoid excessive sharding."),(0,n.yg)("li",{parentName:"ol"},"When checking job status via ",(0,n.yg)("inlineCode",{parentName:"li"},"SHOW BACKUP")," or ",(0,n.yg)("inlineCode",{parentName:"li"},"SHOW RESTORE")," command. It is possible to see error messages in the ",(0,n.yg)("inlineCode",{parentName:"li"},"TaskErrMsg")," column. But as long as the ",(0,n.yg)("inlineCode",{parentName:"li"},"State")," column is not ",(0,n.yg)("inlineCode",{parentName:"li"},"CANCELLED"),", the job is still continuing. These tasks may retry successfully. Of course, some Task errors will also directly cause the job to fail.\nCommon ",(0,n.yg)("inlineCode",{parentName:"li"},"TaskErrMsg")," errors are as follows:\nQ1: Backup to HDFS, the status shows UPLOADING, TaskErrMsg error message: ","[13333: Close broker writer failed, broker:TNetworkAddress(hostname=10.10.0.0, port=8000) msg:errors while close file output stream, cause by: DataStreamer Exception : ]","\nThis is generally a network communication problem. Check the broker log to see if a certain ip or port is blocked. If it is a cloud service, you need to check whether is accessed the intranet. If so, you can add hdfs-site.xml in the broker/conf folder, you need to add dfs.client.use.datanode.hostname=true under the hdfs-site.xml configuration file, and configure the hostname mapping of the HADOOP cluster on the broker node."),(0,n.yg)("li",{parentName:"ol"},"If the recovery job is an overwrite operation (specifying the recovery data to an existing table or partition), then from the ",(0,n.yg)("inlineCode",{parentName:"li"},"COMMIT")," phase of the recovery job, the overwritten data on the current cluster may no longer be restored. If the restore job fails or is canceled at this time, the previous data may be damaged and inaccessible. In this case, the only way to do it is to perform the recovery operation again and wait for the job to complete. Therefore, we recommend that if unnecessary, try not to restore data by overwriting unless it is confirmed that the current data is no longer used.")),(0,n.yg)("h2",{id:"related-commands"},"Related Commands"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"The commands related to the backup and restore function are as follows. For the following commands, you can use ",(0,n.yg)("inlineCode",{parentName:"p"},"help cmd;")," to view detailed help after connecting to Doris through mysql-client."),(0,n.yg)("ol",{parentName:"li"},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"CREATE REPOSITORY"),(0,n.yg)("p",{parentName:"li"},"Create a remote repository path for backup or restore. This command needs to use the Broker process to access the remote storage. Different brokers need to provide different parameters. For details, please refer to ",(0,n.yg)("a",{parentName:"p",href:"../../data-operate/import/broker-load-manual"},"Broker documentation"),", or you can directly back up to support through the S3 protocol For the remote storage of AWS S3 protocol, or directly back up to HDFS, please refer to ",(0,n.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY"},"Create Remote Warehouse Documentation"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"BACKUP"),(0,n.yg)("p",{parentName:"li"},"Perform a backup operation.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"SHOW BACKUP"),(0,n.yg)("p",{parentName:"li"},"View the execution of the most recent backup job, including:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"JobId: The id of this backup job."),(0,n.yg)("li",{parentName:"ul"},"SnapshotName: The name (Label) of this backup job specified by the user."),(0,n.yg)("li",{parentName:"ul"},"DbName: Database corresponding to the backup job."),(0,n.yg)("li",{parentName:"ul"},"State: The current stage of the backup job:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"PENDING: The initial status of the job."),(0,n.yg)("li",{parentName:"ul"},"SNAPSHOTING: A snapshot operation is in progress."),(0,n.yg)("li",{parentName:"ul"},"UPLOAD_SNAPSHOT: The snapshot is over, ready to upload."),(0,n.yg)("li",{parentName:"ul"},"UPLOADING: Uploading snapshot."),(0,n.yg)("li",{parentName:"ul"},"SAVE_META: The metadata file is being generated locally."),(0,n.yg)("li",{parentName:"ul"},"UPLOAD_INFO: Upload metadata files and information about this backup job."),(0,n.yg)("li",{parentName:"ul"},"FINISHED: The backup is complete."),(0,n.yg)("li",{parentName:"ul"},"CANCELLED: Backup failed or was canceled."))),(0,n.yg)("li",{parentName:"ul"},"BackupObjs: List of tables and partitions involved in this backup."),(0,n.yg)("li",{parentName:"ul"},"CreateTime: Job creation time."),(0,n.yg)("li",{parentName:"ul"},"SnapshotFinishedTime: Snapshot completion time."),(0,n.yg)("li",{parentName:"ul"},"UploadFinishedTime: Snapshot upload completion time."),(0,n.yg)("li",{parentName:"ul"},"FinishedTime: The completion time of this job."),(0,n.yg)("li",{parentName:"ul"},"UnfinishedTasks: During ",(0,n.yg)("inlineCode",{parentName:"li"},"SNAPSHOTTING"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"UPLOADING")," and other stages, there will be multiple subtasks going on at the same time. The current stage shown here is the task id of the unfinished subtasks."),(0,n.yg)("li",{parentName:"ul"},"TaskErrMsg: If there is an error in the execution of a subtask, the error message of the corresponding subtask will be displayed here."),(0,n.yg)("li",{parentName:"ul"},"Status: Used to record some status information that may appear during the entire job process."),(0,n.yg)("li",{parentName:"ul"},"Timeout: The timeout period of the job, in seconds."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"SHOW SNAPSHOT"),(0,n.yg)("p",{parentName:"li"},"View existing backups in the remote repository."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Snapshot: The name (Label) of the backup specified during backup."),(0,n.yg)("li",{parentName:"ul"},"Timestamp: Timestamp of the backup."),(0,n.yg)("li",{parentName:"ul"},"Status: Whether the backup is normal.")),(0,n.yg)("p",{parentName:"li"},"More detailed backup information can be displayed if a where clause is specified after ",(0,n.yg)("inlineCode",{parentName:"p"},"SHOW SNAPSHOT"),"."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Database: The database corresponding to the backup."),(0,n.yg)("li",{parentName:"ul"},"Details: Shows the complete data directory structure of the backup."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"CANCEL BACKUP"),(0,n.yg)("p",{parentName:"li"},"Cancel the currently executing backup job.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"DROP REPOSITORY"),(0,n.yg)("p",{parentName:"li"},"Delete the created remote repository. Deleting a warehouse only deletes the mapping of the warehouse in Doris, and does not delete the actual warehouse data."))))),(0,n.yg)("h2",{id:"more-help"},"More Help"),(0,n.yg)("p",null," For more detailed syntax and best practices used by BACKUP, please refer to the ",(0,n.yg)("a",{parentName:"p",href:"../../sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/BACKUP"},"BACKUP")," command manual, You can also type ",(0,n.yg)("inlineCode",{parentName:"p"},"HELP BACKUP")," on the MySql client command line for more help."))}c.isMDXComponent=!0}}]);