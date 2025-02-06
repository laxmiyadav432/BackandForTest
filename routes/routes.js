// const { route } = require('..');
// const routes = require('./routes/routes');
// app.use('/api', routes)

// module.exports = ro

// router.post('/post', (req,res) =>{
//     res.send('Post API')
// })

// router.get('/getAll', (req, res) =>{
//     res.send('Get All API')
// })

// router.get('/getOne/:id', (req, res) =>{
//     res.send('Get by Id API')
// })

// router.patch('/update/:id',(req, res) =>{
//     res.send('Update by ID API')
// })

// router.delete('/delete/:id', (req, res) =>{
//     res.send('Delete by ID API')
// })






const Model = require('../model/model');
const express = require('express');
const router = express.Router();


router.post('/post', async(req,res) => {
    const data = new Model({
        name:req.body.name,
        age: req.body.age
    })

    try{
       const dataToSave = await data.save();
       res.status(200).json(dataToSave)
    }catch(error){
        res.status(400).json({message: error.message})
    }
})
router.get('/getAll', async(req, res) =>{
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

router.patch('/update/:id', async(req, res) =>{
    try{
        const id = req.params.id;
        const updateData = req.body;
        const options = {new: true};

        const result = await Model.findByIdAndUpdate(
            id, updateData, options
        )
        res.send(result)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

router.delete('/delete/:id', async(req, res) =>{
    try{
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Documebt with ${data.name} has been deleted..`)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports = router;





// const Model = require('../model/model');
// const express = require('express');
// const router = express.Router();

// // POST API
// router.post('/post', async (req, res) => {
//     const data = new Model({
//         name: req.body.name,
//         age: req.body.age,
//         id: req.body.id,
//     });
//     try {
//         const dataToSave = await data.save();
//         res.status(201).json(dataToSave);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// // GET all API
// router.get('/getAll', async (req, res) => {
//     try {
//         const data = await Model.find();
//         res.json(data);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // GET by ID API
// router.get('/getOne/:id', async (req, res) => {
//     try {
//         const data = await Model.findById(req.params.id);
//         if (!data) {
//             return res.status(404).json({ message: "Document not found" });
//         }
//         res.json(data);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // Update by ID method
// router.patch('/update/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const updateData = req.body;
//         const options = { new: true };

//         const result = await Model.findByIdAndUpdate(id, updateData, options);
//         if (!result) {
//             return res.status(404).json({ message: "Document not found" });
//         }
//         res.json(result);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// // DELETE API
// router.delete('/delete/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const data = await Model.findByIdAndDelete(id);
//         if (!data) {
//             return res.status(404).json({ message: "Document not found" });
//         }
//         res.send(`Document with ${data.name} has been deleted.`);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// module.exports = router;


