import React from 'react';

import TodoContext from '../contexts/TodoContext';
import NavBar from './NavBar';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className="uk-container">
      <NavBar />
      <TodoContext>
        <TodoList />
      </TodoContext>
    </div>
  )
}

export default App;
