import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import  Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <div className="App overflow-y-scroll overflow-x-hidden bg-slate-100 box-border">
      <Router>
        <Routes>
          <Route path='/' element={<Login />}/>
          
          <Route path='/header' element={<Header />}/>
          <Route path='/home' element={<Home /> }/>
          
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
