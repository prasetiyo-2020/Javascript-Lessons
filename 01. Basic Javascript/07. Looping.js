FOR LOOP

for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
// do something
}

Example 1:
for(let i = 0; i < 5; i++) {
console.log(i);
}

/* output
0
1
2
3
4
*/

FOR OF LOOP
for(arrayItem of myArray) {
// do something
}

Example 1:
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for(const arrayItem of myArray) {
console.log(arrayItem)
}

/* output
Luke
Han
Chewbacca
Leia
*/

WHILE AND DO-WHILE

Example 1:
let i = 1;

while (i <= 100) {
console.log(i);
i++;
}

/* output : 1-100 */

Example 2:
let i = 1;

do {
console.log(i);
i++;
} while (i <= 100);

/* output : 1-100 */

INFINITE LOOPS
