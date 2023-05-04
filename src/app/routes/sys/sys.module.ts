import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { SysLogEditComponent } from './log/edit/edit.component';
import { SysLogComponent } from './log/log.component';
import { SysLogViewComponent } from './log/view/view.component';
import { SysPermissionComponent } from './permission/permission.component';
import { SysPermissionUpsertComponent } from './permission/upsert/upsert.component';
import { SysRoleComponent } from './role/role.component';
import { SysRoleUpsertComponent } from './role/upsert/upsert.component';
import { SysRoutingModule } from './sys-routing.module';

const COMPONENTS: Array<Type<void>> = [
  SysLogComponent,
  SysLogViewComponent,
  SysLogEditComponent,
  SysLogEditComponent,
  SysRoleComponent,
  SysPermissionComponent,
  SysRoleUpsertComponent,
  SysPermissionUpsertComponent
];

@NgModule({
  imports: [SharedModule, SysRoutingModule],
  declarations: COMPONENTS,
  providers: []
})
export class SysModule {}
