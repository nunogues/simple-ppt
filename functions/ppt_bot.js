let score = {
  player: 0,
  bot: 0
};

export async function playPpt(player) {
 const choices = ["pedra", "papel", "tesoura"];
  const computer = choices[
    Math.floor(Math.random() * choices.length)
  ];
let winner;  
  if (!choices.includes(player)) {
    return {
      error: "Opção invalida"
    }
  }
  if (computer === player) {
    winner = "empate"
  }
  else if (
        (player === "pedra" && computer === "tesoura") ||
        (player === "papel" && computer === "pedra") ||
        (player === "tesoura" && computer === "papel")
    ) {
    winner = "player";
    score.player += 1
  } else {
    winner = "computador"
    score.bot += 1
  };

  return {
    player: {
      score: score.player
    },
    computer: {
      score: score.bot    
    },
    winner: winner
  }
};