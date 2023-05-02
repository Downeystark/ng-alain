import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysRuleUpsertComponent } from './upsert.component';

describe('SysRuleUpsertComponent', () => {
  let component: SysRuleUpsertComponent;
  let fixture: ComponentFixture<SysRuleUpsertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SysRuleUpsertComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysRuleUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
