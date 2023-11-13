// This tests if positional part of FEN string is valid
export function isValidBoardString(boardString: string) {
  const rows = boardString.split("/");

  // Must be exactly 8 rows
  if (rows.length !== 8) {
    return false;
  }

  // Define valid pieces using regex
  const validPieces = /^[rnbqkpRNBQKP1-8]+$/;

  for (const row of rows) {
    if (!validPieces.test(row)) {
      // Not a valid piece in row
      return false;
    }

    let count = 0;
    for (const char of row) {
      if (isNaN(Number(char))) {
        count += 1; // Counting pieces
      } else {
        count += parseInt(char, 10); // Adding empty spaces
      }
    }

    if (count !== 8) {
      // Each row must sum up to 8
      return false;
    }
  }

  return true;
}

// Take a board string and return a normalised board string
// Normalised board string is a string with all numbers replaced with 1s
// e.g. "rnbqkbnr/pp4pp/8/8/8/8/PPPPPPPP/RNBQKBNR" =>
// "rnbqkbnr/pp1111pp/11111111/11111111/11111111/11111111/PPPPPPPP/RNBQKBNR"
export function normalisePositionString(boardString: string) {
  return boardString
    .split("/")
    .map((row) =>
      row
        .split("")
        .map((char) => (isNaN(Number(char)) ? char : "1".repeat(Number(char))))
        .join("")
    )
    .join("/");
}
