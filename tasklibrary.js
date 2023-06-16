const express = require('express')
const app = express()
const port = 3000
const session = require("express-session");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

app.use(
    session({
      secret: "supersecret",
      resave: false,
      saveUninitialized: true,
      cookie: {},
    })
  );
  
  app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerFile));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());


  
app.listen(port, () => {
    console.log('App is listening')
})