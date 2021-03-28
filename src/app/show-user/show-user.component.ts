import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchString = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.refreshUsers();
  }

  addUser(): void {
    this.router.navigate(['add-user']);
  }

  removeUser(id: number): void {
    this.userService.removeUser(id);
    this.refreshUsers();
  }

  removeAllUsers(): void {
    this.userService.removeAllUsers();
    this.refreshUsers();
  }

  refreshUsers() {
    this.users = this.userService.getAllUsers();
    // we compare by lowercase because "Happy" and "happy" wouldnt match normally
    this.filteredUsers = this.users.filter(user => user.getName().toLowerCase().includes(this.searchString.toLowerCase())); 
  }
}
