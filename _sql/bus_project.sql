CREATE TABLE IF NOT EXISTS `bus_project` (
 `id` VARCHAR(255) NOT NULL COMMENT '项目UUID',
 `title` VARCHAR(255) NOT NULL COMMENT '项目名称',
 `content` VARCHAR(255) NOT NULL COMMENT '项目内容',
--  `director` JSON NOT NULL COMMENT '负责人 - 数据库无此字段，仅关联查询用',
--  `collaborator` JSON NOT NULL COMMENT '协作者 - 数据库无此字段，仅关联查询用',
 `start_time` VARCHAR(255) NOT NULL COMMENT '项目开始时间',
 `end_time` VARCHAR(255) NOT NULL COMMENT '项目结束时间',
 `create_time` VARCHAR(255) NOT NULL COMMENT '创建时间',
 `update_time` VARCHAR(255) NOT NULL COMMENT '更新时间',
 `state` DOUBLE PRECISION NOT NULL COMMENT '数据状态值 -1 删除 0 失效 1 正常',
 `status` DOUBLE PRECISION NOT NULL COMMENT '业务状态值',
 `created_at` DATETIME NOT NULL,
 `updated_at` DATETIME NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB COMMENT '项目管理' DEFAULT CHARSET=utf8mb4;
