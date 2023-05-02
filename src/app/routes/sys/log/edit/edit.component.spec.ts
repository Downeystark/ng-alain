import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysLogEditComponent } from './edit.component';

describe('SysLogEditComponent', () => {
  let component: SysLogEditComponent;
  let fixture: ComponentFixture<SysLogEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SysLogEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysLogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
