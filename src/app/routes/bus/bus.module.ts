import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { BusRoutingModule } from './bus-routing.module';
import { BusProjectComponent } from './project/bus.project.component';
import { BusProjectUpsertComponent } from './project/upsert/upsert.component';
import { EllipsisModule } from '@delon/abc/ellipsis';
import { BusContractComponent } from './contract/bus.contract.component';
import { BusContractUpsertComponent } from './contract/upsert/upsert.component';
import { BusReportComponent } from './report/bus.report.component';
import { BusReportUpsertComponent } from './report/upsert/upsert.component';
import { BusTaskComponent } from './task/bus.task.component';
import { BusTaskUpsertComponent } from './task/upsert/upsert.component';

const COMPONENTS: Array<Type<void>> = [
  BusProjectComponent,
  BusProjectUpsertComponent,
  BusContractComponent,
  BusContractUpsertComponent,
  BusReportComponent,
  BusReportUpsertComponent,
  BusTaskComponent,
  BusTaskUpsertComponent,
];

@NgModule({
  imports: [SharedModule, BusRoutingModule, EllipsisModule],
  declarations: COMPONENTS,
  providers: [],
})
export class BusModule {}
