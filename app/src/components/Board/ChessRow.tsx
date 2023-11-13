import { Square } from "./Square";
import { Piece } from "./Piece";
import { ColorType, PieceType, SquareCoordsType } from "../../aux/types";

type ChessRowProps = {
  row: {
    square: SquareCoordsType;
    piece: PieceType | "1"; // 1 is a placeholder for an empty square
    selected: boolean;
  }[];
  firstBox: "dark" | "light";
  onSquareClick: (square: SquareCoordsType) => void;
};

export const ChessRow = ({ row, firstBox, onSquareClick }: ChessRowProps) => {
  let squareColours: ColorType[] = ["dark", "light"];
  if (firstBox == "light") {
    squareColours = ["light", "dark"];
  }

  return row.map((square, index) => {
    if (square.piece == "1") {
      return (
        <Square
          key={square.square}
          type={index % 2 == 0 ? squareColours[0] : squareColours[1]}
          selected={square.selected}
        />
      );
    } else {
      return (
        <Square
          key={square.square}
          type={index % 2 == 0 ? squareColours[0] : squareColours[1]}
          selected={square.selected}
          squareCoordinates={square.square}
          onSquareClick={onSquareClick}
        >
          <Piece type={square.piece} />
        </Square>
      );
    }
  });
};
