import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  addBook(book: any) {
    return this.http.post('http://localhost:5000/endpoint/add-book', book);
  }

  showBook() {
    return this.http.get('http://localhost:5000/endpoint/');
  }

  deleteBook(id: any) {
    return this.http.delete('http://localhost:5000/endpoint/delete-book/' + id);
  }

  singleBook(id: any) {
    return this.http.get('http://localhost:5000/endpoint/book/' + id);
  }

  updateBook(id: any, book: any) {
    return this.http.put(
      'http://localhost:5000/endpoint/update-book/' + id,
      book
    );
  }

  getOne() {
    return this.http.get('http://localhost:5000/endpoint/book/');
  }
  addAppointment(appointment: any) {
    return this.http.post(
      'http://localhost:5000/endpoint/add-appointment',
      appointment
    );
  }
}
