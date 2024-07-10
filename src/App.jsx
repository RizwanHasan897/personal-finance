import React ,{ useState } from 'react';
import './App.css';
import Header from './Componant/Header.jsx';
import SideBar from './Componant/Sidebar.jsx';
import MoneyManagement from './Componant/MoneyManagement.jsx';
import MoneyGraph from './Componant/MoneyGraph.jsx';

function App() {

  const getData = async (url) => {
    const newData = await fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => res.json());
  
    console.log(newData);
  }

  getData('http://localhost:5000/quit')
  

  return (
    <div className='app'>
      <Header />
      <SideBar />
      <MoneyManagement />
      <MoneyGraph />
    </div>
  );
};

export default App;
