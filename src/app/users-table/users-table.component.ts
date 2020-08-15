import { Component, OnInit } from '@angular/core';
import { UsersListService } from '../users-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  constructor(private usersService: UsersListService, private router: Router) {}

  users: { username: string; age: number }[];

  ngOnInit(): void {
    this.users = this.usersService.users;
  }

  onUserClicked(id: number): void {
    this.router.navigate(['users', id]);
  }

  removeUser(id: number): void {
    this.usersService.removeUser(id);
  }
}
