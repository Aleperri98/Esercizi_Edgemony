let str = prompt("inserisci 5 nomi separati da una virgola", 'Stefania, Sandro, Maria, Giacomo, Giorgia'). split(',');

let arrGiacomo = str .splice ("3", "1");
str .push ('Franco','Valentina',);
str .splice ("3","1", "Marta")
 
let arr1 = Array.from(str);
let arrName = (arrGiacomo.concat(arr1));
console.log (arrName);

let arrAge = [ 32, 21, 47, 12, 78 ]
let NUM1 = arrAge .splice("3", "1",);
arrAge .unshift(NUM1);
arrAge .splice("4","1","6");
arrAge .push("54", "32");

console.log (arrAge);

let finalArray = [arrName, arrAge]

console.log (finalArray)