const Bug = require('../models').Bug

module.exports = {
    'createBug': async (req,res)=>{
        // TODO: add express-validator
        const body = req.body
        if(!body.title ||!body.description || !body.category){
            return res.status(400).sned({
                error: {
                    message: "Invalid JSON Payload"
                }
            })
        }
        try{
            const { title, description , category } = body;
            const bug = new Bug({
                title, description, category
            });
            await bug.save();
            res.status(201).send(bug)
        }
        catch(err){
            require.status(500).send({
                error: {
                    message: err.message
                }
            })
        }
    },

    'listBugs': async (req,res)=>{
        try{
            const users = await Bug.find({});
            res.status(200).send(users);
        }
        catch(err){
            res.status(500).send({
                error:{
                    message: err.message
                }
            })
        }
    },

    'listRecentlyCreatedBugs': async (req,res)=>{
        try{
            let limit = 5;
            if(req.query.limit){
                limit = req.params.limit;
            }
            const users = await Bug.find().sort({"_id": -1}).limit(limit);
            res.status(200).send(users);
        }
        catch(err){
            res.status(500).send({
                error:{
                    message: err.message
                }
            })
        }
    },

    'getBugById': async (req,res)=>{
        try{
            const bugId = req.params.bugId;
            const bug = await Bug.findById(bugId);
            res.status(200).send(bug);
        }
        catch(err){
            res.status(500).send({
                error:{
                    message: err.message
                }
            })
        }
    },
    'updateBug': async (req,res)=>{
        try{
            const body = req.body;
            const user = await Bug.findByIdAndUpdate(body); 
            res.status(202).send(user);
        }
        catch(err){
            res.status(500).send({
                error:{
                    message: err.message
                }
            })
        }   
    }
}