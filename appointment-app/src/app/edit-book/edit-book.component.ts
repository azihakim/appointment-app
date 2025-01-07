import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  editBookForm: any;
  bookId: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BooksService
  ) {
    this.editBookForm = fb.group({
      judul: ['', Validators.required],
      penulis: ['', Validators.required],
      penerbit: ['', Validators.required],
      tahun: ['', Validators.required],
      jumlah: ['', Validators.required],
      deskripsi: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Retrieve the book ID from the route parameters
    this.route.params.subscribe(params => {
      this.bookId = params['id'];
      // Fetch the book data and update the form
      this.bookService.singleBook(this.bookId).subscribe(
        (book) => {
          this.editBookForm.patchValue(book);
        },
        (error) => {
          console.error('Error fetching book data:', error);
          // Handle the error, e.g., redirect to an error page or display a message to the user
        }
      );
    });
  }

  onSubmit() {
    // Update the book using the book ID and form data
    this.bookService.updateBook(this.bookId, this.editBookForm.value).subscribe(data => {
      console.log('Book updated successfully:', data);
      // Navigate back to the book details page or any other appropriate page
      this.router.navigate(['/']);
    });
  }
}
