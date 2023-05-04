import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SysLogEditComponent } from './log/edit/edit.component';
import { SysLogComponent } from './log/log.component';
import { SysLogViewComponent } from './log/view/view.component';
import { SysPermissionComponent } from './permission/permission.component';
import { SysPermissionUpsertComponent } from './permission/upsert/upsert.component';
import { SysRoleComponent } from './role/role.component';
import { SysRoleUpsertComponent } from './role/upsert/upsert.component';

const routes: Routes = [
  {
    path: 'log',
    children: [
      { path: '', component: SysLogComponent },
      { path: 'view', component: SysLogViewComponent },
      { path: 'upsert', component: SysLogEditComponent }
    ]
  },
  {
    path: 'role',
    children: [
      { path: '', component: SysRoleComponent },
      { path: 'upsert', component: SysRoleUpsertComponent }
    ]
  },
  {
    path: 'permission',
    children: [
      { path: '', component: SysPermissionComponent },
      { path: 'upsert', component: SysPermissionUpsertComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysRoutingModule {}
