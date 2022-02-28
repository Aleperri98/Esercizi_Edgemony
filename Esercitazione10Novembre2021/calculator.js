

function minimalCalc(numbers){
    const sum = numbers.reduce((acc, num) => acc + num);
    const sub = numbers.reduce((acc, num) => acc - num);
    const mult = numbers.reduce((acc, num) => acc * num);
    const div = numbers.reduce((acc, num) => acc / num);
    const power = numbers.reduce((acc,num) => acc ** num);
    const sqrt = Math.sqrt(numbers);
     return {
        sum: sum(),
        sub: sub(),
        mult: mult(),
        div: div(),
        power: power(),
        sqrt: sqrt()
     }};






try {
    const numbersChoiche = prompt("Inserisci numeri: ");
    const numbers = numbersChoiche.split(",");
    const parsedNumbers = [];
    for (x of numbers) {
         parsedNumbers.push(parseInt(x));
      }


if (numbersChoiche == false || numbersChoiche == null) { throw "no numbers"; }
if (numbersChoiche.length == 1) { throw "only one number";} 


    
} catch(err) {
    switch (err) {
        case "no numbers":
            alert ("Inserire i numeri!");
        break;

        case  "only one number":
            alert ("Hai inserito solo un numero!");
        break;
    }
}
finally {
 alert ("operazione completata");
};


console.log(minimalCalc(parsedNumbers));
