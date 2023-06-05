const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

class Warrior{
    tribe: string
    
    constructor(n:string){
    this.tribe = n
    }
}

const barbarian = new Warrior("viking")

console.log(barbarian);


button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
