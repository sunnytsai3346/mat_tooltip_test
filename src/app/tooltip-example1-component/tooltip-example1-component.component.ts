import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-example1-component',
  templateUrl: './tooltip-example1-component.component.html',
  styleUrl: './tooltip-example1-component.component.css'
})
export class TooltipExample1ComponentComponent implements OnInit{
  showTooltip = true;
  tooltipText = 'This is a tooltip';
  hideDelay = 3000; // Tooltip will hide after 3000ms (3 seconds)
  
  
  constructor() {}

  ngOnInit(): void {}

  showTooltipForDelay(): void {
    this.showTooltip = true;
    setTimeout(() => {
      this.showTooltip = false;
    }, this.hideDelay);
  }
  toggleTooltip() {
    this.showTooltip = true;
  }

}
