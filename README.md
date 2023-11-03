# Frontend Task - Option 1

Write a simple React application which allows the user to move pieces on a chess board.

The application should support FEN strings as input and also output. Specifically:

- `[REQ1](./REQUIREMENTS.md#req1)` When a valid FEN string is inserted into a text input it will display the corresponding chess pieces on the board.
- `[REQ2](REQUIREMENTS.md#req2)` Chess pieces can render either as images or as a text abbreviation of the type of piece (i.e. p for pawn).
- `[REQ3](REQUIREMENTS.md#req3)` Chess pieces can be selected, deselected and togged (switch to another piece of the same color) by clicking
- `[REQ4](REQUIREMENTS.md#req4)` Once a chess piece is selected the piece can be moved by clicking on an empty square or a square occupied by an opposite color.
- `[REQ5](REQUIREMENTS.md#req5)` Any piece can be moved to any suitable square. The app does not need to enforce chess piece movement rules.
- `[REQ6](REQUIREMENTS.md#req6)` When a chess piece is moved the FEN input will be updated with the corresponding value
- `[REQ7](REQUIREMENTS.md#req7)` The FEN value should be persisted, so that the “game” can continue after the page is reloaded
- `[REQ8](REQUIREMENTS.md#req8)` Write some tests!

Check these resources for more information on FEN notations:

- [Forsyth–Edwards Notation on Wikipedia](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation)
- [Forsyth-Edwards Notation (FEN)](https://www.chess.com/terms/fen-chess#how-does-fen-work)\

En garde!

# My solution

1. I first analysed the requirements and created a new [REQUIREMENTS](./REQUIREMENTS.md) document based on my understanding.
