import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user.component';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.addUserForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let email = component.addUserForm.controls['email'];
    expect(email.valid).toBeFalsy();
  });
});
