CREATE TABLE IF NOT EXISTS `auth_assembly` (
 `id` VARCHAR(255) NOT NULL COMMENT '权限组件UUID',
 `name` VARCHAR(255) NOT NULL COMMENT '权限组件名称',
 `content` VARCHAR(255) NOT NULL COMMENT '权限组件内容',
 `value` VARCHAR(255) NOT NULL COMMENT '权限组件值',
 `create_time` VARCHAR(255) NOT NULL COMMENT '创建时间',
 `update_time` VARCHAR(255) NOT NULL COMMENT '更新时间',
 `state` DOUBLE PRECISION NOT NULL COMMENT '数据状态值 -1 删除 0 失效 1 正常',
 `status` DOUBLE PRECISION NOT NULL COMMENT '业务状态值',
 `created_at` DATETIME NOT NULL,
 `updated_at` DATETIME NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB COMMENT '组件权限' DEFAULT CHARSET=utf8mb4;
