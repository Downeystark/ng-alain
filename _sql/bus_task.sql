CREATE TABLE IF NOT EXISTS `bus_task` (
 `id` VARCHAR(255) NOT NULL COMMENT '任务UUID',
 `title` VARCHAR(255) NOT NULL COMMENT '任务标题',
 `content` VARCHAR(255) NOT NULL COMMENT '任务内容',
--  `performer` JSON NOT NULL COMMENT '执行者 - 数据库无此字段，仅关联查询用',
 `start_time` VARCHAR(255) NOT NULL COMMENT '任务开始时间',
 `end_time` VARCHAR(255) NOT NULL COMMENT '任务结束时间',
 `create_time` VARCHAR(255) NOT NULL COMMENT '创建时间',
 `update_time` VARCHAR(255) NOT NULL COMMENT '更新时间',
 `state` DOUBLE NOT NULL COMMENT '数据状态值 -1 删除 0 失效 1 正常',
 `status` DOUBLE NOT NULL COMMENT '业务状态值',
 `created_at` DATETIME NOT NULL,
 `updated_at` DATETIME NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB COMMENT '任务管理' DEFAULT CHARSET=utf8mb4;
