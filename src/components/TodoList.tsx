import { Todo } from '../models/Todo';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todos: Todo[] = [
    { id: 1, title: 'Learn React', done: true },
    { id: 2, title: 'Learn Redux', done: false },
    { id: 3, title: 'Learn Everything', done: false }
  ];
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