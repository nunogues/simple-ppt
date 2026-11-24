<p align="center">
  <img src="https://github.com/nunogues/simple-ppt/actions/workflows/tests.yml/badge.svg" alt="Node.js tests" />
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/nunogues/simple-ppt/main/assets/banner.svg" alt="Simple PPT — Pedra, Papel e Tesoura" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES%20Modules-F7DF1E?style=flat-square&logo=javascript&logoColor=111" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Node.js-20%2B-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Tests-Node%20Test%20Runner-417E38?style=flat-square" alt="Node test runner" />
</p>

Implementação em JavaScript de um jogo de **Pedra, Papel e Tesoura** no qual o jogador escolhe uma opção e o computador faz uma escolha aleatória.

## Funcionalidades

- Aceita as opções `pedra`, `papel` e `tesoura`.
- Gera uma escolha aleatória para o computador.
- Identifica vitória, derrota ou empate.
- Mantém a pontuação acumulada durante a execução do módulo.
- Retorna os dados da rodada em um objeto JavaScript.
- Inclui testes automatizados com o test runner nativo do Node.js.

## Tecnologias

- JavaScript (ES Modules)
- Node.js
- Node.js Test Runner

## Como executar

É necessário ter o Node.js instalado.

```bash
git clone https://github.com/nunogues/simple-ppt.git
cd simple-ppt
npm start
```

## Como usar a função

A lógica principal está em `functions/ppt_bot.js`.

```js
import { playPpt } from "./functions/ppt_bot.js";

const result = await playPpt("pedra");
console.log(result);
```

A função aceita `pedra`, `papel` ou `tesoura`. Entradas inválidas retornam um objeto com a propriedade `error`.

## Testes

Execute:

```bash
npm test
```

Os testes verificam entrada inválida, empate e vitória. O GitHub Actions também executa a suíte em pushes e pull requests.

## Estrutura

```text
simple-ppt/
├── .github/
│   └── workflows/
│       └── tests.yml
├── assets/
│   └── banner.svg
├── functions/
│   └── ppt_bot.js
├── tests/
│   └── ppt_bot.test.js
├── index.js
└── package.json
```

## Objetivo

Projeto simples para praticar funções assíncronas, módulos JavaScript, lógica condicional e geração de valores aleatórios.
