const express = require('express');
const router = express.Router();
router.use(express.json());
//import of blog Model 
const Movie=require("../models/productModel");   //Model mte3 e donnees 

//POST ajout blog 
router.post("/addmovie",async (req,res)=>{
    try{
        //our codes 
        //creation d'echntilon avec les donnees du requete
        const movie = new Movie({
            name: req.body.name,
            average: req.body.average,
            id: req.body.id,
          productor:req.body.productor,
          
          categ: req.body.categ,
          descreption:req.body.descreption,
          
        })
        console.log("Movie",movie);

        const blogToSave = await movie.save(); //connexion avec BD
        res.status(201).json(movieToSave)
    }catch(err){
        res.status(500).json({"msg":err})
    }
})

//Get liste des movies 
router.get("/getAllmovies",async(req,res)=>{
    try{
        //our codes 
        const movie = await Blog.find();
        res.status(200).json(movie)
    }catch(err){
        res.status(500).json({"msg":err})
    }
})

//PUT, PATCH modifcation du blog 
router.put("/updatemovie/:id",async (req,res)=>{
    try{
        //our codes 
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Blog.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)







    }catch(err){
        res.status(500).json({"msg":err})
    }
})

//Delete movie
router.delete("/deletemovie/:id",async(req,res)=>{
    try{
        //our codes 
        const id = req.params.id;
        const data = await Blog.findByIdAndDelete(id)
        res.status(200).send(`Document with ${data.titre} has been deleted..`)


    }catch(err){
        res.status(500).json({"msg":err})
    }
})



//Get by ID Method
router.get('/getOnemovie/:id', async (req, res) => {
    try{
        const blog = await movie.findById(req.params.id);
        res.json(blog)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})




















module.exports = router;