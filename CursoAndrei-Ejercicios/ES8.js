//padend padstart
'tortuga'.padEnd(50);
'tortuga'.padStart(50);

//obj entries values
let season = {
    2015:'1',
    2016:'2',
    2018:'3',
    2019:'4',
};

Object.values(season).map(value =>{
    return value;
});

Object.entries(season).map(value =>{
    return value;
});

//example
let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  };

  Object.entries(obj).map(value =>{
    return value.join(' ');
}).join(' ');


