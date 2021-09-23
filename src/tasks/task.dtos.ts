import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';

export class ListTasksDto {
  search: string;
}

export class GetTaskDto {
  @IsNotEmpty()
  _id: string;
}

export class CreateTaskBody {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}

export class CreateTaskDto {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateTaskBody)
  body: CreateTaskBody;
}

export class UpdateTaskBody {
  title: string;
  description: string;
}

export class UpdateTaskDto {
  @IsNotEmpty()
  _id: string;
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => UpdateTaskBody)
  body: UpdateTaskBody;
}

export class DeleteTaskDto {
  @IsNotEmpty()
  _id: string;
}
