import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TodoContext from '../contexts/TodoContext';
import AddTodo from './AddTodo';
import NavBar from './NavBar';
import TodoList from './TodoList';

const App = () => {
  return (
    <TodoContext>
      <Router>
        <NavBar />
        <br />
        <div className="uk-container">
          <Switch>
            <Route path="/create">
              <AddTodo></AddTodo>
            </Route>

            <Route path="/" exact>
              <h4>Minha Lista de Tarefas</h4>
              <TodoList />
            </Route>
          </Switch>
        </div>
      </Router>
    </TodoContext>
  )
}

export default App;
