import express from 'express'
namespace Task{
    export interface item{
        id:string,
        userId: number,
        title: string,
        description: string,
        status: "new"|"done",
        index:number
    }
    export interface Response extends express.Response{
        send:(
            body:any|{
                page:number,
                pageSize:number,
                total:number,
                items:Array<Task.item>}
                
        )=>this
    }
    export interface Request extends express.Request {
        body:{
        userId: number,
        title: string,
        description: string,
        },
        query:{
            page:string,
            pageSize:string
        }
        
    }
}
export default Task;