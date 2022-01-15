import dotenv from "dotenv";
import serverConfig from "./src/server.js";

dotenv.config();
const Server = new serverConfig();
