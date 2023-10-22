import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MariosDialogComponent } from './marios-dialog.component';

describe('MariosDialogComponent', () => {
  let component: MariosDialogComponent;
  let fixture: ComponentFixture<MariosDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MariosDialogComponent],
    });
    fixture = TestBed.createComponent(MariosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
