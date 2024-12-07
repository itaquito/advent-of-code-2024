const input = await Deno.readTextFile("./days/3/input.txt");

const validOperations = input.match(/(mul\([0-9]{1,3},[0-9]{1,3}\)|(do\(\))|(don't\(\)))/g)
if (!validOperations) throw new Error("We didn't find any valid operations")

let result = 0;
let isEnable = true;
for (let i = 0; i < validOperations.length; i++) {
  const operation = validOperations[i];
  if (operation === "don't()") {
    isEnable = false
    continue
  }
  else if (operation === "do()") {
    isEnable = true
    continue
  }
  else if (!isEnable) continue;

  const numbers = operation.match(/[0-9]{1,3}/g)
  if (!numbers) throw new Error("We didn't find any numbers")

  result += parseInt(numbers[0]) * parseInt(numbers[1])
}

console.log("Result:", result)
