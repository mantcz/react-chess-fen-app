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
}
