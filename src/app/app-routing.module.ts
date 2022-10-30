
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditsobremiComponent } from './components/sobremi/editsobremi.component';
import { NewsobremiComponent } from './components/sobremi/newsobremi.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newproyecto', component: NewProyectoComponent},
  {path: 'editproyecto/:id', component: EditProyectoComponent},
  {path: 'neweducacion', component: NeweducacionComponent},
  {path: 'editeducacion/:id', component: EditeducacionComponent },
  {path: 'newskill/', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent },
  {path: 'newsobremi/', component: NewsobremiComponent},
  {path: 'editsobremi/:id', component: EditsobremiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
