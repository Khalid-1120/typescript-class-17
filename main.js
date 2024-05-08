"use strict";
// Q #17th of the 100 days of coding challenge
let guestList = ["khalid", "shahid", "zeb"];
console.log("unfortunately! the new table won't arrive so we invite just two guests.");
guestList.unshift("gul", "sameer");
console.log("updated list of guests:", guestList);
while (guestList.length > 2) {
    let removedguest = guestList.pop();
    if (removedguest !== undefined) {
        console.log(`Sorry ${removedguest}, we cant invite you`);
    }
}
;
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited for the dinner`);
});
guestList.splice(0, guestList.length);
console.log("updated list of guests:", guestList);
