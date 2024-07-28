import React ,{ useState } from 'react';
import './App.css';
import Header from './Componant/Header.jsx';
import SideBar from './Componant/Sidebar.jsx';
import MoneyManagement from './Componant/MoneyManagement.jsx';
import MoneyGraph from './Componant/MoneyGraph.jsx';

function App() {  

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
