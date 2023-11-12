import wQueen from "@/assets/light-queen.svg";
import wKing from "@/assets/light-king.svg";
import wRook from "@/assets/light-rook.svg";
import wBishop from "@/assets/light-bishop.svg";
import wKnight from "@/assets/light-knight.svg";
import wPawn from "@/assets/light-pawn.svg";
import bQueen from "@/assets/dark-queen.svg";
import bKing from "@/assets/dark-king.svg";
import bRook from "@/assets/dark-rook.svg";
import bBishop from "@/assets/dark-bishop.svg";
import bKnight from "@/assets/dark-knight.svg";
import bPawn from "@/assets/dark-pawn.svg";

// Piece type is already validated at this point
type PieceProps = {
  type: string;
};

export const Piece = ({ type }: PieceProps) => {
  switch (type) {
    case "q":
      return <img src={wQueen} width={40} height={40} alt="light queen" />;
    case "k":
      return <img src={wKing} width={40} height={40} alt="light king" />;
    case "r":
      return <img src={wRook} width={40} height={40} alt="light rook" />;
    case "b":
      return <img src={wBishop} width={40} height={40} alt="light bishop" />;
    case "n":
      return <img src={wKnight} width={40} height={40} alt="light knight" />;
    case "p":
      return <img src={wPawn} width={40} height={40} alt="light pawn" />;
    case "Q":
      return <img src={bQueen} width={40} height={40} alt="dark queen" />;
    case "K":
      return <img src={bKing} width={40} height={40} alt="dark king" />;
    case "R":
      return <img src={bRook} width={40} height={40} alt="dark rook" />;
    case "B":
      return <img src={bBishop} width={40} height={40} alt="dark bishop" />;
    case "N":
      return <img src={bKnight} width={40} height={40} alt="dark knight" />;
    case "P":
      return <img src={bPawn} width={40} height={40} alt="dark pawn" />;
    default:
      return null;
  }
};
