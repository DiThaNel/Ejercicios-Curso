const basket = ['manzana' , 'pera', 'melon',];
const detailedbasket = {
    manzana: 5,
    pera: 8,
    melon: 10,
};

//for loop
for (let i=0; i < basket.length; i++){
   console.log(basket[i]);
};

//foreach loop
basket.forEach(item =>{
   console.log(item);
});

//for of loop
//iterating - arrays, strings. 
for (item of basket){
    console.log(item);
}

//for in enumeramos propiedades
for (item in detailedbasket){
    console.log(item);
}

// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.

const array = [-1,0,3,100, 99, 2, 99]; // should return 100

function biggestNumberInArray(array) {
    let mayor = 0;
    for (item of array){
        if(mayor < item){
            mayor = item;
        }
    }
    return mayor;    
}
biggestNumberInArray(array);

