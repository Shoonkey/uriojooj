import wrapController from '../util/wrapController';
import { getProblemById, getProblems } from '../controllers/problem';

export default express => {

  const r = express.Router();

  r.get("/", wrapController(getProblemById));
  r.get("/all", wrapController(getProblems));

  return r;

};