import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./src/db/database.js"
import routeServices from "./src/routes/products.routes.js";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 9000;

/* A whitelist of the origins that are allowed to access the API. */
const whitelist = ["http://localhost:5173", "http://appEnProduccion.com"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

/* A middleware that allows the server to receive requests from a different origin. */
app.use(express.json());
// app.use(cors(corsOptions));
db()
app.use(routeServices)
/* app.use(rutaParaEnviarAlFrontend) */

app.listen(PORT, () => {
  console.log(`server application initialization on port ${PORT}`);
});
