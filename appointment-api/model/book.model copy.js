const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bookSchema = new Schema(
  {
    judul: {
      type: String,
    },
    penulis: {
      type: String,
    },
    penerbit: {
      type: String,
    },
    tahun: {
      type: String,
    },
    jumlah: {
      type: String,
    },
    deskripsi: {
      type: String,
    },
  },
  {
    collection: "books",
  }
);

module.exports = mongoose.model("Book", bookSchema);

// module.exports = Book;
