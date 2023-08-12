
import "reflect-metadata"
import { DataSource } from "typeorm"
import { ToDo } from "./entity/Todo"

const db = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "passMustafa",
    database: "gsg_todo",
    entities: [ToDo],
    synchronize: true,
    logging: false,
})

    const initializeDB =()=>{
        db.initialize().then(()=>{
    console.log(`Connected to DB!`)
}).catch((err)=>{
    console.log(`Faild to connect to DB : ${err}`)
})
    }

export default {
    initializeDB
}