import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import getFactorsOfNumber from "./get-factors-of-number";
import findFirstTriangleNumberWithDivisorsGreaterThan from "./find-triangle-with-divisors";

const rl = readline.createInterface({ input, output });

async function main(): Promise<void> {
  const targetNumberOfDivisorsString = await rl.question(
    "Enter a number to find the first triangle number with a number of divisors greater than it: "
  );
  const targetNumberOfDivisors = parseInt(targetNumberOfDivisorsString);

  const triangleNumberWithDivisorsOverTarget =
    findFirstTriangleNumberWithDivisorsGreaterThan(targetNumberOfDivisors);

  const numberOfDivisors = getFactorsOfNumber(
    triangleNumberWithDivisorsOverTarget
  ).length;

  console.log(
    `The first triangle number with over ${targetNumberOfDivisors} factors is ${triangleNumberWithDivisorsOverTarget}, with ${numberOfDivisors} divisors`
  );

  rl.close();
}

main().catch(() => console.error("Something went wrong!"));
