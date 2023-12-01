import { IToDo } from "./itodo";

export class Todo implements IToDo{
  id!: number;
  constructor (
    public title: string,
    public completed: boolean|string
    ) {}
}
