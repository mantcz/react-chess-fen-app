# Frontend Task - Option 1

Write a simple React application which allows the user to move pieces on a chess board.

The application should support FEN strings as input and also output. Specifically:

- [REQ1](./REQUIREMENTS.md#req1) When a valid FEN string is inserted into a text input it will display the corresponding chess pieces on the board.
- [REQ2](REQUIREMENTS.md#req2) Chess pieces can render either as images or as a text abbreviation of the type of piece (i.e. p for pawn).
- [REQ3](REQUIREMENTS.md#req3) Chess pieces can be selected, deselected and togged (switch to another piece of the same color) by clicking
- [REQ4](REQUIREMENTS.md#req4) Once a chess piece is selected the piece can be moved by clicking on an empty square or a square occupied by an opposite color.
- [REQ5](REQUIREMENTS.md#req5) Any piece can be moved to any suitable square. The app does not need to enforce chess piece movement rules.
- [REQ6](REQUIREMENTS.md#req6) When a chess piece is moved the FEN input will be updated with the corresponding value
- [REQ7](REQUIREMENTS.md#req7) The FEN value should be persisted, so that the “game” can continue after the page is reloaded
- [REQ8](REQUIREMENTS.md#req8) Write some tests!

Check these resources for more information on FEN notations:

- [Forsyth–Edwards Notation on Wikipedia](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation)
- [Forsyth-Edwards Notation (FEN)](https://www.chess.com/terms/fen-chess#how-does-fen-work)

En garde!

# My solution

The app is available at https://react-chess-fen-app.onrender.com

1. I first analysed the requirements and created a new [REQUIREMENTS](./REQUIREMENTS.md) document based on my understanding
1. I created a [very basic wireframe](./assets/react-chess.png)
1. I added [DEVELOPING](./DEVELOPING.md) file for local development instructions
1. I added [DEPLOYMENT](./DEPLOYMENT.md) file with CI/CD information

## TODOs

- [x] understanding requirements
- [x] create requirements document
- [x] initial app setup
- [x] add tech stack info
- [x] update docs with how to developing locally
- [x] update docs with how the app is deployed
- [x] add app URL
- [x] REQ1
- [x] REQ2
- [x] REQ3
- [x] REQ4
- [x] REQ5
- [x] REQ6
- [x] REQ7
- [x] REQ8

## My comments

I would consider it to be a first draft of the project, to have something to play with, gather feedback from the users and iterate game's functionality.

It is by no means perfect, and it wasn't my intention for the game to be perfect at this stage.

## Things I haven't done (but would do on a full blown project)

1. no mobile view
1. no app navigation (I'd use React Router)
1. no static analysis (ESLint, Prettier)
1. no commitlint
1. no robust CI pipeline (testing, build, test coverage)
1. no e2e user testing (I would use Playwright)
1. accessibility testing (axe-core-npm)
1. no PRs, just pushing against the main branch

## Potential functionalities

1. allow user to save and load past games
1. allow users to select board colours
1. allow users to share board by a link
1. add moves history, with undo and do
1. and more...

Thank you for yor time 😊
