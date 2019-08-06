let database = [
    {
        usuario: "Gabriel",
        contraseña: "8231298",
    },
    {
        usuario: "Liliana",
        contraseña: "8257681",
    }
    
];

let newsFeed = [
    {
        usuario: "Liliana",
        LineaTiempo: "Heated",
    },
    {
        username: "Jesus",
        LineaTiempo: "Cooled",
    }
];

let usuario = prompt("Escriba su usuario");
let Contraseña = prompt("Escriba su contraseña");

const validar =(usuario,contraseña) =>{
    for (item in database){
        if (database[item].usuario === usuario && database[item].contraseña === contraseña){
            return true;
        }
    }

};

const logear = (user,pass) => {
    if (validar(user,pass))
    {
        console.log(newsFeed);
    }else{
        alert("error en credenciales");
    }
   
};

logear(usuario,Contraseña);