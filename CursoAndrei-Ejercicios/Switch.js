function operador(Operacion = prompt("operador")){
    let SRMD;
        switch (Operacion){
            case "+":
                SRMD = "Sumaste";
                break;
            case "-":
                SRMD = "Restaste";
                break;
            case "*":
                SRMD = "Multiplicaste";
                break;
            case "/":
                SRMD = "Dividiste";
                break;
            default:
                SRMD = "Ingresa un operador valido";
        }
        return SRMD;
}
operador();
