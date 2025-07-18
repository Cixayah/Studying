import { basename } from "path";

let nameArchive = basename('./test.txt');
let nameWithoutExt = nameArchive.split('.')[0];

export function path() {
    let path = [];
    let pathString = '';
    for (let i = 0; i < nameWithoutExt.length; i++) {
        path.push(nameWithoutExt[i]);
        pathString += nameWithoutExt[i];
    }
    return pathString;
}
console.log(nameArchive);