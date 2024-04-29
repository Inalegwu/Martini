import { Field, InputType } from "@nestjs/graphql";
import { Todo } from "@prisma/client";


@InputType()
export class CreateTodo implements Omit<Todo,"id">{

    @Field({nullable:true})
    content: string;

    @Field({
        defaultValue:false
    })
    isDone:boolean
}