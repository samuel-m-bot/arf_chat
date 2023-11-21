import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';
import ChatWindow from './components/ChatWindow';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<ChatWindow/>} />
      </Route>
    </Routes>
  );
}

export default App;
