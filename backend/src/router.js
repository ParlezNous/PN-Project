const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const messageControllers = require("./controllers/messageControllers");
const sellerControllers = require("./controllers/SellerControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/messages", messageControllers.browse);
router.post("/messages", messageControllers.add);

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", userControllers.add);
router.put("/users/:id", userControllers.edit);

router.get("/sellers", sellerControllers.browse);
router.post("/sellers", sellerControllers.add);

module.exports = router;
