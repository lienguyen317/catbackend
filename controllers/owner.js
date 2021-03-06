const Owner = require("../models/owner");
const Cat = require('../models/cat');
const { Router } = require("express");
const router = Router();

router.get('/', async (req,res) => {
    const owner = await Owner.find({}).populate('cat')
    res.json({status: 200, data: owner})
})

router.post('/', async (req, res) => {
    const owner = await Owner.create(req.body)
    res.json({ status: 200, data: owner})
})

router.put("/:id", async (req, res)=>{
    res.json(await Owner.findByIdAndUpdate(req.params.id, req.body, {new: true}))
})


router.put('/:ownerId/addCat/:catId', async (req, res)=>{
    console.log('owner - put', req.params)
    const cat = await Cat.findById(req.params.catId)
    const owner = await Owner.findByIdAndUpdate(
        req.params.ownerId,
        {$push: {cat: cat.id}, new: true}
    )
    res.json({status: 200, data:owner})
})


router.delete("/:id", async (req, res) => {
    res.json(await Owner.findByIdAndRemove(req.params.id));
  });

module.exports = router