//npm i prompt-sync
//npm i -D @types/prompt-sync

import PromptSync from "prompt-sync"
const prompt = PromptSync()

function calcularArea (lado: number): number {
    return lado * lado
}

const numDigitado = Number(prompt("Digite o valor: "))

const quadrado = calcularArea(numDigitado)
console.log(quadrado)

type situacao = "aprovado" | "reprovado"

interface Aluno {
    nome: string,
    mediaFinal: number,
    situacao: string,
}

const aluno: Aluno = {
    nome: "Teste",
    mediaFinal: 9,
    situacao: "aprovado"
}

console.log(aluno.nome)

function AlunoFactory (nome: string, mediaFinal: number): Aluno {
    let situacao: situacao = 'reprovado'
    if(mediaFinal > 6) {
        situacao = 'aprovado'
    } 

    return {
        nome,
        mediaFinal,
        situacao
    }
}

const aluno3 = AlunoFactory('Teste3', 9)
console.log(aluno3.situacao)