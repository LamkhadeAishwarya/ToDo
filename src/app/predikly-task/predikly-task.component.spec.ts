import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrediklyTaskComponent } from './predikly-task.component';

describe('PrediklyTaskComponent', () => {
  let component: PrediklyTaskComponent;
  let fixture: ComponentFixture<PrediklyTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrediklyTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrediklyTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
