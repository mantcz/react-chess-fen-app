# Frontend Task - Option 1
Write a simple React application which allows the user to move pieces on a chess board.

The application should support FEN strings as input and also output. Specifically:
* When a valid FEN string is inserted into a text input it will display the corresponding chess pieces on the board.
* Chess pieces can render either as images or as a text abbreviation of the type of piece (i.e. p for pawn).
* Chess pieces can be selected, deselected and togged (switch to another piece of the same color) by clicking
* Once a chess piece is selected the piece can be moved by clicking on an empty square or a square occupied by an opposite color.
* Any piece can be moved to any suitable square. The app does not need to enforce chess piece movement rules.
* When a chess piece is moved the FEN input will be updated with the corresponding value
* The FEN value should be persisted, so that the “game” can continue after the page is reloaded
* Write some tests!

Check these resources for more information on FEN notations:
* [Forsyth–Edwards Notation on Wikipedia](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation)
* [Forsyth-Edwards Notation (FEN)](https://www.chess.com/terms/fen-chess#how-does-fen-work)\

En garde!

