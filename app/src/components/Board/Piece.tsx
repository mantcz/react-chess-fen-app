import wQueen from "./../../assets/light-queen.svg";
import wKing from "./../../assets/light-king.svg";
import wRook from "./../../assets/light-rook.svg";
import wBishop from "./../../assets/light-bishop.svg";
import wKnight from "./../../assets/light-knight.svg";
import wPawn from "./../../assets/light-pawn.svg";
import bQueen from "./../../assets/dark-queen.svg";
import bKing from "./../../assets/dark-king.svg";
import bRook from "./../../assets/dark-rook.svg";
import bBishop from "./../../assets/dark-bishop.svg";
import bKnight from "./../../assets/dark-knight.svg";
import bPawn from "./../../assets/dark-pawn.svg";
import { PieceType } from "../../aux/types";

// Piece type is already validated at this point
type PieceProps = {
  type: PieceType;
};

export const Piece = ({ type }: PieceProps) => {
  switch (type) {
    case "Q":
      return <img src={wQueen} width={40} height={40} alt="light queen" />;
    case "K":
      return <img src={wKing} width={40} height={40} alt="light king" />;
    case "R":
      return <img src={wRook} width={40} height={40} alt="light rook" />;
    case "B":
      return <img src={wBishop} width={40} height={40} alt="light bishop" />;
    case "N":
      return <img src={wKnight} width={40} height={40} alt="light knight" />;
    case "P":
      return <img src={wPawn} width={40} height={40} alt="light pawn" />;
    case "q":
      return <img src={bQueen} width={40} height={40} alt="dark queen" />;
    case "k":
      return <img src={bKing} width={40} height={40} alt="dark king" />;
    case "r":
      return <img src={bRook} width={40} height={40} alt="dark rook" />;
    case "b":
      return <img src={bBishop} width={40} height={40} alt="dark bishop" />;
    case "n":
      return <img src={bKnight} width={40} height={40} alt="dark knight" />;
    case "p":
      return <img src={bPawn} width={40} height={40} alt="dark pawn" />;
    default:
      return null;
  }
};
