import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {QrCodeGeneratorComponent} from "../qr-code-generator/qr-code-generator.component";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  value = ''

  constructor(public dialog: MatDialog) {
  }

  handleValue() {

    const dialogRef = this.dialog.open(QrCodeGeneratorComponent, {
      data: {value: this.value},
    })
  }
}
