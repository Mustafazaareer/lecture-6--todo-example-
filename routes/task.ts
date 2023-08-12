import express from 'express';
import data from '../data/MOCK_DATA-2.js';
import Task from '../types/task.js';
import { v4 as uuidv4, v4} from 'uuid';


const router =express.Router();
router.use((req,res,next)=>{
    console.log("hi there from task route");
    next();
})
router.get('/',(req: Task.Request,res:Task.Response)=>{
    const page =parseInt(req.query.page||'1');
    const pageSize =parseInt(req.query.pageSize||'10');
    const filteredItems=data.slice((page-1)*pageSize,page*pageSize);
    res.send({
        page,
        pageSize,
        total:data.length,
        items:filteredItems
    })
})

router.post('/',(req:Task.Request,res:Task.Response)=>{
    if(!req.body.title||!req.body.userId){
        res.status(400);
        return;
    }
    const newTask:Task.item={
        id:v4(),
        title:req.body.title,
        description:req.body.description,
        userId:req.body.userId,
        status:"new",
        index:data.length
    }

    data.unshift(newTask);
    res.status(201).send(newTask);
})

router.put('/:id',(req,res)=>{
    res.send("Task updated")
})

router.delete('/:id',(req,res)=>{
    res.send("Task  deleted")
})

router.get('/:id',(req,res)=>{
    const id =req.params.id;
    const task = data.find(item=>item.id ===id)
    if(task){
        res.send(task);
    }else {
        res.status(404).send("not found")
    }
})

export default router;