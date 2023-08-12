import express from 'express';
import { Db } from 'typeorm';
const router =express.Router();

router.get('/',(req,res)=>{
    Db
    console.log(res.locals.user);
    console.log(res.locals.logMessage);

    res.send("All Users")
})

router.post('/',(req,res)=>{
    res.send("User created")
})

router.put('/',(req,res)=>{
    const id =req.query.id;
    res.send("User updated")
})

router.delete('/:id',(req,res)=>{
    res.send("User  deleted")
})

router.get('/:id',(req,res)=>{
    res.send("get specific User")
})

export default router;