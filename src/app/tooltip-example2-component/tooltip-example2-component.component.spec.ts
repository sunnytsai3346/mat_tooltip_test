import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipExample2ComponentComponent } from './tooltip-example2-component.component';

describe('TooltipExample2ComponentComponent', () => {
  let component: TooltipExample2ComponentComponent;
  let fixture: ComponentFixture<TooltipExample2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TooltipExample2ComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TooltipExample2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
