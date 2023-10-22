import { MariosyService } from 'src/app/services/mariosy.service';
import { Component, Input } from '@angular/core';
import { Marios } from 'src/app/interfaces/marios';
import { MatDialog } from '@angular/material/dialog';
import { MariosDialogComponent } from '../marios-dialog/marios-dialog.component';
import { Subject, takeUntil } from 'rxjs';
import { MariosType } from 'src/app/interfaces/mariosType';
import { USER_ID } from 'src/app/dev_constants';

@Component({
  selector: 'app-marios-card',
  templateUrl: './marios-card.component.html',
  styleUrls: ['./marios-card.component.css'],
})
export class MariosCardComponent {
  @Input() marios!: Marios;

  constructor(
    private matDialog: MatDialog,
    private mariosyService: MariosyService
  ) {}

  mariosType!: MariosType;

  textBeforeUsers: string = '';
  usersToDisplay: string[] = [];

  private destroy$: Subject<void> = new Subject();

  ngOnInit() {
    this.mariosyService.mariosTypes
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        let mariosType = data.find((type) => type.value === this.marios.type);
        if (mariosType) {
          this.mariosType = mariosType;
        }
      });
    this.initDisplayText();
  }

  openDialog() {
    this.matDialog.open(MariosDialogComponent, {
      data: {
        textBeforeUsers: this.textBeforeUsers,
        usersToDisplay: this.usersToDisplay,
        title: this.marios.title,
        comment: this.marios.comment,
        mariosType: this.mariosType,
      },
      width: '50vw',
    });
  }

  initDisplayText() {
    if (this.marios.creatorExternalId === USER_ID) {
      this.textBeforeUsers = 'To:';
      this.usersToDisplay = this.marios.receiversNames;
    } else {
      this.textBeforeUsers = 'From:';
      this.usersToDisplay = [
        `${this.marios.creatorFirstName} ${this.marios.creatorLastName}`,
      ];
    }
  }
}
