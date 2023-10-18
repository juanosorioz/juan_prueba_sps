import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/app/models/notes';
import { NotesServiceService } from 'src/app/services/notes-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  listaNote: Notes[] = [];

  constructor(private _noteService: NotesServiceService) { }

  ngOnInit(): void {
    this.obtenerNotes();
  }

  obtenerNotes(){
    this._noteService.getNotes().subscribe(data =>{
      console.log(data);
      this.listaNote = data
    },error =>{
      console.log(error);
    })
  }

  deleteNote(id: any){
    this._noteService.deleteNote(id).subscribe(data=>{
      console.log('Eliminado');
      this.obtenerNotes();
    },error =>{
      console.log(error);
    })
  }

}
