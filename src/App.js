import React from 'react';
import './App.css';

import Header from './containers/Header';
import TodoList from './containers/TodoList';

function App() {
  return (
    <div className="app">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
