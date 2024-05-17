import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;
  userId: string = ''; 

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.editUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }

  ngOnInit(): void {
    this.loadUserData(); 
  }

  loadUserData() {
    
    const userData = {
      name: 'João Santos',
      email: 'joao.santos@gmail.com',
      role: 'Data Analyst',
      password: ''
    };
    this.editUserForm.setValue(userData);
  }

  onSubmit() {
    if (this.editUserForm.valid) {
      console.log('User Data:', this.editUserForm.value);
      
    } else {
      console.log('Form is not valid');
    }
    window.location.href = 'http://localhost:4200/app/users';
  }
}
