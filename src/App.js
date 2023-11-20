import React from 'react'
import {Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Public/>} />
      </Route>
    </Routes>
  );
}

export default App;
