const express = require('express')
const router = express.Router()
const User = require('../models/user')


router.get('/', async(req,res) => {
    try{
           const aliens = await User.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const alien = await User.findById(req.params.id)
           res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const user1 = new User({
        title: req.body.title,
        description: req.body.description
    })

    try{
        const a1 =  await user1.save() 
        res.json(a1)
    }catch(err){
        res.send(err);
    }
})

router.put('/:id',async(req,res)=> {
    try{
        const alien = await User.findById(req.params.id)
        console.log(alien); 
        alien.description = req.body.description
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send(er);
    }

})
router.delete('/:id',async(req,res)=>{
    try{
        const alien=await User.findByIdAndDelete(req.params.id);
        res.send('deleted successfully.....')
        
    }
    catch(err){
        res.send(err)
    }
})


module.exports = router