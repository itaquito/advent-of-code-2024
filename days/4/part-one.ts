const input = await Deno.readTextFile("./days/4/input.txt");

const rows = input.split("\r\n");

const puzzle: string[][] = [];

for (let i = 0; i < rows.length; i++) {
  const chars = rows[i].split("");

  puzzle.push(chars)
}

const foundWords: string[] = [];

for (let i = 0; i < puzzle.length; i++) {
  for (let e = 0; e < puzzle[i].length; e++) {
    const horizontal = [puzzle[i]?.[e], puzzle[i]?.[e+1], puzzle[i]?.[e+2], puzzle[i]?.[e+3]]
    const vertical = [puzzle[i]?.[e], puzzle[i+1]?.[e], puzzle[i+2]?.[e], puzzle[i+3]?.[e]]
    const diagonalUpRight = [puzzle[i]?.[e], puzzle[i-1]?.[e+1], puzzle[i-2]?.[e+2], puzzle[i-3]?.[e+3]]
    const diagonalDownRight = [puzzle[i]?.[e], puzzle[i+1]?.[e+1], puzzle[i+2]?.[e+2], puzzle[i+3]?.[e+3]]

    foundWords.push(
      horizontal.join(""),
      horizontal.reverse().join(""),
      vertical.join(""),
      vertical.reverse().join(""),
      diagonalUpRight.join(""),
      diagonalUpRight.reverse().join(""),
      diagonalDownRight.join(""),
      diagonalDownRight.reverse().join(""),
    )
  }
}

const count = foundWords.filter(e => e === "XMAS").length;
console.log("Result", count)
