import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipExample1ComponentComponent } from './tooltip-example1-component.component';

describe('TooltipExample1ComponentComponent', () => {
  let component: TooltipExample1ComponentComponent;
  let fixture: ComponentFixture<TooltipExample1ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TooltipExample1ComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TooltipExample1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
