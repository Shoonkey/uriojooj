import express from 'express';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "production")
  console.log("Oh noes, we shouldn't be in prod yet D:");

app.use(morgan('dev'));

app.get("/", (req, res) => {
  res.status(200).send("Hol' up, server is still to be implemented");
});

app.listen(port, () => console.log(`Server is up on port ${port}!`));