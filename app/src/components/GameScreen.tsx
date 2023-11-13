import { useEffect, useState } from "react";

import { Piece } from "./Board/Piece";
import { isValidBoardString, normalisePositionString } from "./../aux";
import { ChessBoard } from "../aux/boardState";
import { BoardState, SquareCoordsType } from "../aux/types";
import { Board } from "./Board/Board";
import css from "./GameScreen.module.css";

export const GameScreen = () => {
  const [fenString, setFenString] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [currentFenString, setCurrentFenString] = useState("");

  const [selectedSquare, setSelectedSquare] = useState<SquareCoordsType | null>(
    null
  );

  // Initial board state set up to starting position
  const [boardState, setBoardState] = useState<BoardState | object | null>(
    new ChessBoard(
      normalisePositionString("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR")
    ).board
  );

  useEffect(() => {
    // Load the last saved FEN string
    const savedCurrentFenString =
      window.localStorage.getItem("currentFenString");

    if (savedCurrentFenString) {
      setCurrentFenString(savedCurrentFenString);
      setBoardState(
        new ChessBoard(normalisePositionString(savedCurrentFenString)).board
      );
    }
  }, []);

  const onSquareClick = (square: SquareCoordsType) => {
    // CLick on the same square twice to deselect it
    if (square === selectedSquare) {
      clearSquareSelection();
      return;
    }

    if (selectedSquare) {
      // We already have a selected square, so we want to move the piece
      const chessBoard = new ChessBoard(currentFenString);
      chessBoard.movePiece(selectedSquare, square);
      setCurrentFenString(chessBoard.toFenPosition());
      setBoardState(chessBoard.board);

      setSelectedSquare(null);

      saveData(chessBoard.toFenPosition());
    } else {
      // We don't have a selected square, so we want to select one
      setSelectedSquare(square);

      const chessBoard = new ChessBoard(currentFenString);
      chessBoard.selectSquare(square);
      setCurrentFenString(chessBoard.toFenPosition());
      setBoardState(chessBoard.board);

      saveData(chessBoard.toFenPosition());
    }
  };

  const clearSquareSelection = () => {
    const chessBoard = new ChessBoard(currentFenString);
    chessBoard.deselectSquare(selectedSquare as SquareCoordsType);
    setBoardState(chessBoard.board);

    setSelectedSquare(null);

    saveData(chessBoard.toFenPosition());
  };

  const saveData = (currentFenString: string) => {
    window.localStorage.setItem("currentFenString", currentFenString);
  };

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

                  saveData(fenPositionString);
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
              Load new game
            </button>
          </div>

          <div className="error-box">
            <p>{errorMessage}</p>
          </div>

          <div className={css.fen_state}>
            <p>Curent FEN state</p>
            <p>{currentFenString}</p>
          </div>

          {boardState && (
            <Board
              boardState={boardState as BoardState}
              onSquareClick={onSquareClick}
            />
          )}

          <div className={css.button_section}>
            <button disabled={!selectedSquare} onClick={clearSquareSelection}>
              Clear selection
            </button>
          </div>
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
