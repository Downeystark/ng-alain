import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SysInterfaceComponent } from './interface/interface.component';
import { SysInterfaceUpsertComponent } from './interface/upsert/upsert.component';
import { SysLogEditComponent } from './log/edit/edit.component';
import { SysLogComponent } from './log/log.component';
import { SysLogViewComponent } from './log/view/view.component';
import { SysRuleComponent } from './rule/rule.component';
import { SysRuleUpsertComponent } from './rule/upsert/upsert.component';

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
    path: 'rule',
    children: [
      { path: '', component: SysRuleComponent },
      { path: 'upsert', component: SysRuleUpsertComponent }
    ]
  },
  {
    path: 'interface',
    children: [
      { path: '', component: SysInterfaceComponent },
      { path: 'upsert', component: SysInterfaceUpsertComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysRoutingModule {}
