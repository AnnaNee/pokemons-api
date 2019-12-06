const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const treinadores = require('./routes/treinadores')
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use('/treinadores', treinadores)

app.get('/', (request, response) => {
  response.send('Olá, mundo!')
})

app.listen(PORT)
console.info(`Rodando na porta ${PORT}`)
