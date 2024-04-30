import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateTodo, Todo } from "./todo.entity";
import { TodoService } from "./todo.service";


@Resolver((of)=>Todo)
export class TodoResolver{

    constructor(private readonly todoService:TodoService){}

    @Query((returns)=>[Todo])
    async getTodos(){
        return this.todoService.findAll();
    }

    @Mutation((returns)=>Todo)
    async saveTodo(@Args({name:"todo"}) todo:CreateTodo){
        return this.todoService.saveTodo(todo);
    }

    @Mutation((returns)=>Todo)
    async deleteTodo(@Args({name:"todoId"}) id:string){
        return this.todoService.deleteTodo(id)
    }

    @Mutation((returns)=>Todo)
    async updateTodo(@Args({name:"id"}) todoId:string,@Args({name:"content"}) content:string){
        return this.todoService.updateTodo({
            todoId,
            content
        })
    }

}