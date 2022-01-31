/* 
Why Node.js?
-> already learned javascript
-> One ring to rule them all
-> many people use node.js
-> Node.js can access your computer's runtime
--> take javascript out of the browser, allowing it to interact directly to the computer
*/
// console.log('Hello World')
// executing: node + filename(.js included)

/* REPL
 * Read, Evaluation, Print, Loop
 * Execute code in byte size chunks
 * -> node -> move to node cmd
 * -> .exit -> get out (or just ctrl c)
 * get modules using node
 * use docs: https://nodejs.org/en/docs/
 */

// internal module
const fs = require('fs');
fs.copyFileSync('backend.txt', 'copy-backend.txt')

/* external modules
 * npm -> Node Package Manager
 * npm init -> generate npm
 * package.json -> put your npm package
 * npm install -> install external modules
 * package-lock.json
 */

var superheroes = require('superheroes')

var superhero_name = superheroes.random()

var supervillains = require('supervillains')
var supervillain_name = supervillains.random()

console.log(superhero_name + ' vs ' + supervillain_name)

// EXPRESS.JS
// express -> one of the most used external modules