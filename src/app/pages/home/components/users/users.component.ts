import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = [
    { id: 1, name: 'Lucas Silva', email: 'lucas.silva@gmail.com', role: 'FE Engineer' },
    { id: 2, name: 'Maria Souza', email: 'maria.souza@gmail.com', role: 'BE Engineer' },
    { id: 3, name: 'João Santos', email: 'joao.santos@gmail.com', role: 'Data Analyst' },
    { id: 4, name: 'Ana Oliveira', email: 'ana.oliveira@gmail.com', role: 'Technical Lead' }
  ];

  constructor(private router: Router) {}

  addNewUser() {
    window.location.href = 'http://localhost:4200/app/add-user';
  }

  editUser(userId: number) {
    window.location.href = `http://localhost:4200/app/edit-user?id=${userId}`;
  }


  deleteUser(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }
}
