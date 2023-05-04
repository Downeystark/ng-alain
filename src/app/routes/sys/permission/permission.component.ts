import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { G2MiniBarData } from '@delon/chart/mini-bar';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

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
  scroll = { y: 'calc(100vh - 440px)' };
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
    { title: 'NO.', width: '60px', index: 'id' },
    { title: '名称', type: '', width: '120px', index: 'name' },
    { title: '简称', type: '', width: '150px', index: 'describes' },
    { title: '接口地址', type: '', index: 'url' },
    { title: '更新时间', type: 'date', width: '250px', index: 'updateTime' },
    {
      title: '',
      width: '150px',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        {
          text: '编辑',
          type: 'static',
          click: (record, modal) => this.edit(record)
        },
        { text: '删除', type: 'del', click: (item: any) => this.delete(item) }
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper, private msgSrv: NzMessageService) {}

  ngOnInit(): void {}

  add(): void {
    this.modal.createStatic(SysPermissionUpsertComponent, { i: { id: 0 } }).subscribe(() => this.st.reload());
  }

  edit(item: any): void {
    console.log(item);
    this.modal
      .createStatic(SysPermissionUpsertComponent, { record: item, i: { ...item } }, { size: 'md' })
      .subscribe(() => this.st.reload());
  }

  delete(item: any): void {
    this.http.post(API.V1_PERMISSION_DELETE, { id: item.id }).subscribe(res => {
      if (res.code !== 200) {
        this.msgSrv.error('删除数据失败');
        return;
      }
      this.msgSrv.success('删除成功');
      this.st.reload();
    });
  }
}
