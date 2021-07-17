import React, { useContext } from 'react';

import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
import TodoListItem from './TodoListItem';

const TodoList = () => {

  const { todos, addTodo } = useContext<TodoContextType>(TodoContext);

  // const todos: Todo[] = [];
  const handleAddTodo = (title: string) => {
    addTodo(title);
  }

  return (
    <table className="uk-table">
      <caption>Lista de tarefas</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Tarefa</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {todos?.map(todo => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </tbody>
    </table>
  )
};

export default TodoList;