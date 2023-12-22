
import './App.css'
import ProyectoIMC from './Componentes/ProyectoIMC'
import imc from '../public/imc.jpg'

function App() {

  return (
    <div className='App'>
     
      <img src={imc} alt="logo de la aplicacion" className="logo" />
      <div className="texto"></div>
      <ProyectoIMC  />
    </div>
  )
}

export default App
