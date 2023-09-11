import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

import { API } from '../../../configs/api.config';
import { BusProjectUpsertComponent } from './upsert/upsert.component';

@Component({
  selector: 'app-bus-project',
  templateUrl: './bus.project.component.html',
  styles: [
    `
      :host ::ng-deep .ant-card-meta-title {
        margin-bottom: 12px;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusProjectComponent implements OnInit {
  list: Array<{ id: number; title: string; avatar: string; description: string } | null> = [null];

  loading = true;

  constructor(
    private http: _HttpClient,
    private cdr: ChangeDetectorRef,
    private modal: ModalHelper,
    private msgSrv: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.http.get('/api/list', { count: 8 }).subscribe(res => {
      this.list = this.list.concat(res);
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  show(text: string): void {
    this.msgSrv.success(text);
  }

  add(): void {
    this.modal.createStatic(BusProjectUpsertComponent, { i: { id: 0 } }).subscribe(() => {
      // this.st.reload();
    });
  }

  edit(item: any): void {
    console.log(item);
    this.modal
      .createStatic(
        BusProjectUpsertComponent,
        {
          record: item,
          i: { ...item },
        },
        { size: 'md' },
      )
      .subscribe(() => {
        // this.st.reload();
      });
  }

  delete(item: any): void {
    this.http.post(API.V1_ROLE_DELETE, { id: item.id }).subscribe(res => {
      if (res.code !== 200) {
        this.msgSrv.error('删除数据失败');
        return;
      }
      this.msgSrv.success('删除成功');
      // this.st.reload();
    });
  }
}
