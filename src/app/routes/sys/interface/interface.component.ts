import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';

import { SysInterfaceUpsertComponent } from './upsert/upsert.component';

@Component({
  selector: 'app-sys-interface',
  templateUrl: './interface.component.html'
})
export class SysInterfaceComponent implements OnInit {
  url = `/user`;
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号'
      }
    }
  };
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    { title: '编号', type: 'no', width: '50px' },
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
    this.modal.createStatic(SysInterfaceUpsertComponent, { i: { id: 0 } }).subscribe(() => this.st.reload());
  }

  edit(item: any): void {
    console.log(item);
    this.modal.createStatic(SysInterfaceUpsertComponent, { i: { ...item } }, { size: 'md' }).subscribe(() => this.st.reload());
  }

  delete(item: any): void {
    console.log(item);
  }
}
