require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { readSocios, createSocio, eliminarSocio } = require('../utils/pg')

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(cors())
app.use(express.json())

app.get('/socios', async (_, res) => {
    try {
        const socios = await readSocios()
        res.status(200).json(socios)
    } catch (error) {
        console.error(error)
    }
})

app.post('/socios', async (req, res) => {
    try {
        const { nombre, correo, edad, cargo, telefono, direccion } = req.body
        const socio = { nombre, correo, edad, cargo, telefono, direccion }
        const nuevoSocio = await createSocio(socio)
        res.status(201).json(nuevoSocio)
    } catch (error) {
        console.error(error)
    }
})

app.delete('/socios/:id', async (req, res) => {
    try {
        const { id } = req.params
        const resultado = await eliminarSocio(id)
        if (resultado.length > 0) {
            res.status(200).json({ message: `Socio con ID ${id} eliminado correctamente` })
        } else {
            res.status(404).json({ message: `Socio con ID ${id} no encontrado` })
        }
    } catch (error) {
        console.error(error)
    }
})

app.all('*', (_, res) => res.status(404).json({ code: 404, message: 'La ruta no existe' }))

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))