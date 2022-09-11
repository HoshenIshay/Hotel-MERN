const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());


const CONNECTION_URL =
"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";


app.get("/sendSMS", function (req, res) {
  var accountSid = "xxxxxxxxxxxxxxxxxxxxxxxxxx"; 
  var authToken = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; 

  var twilio = require("twilio");
  var client = new twilio(accountSid, authToken);

  client.messages
    .create({
      body: "Hello from Node",
      to: "xxxxxxxxxxxxx",
      from: "xxxxxxxxxxxxxxxxxxxx",
    })
    .then((message) => res.send(`The message with id: ${message} was sent!`));
});

mongoose.connect(
    CONNECTION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to Database")
  );

const create = require("./router/create.js");
const get = require("./router/get.js");
const update = require("./router/update.js");
const deletes = require("./router/delete.js");
const createGuest = require("./router/createGuest.js");
const getGuest = require("./router/getGuest.js");
const createUser = require("./router/createUser.js");
const getUser = require("./router/getUser.js");

app.use("/create", create);
app.use("/get", get);
app.use("/update", update);
app.use("/delete", deletes);
app.use("/createGuest", createGuest);
app.use("/getGuest", getGuest);
app.use("/createUser", createUser);
app.use("/getUser", getUser);


app.listen(5000, () => console.log("Running on port 5000"));
