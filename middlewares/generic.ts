import express from 'express';
import USER_DATA from '../data/MOCK_USER_DATA';

const logger = (req:express.Request, res:express.Response, next:express.NextFunction)=>{
    console.log(`${new Date()} [${req.method} ${req.path}]`);
    res.locals.logMessage =`${new Date()} [${req.method} ${req.path}]`;
    next();
}

const rateLimitMiddleware = (req:express.Request,res:express.Response,next:express.NextFunction)=>{
    console.log(JSON.stringify(req.headers));
    console.log(res.locals.logMessage);

    if(req.headers['userid']){
        const user = USER_DATA.find((u)=>u.id === Number(req.headers['userid']))
        if(user){
            if(user.tokens > 0){
                // const index =USER_DATA.findIndex((user)=>{user.id===req.headers['user-id']});
                // USER_DATA[index].tokens -=1;
                user.tokens -=1;
                console.log("User ID :"+req.headers['user-id']);
                console.log("Tokens Left :"+user.tokens);
                res.locals.user=user;
                next();
            }else{
                res.status(429).send("you used all of your tokens");
            }
        }else{
            res.status(401).send("the system does not recognize you");
        }
    }else{
        res.status(401).send("you are not authorized");
    } 
    
} 

export {
    logger,
    rateLimitMiddleware
}