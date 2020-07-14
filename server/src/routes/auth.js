import wrapController from '../util/wrapController';
import { login, signup } from '../controllers/auth';

export default (express, app) => {

  const r = express.Router();

  r.post("/login", wrapController(login));
  r.post("/signup", wrapController(signup));

  app.use("/auth", r);

};