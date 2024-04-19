"use strict";
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
const animals = ["Dog", "Cat", "Horse"];
console.log("Names of animals:");
for (const animal of animals) {
    console.log(animal);
}
console.log("Statement about animals:");
for (const animal of animals) {
    switch (animal) {
        case "Dog":
            console.log("A dog would make a great Pet.");
            break;
        case "Cat":
            console.log("A cat can be an independent companion.");
            break;
        case "Horse":
            console.log("A horse are majestic animals known for their strenghth, speed and garace.");
            break;
        default:
            console.log("This  animal is not recognized.");
            break;
    }
}
console.log("Any of these animals would make a graet pet!");


