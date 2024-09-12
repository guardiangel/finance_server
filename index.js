import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js"
import KPI_Model from "./models/KPI_Model.js";
import {kpis} from "./data/data.js"


/**configure server */
dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/**routes */
app.use("/kpi", kpiRoutes);

/** set up mongoose */

// console.log("hello world")
const PORT = process.env.PORT || 9999;
mongoose.connect(process.env.MONGO_URL, {
})
    .then(async() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
        // await mongoose.connection.db.dropDatabase();// Don't do this in production, just for testing purposes
        // KPI_Model.insertMany(kpis);//Initialize the data.
    })
    .catch((error) => console.log(`${error} didn't connect!`));
