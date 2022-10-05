import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import AddUSer from './components/AddUser';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' component={UserList} />
        <Route exact path='/add' component={AddUSer} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

