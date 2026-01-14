let lenght;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

 let area = length * width;

 document.getElementById("result").innerText = `The area of the rectangle is ${area}`;
}


function calculateAmount() {


    let groc1 = parseFloat(document.getElementById("groc1").value);
    let groc2 = parseFloat(document.getElementById("groc2").value);
    let groc3 = parseFloat(document.getElementById("groc3").value);

    let amount = groc1 + groc2 + groc3;

    document.getElementById("res1").innerText = `The total amount is: $${amount}`;


}