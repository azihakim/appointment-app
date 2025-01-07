import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  addBook: any;
  constructor(private fb: FormBuilder,
    private routes: Router,
    private bookService: BooksService
  ) {
    this.addBook = fb.group(
      {
        judul: ['', Validators.required],
        penulis: ['', Validators.required],
        penerbit: ['', Validators.required],
        tahun: ['', Validators.required],
        jumlah: ['', Validators.required],
        deskripsi: ['', Validators.required],
      }
    )
  }


  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.addBook.value);
    this.bookService.addBook(this.addBook.value).subscribe((data): any => {
      console.log(data);
      this.routes.navigate(['/'])
    })
  }
}
