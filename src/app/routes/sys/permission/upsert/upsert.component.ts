import { Component, OnInit } from '@angular/core';
import { SFSchema, SFUISchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-sys-permission-upsert',
  templateUrl: './upsert.component.html'
})
export class SysPermissionUpsertComponent implements OnInit {
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      no: { type: 'string', title: 'id' },
      title: { type: 'string', title: '名称', maxLength: 15 },
      owner: { type: 'string', title: '简称' },
      href: { type: 'string', title: '接口地址', format: 'uri' }
    },
    required: ['title', 'owner', 'href']
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 24 }
    },
    $no: {
      widget: 'text'
    },
    $href: {
      widget: 'string'
    }
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient) {}

  ngOnInit(): void {
    if (this.record.id > 0) this.http.get(`/user/${this.record.id}`).subscribe(res => (this.i = res));
  }

  save(value: any): void {
    this.http.post(`/user/${this.record.id}`, value).subscribe(res => {
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    });
  }

  close(): void {
    this.modal.destroy();
  }
}
