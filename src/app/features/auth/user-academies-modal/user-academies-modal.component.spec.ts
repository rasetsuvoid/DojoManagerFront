import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAcademiesModalComponent } from './user-academies-modal.component';

describe('UserAcademiesModalComponent', () => {
  let component: UserAcademiesModalComponent;
  let fixture: ComponentFixture<UserAcademiesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAcademiesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAcademiesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
