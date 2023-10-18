import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  UserForm : FormGroup;
  id: string | null;
  listUsers: Users[] = [];

  constructor(private fb: FormBuilder,
              private _userService: UsersServiceService,
              private router: Router,
              private aRoute : ActivatedRoute) {
    this.UserForm = this.fb.group({
      name: ['', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this._userService.getUsers().subscribe(data =>{
      console.log(data);
      this.listUsers = data;
    },error =>{
      console.log(error);
    })
  }

  deleteUser(id:any){
    this._userService.deleteUser(id).subscribe(data=>{
      console.log('Eliminado');
      this.getUsers();
    }, error =>{
      console.log(error);
    })
  }

  addUser(){
    console.log(this.UserForm);

    if(this.UserForm.invalid){
      return Object.values(this.UserForm.controls).forEach(control =>{
        control.markAllAsTouched();
      })

    }


    const USER : Users ={
      name : this.UserForm.get('name')?.value,
    }

    if(this.id !== null)
    {
      console.log('nada');
    }else{
      //crear
      console.log(USER);
      this._userService.saveUser(USER).subscribe(data =>{
        console.log('Guardado');
        this.getUsers();
      },error =>{
        console.log(error);
        this.UserForm.reset();
      })
    }
  }

  //Validacion
  get userNoValid(){
    return this.UserForm.get('name')?.invalid && this.UserForm.get('name')?.touched
  }
}
