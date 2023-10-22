import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MariosCardComponent } from './marios-card.component';

describe('MariosCardComponent', () => {
  let component: MariosCardComponent;
  let fixture: ComponentFixture<MariosCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MariosCardComponent],
    });
    fixture = TestBed.createComponent(MariosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
