import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";
const createResidency = asyncHandler(async (req, res) => {
  console.log("creating a Residency");
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilities,
    image,
    userEmail,
  } = req.body.data;
  console.log(req.body.data);
  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
        owner: {
          connect: {
            email: userEmail,
          },
        },
      },
    });
    res.send({ message: "Residency Created Successfully", residency });
  } catch (err) {
    if (err.code === "P2002") {
      throw new Error("Already have a residency with this address");
    } else {
      throw new Error(err.message);
    }
  }
});

const getAllResidencies = asyncHandler(async (req, res) => {
  console.log("getting all Residencies");
  const residencies = await prisma.residency.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  res.send(residencies);
});

const getResidencies = asyncHandler(async (req, res) => {
  console.log("getting Residencies");
  const { id } = req.params;
  try {
    const residency = await prisma.residency.findUnique({
      where: {
        id,
      },
    });
    res.send({ residency });
  } catch (err) {
    throw new Error(err.message);
  }
  res.send({ residency });
});

export { createResidency, getAllResidencies, getResidencies };