import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-sys-log-view',
  templateUrl: './view.component.html'
})
export class SysLogViewComponent implements OnInit {
  id = this.route.snapshot.queryParams['id'];
  i: any;

  constructor(private route: ActivatedRoute, private msgSrv: NzMessageService, private http: _HttpClient) {}

  ngOnInit(): void {
    console.log(this.route.snapshot);
    this.http.get(`/user/${this.id}`).subscribe(res => (this.i = res));
  }
}
