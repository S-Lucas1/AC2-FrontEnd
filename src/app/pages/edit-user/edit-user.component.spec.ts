import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user.component';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form valid when filled', () => {
    component.editUserForm.controls['name'].setValue('John Doe');
    component.editUserForm.controls['email'].setValue('john@example.com');
    component.editUserForm.controls['role'].setValue('FE Engineer');
    component.editUserForm.controls['password'].setValue('12345678');
    expect(component.editUserForm.valid).toBeTruthy();
  });
});
