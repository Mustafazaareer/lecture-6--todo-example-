import { Entity,Column,PrimaryGeneratedColumn, BaseEntity, } from "typeorm"

@Entity()
export class ToDo extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column({
        nullable:false //it means this attribute is required
    })
    userId:number
    @Column({
        length:50,
        nullable:false
    })
    title:string
    @Column({
        default:"no description"
    })
    description:string
    @Column()
    status:string
}