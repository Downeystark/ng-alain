CREATE TABLE IF NOT EXISTS `sys_dictionary` (
 `id` VARCHAR(255) NOT NULL COMMENT '字典UUID',
 `name` VARCHAR(255) NOT NULL COMMENT '字典名称',
 `content` VARCHAR(255) NOT NULL COMMENT '字典描述',
 `type` VARCHAR(255) NOT NULL COMMENT '字典类型',
 `value` VARCHAR(255) NOT NULL COMMENT '字典值',
 `sort` DOUBLE PRECISION NOT NULL COMMENT '字典排序',
 `custom` VARCHAR(255) NOT NULL COMMENT '字典扩展字段',
 `create_time` VARCHAR(255) NOT NULL COMMENT '创建时间',
 `update_time` VARCHAR(255) NOT NULL COMMENT '更新时间',
 `state` DOUBLE PRECISION NOT NULL COMMENT '数据状态值 -1 删除 0 失效 1 正常',
 `status` DOUBLE PRECISION NOT NULL COMMENT '业务状态值',
 `created_at` DATETIME NOT NULL,
 `updated_at` DATETIME NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB COMMENT '系统字典' DEFAULT CHARSET=utf8mb4;