import { ColorType, SquareCoordsType } from "../../aux/types";
import classes from "./Square.module.css";

type SquareProps = {
  type: ColorType;
  children?: React.ReactNode;
  squareCoordinates: SquareCoordsType;
  selected: boolean;
  onSquareClick: (square: SquareCoordsType) => void;
};

export const Square = ({
  type,
  children,
  selected = false,
  onSquareClick,
  squareCoordinates,
}: SquareProps) => {
  const css = type === "light" ? classes.light : classes.dark;
  const cssSelected = selected ? classes.selected : "";

  return (
    <div
      onClick={() => onSquareClick(squareCoordinates as SquareCoordsType)}
      className={`${classes.square} ${css} ${cssSelected}`}
    >
      {children}
    </div>
  );
};
