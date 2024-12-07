function isReportSafe(report: number[]) {
  let isAscending: boolean | null = null;

  for (let i = 0; i < report.length - 1; i++) {
    const difference = report[i] - report[i + 1];
    const isCurrentAscending = difference > 0

    if (isAscending === null) {
      isAscending = isCurrentAscending;
    } else if (isAscending !== isCurrentAscending) return false;

    if (Math.abs(difference) < 1 || Math.abs(difference) > 3) return false;
  }

  return true;
}

const input = await Deno.readTextFile("./days/2/input.txt");

const rows = input.split("\r\n");

let totalSafe = 0;
for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  if (!row) continue;

  const report = row.split(" ").map(e => parseInt(e));
  const isSafe = isReportSafe(report)
  if (isSafe) {
    totalSafe++
    continue
  }

  for (let e = 0; e < report.length; e++) {
    const newReport = [...report]
    newReport.splice(e, 1)
    const isCurrentSafe = isReportSafe(newReport);

    if (isCurrentSafe) {
      totalSafe++;
      break;
    }
  }
}

console.log("Result", totalSafe)
