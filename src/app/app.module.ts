import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LinksRedesComponent } from './components/links-redes/links-redes.component';
import { LinksSeccionesComponent } from './components/links-secciones/links-secciones.component';
import { LogoBlancoComponent } from './components/logo-blanco/logo-blanco.component';
import { LogoAzulComponent } from './components/logo-azul/logo-azul.component';
import { BotonLoginComponent } from './components/boton-login/boton-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LinksSeccionesHorizontalComponent } from './components/links-secciones-horizontal/links-secciones-horizontal.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewProyectoComponent } from './components/proyecto/new-proyecto.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { SkillsComponent } from './components/components/skills/skills.component';
import { NewSkillsComponent } from './components/components/new-skills.component';
import { EditSkillsComponent } from './components/components/edit-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PerfilUsuarioComponent,
    SobremiComponent,
    ProyectoComponent,
    HabilidadesComponent,
    ContactoComponent,
    LinksRedesComponent,
    LinksSeccionesComponent,
    LogoBlancoComponent,
    LogoAzulComponent,
    BotonLoginComponent,
    LinksSeccionesHorizontalComponent,
    LoginComponent,
    HomeComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    EducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    SkillsComponent,
    NewSkillsComponent,
    EditSkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatGridListModule, 
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
