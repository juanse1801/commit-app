import express from "express";

// Middlewares
import middlewaresConfig from "./middlewares/index.js";

class Server {
  constructor() {
    this.app = express();
    this.listen();
    this.port = process.env.PORT;
    this.middlewares();
  }

  middlewares() {
    return middlewaresConfig(this.app);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server listen on port " + this.port);
    });
  }
}

export default Server;
