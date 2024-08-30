//npm i express
//npm i -D @types/node @types/express
import express from 'express'
import { Request, Response } from 'express'


const app = express()
const port = 3000

app.get('/', (req,res)=>{
    res.send('Salve')
})

app.get('/tabuada/:numero', (req,res)=>{
    const numero = Number(req.params.numero)
    res.status(200).send(`${numero.toFixed(2)}`)
})

app.listen(port, ()=>{
    console.log(`Server rodando em http://localhost:${port}`)
})

//npx tsc
//node server.js
//npm i -D nodemon ts-node
//Para remover - npm uninstall
// npx nodemon --exec ts-node server.ts
// no package.json, configurei o comando npm start em "scripts" pra rodar a linha acima