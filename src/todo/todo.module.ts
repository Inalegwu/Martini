import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TodoResolver } from './todo.resolver';
import { TodoService } from './todo.service';

@Module({
  providers: [TodoService,TodoResolver,PrismaService]
})
export class TodoModule {}
