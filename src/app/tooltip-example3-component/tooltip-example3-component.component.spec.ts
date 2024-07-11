import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipExample3ComponentComponent } from './tooltip-example3-component.component';

describe('TooltipExample3ComponentComponent', () => {
  let component: TooltipExample3ComponentComponent;
  let fixture: ComponentFixture<TooltipExample3ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TooltipExample3ComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TooltipExample3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
