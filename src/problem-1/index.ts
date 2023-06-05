import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import sumMultiplesOf3And5Below from './sum-multiples-below'

const rl = readline.createInterface({ input, output })

async function main (): Promise<void> {
  const givenLimit = await rl.question(
    'Please give an upper limit to sum all multiples of 3 or 5 up to: '
  )

  const sum = sumMultiplesOf3And5Below(parseInt(givenLimit))

  console.log(`Sum of all multiples and 3 or 5 below ${givenLimit}: ${sum}`)

  rl.close()
}

main().catch(() => console.error('Something went wrong!'))
