/**
 * watch-test-2.ts
 * 
 * This test is meant to ensure that tsx is using the up-to-date code once it reloads.
 */

import { appendFile } from "fs/promises";
import { isAbsolute } from 'path';
import { argv } from "process";

const outputFile = argv[2]
if (!outputFile) throw new Error(`argv[2] must be a filename. ex: /tmp/output.txt`);
if (!isAbsolute(outputFile)) throw new Error(`outputFile must be an absolute filename. ex: /tmp/output.txt`);
console.log(`outputting to ${outputFile}`)


// In the github action script, sed is used to modify the value of the following variable.
const uniqueString = 'output-1'

async function main() {
    // console.log('try changing this console.log() inside a docker container and see if tsx will reload and display the new text') // uncomment this for ad-hoc testing
    return appendFile(outputFile, uniqueString+'\n', { encoding: 'utf-8' })
}

main().catch(e => {
    console.error(`there was an error in main()`)
    console.error(e)
    process.exit(1)
})
