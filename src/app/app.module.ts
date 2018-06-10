import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AnimaisComponent } from './components/animais/animais.component';
import { MenuSuperiorComponent } from './components/layout/menu-superior/menu-superior.component';

const routes = [
  { path: 'animais', component: AnimaisComponent },
  { path: '', redirectTo: '/animais', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AnimaisComponent,
    MenuSuperiorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
