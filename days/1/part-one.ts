const input = await Deno.readTextFile("./days/1/input.txt");

const rows = input.split("\r\n");

const firstColumn: number[] = [];
const secondColumn: number[] = [];

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  if (!row) continue;

  const [first, second] = row.split("   ")

  firstColumn.push(parseInt(first))
  secondColumn.push(parseInt(second))
}

if (firstColumn.length !== secondColumn.length) throw new Error("Columns are not the same length")

firstColumn.sort((a,b) => a - b)
secondColumn.sort((a,b) => a - b)

let total = 0;
for (let i = 0; i < firstColumn.length; i++) {
  const difference = Math.abs(firstColumn[i] - secondColumn[i]);

  total += difference;
}

console.log("Result:", total)
