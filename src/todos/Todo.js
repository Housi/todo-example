import nanoid from "nanoid";

export default class Todo {
  constructor(name, order) {
    this.name = name;
    this.isDone = Boolean(false);
    this.id = nanoid(4);
    this.order = order;
  }
}
