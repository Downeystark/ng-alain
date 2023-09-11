import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusProjectComponent } from './project/bus.project.component';
import { BusProjectUpsertComponent } from './project/upsert/upsert.component';
import { BusContractComponent } from './contract/bus.contract.component';
import { BusContractUpsertComponent } from './contract/upsert/upsert.component';
import { BusTaskComponent } from './task/bus.task.component';
import { BusTaskUpsertComponent } from './task/upsert/upsert.component';
import { BusReportComponent } from './report/bus.report.component';
import { BusReportUpsertComponent } from './report/upsert/upsert.component';

const routes: Routes = [
  {
    path: 'contract',
    children: [
      { path: '', component: BusContractComponent },
      { path: 'upsert', component: BusContractUpsertComponent },
    ],
  },
  {
    path: 'project',
    children: [
      { path: '', component: BusProjectComponent },
      { path: 'upsert', component: BusProjectUpsertComponent },
    ],
  },
  {
    path: 'report',
    children: [
      { path: '', component: BusReportComponent },
      { path: 'upsert', component: BusReportUpsertComponent },
    ],
  },
  {
    path: 'task',
    children: [
      { path: '', component: BusTaskComponent },
      { path: 'upsert', component: BusTaskUpsertComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusRoutingModule {}
