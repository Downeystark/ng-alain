import { NgModule, Type } from '@angular/core';
import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
import { PageHeaderModule } from '@delon/abc/page-header';
import { SharedModule } from '@shared';

import { SysLogEditComponent } from './log/edit/edit.component';
import { SysLogComponent } from './log/log.component';
import { SysLogViewComponent } from './log/view/view.component';
import { SysRoutingModule } from './sys-routing.module';

const COMPONENTS: Array<Type<void>> = [SysLogComponent, SysLogViewComponent, SysLogEditComponent, SysLogEditComponent];

@NgModule({
  imports: [SharedModule, SysRoutingModule],
  declarations: COMPONENTS,
  providers: []
})
export class SysModule {}
