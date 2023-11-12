import { ColorType } from "../../aux/types";
import classes from "./Square.module.css";

type SquareProps = {
  type: ColorType;
  children?: React.ReactNode;
  selected: boolean;
};

export const Square = ({ type, children, selected = false }: SquareProps) => {
  const css = type === "light" ? classes.light : classes.dark;
  const cssSelected = selected ? classes.selected : "";

  return (
    <div className={`${classes.square} ${css} ${cssSelected}`}>{children}</div>
  );
};
