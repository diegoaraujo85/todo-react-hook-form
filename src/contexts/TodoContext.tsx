import React, { createContext, useEffect, useState } from 'react';

import { Todo } from '../models/Todo';
import { get, save } from '../services/TodoService';
import { TodoContextType } from './TodoContextType';

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => { },
  removeTodo: () => { },
  toggle: () => { },
});

const TodoProvider = (props: any) => {

  const [todos, setTodos] = useState<Todo[]>(get);
  // const [todos, setTodos] = useState<Todo[]>([
  //   { id: 1, title: 'Buy milk', done: false },
  //   { id: 2, title: 'Buy bread', done: false },
  //   { id: 3, title: 'Buy chocolates', done: false },
  // ]);

  useEffect(() => {
    save(todos);
  }, [todos]);

  const addTodo = (title: string) => {
    const todo: Todo = { id: todos.length + 1, title, done: false };
    setTodos([...todos, todo]);
  }

  const removeTodo = (todo: Todo) => {
    console.log('removendo todo ', todo.title);
    const index = todos.indexOf(todo);
    setTodos(todos.filter((_, i) => i !== index));
  }

  const toggle = (todo: Todo) => {
    console.log('alterando todo', todo.title);
    const index = todos.indexOf(todo);
    todos[index].done = !todo.done;
    setTodos([...todos]);
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