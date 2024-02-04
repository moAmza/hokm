import express from "express";
import dotenv from "dotenv";

const run = async () => {
  dotenv.config();
  const app = express();

  app.use((req, res) => res.send("Hello"));
  app.listen(process.env.PORT, () =>
    console.log(`listenning on port ${process.env.PORT}`)
  );
};

run();
