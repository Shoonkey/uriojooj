import fs from 'fs';
import path from 'path';

import wrapController from '../util/wrapController';
import { getDashboardData } from '../controllers/dashboard';

export default function setupRoutes(express, app){

  console.log("\nSetting up routers...");
  fs.readdirSync(__dirname).forEach(filename => {

    const name = path.basename(filename, path.extname(filename));

    if (name !== "index"){
      // Default required because of the use of export default syntax
      const router = require(`./${name}`).default(express);
      app.use(`/${name}`, router);
      console.log(`/${name} ✓`);
    }

  });

  console.log("Done!\n");

};