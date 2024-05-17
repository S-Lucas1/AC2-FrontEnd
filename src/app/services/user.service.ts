import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model'; // Ajuste o caminho conforme necessário

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://your-api-url.com/api/users'; // Substitua pela URL real da sua API

  constructor(private http: HttpClient) {}

  // Método para adicionar um novo usuário
  addUser(userData: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, userData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Método para atualizar um usuário existente
  updateUser(userId: string, userData: User): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put<User>(url, userData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Método para buscar os detalhes de um único usuário
  getUserById(userId: string): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<User>(url);
  }
}
