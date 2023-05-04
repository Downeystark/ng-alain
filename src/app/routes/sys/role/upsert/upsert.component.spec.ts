import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysRoleUpsertComponent } from './upsert.component';

describe('SysRoleUpsertComponent', () => {
  let component: SysRoleUpsertComponent;
  let fixture: ComponentFixture<SysRoleUpsertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SysRoleUpsertComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysRoleUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
