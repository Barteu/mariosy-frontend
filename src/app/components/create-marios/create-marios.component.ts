import { MariosPayload } from './../../interfaces/marios';
import { User } from './../../interfaces/user';
import { UserService } from './../../services/user.service';
import { Component, inject, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { MariosyService } from 'src/app/services/mariosy.service';
import { Subject, takeUntil, Observable } from 'rxjs';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, startWith, switchMap, debounceTime } from 'rxjs/operators';
import { MariosType } from 'src/app/interfaces/mariosType';
import { Router } from '@angular/router';

interface Receiver {
  externalId: string;
  viewText: string;
}

@Component({
  selector: 'app-create-marios',
  templateUrl: './create-marios.component.html',
  styleUrls: ['./create-marios.component.css'],
})
export class CreateMariosComponent {
  constructor(
    private location: Location,
    private mariosyService: MariosyService,
    private userService: UserService,
    private router: Router
  ) {}

  mariosForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(63)]),
    comment: new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
    ]),
    receiversIds: new FormControl([], Validators.required),
    selectedCategory: new FormControl(null, Validators.required),
  });

  mariosTypes: MariosType[] = [];
  private destroy$: Subject<void> = new Subject();
  private userId: string = '';

  ngOnInit() {
    this.userId = this.userService.userId;

    this.mariosyService.mariosTypes.subscribe((data) => {
      this.mariosTypes = data;
    });

    this.userCtrl.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((term) => this.userService.searchUsers(term))
      )
      .subscribe((resp: User[]) => {
        this.filteredUsers = resp.filter(
          (user) =>
            !this.receivers.some(
              (addedReceiver) => addedReceiver.externalId === user.externalId
            ) && user.externalId !== this.userId
        );
      });
  }

  goBack(): void {
    this.location.back();
  }

  separatorKeysCodes: number[] = [ENTER, COMMA];
  userCtrl = new FormControl('');
  filteredUsers: User[] = [];
  receivers: Receiver[] = [];

  @ViewChild('userInput') userInput: ElementRef<HTMLInputElement> =
    {} as ElementRef;

  announcer = inject(LiveAnnouncer);

  remove(userId: string): void {
    const index = this.receivers.findIndex((e) => e.externalId === userId);
    if (index >= 0) {
      this.receivers.splice(index, 1);
      this.setReceiversIdsAndValidate();
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.receivers.push({
      externalId: event.option.value,
      viewText: event.option.viewValue,
    });

    this.setReceiversIdsAndValidate();

    this.userInput.nativeElement.value = '';
    this.userCtrl.setValue(null);
  }

  private setReceiversIdsAndValidate() {
    this.mariosForm.controls['receiversIds'].setValue(
      this.receivers.map((r) => r.externalId)
    );
    this.mariosForm.controls['receiversIds'].updateValueAndValidity();
  }

  changeSelectedType(type: MariosType) {
    this.mariosForm.controls['selectedCategory'].setValue(type.id);
    this.mariosForm.controls['selectedCategory'].updateValueAndValidity();
  }

  onSubmit(): void {
    this.mariosForm.markAllAsTouched();
    if (this.mariosForm.valid) {
      let mariosPayload: MariosPayload = {
        creatorExternalId: this.userId,
        receiversExternalIds: this.mariosForm.controls['receiversIds'].value,
        title: this.mariosForm.controls['title'].value,
        comment: this.mariosForm.controls['comment'].value,
        type: this.mariosForm.controls['selectedCategory'].value,
      };
      this.mariosyService.addMarios(mariosPayload);
      this.mariosForm.reset();
      this.router.navigate(['/home']);
    }
  }
}
