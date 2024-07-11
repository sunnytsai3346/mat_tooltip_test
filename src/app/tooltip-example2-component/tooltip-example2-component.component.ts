import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-example2-component',
  templateUrl: './tooltip-example2-component.component.html',
  styleUrl: './tooltip-example2-component.component.css'
})
export class TooltipExample2ComponentComponent {
  tooltipDisabled = false;
  showTooltip = true;

  toggleTooltip() {
    this.showTooltip = !this.showTooltip;
  }

}
