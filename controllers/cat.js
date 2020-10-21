const Cat = require("../models/cat");
const { Router } = require("express");
const router = Router();


//index route
router.get("/", async (req, res) => {
  res.json(await Cat.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Cat.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(await Cat.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Cat.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
