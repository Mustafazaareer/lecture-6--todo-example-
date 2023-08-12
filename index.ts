import express from 'express';
import userRouter from './routes/user';
import taskRouter from './routes/task';
import { logger,rateLimitMiddleware } from './middlewares/generic';
import db from './db/index'



const app =express();
const PORT =3200;
//   app.use(morgan('dev'));


app.use(express.json());

// app.delete('/todo/user',logger);
app.use(logger);
app.use(rateLimitMiddleware);



app.get('/',(req,res)=>{
    res.send('server runing')
})

app.use('/todo/user',userRouter);
app.use('/todo/task',taskRouter);


app.all('*', (req, res, next) => {
    res.status(400).send(`Can't find this route: ${req.originalUrl}`);
  });
  

app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`)
    db.initializeDB()
})