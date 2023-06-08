import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import generateTriangleNumber from "./generate-triangle-number";
import getFactorsOfNumber from "./get-factors-of-number";

const rl = readline.createInterface({ input, output });

async function main(): Promise<void> {
  const targetNumberOfDivisorsString = await rl.question(
    "Enter a number to find the first triangle number with a number of divisors greater than it: "
  );
  const targetNumberOfDivisors = parseInt(targetNumberOfDivisorsString);

  let triangleNumberWithDivisorsOverTarget: number | undefined = undefined;
  let numberOfDivisors = 0;

  for (
    let triangleNumberPosition = 1;
    triangleNumberWithDivisorsOverTarget == undefined;
    triangleNumberPosition++
  ) {
    const triangleNumber = generateTriangleNumber(triangleNumberPosition);
    numberOfDivisors = getFactorsOfNumber(triangleNumber).length;

    if (numberOfDivisors > targetNumberOfDivisors) {
      triangleNumberWithDivisorsOverTarget = triangleNumber;
    }
  }

  console.log(
    `The first triangle number with over ${targetNumberOfDivisors} is ${triangleNumberWithDivisorsOverTarget}, with ${numberOfDivisors} divisors`
  );

  rl.close();
}

main().catch(() => console.error("Something went wrong!"));
