import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {


  url = 'http://localhost:4000/api_notes_app/users/';


  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get(this.url)
  }

  deleteUser(id:string): Observable<any>{
    return this.http.delete(this.url + id)
  }

  saveUser(user: Users): Observable<any>{
    return this.http.post(this.url, user)
  }

  getNote(id:string): Observable<any>{
    return this.http.get(this.url + id)
  }
}
