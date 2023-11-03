# Requirements

Here is my initial work on understanding the requirements.

**Legend**

1. UI - any ui elements required
1. Actions - actions performed by the user or the game system
1. Derrived requirements - additional requirements based on my understanding of the problem and not explicitly required by this task. Just what I believe would be a good design for the problem.

## REQ1

"When a valid FEN string is inserted into a text input it will display the corresponding chess pieces on the board."

### UI

1. input box
1. chess board with cells
1. pieces represented by a letter

### Actions

1. FEN string in input box -> display pieces on board

### Derrived requirements

1. validate that input string is a valid FEN string -> `isValidFenString` function
1. tests around `isValidFenString`
1. data structure to hold current board
1. function to parse FEN string to data structure

## REQ2

"Chess pieces can render either as images or as a text abbreviation of the type of piece (i.e. p for pawn)."

### UI

1. [Chess pieces from Wikimedia](https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces)

### Derrived requirements

1. tests around displaying single chess piece on a single cell

## REQ3

"Chess pieces can be selected, deselected and togged (switch to another piece of the same color) by clicking"

### Actions

1. user clicks on unselected chess piece -> `selected`
1. user clicks on selected chess piece -> `deselected`
1. switch piece to another one of the same colour

### Derrived requirements

1. track if current piece is selected or not
1. togging needs to update the current state of the FEN string in UI and in local storage

## REQ4

"Once a chess piece is selected the piece can be moved by clicking on an empty square or a square occupied by an opposite color."

### Actions

1. selected piece can be moved to empty square
1. selected piece can be moved to square occupied by opposite colour

### Derrived requirements

1. need to track if square is empty of not (move to empty square)
1. need to track the colour of the piece that occupies a given square (move to square with opposite piece)
1. cannot move a piece to a square occupied by the same colour
1. needs to update the current state of the FEN string in UI and in local storage

## REQ5

"Any piece can be moved to any suitable square. The app does not need to enforce chess piece movement rules."

### Actions

1. moves defined in REQ4 are sufficient

## REQ6

"When a chess piece is moved the FEN input will be updated with the corresponding value"

### Actions

1. update the current state of the FEN string in UI when legal move is concluded

### Derrived requirements

1. also update the game data structure

## REQ7

"The FEN value should be persisted, so that the “game” can continue after the page is reloaded"

### Actions

1. update the current state of the FEN string in component state and in localStorage when legal move is concluded
1. on app reload check if there is a current game in localStorage. If yes -> load the game, if not -> start new game and ask for input
