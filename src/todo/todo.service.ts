import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { CreateTodo } from "./create-todo.entity";
import type { Todo } from "./todo.entity";

@Injectable()
export class TodoService {

constructor(private readonly prisma:PrismaService){}

  async findAll(): Promise<Todo[]> {
    const todos=await this.prisma.todo.findMany();

    return todos
  }

  async saveTodo(args:CreateTodo){
    return this.prisma.todo.create({
        data:args
    })
  }

  async deleteTodo(id:string){
    const deleted=await this.prisma.todo.delete({
        where:{
            id:id
        }
    })

    return deleted
  }

  async updateTodo({todoId,content}:{todoId:string,content:string}){
    const updated=await this.prisma.todo.update({
        where:{
            id:todoId
        },
        data:{
            content
        }
    })

    return updated
  }

}
