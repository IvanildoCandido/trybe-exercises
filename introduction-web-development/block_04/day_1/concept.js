let note = -1;
let concept = null;

if (note >= 90 && note <= 100) {
  concept = "A";
} else if (note >= 80 && note < 90) {
  concept = "B";
} else if (note >= 70 && note < 80) {
  concept = "C";
} else if (note >= 60 && note < 70) {
  concept = "D";
} else if (note >= 50 && note < 60) {
  concept = "E";
} else if (note < 50 && note >= 0) {
  concept = "F";
} else {
  console.log("Note invalid!");
  return;
}

console.log("Your concept is:", concept);
