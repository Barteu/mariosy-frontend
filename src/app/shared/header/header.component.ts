import { Component, Input } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private readonly keycloak: KeycloakService) {}

  @Input() logged_in: boolean = false;

  public logout() {
    this.keycloak.logout('http://localhost:4200');
  }
}
