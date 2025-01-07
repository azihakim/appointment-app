// index.route.js

const express = require("express");
const router = express.Router();
const bookExpressRoute = express.Router();

let BookSchema = require("../model/appointment.model");

// Get all books
bookExpressRoute.route("/").get((req, res, next) => {
  BookSchema.find()
    .exec()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      return next(error);
    });
});

// Get a book by ID
bookExpressRoute.route("/book/:id").get((req, res, next) => {
  BookSchema.findById(req.params.id)
    .exec()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      return next(error);
    });
});

// Create a new book
bookExpressRoute.route("/add-book").post((req, res, next) => {
  const newBook = new BookSchema(req.body);

  newBook
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      return next(error);
    });
});

// Update a book by ID
bookExpressRoute.route("/update-book/:id").put((req, res, next) => {
  BookSchema.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  )
    .exec()
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.json(data);
    })
    .catch((error) => {
      return next(error);
    });
});

// Delete a book by ID
bookExpressRoute.route("/delete-book/:id").delete((req, res, next) => {
  console.log("Delete Book Request Received");
  BookSchema.findByIdAndDelete(req.params.id)
    .exec()
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.json(data);
    })
    .catch((error) => {
      return next(error);
    });
});

module.exports = bookExpressRoute;
