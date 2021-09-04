const express = require("express");
const route = express.Router();

const usercontroller = require("../controller/usercontroller");
const exercisecontroller = require("../controller/exercisecontroller");

route.get("/users/", usercontroller.get);
route.post("/users/add", usercontroller.add);

route.get("/exercises/", exercisecontroller.get);
route.post("/exercises/add", exercisecontroller.add);
route.get("/exercises/:id", exercisecontroller.getOne);
route.delete("/exercises/:id", exercisecontroller.delete);
route.put("/exercises/update/:id", exercisecontroller.update);

module.exports = route;
