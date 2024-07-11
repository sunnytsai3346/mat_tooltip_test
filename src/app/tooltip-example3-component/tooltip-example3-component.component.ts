import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-example3-component',
  templateUrl: './tooltip-example3-component.component.html',
  styleUrl: './tooltip-example3-component.component.css'
})
export class TooltipExample3ComponentComponent {
  tooltipDisabled = false;

  showTooltipForDuration() {
    this.tooltipDisabled = false;
    setTimeout(() => {
      this.tooltipDisabled = true;
    }, 3000); // Tooltip will be shown for 3 seconds
  }
}
