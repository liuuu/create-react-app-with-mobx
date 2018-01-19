import { observable, computed } from 'mobx';

class Todo {
  @observable name;
  @observable id;
  @observable completed;

  constructor(name) {
    this.name = name;
    this.id = Date.now();
    this.completed = false;
    this.showAll = true;
  }
}

class TodoStore {
  @observable todos = [];
  @observable filter = '';
  @observable showAll = true;

  @computed
  get filteredTodos() {
    // dont't know if this way good or not
    if (this.showAll) return this.todos.filter(todo => todo.name.includes(this.filter));
    return this.todos.filter(todo => todo.completed === true && todo.name.includes(this.filter));
  }

  createTodo(value) {
    const newTodo = new Todo(value);
    this.todos.push(newTodo);
    console.log('this.todos', this.todos);
  }

  handleClear() {
    const inCompletedTodos = this.todos.filter(todo => todo.completed === false);
    this.todos.replace(inCompletedTodos);
  }
}

const store = new TodoStore();

export default store;
