import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EspeciesService } from './services/especies/especies.service';
import { AnimaisService } from './services/animais/animais.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './components/layout/menu-superior/menu-superior.component';
import { ListagemAnimaisComponent } from './components/animais/listagem-animais/listagem-animais.component';
import { FormularioAnimaisComponent } from './components/animais/formulario-animais/formulario-animais.component';
import { ListagemEspeciesComponent } from './components/especies/listagem-especies/listagem-especies.component';
import { FormularioEspeciesComponent } from './components/especies/formulario-especies/formulario-especies.component';
import { FormularioTipoAnimalComponent } from './components/tipo-animal/formulario-tipo-animal/formulario-tipo-animal.component';
import { ListagemTipoAnimalComponent } from './components/tipo-animal/listagem-tipo-animal/listagem-tipo-animal.component';
import { TipoAnimalService } from './services/tipo-animal/tipo-animal.service';

const routes = [
  { path: 'animais', component: ListagemAnimaisComponent },
  { path: 'especies', component: ListagemEspeciesComponent },
  { path: 'tipos', component: ListagemTipoAnimalComponent },
  { path: '', redirectTo: '/animais', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    ListagemAnimaisComponent,
    FormularioAnimaisComponent,
    ListagemEspeciesComponent,
    FormularioEspeciesComponent,
    FormularioTipoAnimalComponent,
    ListagemTipoAnimalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AnimaisService,
    EspeciesService,
    TipoAnimalService,
    HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
