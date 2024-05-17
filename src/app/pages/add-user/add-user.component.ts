import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addUserForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.addUserForm.valid) {
      console.log('User Data:', this.addUserForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
