import { expect, test } from "vitest";
import { isValidBoardString } from "./index";

test("isValidBoardString should return true for valid board strings", () => {
  // Starting position
  expect(
    isValidBoardString("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR")
  ).toBe(true);

  // The Immortal Game (Anderssen vs Kieseritzky, 1851)
  expect(
    isValidBoardString("rnb1kbnr/pppp1ppp/8/4p3/1P6/8/P1PPPPPP/RNBQKBNR")
  ).toBe(true);

  // Botvinnik vs Capablanca, AVRO Tournament, 1938
  expect(
    isValidBoardString("r2q1rk1/pb3ppp/1p2pn2/2pp4/3P4/2P1PN2/PPQ2PPP/R1B1KB1R")
  ).toBe(true);

  // Karpov vs Korchnoi, World Championship Match, 1978
  expect(
    isValidBoardString("r2q1rk1/1b1nbppp/pp1ppn2/8/2PP4/1PN1PN2/PB3PPP/R2QKB1R")
  ).toBe(true);

  // Bobby Fischer's "Game of the Century" vs Donald Byrne, 1956
  expect(
    isValidBoardString("r1bq1rk1/ppp2ppp/2np1n2/4p3/1P6/P1N1P3/2PPBPPP/R1BQK2R")
  ).toBe(true);
});

test("isValidBoardString should return false for invalid board strings", () => {
  expect(isValidBoardString("rnbqkbnr/pppppp/8/8/8/8/PPPPPPPP/RNBQKBN1")).toBe(
    false
  );

  expect(
    isValidBoardString("rnbqkbnr/pppppppp/7/8/8/8/PPPPPPPP/RNBQKBNRR")
  ).toBe(false);

  expect(
    isValidBoardString("rnaakbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR")
  ).toBe(false);

  expect(isValidBoardString("rnbqkbnr/ppppp/8/8/8/8/PPPPPPPP/RNBQKBNR/")).toBe(
    false
  );

  expect(
    isValidBoardString("rAAkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR/")
  ).toBe(false);

  expect(isValidBoardString("rnbqkbnNBQKBNR/")).toBe(false);
});
