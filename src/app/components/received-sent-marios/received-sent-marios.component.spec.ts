import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceivedSentMariosComponent } from './received-sent-marios.component';

describe('ReceivedSentMariosComponent', () => {
  let component: ReceivedSentMariosComponent;
  let fixture: ComponentFixture<ReceivedSentMariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceivedSentMariosComponent],
    });
    fixture = TestBed.createComponent(ReceivedSentMariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
