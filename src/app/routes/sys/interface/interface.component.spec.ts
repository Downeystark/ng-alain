import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysInterfaceComponent } from './interface.component';

describe('SysInterfaceComponent', () => {
  let component: SysInterfaceComponent;
  let fixture: ComponentFixture<SysInterfaceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SysInterfaceComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
