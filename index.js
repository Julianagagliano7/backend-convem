const { request } = require("express");
const express = require("express");
const res = require("express/lib/response");
const app = express();

app.use(express.json());

const cors = require('cors');
app.use(cors({
  origin: '*'
}));

var message = "";

app.post("/project", (req, res) => {
  const { userAnswer } = req.body;

  const project = {
    message,
  };

  if (userAnswer.toLowerCase() == "sim") {
    project.message = "Parabéns, você está mais próximo de se juntar ao time!";
  } else {
    project.message = "ERRO";
  }

  return res.status(200).json(project);
});

app.listen(3000, () => {
  console.log("Server is working...");
});
