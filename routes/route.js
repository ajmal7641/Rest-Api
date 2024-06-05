const express = require ("express")
const router = express.Router()
const model = require("../model/model")

router.post('/register',async(req,res)=>{
    const employee = new model({
        emp_id : req.body.emp_id,
        emp_name : req.body.emp_name,
        department : req.body.department
    });

    try{
        const dataSave = await employee.save()
        res.status(200).json(dataSave)
    }
    catch (error) {
        res.status(400).json({message : error.message})

    }
})



router.get('/viewDetails/:id',async (req,res)=>{
    try{
        const data = await model.findById(req.params.id)
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({message : error.message})
    }
})


router.put('/update/:id',async (req,res)=>{
    try{
        const id = req.params.id
        const updatedData = req.body
        const options = {new : true}  
        const result = await model.findByIdAndUpdate(id,updatedData,options)
        res.send(result)
    }

    catch (error){
        res.status(400).json({mesaage: error.mesaage})
    }
})


router.delete('/delete/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const result = await model.findByIdAndDelete(id)
        res.send(`has been deleted`)

    }
    catch(error) {
        res.status(400).json({message : error.message})

    }
})

module.exports = router;