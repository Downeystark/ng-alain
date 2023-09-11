CREATE TABLE IF NOT EXISTS `bus_report` (
 `id` VARCHAR(255) NOT NULL COMMENT '日报ID',
 `title` VARCHAR(255) NOT NULL COMMENT '日报标题',
 `content` VARCHAR(255) NOT NULL COMMENT '日报内容',
 `uid` VARCHAR(255) NOT NULL COMMENT '用户UUID',
--  `user` JSON NOT NULL COMMENT '用户 - 数据库无此字段，仅关联查询用',
 `create_time` VARCHAR(255) NOT NULL COMMENT '创建时间',
 `update_time` VARCHAR(255) NOT NULL COMMENT '更新时间',
 `state` DOUBLE PRECISION NOT NULL COMMENT '数据状态值 -1 删除 0 失效 1 正常',
 `status` DOUBLE PRECISION NOT NULL COMMENT '业务状态值',
 `created_at` DATETIME NOT NULL,
 `updated_at` DATETIME NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB COMMENT '日报管理' DEFAULT CHARSET=utf8mb4;
