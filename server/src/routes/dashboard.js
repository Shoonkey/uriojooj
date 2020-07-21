import wrapController from '../util/wrapController';
import { getDashboardData } from '../controllers/dashboard';

export default express => {

  const r = express.Router();

  r.get("/", wrapController(getDashboardData));

  return r;

};