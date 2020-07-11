import { FormService } from './form.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
