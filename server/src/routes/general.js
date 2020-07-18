import wrapController from '../util/wrapController';
import { getDashboardData } from '../controllers/general';

export default (express, app) => {

  app.get("/dashboard", wrapController(getDashboardData));

};