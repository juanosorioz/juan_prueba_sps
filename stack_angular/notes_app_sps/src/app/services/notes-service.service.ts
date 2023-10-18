import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notes } from '../models/notes';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  url = 'http://localhost:4000/api_notes_app/notes/';

  constructor(private http: HttpClient) { }

  getNotes(): Observable<any>{
    return this.http.get(this.url)
  }

  deleteNote(id:string): Observable<any>{
    return this.http.delete(this.url + id)
  }

  saveNote(note: Notes): Observable<any>{
    return this.http.post(this.url, note)
  }

  getNote(id:string): Observable<any>{
    return this.http.get(this.url + id)
  }

  editNote(id: string, note: Notes): Observable<any>{
    return this.http.put(this.url + id, note)
  }
}
