interface Column {
  [key: number]: number
}

const input = await Deno.readTextFile("./days/1/input.txt");

const rows = input.split("\r\n");

const leftList: number[] = [];
const rightListCount: Column = {};

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  if (!row) continue;

  const [first, second] = row.split("   ")

  const leftNumber = parseInt(first)
  const rightNumber = parseInt(second)

  rightListCount[rightNumber] = (rightListCount[rightNumber] || 0) + 1
  leftList.push(leftNumber)
}

let total = 0
for (let i = 0; i < leftList.length; i++) {
  const number = leftList[i];

  total += (rightListCount[number] || 0) * number
}

console.log("Result", total)
