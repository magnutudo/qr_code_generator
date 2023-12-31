import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-qr-code-generator',
  template: `
    <div >
      <qrcode [width]="400"   [qrdata]="data.value"></qrcode>
    </div>
  `,
  styleUrls:['./qr-code-generator.component.scss']
})
export class QrCodeGeneratorComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { value: string }) {
  }
}
