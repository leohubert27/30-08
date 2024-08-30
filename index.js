"use strict";
//npm i prompt-sync
//npm i -D @types/prompt-sync
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function calcularArea(lado) {
    return lado * lado;
}
const numDigitado = Number(prompt("Digite o valor: "));
const quadrado = calcularArea(numDigitado);
console.log(quadrado);
const aluno = {
    nome: "Teste",
    mediaFinal: 9,
    situacao: "aprovado"
};
console.log(aluno.nome);
function AlunoFactory(nome, mediaFinal) {
    let situacao = 'reprovado';
    if (mediaFinal > 6) {
        situacao = 'aprovado';
    }
    return {
        nome,
        mediaFinal,
        situacao
    };
}
const aluno3 = AlunoFactory('Teste3', 9);
console.log(aluno3.situacao);
