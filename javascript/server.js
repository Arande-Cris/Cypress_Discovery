const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({massage: 'Hello Cypress Discovery'})
})

app.get('/avengers', function (req, res) {
    var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoffer', 'Steve Rogers', 'Arande Souza', 'teste']
    return res.json({data: avengers})
})

app.get('/cnh', function (req, res) {
    const idade = req.query.idade

    if (!idade) {
     return res.json('Idade é um campo obrigatório')
       
    }

    var idadeNum = parseInt(idade)

    

    if (idadeNum >= 18){
     return res.json({massage: 'Ok, você pode tirar sua CNH'})
    }
    else if(idadeNum >=5){
     return res.json({massage: 'Você é menor de idade, por enquanto sugiro andar de Patinete'})
    }
    else{
     return res.json({massage:'Precisa tomar muito leite antes....'})
    }
})

app.listen(3005)