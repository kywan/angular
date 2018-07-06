import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BooksComponent } from './books/books.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { RouterModule, Routes } from '@angular/router';
import { AuteurComponent } from './auteur/auteur.component';

const appRoutes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'auteur', component: AuteurComponent },
  { path: 'books', component: BooksComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BooksComponent,
    ListBooksComponent,
    AuteurComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
