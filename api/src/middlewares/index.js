import cors from "cors";
import express from "express";
import morgan from "morgan";

const middlewaresConfig = (app) => {
  app.use(
    cors({
      origin: "*",
      credentials: true,
      methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
      allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "authorization",
      ],
    })
  );

  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));
};

export default middlewaresConfig;
