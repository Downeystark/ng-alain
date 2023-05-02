import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { SysInterfaceComponent } from './interface/interface.component';
import { SysInterfaceUpsertComponent } from './interface/upsert/upsert.component';
import { SysLogEditComponent } from './log/edit/edit.component';
import { SysLogComponent } from './log/log.component';
import { SysLogViewComponent } from './log/view/view.component';
import { SysRuleComponent } from './rule/rule.component';
import { SysRuleUpsertComponent } from './rule/upsert/upsert.component';
import { SysRoutingModule } from './sys-routing.module';

const COMPONENTS: Array<Type<void>> = [
  SysLogComponent,
  SysLogViewComponent,
  SysLogEditComponent,
  SysLogEditComponent,
  SysRuleComponent,
  SysInterfaceComponent,
  SysRuleUpsertComponent,
  SysInterfaceUpsertComponent
];

@NgModule({
  imports: [SharedModule, SysRoutingModule],
  declarations: COMPONENTS,
  providers: []
})
export class SysModule {}
