import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAcademyComponent } from './register-academy.component';

describe('RegisterAcademyComponent', () => {
  let component: RegisterAcademyComponent;
  let fixture: ComponentFixture<RegisterAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterAcademyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
