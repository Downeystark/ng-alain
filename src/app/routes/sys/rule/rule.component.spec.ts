import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysRuleComponent } from './rule.component';

describe('SysRuleComponent', () => {
  let component: SysRuleComponent;
  let fixture: ComponentFixture<SysRuleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SysRuleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
