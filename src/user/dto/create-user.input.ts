import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, Length } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @Length(2, 50)
  name: string;

  @Field()
  @IsEmail()
  @Length(5, 100)
  email: string;
}
