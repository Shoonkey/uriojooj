import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "production")
  console.log("Oh noes, we shouldn't be in prod yet D:");

app.use(morgan('dev'));
app.use(cors({ origin: "http://localhost:3000" }));

const defaultResponse = (req, res) => {
  res.status(200).send("Hol' up, server is still to be implemented");
}

app.get("/", defaultResponse);
app.post("/auth/signup", defaultResponse);
app.post("/auth/login", defaultResponse);

app.listen(port, () => console.log(`Server is up on port ${port}!`));