import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { MariosyService } from './../../services/mariosy.service';
import { Marios } from 'src/app/interfaces/marios';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { compareByCreationTimestampDesc } from 'src/app/utils/mariosUtils';

@Component({
  selector: 'app-received-sent-marios',
  templateUrl: './received-sent-marios.component.html',
  styleUrls: ['./received-sent-marios.component.css'],
})
export class ReceivedSentMariosComponent {
  constructor(
    private location: Location,
    private mariosyService: MariosyService,
    private router: Router
  ) {}

  gridTitle: string = '';
  marioses: Marios[] = [];
  private destroy$: Subject<void> = new Subject();

  ngOnInit() {
    if (this.router.url === '/received') {
      this.gridTitle = 'RECEIVED MARIOS:';

      this.mariosyService.receivedMarioses
        .pipe(takeUntil(this.destroy$))
        .subscribe((data) => {
          this.marioses = data.sort(compareByCreationTimestampDesc);
        });
    } else {
      this.gridTitle = 'SENT MARIOS:';

      this.mariosyService.createdMarioses
        .pipe(takeUntil(this.destroy$))
        .subscribe((data) => {
          this.marioses = data.sort(compareByCreationTimestampDesc);
        });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  goBack(): void {
    this.location.back();
  }
}
