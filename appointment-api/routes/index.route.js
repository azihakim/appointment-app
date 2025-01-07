// index.route.js

const express = require("express");
const router = express.Router();
const appointmentExpressRoute = express.Router();

let AppointmentSchema = require("../model/appointment.model");

// Get all appointment
appointmentExpressRoute.route("/").get((req, res, next) => {
  AppointmentSchema.find()
    .exec()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      return next(error);
    });
});

// Get a appointment by ID
appointmentExpressRoute.route("/appointment/:id").get((req, res, next) => {
  AppointmentSchema.findById(req.params.id)
    .exec()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      return next(error);
    });
});

// Create a new appointment

appointmentExpressRoute.route("/add-appointment").post((req, res, next) => {
  const newBook = new AppointmentSchema(req.body);

  newBook
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      return next(error);
    });
});

// Update a appointment by ID
appointmentExpressRoute
  .route("/update-appointment/:id")
  .put((req, res, next) => {
    AppointmentSchema.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    )
      .exec()
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: "Appointment not found" });
        }
        res.json(data);
      })
      .catch((error) => {
        return next(error);
      });
  });

// Delete a appointment by ID
appointmentExpressRoute
  .route("/delete-appointment/:id")
  .delete((req, res, next) => {
    AppointmentSchema.findByIdAndDelete({ _id: req.params.id })
      .exec()
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: "Appointment not found" });
        }
        res.json(data);
      })
      .catch((error) => {
        return next(error);
      });
  });

module.exports = appointmentExpressRoute;
