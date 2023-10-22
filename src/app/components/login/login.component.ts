import { Component } from '@angular/core';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userId: string = '';

  constructor(private userService: UserService, private router: Router) {}

  logIn() {
    if (this.userId.length > 1) {
      this.userService.userId = this.userId;
      this.router.navigateByUrl('home');
    }
  }
}
