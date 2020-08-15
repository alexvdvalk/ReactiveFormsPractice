import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit {
  title = 'reactiveFormsPractice';
  formArray: FormGroup[] = [];

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.formArray = this.formService.formArray;
    //  this.formArray[0].get
  }

  onAddRow(): void {
    this.formService.onAddRow();
  }
  logAllForms(): void {
    this.formService.logAllForms();
  }

  removeRow(id: number): void {
    this.formService.removeRow(id);
  }
}
