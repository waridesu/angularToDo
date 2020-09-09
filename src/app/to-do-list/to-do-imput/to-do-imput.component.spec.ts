import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoImputComponent } from './to-do-imput.component';

describe('ToDoImputComponent', () => {
  let component: ToDoImputComponent;
  let fixture: ComponentFixture<ToDoImputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoImputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoImputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
