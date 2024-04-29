import { Field, ObjectType } from "@nestjs/graphql";
import { Todo as PrismaTodo } from "@prisma/client";

@ObjectType()
export class Todo implements PrismaTodo{

    @Field()
    id:string;

    @Field()
    content:string;


    @Field((type)=>Boolean,{
        defaultValue:false,
    })
    isDone: boolean;

}