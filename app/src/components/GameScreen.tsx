import { useState } from "react";

import { Piece } from "./Board/Piece";
import { isValidBoardString, normalisePositionString } from "./../aux";
import { ChessBoard } from "../aux/boardState";
import { BoardState } from "../aux/types";
import { Board } from "./Board/Board";

export const GameScreen = () => {
  const [fenString, setFenString] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [currentFenString, setCurrentFenString] = useState("");

  // Initial board state set up to starting position
  const [boardState, setBoardState] = useState<BoardState | object | null>(
    new ChessBoard(
      normalisePositionString("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR")
    ).board
  );

  return (
    <main>
      <div className="container">
        <div className="left">
          <div className="row">
            <div className="input-box">
              <label htmlFor="fen-string">Add FEN string</label>
              <input
                onChange={(evt) => setFenString(evt.target.value)}
                id="fen-string"
                type="text"
                value={fenString}
                placeholder="Add FEN string"
              />
            </div>
            <button
              onClick={() => {
                // Just using the first part of the FEN string for now
                const fenPositionString = fenString.trim().split(" ")[0];

                if (isValidBoardString(fenPositionString)) {
                  setErrorMessage("");
                  setCurrentFenString(fenPositionString);
                  setBoardState(
                    new ChessBoard(normalisePositionString(fenPositionString))
                      .board
                  );
                } else {
                  setErrorMessage("Invalid FEN string");
                  setTimeout(() => {
                    setErrorMessage("");
                    setFenString("");
                    setCurrentFenString("");
                  }, 2000);
                }
              }}
              disabled={fenString.length === 0}
            >
              Load game
            </button>
          </div>

          <div className="error-box">
            <p>{errorMessage}</p>
          </div>

          <div className="fen-state">
            <p>Curent FEN state</p>
            <p>{currentFenString}</p>
          </div>

          {boardState && <Board boardState={boardState as BoardState} />}
        </div>

        <div className="right">
          <div className="pieces">
            <div>
              <p>Light pieces</p>
              <div className="row">
                <Piece type="Q" />
                <Piece type="K" />
                <Piece type="R" />
                <Piece type="R" />
                <Piece type="N" />
                <Piece type="N" />
                <Piece type="B" />
                <Piece type="B" />
              </div>
              <div className="row">
                <Piece type="P" />
                <Piece type="P" />
                <Piece type="P" />
                <Piece type="P" />
                <Piece type="P" />
                <Piece type="P" />
                <Piece type="P" />
                <Piece type="P" />
              </div>
            </div>
            <div>
              <p>Dark pieces</p>
              <div className="row">
                <Piece type="q" />
                <Piece type="k" />
                <Piece type="r" />
                <Piece type="r" />
                <Piece type="n" />
                <Piece type="n" />
                <Piece type="b" />
                <Piece type="b" />
              </div>
              <div className="row">
                <Piece type="p" />
                <Piece type="p" />
                <Piece type="p" />
                <Piece type="p" />
                <Piece type="p" />
                <Piece type="p" />
                <Piece type="p" />
                <Piece type="p" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
