import { MariosyService } from './../../services/mariosy.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Marios } from 'src/app/interfaces/marios';
import { Subject, takeUntil } from 'rxjs';
import { compareByCreationTimestampDesc } from 'src/app/utils/mariosUtils';
import { LAST_MARIOS_COUNT } from 'src/app/dev_constants';
import { UserService } from 'src/app/services/user.service';

import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  lastMarioses: Marios[] = [];
  createdMariosesCount: number = 0;
  receivedMariosesCount: number = 0;

  private destroy$: Subject<void> = new Subject();
  public userId: string = '';

  constructor(
    private mariosyService: MariosyService,
    private readonly keycloak: KeycloakService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    this.userId = (await this.keycloak.loadUserProfile()).id ?? '';

    this.userService.checkAndCreateUserIfNotExists(this.userId);

    this.mariosyService
      .getUserLastMarioses(this.userId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.lastMarioses = [...data[0], ...data[1]]
          .sort(compareByCreationTimestampDesc)
          .slice(0, LAST_MARIOS_COUNT);
      });

    this.mariosyService
      .getCreatedMariosesCount(this.userId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.createdMariosesCount = data;
      });

    this.mariosyService
      .getReceivedMariosesCount(this.userId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.receivedMariosesCount = data;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
