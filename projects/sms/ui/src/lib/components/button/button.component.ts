import { Component, Input } from '@angular/core';

@Component({
  selector: 'sms-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input("type") type!: "error" | "success" | "warning" | "info" | "default";
  @Input("disabled") disabled?: boolean = false;
}
