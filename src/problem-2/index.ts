import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import sumEvenTerms from "./sum-even-terms";
import getFibsBelow from "./get-fibs";

const rl = readline.createInterface({ input, output });

async function main(): Promise<void> {
  const givenLimit = await rl.question(
    "Please give an upper limit to sum all even Fibonacci numbers until: "
  );

  const fibs = getFibsBelow(parseInt(givenLimit));
  const sum = sumEvenTerms(fibs);

  console.log(`Sum of all even Fibonacci numbers below ${givenLimit}: ${sum}`);

  rl.close();
}

main().catch(() => console.error("Something went wrong!"));
