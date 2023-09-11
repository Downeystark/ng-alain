CREATE TABLE IF NOT EXISTS `auth_user` (
 `id` INTEGER NOT NULL COMMENT '自增ID',
 `uid` VARCHAR(255) NOT NULL COMMENT '用户UUID',
 `name` VARCHAR(255) NOT NULL COMMENT '姓名',
 `phone` INTEGER NOT NULL COMMENT '手机号',
 `email` VARCHAR(255) NOT NULL COMMENT '邮箱号',
 `slat` VARCHAR(255) NOT NULL COMMENT '盐值',
 `pwd` VARCHAR(255) NOT NULL COMMENT '密码',
 `avatar` VARCHAR(255) NOT NULL COMMENT '头像',
 `sex` INTEGER NOT NULL COMMENT '性别 0 女 1 男',
 `create_time` VARCHAR(255) NOT NULL COMMENT '创建时间',
 `update_time` VARCHAR(255) NOT NULL COMMENT '更新时间',
 `state` DOUBLE PRECISION NOT NULL COMMENT '数据状态值 -1 删除 0 失效 1 正常',
 `status` DOUBLE PRECISION NOT NULL COMMENT '业务状态值',
 `created_at` DATETIME NOT NULL,
 `updated_at` DATETIME NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB COMMENT '用户' DEFAULT CHARSET=utf8mb4;
