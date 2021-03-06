import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReserveComponent } from './form-reserve.component';

describe('FormReserveComponent', () => {
  let component: FormReserveComponent;
  let fixture: ComponentFixture<FormReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReserveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
