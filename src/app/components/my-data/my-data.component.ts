import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.scss']
})
export class MyDataComponent implements OnInit {

  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.username = user.username;
      this.firstname = user.firstname;
      this.lastname = user.lastname;
      this.email = user.email;
      this.password = user.password;
    });
  }

  onSave() {
    if (this.newPassword !== this.confirmPassword) {
      console.log('Die eingebenen Passwörter stimmen nicht überein.');
      return;
    }

    const user: User = {
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password
    };

    console.log(user);
  }
}
