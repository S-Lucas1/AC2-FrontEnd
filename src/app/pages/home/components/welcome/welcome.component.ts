import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  email: string;
  role: string;
}

interface RoleCount {
  role: string;
  count: number;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  users: User[] = [
    { name: 'Lucas Silva', email: 'lucas.silva@gmail.com', role: 'FE Engineer' },
    { name: 'Maria Souza', email: 'maria.souza@gmail.com', role: 'BE Engineer' },
    { name: 'João Santos', email: 'joao.santos@gmail.com', role: 'Data Analyst' },
    { name: 'Ana Oliveira', email: 'ana.oliveira@gmail.com', role: 'Technical Lead' }
  ];
  totalUsers: number = 0;
  rolesCount: RoleCount[] = [];

  constructor() {}

  ngOnInit(): void {
    this.totalUsers = this.users.length;
    this.calculateRoleCounts();
  }

  calculateRoleCounts() {
    const counts = this.users.reduce<{ [key: string]: number }>((acc, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    }, {}); 
  
    this.rolesCount = Object.keys(counts).map(key => ({
      role: key,
      count: counts[key]
    }));
  }
}
