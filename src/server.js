import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import initProductApiRoutes from "./routes/productApi";
import initCartApiRoutes from "./routes/cartApi";
import initOrderApiRoutes from "./routes/orderApi";
import bodyParser from "body-parser";
import ConfigCors from "./config/cors";
// import connection from "./config/connectDB";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8081;

//config CORS
ConfigCors(app);

//config view engine
configViewEngine(app);

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connection to db
// connection();

//init web routes
initWebRoutes(app);
initApiRoutes(app);
initProductApiRoutes(app);
initCartApiRoutes(app);
initOrderApiRoutes(app);

app.listen(PORT, () => {
    console.log("start server at: ", PORT);
});
