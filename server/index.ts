import express, { Express, Request, Response, Application } from "express";
require("dotenv").config();
const { ENVIROMENT, PORT } = process.env;
import { addNewUser } from "./db/queries/addNewUser";
import { addNewProduct } from "./db/queries/addNewProduct";
import { uploadFile } from "./db/queries/fileUpload";
import { getAllProducts } from "./db/queries/getAllProducts";
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app: Application = express();

const port = PORT || 8000;

app.use(morgan(ENVIROMENT));
app.use(bodyParser.json());
app.use(cors()); // CORS middleware useage
app.use(multer().any());

app.get("/", (req: Request, res: Response) => {
  res.json({ greetings: "hello world" });
});

app.post("/addUser", (req: Request, res: Response) => {
  console.log(req.body)
  addNewUser(req.body).then((data) => res.send(data));
});

app.post("/addNewProduct", (req: Request, res: Response) => {

  addNewProduct(req.body).then((data) => res.send(data));
});

// app.post("/uploadImage", (req: Request, res: Response) => {

//   const name = req.body.text;
//   const file = req.file

//   if(name && file){
//     const url =uploadFile(name, file)
//     res.send(url)
//   }

//   res.send("error")
// });

app.get("/getAllProducts", (req: Request, res: Response) => {
  getAllProducts().then((response) => {
    res.send(response)
  });
});


app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
