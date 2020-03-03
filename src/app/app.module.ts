import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuiensoyComponent } from './quiensoy/quiensoy.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { LoginComponent } from './login/login.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { PruebaComponent } from './prueba/prueba.component';
import { AprendizajeComponent } from './aprendizaje/aprendizaje.component';

const routes:Routes = [{path:'',component:PaginaprincipalComponent},
{path:'contacto',component:ContactoComponent},
{path:'perfil',component:QuiensoyComponent},
{path:'proyectos',component:ProyectosComponent},
{path:'curriculum',component:CurriculumComponent},
{path:'galeria', component:GaleriaComponent},
{path:'login', component:LoginComponent},
{path:'quiensoy',component:QuiensoyComponent},
{path:'prueba',component:PruebaComponent},
{path:'blog',component:AprendizajeComponent}];

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    QuiensoyComponent,
    CurriculumComponent,
    ProyectosComponent,
    PaginaprincipalComponent,
    LoginComponent,
    GaleriaComponent,
    PruebaComponent,
    AprendizajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
