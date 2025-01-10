import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

const createUser = asyncHandler(async (req, res) => {
  console.log("creating a User");

  let { email } = req.body;
  const userExists = await prisma.user.findUnique({ where: { email } });
  if (!userExists) {
    const user = await prisma.user.create({
      data: {
        email,
      },
    });
    res.send({
      message: "User Created Successfully",
      user: user,
    });
  } else {
    res.sendStatus(201).json({ message: "User already exists" });
  }
});

const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        bookedVisits: true,
      },
    });

    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res
        .status(400)
        .json({ message: "This residency is already booked by you" });
    } else {
      await prisma.user.update({
        where: {
          email: email,
        },
        data: {
          bookedVisits: {
            push: {
              id,
              date,
            },
          },
        },
      });
      res.send({ message: "Your visit is booked Successfully" });
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

const allBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const bookings = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        bookedVisits: true,
      },
    });
    res.status(200).send(bookings);
  } catch {
    throw new Error(err.message);
  }
});

const cancelBooking = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        bookedVisits: true,
      },
    });
    const index = user.bookedVisits.findIndex((visit) => visit.id === id);

    if (index === -1) {
      res.status(404).json({ message: "Booking not found" });
    } else {
      user.bookedVisits.splice(index, 1);
      await prisma.user.update({
        where: {
          email: email,
        },
        data: {
          bookedVisits: user.bookedVisits,
        },
      });
      res.send({ message: "Booking Cancelled Successfully" });
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

const toFav = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { rid } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user.favResidenciesID.includes(rid)) {
      const updateUser = await prisma.user.update({
        where: {
          email,
        },
        data: {
          favResidenciesID: {
            set: user.favResidenciesID.filter((id) => id !== rid),
          },
        },
      });
      res.send({ message: "Removed from Favourites", user: updateUser });
    } else {
      const updateUser = await prisma.user.update({
        where: {
          email,
        },
        data: {
          favResidenciesID: {
            push: rid,
          },
        },
      });
      res.send({ message: "Added to Favourites", user: updateUser });
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

const allFav = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const favourites = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        favResidenciesID: true,
      },
    });
    res.status(200).send(favourites);
  } catch (err) {
    throw new Error(err.message);
  }
});

export { createUser, bookVisit, allBookings, cancelBooking, toFav, allFav };
