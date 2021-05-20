const Event = require('../models').Event

module.exports ={
    'createEvent' : async (req,res)=>{
        const body = req.body;
        if(!body.title || !body.validity){
            return res.status(400).send({
                error:{
                    message: "Invalid JSON Payload"
                }
            });
        }
        try{
            const event = new Event({
                title, validity
            });
            await event.save();
            res.status(201).send(event)
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
