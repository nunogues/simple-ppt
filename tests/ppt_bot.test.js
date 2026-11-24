import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { playPpt } from "../functions/ppt_bot.js";

const originalRandom = Math.random;

afterEach(() => {
  Math.random = originalRandom;
});

test("retorna erro para uma opção inválida", async () => {
  const result = await playPpt("lagarto");

  assert.deepEqual(result, { error: "Opção invalida" });
});

test("identifica um empate", async () => {
  Math.random = () => 0; // computador escolhe pedra

  const result = await playPpt("pedra");

  assert.equal(result.winner, "empate");
});

test("identifica uma vitória do jogador", async () => {
  Math.random = () => 0.99; // computador escolhe tesoura

  const result = await playPpt("pedra");

  assert.equal(result.winner, "player");
  assert.equal(result.player.score, 1);
});
