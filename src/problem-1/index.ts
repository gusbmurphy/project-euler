import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import sumMultiplesOf3And5Below from './sum-multiples-below'

const rl = readline.createInterface({ input, output })

const givenLimit = await rl.question('Please give an upper limit to sum all multiples of 3 or 5 until.')

const sum = sumMultiplesOf3And5Below(parseInt(givenLimit))

console.log(`Sum of all multiples and 3 or 5 below ${givenLimit}: ${sum}`)
