import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHospital } from './new-hospital';

describe('NewHospital', () => {
  let component: NewHospital;
  let fixture: ComponentFixture<NewHospital>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewHospital]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHospital);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
