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
  } else {
    winner = "computador"
  };

  return {
    player: player,
    computer: computer,
    winner: winner
  }
};