const input = await Deno.readTextFile("./days/4/input.txt");

const rows = input.split("\r\n");

const puzzle: string[][] = [];

for (let i = 0; i < rows.length; i++) {
  const chars = rows[i].split("");

  puzzle.push(chars)
}

const wordToSearch = "MAS";
let count = 0;
for (let i = 0; i < puzzle.length; i++) {
  for (let e = 0; e < puzzle[i].length; e++) {
    const firstDiagonal = [puzzle[i-1]?.[e-1], puzzle[i]?.[e], puzzle[i+1]?.[e+1]]
    const secondDiagonal = [puzzle[i-1]?.[e+1], puzzle[i]?.[e], puzzle[i+1]?.[e-1]]

    if ((firstDiagonal.join("") === wordToSearch || firstDiagonal.reverse().join("") === wordToSearch) && (secondDiagonal.join("") === wordToSearch || secondDiagonal.reverse().join("") === wordToSearch)) count++;
  }
}

console.log("Result", count)
