//FUNZIONE CALCULATOR
function calculator (numbers){
    function sum() {
        let sumTotal = 0;
        for(num of numbers) sumTotal += num;
        return sumTotal;
    }
    function sub() {
        let subTotal = numbers[0];
        for(num of numbers) subTotal -= num;
        return subTotal + numbers[0];
    }
    function mult() {
        let multTotal = numbers[0];
        for (num of numbers) multTotal *= num;
        return multTotal / numbers [0];
    }
    function div() {
        let divTotal = numbers[0];
        for(num of numbers) divTotal /= num;
        return divTotal * numbers[0];
    }

    return {
        sum: sum(),
        sub: sub(),
        mult: mult(),
        div: div()
};
};

//AVANZATO
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





