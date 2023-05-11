import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService{

  private readonly baseUrl = 'http://localhost:9000/bns/users';
  private readonly authUrl = 'http://localhost:9000/bns/jwt';


  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/getAllUsers`);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/getUserById/${userId}`);
  }

  addUser(user: any): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/addUser`, user);
  }

  register(user: any): Observable<User> {
    return this.http.post<User>(`${this.authUrl}/register`, user);
  }
  login(user: any): Observable<any> {
    return this.http.post(`${this.authUrl}/authenticate`, user);
  }

  updateUser(user: User): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/updateUser`, user);
  }

  deleteUser(userId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/deleteUser/${userId}`);
  }

}