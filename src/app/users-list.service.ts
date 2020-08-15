import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersListService {
  constructor() {}

  users: { username: string; age: number }[] = [];

  addUser(user: { username: string; age: number }): void {
    this.users.push(user);
  }
  removeUser(id: number): void {
    this.users.splice(id, 1);
  }
}
