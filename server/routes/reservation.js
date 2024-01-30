const express = require("express");
const {
  createReservation,
  deleteReservation,
  getAllReservations,
  insertManyReservations,
  getReservationsByFilter,
  getPendingReservations,
} = require("../controllers/reservationController");
const router = express.Router();

router.post("/", createReservation);
router.post("/n",  insertManyReservations);
router.get("/",  getAllReservations);
router.get(  "/filter/:reservationDate", getReservationsByFilter); 
router.get("/pending",getPendingReservations);
router.delete("/:id", deleteReservation);
module.exports = router;