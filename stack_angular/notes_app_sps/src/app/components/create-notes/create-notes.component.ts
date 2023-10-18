import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/notes-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Notes } from 'src/app/models/notes';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { Users } from 'src/app/models/users';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css']
})
export class CreateNotesComponent implements OnInit {

  NoteForm : FormGroup;
  titulo = 'Create a Note';
  listUser: Users[] = [];
  seleccionado = 'user'
  id: string | null;

  constructor(private fb: FormBuilder,
              private _userService: UsersServiceService,
              private _noteService: NotesServiceService,
              private router: Router,
              private aRoute: ActivatedRoute) {
    this.NoteForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      name: ['', Validators.required],
      date: ['', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.esEdit()
    this.getUsers()
  }

  getUsers(){
    this._userService.getUsers().subscribe(data=>{
      console.log(data);
      this.listUser = data;
    },error =>{
      console.log(error);
    })
  }

  addNote(){
    console.log(this.NoteForm);
    const date = new Date()
    const NOTE : Notes ={
      title: this.NoteForm.get('title')?.value,
      description: this.NoteForm.get('description')?.value,
      name: this.NoteForm.get('name')?.value,
      date: date
    }


    if(this.id !== null)
    {
      //edit
      this._noteService.editNote(this.id, NOTE).subscribe(data =>{
        console.log("Actualizado");
        this.router.navigate(['/notes'])
      })
    }else{
      //crear
      console.log(NOTE);
      this._noteService.saveNote(NOTE).subscribe(data=>{
        console.log('Guardado');
        this.router.navigate(['/notes'])
      },error =>{
        console.log(error);
        this.NoteForm.reset();
      })
    }
  }
  esEdit(){
    if(this.id !== null){
      this.titulo = "Edit a Note"
      this._noteService.getNote(this.id).subscribe(data=>{
        this.NoteForm.setValue({
          name: data.name,
          title: data.title,
          description: data.description,
          date: data.date
        })
      })
    }
  }

}
