import express from "express";

// Middlewares
import middlewaresConfig from "./middlewares/index.js";
import routesConfig from "./routes/index.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
    this.listen();
  }

  middlewares() {
    return middlewaresConfig(this.app);
  }

  routes() {
    return routesConfig(this.app);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server listen on port " + this.port);
    });
  }
}

export default Server;
