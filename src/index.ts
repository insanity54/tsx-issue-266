import { writeFileSync } from "fs";
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const outputFile = join(__dirname, 'output.txt');

async function main() {
    // @see https://stackoverflow.com/a/8084248/1004931
    
    let randomString = (Math.random() + 1).toString(36);
    writeFileSync(outputFile, randomString, { encoding: 'utf-8' })
}

main().catch(e => {
    console.error(`there was an error in main()`)
    console.error(e)
    process.exit(1)
})