
import Titulo from './components/titulo'
import Lista from './components/distros'
import Links from './components/links'
import Logos from './components/logos'
import React from 'react'
import linux_distros from './assets/imgs/linux_distros.jpg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
  
    <div>
      <header>
        <h1>Compilado de Distros do Linux</h1>
      </header>
      <Outlet/>
      <footer>
        <p>Feito com React Router</p>
      </footer>
    </div>
  );
}

export default App
