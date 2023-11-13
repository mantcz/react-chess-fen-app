import { BoardState, SquareCoordsType } from "./types";

export class ChessBoard {
  board: BoardState | object;

  constructor(fenPosition: string) {
    this.board = {};
    this.initializeBoard();
    this.parseFENPosition(fenPosition);
  }

  initializeBoard() {
    const rows = "87654321";
    const cols = "abcdefgh";
    for (const row of rows) {
      for (const col of cols) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.board[col + row] = { piece: "1", selected: false };
      }
    }
  }

  parseFENPosition(fenPosition: string) {
    const rows = fenPosition.split("/");
    // FEN starts from rank 8, so need to reverse the rows
    const rowsReverse = rows.reverse();

    for (let i = 0; i < rowsReverse.length; i++) {
      const row = rowsReverse[i];
      let colIndex = 0;

      for (const char of row) {
        if (isNaN(Number(char))) {
          const square = "abcdefgh"[colIndex] + (i + 1).toString();
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          this.board[square].piece = char;
          colIndex++;
        } else {
          colIndex += parseInt(char);
        }
      }
    }
  }

  selectSquare(square: SquareCoordsType) {
    if (this.board[square]) {
      this.board[square].selected = true;
    }
  }

  deselectSquare(square: SquareCoordsType) {
    if (this.board[square]) {
      this.board[square].selected = false;
    }
  }

  // Method to move a piece from one square to another
  movePiece(fromSquare: SquareCoordsType, toSquare: SquareCoordsType) {
    if (this.board[fromSquare] && this.board[toSquare]) {
      const pieceToMove = this.board[fromSquare].piece;
      this.board[toSquare].piece = pieceToMove;
      this.board[fromSquare].piece = "1";
    }
  }

  toFenPosition(): string {
    let fen = "";
    let emptySquares = 0;

    const columns = "abcdefgh";

    for (let row = 8; row >= 1; row--) {
      for (const col of columns) {
        const square = `${col}${row}`;
        const squareState = this.board[square];
        const piece = squareState.piece === "1" ? "1" : squareState.piece;

        if (piece === "1") {
          emptySquares++;
        } else {
          if (emptySquares > 0) {
            fen += emptySquares;
            emptySquares = 0;
          }
          fen += piece;
        }
      }

      if (emptySquares > 0) {
        fen += emptySquares;
        emptySquares = 0;
      }

      if (row > 1) {
        fen += "/";
      }
    }

    return fen;
  }
}
