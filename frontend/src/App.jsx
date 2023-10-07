import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Form from './components/Form'
import SocioTable from './components/SocioTable'

const urlBaseServer = 'http://localhost:3000'

const App = () => {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [edad, setEdad] = useState('')
  const [cargo, setCargo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')
  const [socios, setSocios] = useState([])

  const getSocios = async () => {
    const { data: socios } = await axios.get(`${urlBaseServer}/socios`)
    setSocios([...socios])
  }

  const agregarSocio = async () => {
    const socio = { nombre, correo, edad, cargo, telefono, direccion }
    await axios.post(`${urlBaseServer}/socios`, socio)
    getSocios()
  }

  const eliminarSocio = async (id) => {
    await axios.delete(`${urlBaseServer}/socios/${id}`)
    getSocios()
  }

  useEffect(() => {
    getSocios()
  }, [])

  return (
    <div className='App'>
      <h2 className='py-5 text-center'>Registro de Socios:</h2>
      <div className='row m-auto px-5'>
        <div className='col-12 col-sm-4'>
          <Form
            setNombre={setNombre}
            setCorreo={setCorreo}
            setEdad={setEdad}
            setCargo={setCargo}
            setTelefono={setTelefono}
            setDireccion={setDireccion}
            agregarSocio={agregarSocio}
          />
        </div>
        <div className='col-12 col-sm-8 px-5 row posts align-items-start'>
          <SocioTable socios={socios} eliminarSocio={eliminarSocio} />
        </div>
      </div>
    </div>
  )
}

export default App
