import { MariosyService } from './../../services/mariosy.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Marios } from 'src/app/interfaces/marios';
import { Subject, takeUntil } from 'rxjs';
import { compareByCreationTimestampDesc } from 'src/app/utils/mariosUtils';
import { LAST_MARIOS_COUNT } from 'src/app/dev_constants';

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

  constructor(private mariosyService: MariosyService) {}

  ngOnInit() {
    this.mariosyService.userLastMarioses
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.lastMarioses = [...data[0], ...data[1]]
          .sort(compareByCreationTimestampDesc)
          .slice(0, LAST_MARIOS_COUNT);
      });

    this.mariosyService.createdMariosesCount
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.createdMariosesCount = data;
      });

    this.mariosyService.receivedMariosesCount
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
