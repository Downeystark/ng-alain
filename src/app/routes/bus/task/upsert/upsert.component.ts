import { Component, OnInit } from '@angular/core';
import { SFSchema, SFUISchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

import { API } from '../../../../configs/api.config';

@Component({
  selector: 'app-bus-task-upsert',
  templateUrl: './upsert.component.html',
})
export class BusTaskUpsertComponent implements OnInit {
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      id: { type: 'string', title: 'id' },
      name: { type: 'string', title: '名称', maxLength: 30 },
      describes: { type: 'string', title: '简称', maxLength: 20 },
    },
    required: ['id', 'name', 'describes'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 24 },
    },
    $id: {
      widget: 'text',
    },
  };

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
  ) {}

  ngOnInit(): void {
    if (this.record.id > 0)
      this.http.get(API.V1_ROLE_GET, { id: this.record.id }).subscribe(res => {
        if (res.code !== 200) {
          this.msgSrv.error('获取数据失败');
          return;
        }
        this.i = res.data;
      });
  }

  save(value: any): void {
    // if (value.id === 0) delete value.id;
    this.http.post(this.record.id > 0 ? API.V1_ROLE_UPDATE : API.V1_ROLE_INSERT, value).subscribe(res => {
      if (res.code !== 200) {
        this.msgSrv.error('保存数据失败');
        return;
      }
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    });
  }

  close(): void {
    this.modal.destroy();
  }
}
