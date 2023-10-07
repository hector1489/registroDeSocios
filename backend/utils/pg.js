require('dotenv').config()
const { Pool } = require('pg')
const { v4: uuidv4 } = require('uuid')

const config = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    allowExitOnIdle: true
}

const pool = new Pool(config)

const genericSqlQuery = (query = '', values = []) => pool
    .query(query, values)
    .then(({ rows }) => rows)
    .catch(({ code, message }) => ({ code, message }))


const readSocios = async () => await genericSqlQuery('SELECT * FROM socios;')

const createSocio = async ({ nombre, correo, edad, cargo, telefono, direccion }) => {
    const query = 'INSERT INTO socios(id, nombre, correo, edad, cargo, telefono, direccion) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;'
    const id = uuidv4()
    const values = [id, nombre, correo, edad, cargo, telefono, direccion]
    return await genericSqlQuery(query, values)
}

const eliminarSocio = async (id) => {
    const query = 'DELETE FROM socios WHERE id = $1 RETURNING *;'
    const values = [id]
    return await genericSqlQuery(query, values)
}

module.exports = {
    readSocios,
    createSocio,
    eliminarSocio
}