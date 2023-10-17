import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import connection from "./config/connectDB";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8081;
//config view engine
configViewEngine(app);

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connection to db
connection();

//init web routes
initWebRoutes(app);

app.listen(PORT, () => {
    console.log("start server at: ", PORT);
});
