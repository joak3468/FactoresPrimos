let main = () => {
    console.log(repeticion());
}


let repeticion = ( numero = 600851475143 , iterador = 2, acumulador = [] ) => {

    while(numero%iterador == 0)
    {
        console.log("Numero: ", iterador);
        numero = numero / iterador;
        acumulador.push(iterador);
    }
    if (numero == 1){
        return acumulador;
    }
    else{
        return repeticion (numero, iterador+1,acumulador)
    }

}


main();



