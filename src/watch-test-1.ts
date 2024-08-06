/**
 * watch-test-1.ts
 * 
 * This test is meant to ensure that tsx reloads when the code changes.
 * 
 * This file appends a random string to an output file specified by process.argv[2] and then it exits.
 * 
 * Usage: tsx --watch ./src/watch-test.ts /tmp/output.txt
 * 
 * The purpose of this file is to help test tsx's --watch function. While tsx is watching this file, we can `touch` this file.
 * tsx should reload, causing another unique line of text to be written to the output file.
 * After `touch`-ing this file several times, we can count the lines to see how many times tsx reloaded node.
 * We can run an assertion function in the github workflow which raises an error if tsx did not reload the amount of times we expected.
 */

import { appendFile } from "fs/promises";
import { isAbsolute } from 'path';
import { argv } from "process";

const outputFile = argv[2]
if (!outputFile) throw new Error(`argv[2] must be a filename. ex: /tmp/output.txt`);
if (!isAbsolute(outputFile)) throw new Error(`outputFile must be an absolute filename. ex: /tmp/output.txt`);
console.log(`outputting to ${outputFile}`)


async function main() {
    const randomString = (Math.random() + 1).toString(36)
    return appendFile(outputFile, randomString+'\n', { encoding: 'utf-8' })
}

main().catch(e => {
    console.error(`there was an error in main()`)
    console.error(e)
    process.exit(1)
})
