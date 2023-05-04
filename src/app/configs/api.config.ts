const SERVER_URL_BASE = '/api';
const SERVER_URL_v1 = `${SERVER_URL_BASE}/v1`;
const SERVER_URL_v2 = `${SERVER_URL_BASE}/v2`;

export const API = {
  // API v1
  V1_LOGIN: `${SERVER_URL_v1}/login`,
  // 角色
  V1_ROLE_GET: `${SERVER_URL_v1}/authRole/get`,
  V1_ROLE_LIST: `${SERVER_URL_v1}/authRole/list`,
  V1_ROLE_INSERT: `${SERVER_URL_v1}/authRole/insert`,
  V1_ROLE_UPDATE: `${SERVER_URL_v1}/authRole/update`,
  V1_ROLE_DELETE: `${SERVER_URL_v1}/authRole/delete`,
  // 权限
  V1_PERMISSION_GET: `${SERVER_URL_v1}/authPermission/get`,
  V1_PERMISSION_LIST: `${SERVER_URL_v1}/authPermission/list`,
  V1_PERMISSION_INSERT: `${SERVER_URL_v1}/authPermission/insert`,
  V1_PERMISSION_UPDATE: `${SERVER_URL_v1}/authPermission/update`,
  V1_PERMISSION_DELETE: `${SERVER_URL_v1}/authPermission/delete`
};
