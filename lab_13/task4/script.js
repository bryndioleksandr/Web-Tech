let a = Number(prompt("Enter the size of triangle a"));
let b = Number(prompt("Enter the size of triangle b"));
let c = Number(prompt("Enter the size of triangle c"));

if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    let p = (a + b + c) / 2;
    let square = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    let is90deg = (a, b, c) => {
        return Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) ? true : false;
    }
    console.log("The square of triangle = " + square);
    is90deg? console.log("The triangle is right-angled") : console.log("The triangle is NOT right-angled");
}
else alert("You didn`t enter the number");