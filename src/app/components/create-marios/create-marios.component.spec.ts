import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateMariosComponent } from './create-marios.component';

describe('CreateMariosComponent', () => {
  let component: CreateMariosComponent;
  let fixture: ComponentFixture<CreateMariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMariosComponent],
    });
    fixture = TestBed.createComponent(CreateMariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
