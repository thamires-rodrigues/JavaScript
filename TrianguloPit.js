cateto1 = parseInt(prompt("Insira o valor do primeiro cateto: "));
cateto2 = parseInt(prompt("Insira o valor do segundo cateto: "));
hip = parseInt(prompt("Insira o valor da hipotenusa: "));
cateto2+=hip; 
var raiz = Math.sqrt(cateto2);
    if(cateto1 == raiz) 
    {
        document.write("O triângulo é pitagórico!");
    }

    else
    {
        document.write("O triângulo NÃO é pitagórico!");
    }
