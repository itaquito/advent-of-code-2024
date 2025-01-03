interface PagesOrder {
  [key: string]: string[]
}

const input = await Deno.readTextFile("./days/5/input.txt");

const rows = input.split("\r\n");

// The key is a page. The value is a list of the pages that need to be printed after the key
const afterPages: PagesOrder = {};

const validPagesMiddle: number[] = [];

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  if (!row) continue;

  // The current row is an ordering rule
  if (row.includes("|")) {
    // Extract the page numbers
    const [first, second] = row.split("|");

    if (!afterPages[first]) afterPages[first] = [];

    afterPages[first].push(second);
  } else { // The current row is an update
    const steps = row.split(",");
    let isCurrentUpdateValid = true;

    // Iterate through the steps
    stepsLoop: for (let j = 0; j < steps.length; j++) {
      const currentAfterPages = afterPages[steps[j]];

      // The current page doesn't have ordering rules
      if (!currentAfterPages) continue;

      // Iterate through the following steps starting at the current step
      for (let k = 0; k < j; k++) {
        // We are breaking a rule
        if (currentAfterPages.includes(steps[k])) {
          isCurrentUpdateValid = false;
          break stepsLoop;
        }
      }
    }

    if (isCurrentUpdateValid) {
      if (steps.length % 2 === 0) throw new Error("Steps with even size. We can't determine a middle");

      const middleIndex = Math.floor(steps.length / 2)
      validPagesMiddle.push(parseInt(steps[middleIndex]))
    }
  }
}

const result = validPagesMiddle.reduce((prev, current) => prev += current, 0)

console.log("Result", result)
