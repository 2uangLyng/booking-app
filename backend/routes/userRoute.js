import express from "express";
import {
  allBookings,
  bookVisit,
  cancelBooking,
  createUser,
  toFav,
  allFav,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.get("/allBookings", allBookings);
router.post("/removeBooking/:id", cancelBooking);
router.post("/toFav/:rid", toFav);
router.get("/allFav", allFav);
export { router as authRoute };
