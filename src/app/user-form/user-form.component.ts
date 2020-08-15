import { UsersListService } from './../users-list.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private usersService: UsersListService
  ) {}

  userForm: FormGroup;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];
  toppingList: Fruit[] = [
    { name: 'Extra cheese' },
    { name: 'Mushroom' },
    { name: 'Onion' },
    { name: 'Pepperoni' },
    { name: 'Sausage' },
    { name: 'Tomato' },
  ];

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: [null],
      age: [null],
      hobbies: new FormControl(this.fruits, Validators.required),
      toppings: new FormControl(),
    });
  }

  onSubmit(): void {
    this.usersService.addUser(this.userForm.value);
    console.log(this.userForm);
    // this.userForm.reset();
  }

  get hobbies() {
    return this.userForm.get('hobbies');
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      // this.hobbies.setValue([...this.hobbies.value, { name: value.trim() }]);
      this.fruits.push({ name: value });
      this.hobbies.updateValueAndValidity();
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(id: number): void {
    // const index = this.fruits.indexOf(fruit);

    // if (index >= 0) {
    this.fruits.splice(id, 1);
    // this.hobbies.setValue([...this.fruits]);
    this.hobbies.updateValueAndValidity();
    // }
  }
}
