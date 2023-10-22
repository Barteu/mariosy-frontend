import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
})
export class LoginRegisterComponent {
  constructor(private readonly keycloak: KeycloakService) {}

  public login() {
    this.keycloak.login();
  }

  public register() {
    this.keycloak.register();
  }
}
