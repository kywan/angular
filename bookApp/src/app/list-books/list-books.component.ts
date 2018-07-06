import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {switchMap} from "rxjs/operators";
import {ObservableInput} from "rxjs/internal/types";

interface Books {
  id: number;
  avaliable: boolean;
  nbRent: number;
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
}

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  detail = false;
  books: Books[] = []
  book_blank: Books ={
    id: 0,
    avaliable: false,
    nbRent: 0,
    author: '',
    country: '',
    imageLink: '',
    language: '',
    link: '',
    pages: 0,
    title: '',
    year: 0
  };
  book: Books = this.book_blank
  constructor(
    private http: HttpClient
  ) { }

  GetBooks()
  {
    this.http
      .get<Books[]>("http://localhost:5000/books")
      .subscribe(res => {
        this.books = res;
        console.log(this.books);
      })
  }
  GetBookDetail(id:number)
  {
    this.http
      .get<Books>("http://localhost:5000/books/" + id)
      .subscribe(res => {
        this.book = res;
      })
    this.detail = true;
  }
  CloseDetail()
  {
    this.detail = false;
    this.book = this.book_blank
  }

  ftEmprunter(id: number) {
    this.book.avaliable = false;
    this.book.nbRent += 1;
    let url = "http://localhost:5000/books/update/" + id;
    this.http.put(url, this.book).subscribe(res => this.GetBooks());
  }
  ftRendre(id: number)
  {
    this.book.avaliable = true;
    let url = "http://localhost:5000/books/update/" + id;
    this.http.put(url, this.book).subscribe(res => this.GetBooks());

  }
  ngOnInit() {
    this.GetBooks()
  }

}
