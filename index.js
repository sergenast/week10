function showMessage() {
    console.log('Я учу JavaScript');
}
showMessage();

let img1 = document.getElementById('img1');


function getPic1() {
    img1.src = 'https://static9.tgstat.ru/channels/_0/6c/6cbe3d27493df4672e090aecd6a9842f.jpg';
    img1.alt = 'cat';
}

function getPic2() {
    img1.src = 'https://kartinkof.club/uploads/posts/2022-03/1648612809_1-kartinkof-club-p-smeshnie-kartinki-koti-1.jpg';
    img2.alt = 'cat';
}



function calcAdd() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    result = num1 + num2;
    document.getElementById("result").innerHTML = result;
}

function calcSubtr() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    result = num1 - num2;
    document.getElementById("result").innerHTML = result;
}

function calcMult() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    result = num1 * num2;
    document.getElementById("result").innerHTML = result;
}

function calcDiv() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    result = num1 / num2;
    document.getElementById("result").innerHTML = result;
}