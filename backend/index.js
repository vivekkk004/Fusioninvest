// api/index.js
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';
import serverless from 'serverless-http';

import authRouter from '../routes/authRouter.js';
import userModel from '../model/userModel.js';
import { HoldingsModel } from '../model/HoldingsModel.js';
import { PositionsModel } from '../model/PositionsModel.js';
import { OrdersModel } from '../model/OrdersModel.js';
import userRouter from '../routes/userRouter.js';

const app = express();
const uri = process.env.MONGO_URL;

const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// MongoDB connection (connect only once per cold start)
mongoose.connect(uri).then(() => console.log("DB connected!"));

// Routes
app.post("/addNewUser", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);
  let addNewUser = new userModel({
    email: req.body.email,
    password: password,
  });
  await addNewUser.save();
  res.send("User saved");
});

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("Order saved!");
});

// Export serverless handler
export const handler = serverless(app);
