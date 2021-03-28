import { Injectable } from '@angular/core';
import { User } from './models/user';
import { UserWithAddress } from './models/user-with-address';

@Injectable({
  providedIn: 'root'
})
/**
 * This Service is used to manage all users -
 * Adding user
 * Creating user
 * Creating userWithAddress
 * Removing one user
 * Removing all users
 * Getting all users
 */
export class UserService {

  private _users: User[] = []; // user list is maintained in the list

  constructor() { }

  public createUser(name: string, age: number): User {
    const user = new User();
    user.setName(name); 
    user.setAge(age);
    return user;
  }
  
 // we can return user type for address user as User is base class of UserWithAddress
  public createUserWithAddress(name: string, age: number, address: string): User {
    const user = new UserWithAddress();
    user.setName(name); 
    user.setAge(age);
    user.setAddress(address);
    return user; // error not thrown as UserWithAddress is child class of User
  }

  public addUser(newUser: User): void {
    this._users.push(newUser);
  }

  public removeUser(id: number): void {
    // findIndex(...) take a function, which compares the user id sent with user id in items in loop.
    // if the user is found, it will give the index of user in the list
    const indexOfUserToRemove = this._users.findIndex(item => item.getId() === id); 
    if (indexOfUserToRemove > -1) { // findIndex(...) gives -1 when no user is the list has id sent in the method
      // splice method removes the item from the list -> splice(idexToRemoveItem, numberOfItemsToBeRemoved)
      this._users.splice(indexOfUserToRemove, 1);
    }
  }

  public removeAllUsers(): void {
    this._users = []; // simply setting the array to blank one will remove all items in list
  }

  public getAllUsers(): User[] {
    return this._users;
  }
}
