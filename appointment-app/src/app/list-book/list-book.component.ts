import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books: any;

  constructor(private bookService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.showBook().subscribe((data: any) => {
      this.books = data;
    });
  }

  delBook(book: any) {
    const confirmDelete = confirm('Are you sure you want to delete this book?');

    if (confirmDelete) {
      this.bookService.deleteBook(book._id).subscribe(() => {
        // Refresh the book list after deletion
        this.loadBooks();
      });
    }
  }

  navigateToEditView(bookId: string) {
    // Navigate to the edit book view with the book ID
    this.router.navigate(['/edit-book', bookId]);
  }
}
