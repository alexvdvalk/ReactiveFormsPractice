import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  formArray: FormGroup[] = [];

  constructor(private fb: FormBuilder) {}

  onAddRow(): void {
    this.formArray.push(
      this.fb.group({
        email: [faker.internet.email()],
        message: faker.hacker.noun(),
        name: [faker.name.findName()],
        allowed: [Math.random() < 0.5],
      })
    );
  }

  logRow(form: FormGroup): void {
    console.log(form);
  }
  logAllForms(): void {
    console.log(this.formArray);
  }
  removeRow(id: number): void {
    this.formArray.splice(id, 1);
  }
}
