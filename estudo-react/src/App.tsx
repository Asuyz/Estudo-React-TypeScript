
import Titulo from './components/titulo'
import Lista from './components/distros'
import Links from './components/links'
import Logos from './components/logos'
import linux_distros from './assets/imgs/linux_distros.jpg'
import './App.css'

function App() {
  

  return (
    <>
    <h1>Compilado de Distros do Linux, seja bem vindo a sua nova religião</h1>
        <Titulo></Titulo>
        <Lista></Lista>
        <Links></Links>
    <h2>Escolha a sua biblia (digo documentação) </h2>
        <img src={linux_distros} alt="Imagem de várias distros do Linux" width='600px'/>
    <h3>Navegue entre as logos</h3>
    <Logos></Logos>
    
    </>
  )
}

export default App
