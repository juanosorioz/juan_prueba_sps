import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';

const routes: Routes = [
  {path:'', component: NotesComponent},
  {path:'notes', component: NotesComponent},
  {path:'create-notes', component: CreateNotesComponent},
  {path:'edit-notes/:id', component: CreateNotesComponent},
  {path:'create-users', component: CreateUsersComponent},
  {path:'**', pathMatch:'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
