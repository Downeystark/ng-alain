import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';

import { SysLogEditComponent } from './edit/edit.component';
import { SysLogViewComponent } from './view/view.component';

@Component({
  selector: 'app-sys-log',
  templateUrl: './log.component.html'
})
export class SysLogComponent implements OnInit {
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
    { title: '编号', index: 'no' },
    { title: '调用次数', type: 'number', index: 'callNo' },
    { title: '头像', type: 'img', width: '50px', index: 'avatar' },
    { title: '时间', type: 'date', index: 'updatedAt' },
    {
      title: '',
      buttons: [
        {
          text: '查看',
          click: (item: any) => {
            console.log(item);
            this.router.navigateByUrl(`/sys/log/view?id=${item.id}`);
          }
        },
        { text: '编辑', type: 'static', click: (item: any) => this.edit(item) },
        { text: '删除', type: 'del', click: (item: any) => this.delete(item) }
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper, private router: Router) {}

  ngOnInit(): void {}

  add(): void {
    this.modal.createStatic(SysLogEditComponent, { i: { id: 0 } }).subscribe(() => this.st.reload());
  }

  edit(item: any): void {
    console.log(item);
    this.modal.createStatic(SysLogEditComponent, { i: { ...item } }).subscribe(() => this.st.reload());
  }

  delete(item: any): void {
    console.log(item);
  }
}
