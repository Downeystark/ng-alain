CREATE TABLE IF NOT EXISTS `rs_role_permission` (
 `id` INTEGER NOT NULL auto_increment,
 `role_id` VARCHAR(255) NOT NULL COMMENT '角色UUID',
 `permission_id` VARCHAR(255) NOT NULL COMMENT '权限UUID',
 `create_time` VARCHAR(255) NOT NULL COMMENT '创建时间',
 `update_time` VARCHAR(255) NOT NULL COMMENT '更新时间',
 `state` DOUBLE PRECISION NOT NULL COMMENT '数据状态值 -1 删除 0 失效 1 正常',
 `status` DOUBLE PRECISION NOT NULL COMMENT '业务状态值',
 `created_at` DATETIME NOT NULL,
 `updated_at` DATETIME NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB COMMENT '角色接口权限关系' DEFAULT CHARSET=utf8mb4;
