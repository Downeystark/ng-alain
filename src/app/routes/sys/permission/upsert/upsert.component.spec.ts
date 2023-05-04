import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysPermissionUpsertComponent } from './upsert.component';

describe('SysPermissionUpsertComponent', () => {
  let component: SysPermissionUpsertComponent;
  let fixture: ComponentFixture<SysPermissionUpsertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SysPermissionUpsertComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysPermissionUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
