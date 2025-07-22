let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));
let num3 = Number(prompt("Ingrese el tercer número:"));

console.log(typeof num1);

if (num1 > num2 && num1 > num3 &&  num2 > num3 && num1 != num2 && num1 != num3 && num2 != num3) {
    console.log("El número mayor es: " + num1 + " El numero del medio es: " + num2 + " El número menor es: " + num3);
}
else if (num1 > num3 && num1 > num2 && num2 < num3 && num1 < num3 && num1 != num2 && num1 != num3 && num2 != num3) {
    console.log("El número mayor es: " + num1 + " El numero del medio es: " + num3 + " El número menor es: " + num2);
}
else if (num2 > num1 && num2 > num3 && num1 > num3  && num1 != num2 && num1 != num3 && num2 != num3) {
    console.log("El número mayor es: " + num2 + " El numero del medio es: " + num1 + " El número menor es: " + num3);
}
else if (num2 > num1 && num2 > num3 && num1 > num3  && num1 != num2 && num1 != num3 && num2 != num3) {
    console.log("El número mayor es: " + num2 + " El numero del medio es: " + num1 + " El número menor es: " + num1);

}else if (num3 > num1 && num3 > num2 && num1 < num2 && num1 != num2 && num1 != num3 && num2 != num3) {
    console.log("El número mayor es: " + num3 + " El numero del medio es: " + num2 + " El número menor es: " + num1);

}
else if (num3 > num1 && num3 > num2 && num1 > num2  && num1 != num2 && num1 != num3 && num2 != num3) {
    console.log("El número mayor es: " + num3 + " El numero del medio es: " + num1 + " El número menor es: " + num2);

}
