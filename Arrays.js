let array = [];

function pushUp(){
let valu = document.getElementById('int').value;
array.push(valu);
arrayLop();

}
function popUp(){
array.pop();
arrayLop();

}
function arrayLop(){
document.getElementById('head').innerHTML = "";
document.getElementById('int').value = "";
for (let x = 0; x < array.length; x++) {
    
    let html = `<h2>${x+1}: ${array[x]}</h2>`;
    document.getElementById('head').innerHTML += html;
 }
}