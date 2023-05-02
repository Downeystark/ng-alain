import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysInterfaceUpsertComponent } from './upsert.component';

describe('SysInterfaceUpsertComponent', () => {
  let component: SysInterfaceUpsertComponent;
  let fixture: ComponentFixture<SysInterfaceUpsertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SysInterfaceUpsertComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysInterfaceUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
