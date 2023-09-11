CREATE TABLE IF NOT EXISTS `rs_user_task` (
 `id` INTEGER NOT NULL auto_increment,
 `uid` VARCHAR(255) NOT NULL COMMENT '用户UUID',
 `task_id` VARCHAR(255) NOT NULL COMMENT '任务UUID',
 `create_time` VARCHAR(255) NOT NULL COMMENT '创建时间',
 `update_time` VARCHAR(255) NOT NULL COMMENT '更新时间',
 `state` DOUBLE PRECISION NOT NULL COMMENT '数据状态值 -1 删除 0 失效 1 正常',
 `status` DOUBLE PRECISION NOT NULL COMMENT '业务状态值',
 `created_at` DATETIME NOT NULL,
 `updated_at` DATETIME NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB COMMENT '用户任务关系' DEFAULT CHARSET=utf8mb4;
