require("dotenv").config({
  path: process.env.NODE_ENV === "production" ? ".env.prod" : ".env.dev"
});

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import setupGeneralRoutes from './routes/general';
import setupAuthRoutes from './routes/auth';


const app = express();
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "production")
  console.log("Oh noes, we shouldn't be in prod yet D:");

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: "http://localhost:3000" }));

setupGeneralRoutes(express, app);
setupAuthRoutes(express, app);

app.listen(port, () => console.log(`Server is up on port ${port}!`));