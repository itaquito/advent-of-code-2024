const input = await Deno.readTextFile("./days/2/input.txt");

const rows = input.split("\r\n");

let totalSafe = 0;
for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  if (!row) continue;

  const levels = row.split(" ").map(e => parseInt(e));

  let isAscending: boolean | null = null;
  let isSafe = true;

  for (let e = 0; e < levels.length - 1; e++) {
    const difference = levels[e] - levels[e + 1];
    const isCurrentAscending = difference > 0

    if (isAscending === null) {
      isAscending = isCurrentAscending;
    } else if (isAscending !== isCurrentAscending) {
      isSafe = false;
      break;
    }

    if (Math.abs(difference) < 1 || Math.abs(difference) > 3) {
      isSafe = false;
      break;
    }
  }

  if (isSafe) totalSafe++;
}

console.log("Result", totalSafe)
