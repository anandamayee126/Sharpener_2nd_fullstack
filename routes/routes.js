const express= require('express');
const router= express.Router();
const Presence= require('../models/presence_db');

router.post('/attendance',async(req,res) => {
    const name=req.body.name;
    const student_id= req.body.id;
//whether the student is present or absent
    const present= await Presence.findByPk(student_id);
    



    
})