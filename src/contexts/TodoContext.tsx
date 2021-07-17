import React, { createContext } from 'react';

import { Todo } from '../models/Todo';
import { TodoContextType } from './TodoContextType';

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => { },
  removeTodo: () => { },
  toggle: () => { },
});

const TodoProvider = (props: any) => {

  const todos: Todo[] = [
    { id: 1, title: 'Learn React', done: true },
    { id: 2, title: 'Learn Redux', done: false },
    { id: 3, title: 'Learn Everything', done: false }
  ];
  const addTodo = (title: string) => {
    todos.push({ id: todos.length + 1, title, done: false });
  }

  const removeTodo = (todo: Todo) => {
    // todos.splice(todos.indexOf(todo), 1);
    console.log('removendo todo ', todo.title);
  }

  const toggle = (todo: Todo) => {
    // todo.done = !todo.done;
    console.log('alterando todo', todo.title);
  }

  return (
    <TodoContext.Provider value={{
      todos,
      addTodo,
      removeTodo,
      toggle,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;