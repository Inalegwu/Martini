import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { PrismaService } from "./prisma.service";
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "src/schema.gql",
    }),
    TodoModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
