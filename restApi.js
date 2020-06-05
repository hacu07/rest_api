/** import packages */
const express = require("express");
const config = require("config");
const controller = require("./controllers/customer/customer.controller");
const controllerLogin = require("./controllers/security/login.controller");
const controllerDelivery = require("./controllers/delivery/delivery.controller");
const bodyParser = require("body-parser");

/** server configuration */
let bodyParserJSON = bodyParser.json();
let bodyParserUrlEncoded = bodyParser.urlencoded({ extended: true });
let app = express();
app.use(bodyParserJSON);
app.use(bodyParserUrlEncoded);

/** REST api methods for customer */

// welcome message
app.get("/", (req, res) => {
    res.send("Welcome to my express server.");
});

/***********************************
 * POST
 */


app.post("/api/customer/create", (req, res, next) => {
    controller.createCustomer(req, res, next);
});

app.post("/api/delivery/create", (req, res, next) => {
    controllerDelivery.createDelivery(req, res, next);
});

/***************************************
 * GET
 */
app.get("/api/customer/getAll", (req, res, next) => {
    controller.getAllCustomers(req, res, next);
});

app.get("/api/customer/getByDocument/:document", (req, res, next) => {
    controller.getCustomerByDocument(req, res, next);
});

app.get("/api/delivery/getAll", (req, res, next) => {
    controllerDelivery.getAll(req, res, next);
});

app.get("/api/delivery/getById/:_id", (req, res, next) => {
    controllerDelivery.getById(req, res, next);
});

/****************************************
 * PUT
 */
app.put("/api/customer/update", (req, res, next) => {
    controller.updateCustomer(req, res, next);
});

app.put("/api/delivery/update", (req, res, next) => {
    controllerDelivery.update(req, res, next);
});

/****************************************
 * DELETE
 */
app.delete("/api/customer/delete", (req, res, next) => {
    controller.removeCustomer(req, res, next);
});

app.delete("/api/delivery/delete/:_id", (req, res, next) => {
    controllerDelivery.delete(req, res, next);
});

/** Login customer */
app.post("/api/customer/login", (req, res, next) => {
    controllerLogin.loginUser(req,res, next);
});

/** Run server */
const port = config.get("port");
app.listen(port, () => {
    console.log(`Express server is running in port ${port}`);
});















