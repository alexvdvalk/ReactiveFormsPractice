import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sub-field',
  templateUrl: './sub-field.component.html',
  styleUrls: ['./sub-field.component.scss'],
})
export class SubFieldComponent implements OnInit {
  @Input() form: FormGroup;
  constructor() {}

  ngOnInit(): void {
    console.log('got form', this.form);
  }
}
