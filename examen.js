
let valor = parseInt(document.getElementById("inputmulti").value);
let comptador = 1;
//Exercici 1
function coloret() {

    if (document.getElementById("botonet").style.backgroundColor == "white") {
        document.getElementById("botonet").style.backgroundColor = "red";
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    }
    else {
        document.getElementById("botonet").style.backgroundColor = "white";
        document.getElementsByTagName("body")[0].style.backgroundColor = "red";
    }
}

//Exercici 2 
function coloret2() {
    

    if (document.getElementById("botonet2").style.backgroundColor == "white") {
        if (comptador == 2) {
            document.getElementById("botonet2").style.backgroundColor = "red";
            document.getElementsByTagName("body")[0].style.backgroundColor = "white";
            comptador = 1;
        }
        else{
            comptador++;
        }
    }
    else {
        if (comptador == 2) {
            document.getElementById("botonet2").style.backgroundColor = "white";
            document.getElementsByTagName("body")[0].style.backgroundColor = "red";
            comptador = 1;
        }
        else{
            comptador++;
        }
    }
}

//Exercici 3 
function multi() {
    let a = valor;
    let multi = 1;
    let resposta = ""
    for (a; a > 1; a--) {
        resposta += a + " * ";
        multi = multi * a;
    }
    resposta += "1 = " + multi;
    console.log(resposta);
}

//Exercici 4
function mitjanaImparells(llista) {
    let resultat = 0;
    let counter = 0;
    for (let a = 0; a < llista.length; a++) {
        if (a % 2 == 1) {
            resultat += llista[a];
            counter++;
        }
    }
    let resposta = resultat / counter;
    return resposta;
}

//Exercici 5
function mitjanaParells(llista) {
    let resultat = 0;
    let counter = 0;
    for (let a = 0; a < llista.length; a++) {
        if (a % 2 == 0) {
            resultat += llista[a];
            counter++;
        }
    }
    let resposta = resultat / counter;
    return resposta;
}

//Exercici 6

function pintaQuadrant() {
    let rows = document.querySelector("tbody").children
    let matrix = []
    for (var i = 0; i < rows.length; i++) {
        matrix.push(rows[i].children)
    }
    for (let i = parseInt(matrix.length / 2); i <matrix.length; i++) {
        for (let j = 0; j <= parseInt(matrix[i].length / 2-1); j++) {
            matrix[i][j].style.backgroundColor = "red";
        }
    }
}

//Exercici 7

function pintaDiagonals() {
    let rows = document.querySelector("tbody").children
    let matrix = []
    for (var i = 0; i < rows.length; i++) {
        matrix.push(rows[i].children)
    }
    for (let i = 0; i <matrix.length; i++) {
        for (let j = 0; j <matrix[i].length; j++) {
            if (i==j){
            matrix[i][j].style.backgroundColor = "red";
            }
        }
    }
    for (let i=matrix.length-1; i>=0; i--){
        for (let j=0; j<matrix[0].length; j++){
            if ((matrix.length-1)-j==i){
            matrix[i][j].style.backgroundColor = "red";
            }
        }
    }
}