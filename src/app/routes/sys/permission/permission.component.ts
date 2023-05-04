import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { G2MiniBarData } from '@delon/chart/mini-bar';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';

import { API } from '../../../configs/api.config';
import { ST } from '../../../configs/st.config';
import { SysPermissionUpsertComponent } from './upsert/upsert.component';

@Component({
  selector: 'app-sys-permission',
  templateUrl: './permission.component.html'
})
export class SysPermissionComponent implements OnInit {
  args = {};
  body = {};
  req = { ...ST.req, params: this.args, body: this.body };
  res = { ...ST.res };
  url = API.V1_PERMISSION_LIST;
  ps = 20;
  total = 0;
  events: G2MiniBarData[] = [];
  scroll = { y: 'calc(100vh - 230px)' };
  searchSchema: SFSchema = {
    properties: {
      title: {
        type: 'string',
        title: '名称'
      }
    }
  };
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    { title: 'NO.', type: 'no', width: '60px' },
    { title: '名称', type: 'number', width: '100px', index: 'title' },
    { title: '简称', type: '', width: '100px', index: 'owner' },
    { title: '接口地址', type: '', index: 'href' },
    { title: '创建时间', type: 'date', index: 'updatedAt' },
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        {
          text: '编辑',
          type: 'static',
          click: (record, modal) => this.edit(record)
        }
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) {}

  ngOnInit(): void {}

  add(): void {
    this.modal.createStatic(SysPermissionUpsertComponent, { i: { id: 0 } }).subscribe(() => this.st.reload());
  }

  edit(item: any): void {
    console.log(item);
    this.modal.createStatic(SysPermissionUpsertComponent, { i: { ...item } }, { size: 'md' }).subscribe(() => this.st.reload());
  }

  delete(item: any): void {
    console.log(item);
  }
}
