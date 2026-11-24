# Simple PPT

Implementação em JavaScript de um jogo de **Pedra, Papel e Tesoura** no qual o jogador escolhe uma opção e o computador faz uma escolha aleatória.

## Funcionalidades

- Aceita as opções `pedra`, `papel` e `tesoura`.
- Gera uma escolha aleatória para o computador.
- Identifica vitória, derrota ou empate.
- Mantém a pontuação acumulada do jogador e do computador durante a execução do módulo.
- Retorna os dados da rodada em um objeto JavaScript.

## Tecnologias

- JavaScript (ES Modules)
- Node.js

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

A função aceita uma string com uma das três opções:

- `"pedra"`
- `"papel"`
- `"tesoura"`

Exemplo de retorno:

```json
{
  "player": { "score": 1 },
  "computer": { "score": 0 },
  "winner": "player"
}
```

O resultado é ilustrativo: a escolha do computador é aleatória. Entradas inválidas retornam um objeto com a propriedade `error`.

## Estrutura

```text
simple-ppt/
├── functions/
│   └── ppt_bot.js
├── index.js
└── package.json
```

## Objetivo

Projeto simples para praticar funções assíncronas, módulos JavaScript, lógica condicional e geração de valores aleatórios.