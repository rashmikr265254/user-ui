import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.scss']
})
export class AddUpdateUserComponent implements OnInit {
  user: {
    name: string,
    age: number,
    address?: string
  };

  isTemplateDrivenControlsCorrect = false;

  templateUserAdded = false;
  reactiveUserAdded = false;

  userForm = new FormGroup({
    name: new FormControl(),
    age: new FormControl([]),
    address: new FormControl()
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.clearTemplate();
  }

  validateTemplate() {
    this.isTemplateDrivenControlsCorrect = this.user.name !== ''
        && this.user.age !== undefined && Number(this.user.age) > 0;
  }

  addUserTemplate() {
    if (this.isTemplateDrivenControlsCorrect) {
      if (!this.user.address) {
        this.userService.addUser(
          this.userService.createUser(this.user.name, this.user.age)
        );
      } else {
        this.userService.addUser(
          this.userService.createUserWithAddress(this.user.name, this.user.age, this.user.address)
        );
      }
      this.clearTemplate();
      this.templateUserAdded = true;
      setTimeout(() => {
        this.templateUserAdded = false;
      }, 5000);
      this.validateTemplate();
    }
  }

  addUserReactive() {
    if (this.userForm.valid) {
      const reactiveUser = this.userForm.value;
      if (!reactiveUser.address) {
        this.userService.addUser(
          this.userService.createUser(reactiveUser.name, reactiveUser.age)
        );
      }  else {
        this.userService.addUser(
          this.userService.createUserWithAddress(reactiveUser.name, reactiveUser.age, reactiveUser.address)
        );
      }
      this.clearReactive();
      this.reactiveUserAdded = true;
      setTimeout(() => {
        this.reactiveUserAdded = false;
      }, 5000); 
    }
  }

  clearReactive() {
    this.userForm.reset();
    this.reactiveUserAdded = false;
  }

  clearTemplate() {
    this.user = {
      name: '',
      age: undefined,
      address: undefined
    };
    this.templateUserAdded = false;
  }
}
