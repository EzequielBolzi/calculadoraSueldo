const calcularSalarioNeto = (sueldoBase) => {
let aportesJubilatorios = parseFloat(sueldoBase * 0.11)
let obraSocial = parseFloat(sueldoBase * 0.03)
let aportePami = parseFloat(sueldoBase * 0.03)
let salarioNeto = parseFloat(sueldoBase - (aportesJubilatorios + obraSocial +  aportePami))
document.querySelector("#aportesJubilatorios").innerHTML="<h3>$"+aportesJubilatorios+"</h3>";
document.querySelector("#obraSocial").innerHTML="<h3>$"+obraSocial+"</h3>";
document.querySelector("#aportePami").innerHTML="<h3>$"+aportePami+"</h3>";
document.querySelector("#salarioNeto").innerHTML="<h3>$"+salarioNeto+"</h3>";
};

document.querySelector("#botonCalcular").addEventListener('click',  e => {
    e.preventDefault();
    let sueldoBase = document.querySelector('#sueldoBruto').value;
    calcularSalarioNeto(sueldoBase);

})