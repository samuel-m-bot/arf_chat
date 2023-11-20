import React from 'react'
import {Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomeLayout from './components/HomeLayout';
import Layout from './components/Layout';
import Public from './components/Public';
import ChatWindow from './components/ChatWindow';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Public/>} />
        <Route path='chat' element={<HomeLayout/>}>
          <Route index element={<ChatWindow/>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
