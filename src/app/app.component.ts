import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mariosy-frontend';

  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private readonly keycloak: KeycloakService
  ) {}

  async ngOnInit() {
    this.registerIcons();

    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
    }
  }

  registerIcons() {
    this.iconRegistry.addSvgIcon(
      'right-arrow',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/right_arrow.svg'
      )
    );

    this.iconRegistry.addSvgIcon(
      'left-arrow',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/left_arrow.svg'
      )
    );

    this.iconRegistry.addSvgIcon(
      'green-star',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/star_green.svg'
      )
    );

    this.iconRegistry.addSvgIcon(
      'blue-star',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/star_blue.svg'
      )
    );

    this.iconRegistry.addSvgIcon(
      'orange-star',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/star_orange.svg'
      )
    );

    this.iconRegistry.addSvgIcon(
      'purple-star',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/star_purple.svg'
      )
    );

    this.iconRegistry.addSvgIcon(
      'yellow-star',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/star_yellow.svg'
      )
    );

    this.iconRegistry.addSvgIcon(
      'pink-star',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/star_pink.svg'
      )
    );

    this.iconRegistry.addSvgIcon(
      'person-sharp-pink',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/person_sharp_icon_pink.svg'
      )
    );

    this.iconRegistry.addSvgIcon(
      'person-sharp-yellow',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/person_sharp_icon_yellow.svg'
      )
    );

    this.iconRegistry.addSvgIcon(
      'logout',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logout.svg')
    );
  }
}
