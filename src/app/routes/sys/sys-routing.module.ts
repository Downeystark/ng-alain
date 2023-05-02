import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SysLogEditComponent } from './log/edit/edit.component';
import { SysLogComponent } from './log/log.component';
import { SysLogViewComponent } from './log/view/view.component';

const routes: Routes = [
  {
    path: 'log',
    children: [
      { path: '', component: SysLogComponent },
      { path: 'view', component: SysLogViewComponent },
      { path: 'edit', component: SysLogEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysRoutingModule {}
