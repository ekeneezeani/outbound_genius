import express, { Express, Request, Response , Application } from 'express';
require('dotenv').config()
const {ENVIROMENT, PORT} = process.env;
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Firebase


const admin = require("firebase-admin")

const credential = require("./key.json")

admin.initializeApp({
credential: admin.credential.cert(credential)
})

const db = admin.firestore();


const app: Application = express();
const port = PORT || 8000;

app.use(morgan(ENVIROMENT));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
res.json({greetings: 'hello world'});
});

app.post("/create", async (req:Request, res:Response) => {


  try{
    console.log(req.body)
    const newUser = {
      name: req.body.name,
      age: req.body.age
    }

    const response = await db.collection("users").add(newUser)
    res.send(response.data())
  }catch(error){
    res.send(error)
  }

})

app.get("/read/all", async (req:Request, res:Response) =>{
  try{
    const userRef = db.collection("users");
    const response = await userRef.get();
    
    let usersArray = [];

    response.forEach(user => {
      console.log(user.data())
      usersArray.push(user);
      
    });

    res.send(usersArray)
  }catch(error){
    res.send(error)
  }
})


app.listen(port, () => {
console.log(`Server is Fire at http://localhost:${port}`);
});