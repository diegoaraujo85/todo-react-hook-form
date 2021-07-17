import React from 'react';

import NavBar from './NavBar';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className="uk-container">
      <NavBar />
      <h1>meu primeiro app</h1>
      <TodoList />
    </div>
  )
}

export default App;
