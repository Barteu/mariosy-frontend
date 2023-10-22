import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MariosGridComponent } from './marios-grid.component';

describe('MariosGridComponent', () => {
  let component: MariosGridComponent;
  let fixture: ComponentFixture<MariosGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MariosGridComponent],
    });
    fixture = TestBed.createComponent(MariosGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
