import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../form.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    // this.form.addControl('name', new FormControl(null, Validators.min(5))Validators.min(5));
  }
}
