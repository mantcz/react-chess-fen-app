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

type PieceProps = {
  type:
    | "light-queen"
    | "light-king"
    | "light-rook"
    | "light-bishop"
    | "light-knight"
    | "light-pawn"
    | "dark-queen"
    | "dark-king"
    | "dark-rook"
    | "dark-bishop"
    | "dark-knight"
    | "dark-pawn";
};

export const Piece = ({ type }: PieceProps) => {
  switch (type) {
    case "light-queen":
      return <img src={wQueen} width={40} height={40} alt="light queen" />;
    case "light-king":
      return <img src={wKing} width={40} height={40} alt="light king" />;
    case "light-rook":
      return <img src={wRook} width={40} height={40} alt="light rook" />;
    case "light-bishop":
      return <img src={wBishop} width={40} height={40} alt="light bishop" />;
    case "light-knight":
      return <img src={wKnight} width={40} height={40} alt="light knight" />;
    case "light-pawn":
      return <img src={wPawn} width={40} height={40} alt="light pawn" />;
    case "dark-queen":
      return <img src={bQueen} width={40} height={40} alt="dark queen" />;
    case "dark-king":
      return <img src={bKing} width={40} height={40} alt="dark king" />;
    case "dark-rook":
      return <img src={bRook} width={40} height={40} alt="dark rook" />;
    case "dark-bishop":
      return <img src={bBishop} width={40} height={40} alt="dark bishop" />;
    case "dark-knight":
      return <img src={bKnight} width={40} height={40} alt="dark knight" />;
    case "dark-pawn":
      return <img src={bPawn} width={40} height={40} alt="dark pawn" />;
    default:
      return null;
  }
};
