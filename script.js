// o que são vetores ou arrays

//como declarar um array
//let array = ['string',1,true];
//console.log(array);

//pode guardar vários tipos de dados

let array = ['string', 1, true, ['array1']];
console.log(array[0]);

//forEach

array.forEach(function(item,indice){console.log(item,indice)})

//push()

array.push('novo item');
console.log(array);

//pop()

array.pop();
console.log(array);

//shift

array.shift('novo item');
console.log(array);

//unshift

array.unshift('novo item');
console.log(array);

//indexOf

console.log(array.indexOf(true));

//splice

array.splice(0,3);
console.log(array);

//slice

let novoArray = array.slice(0,3);
console.log(novoArray);

//objetos

let object = {string: 'string', number:1, boolean:true, array:['array'], objectInterno:{objectoInterno:'objeto interno'}};
console.log(object.number);

//desestruturação do objeto

var string = object.string;
console.log(string);

var arrayInterno = object.arrayInterno;
console.log(arrayInterno);

var{string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno)