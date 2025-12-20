//interface

interface Chai{
    flavour: string
    price: number
    milk? : boolean
}

const masala: Chai = {
    flavour: "Masala",
    price: 12
}

interface Shop {
    readonly id: number
    name: string
}

const s : Shop = {
    id: 1,
    name: "Chaicode cafe"
}

interface DiscountCalculator{
    (price: number): number

}

const apply50 : DiscountCalculator = (price: number) => { 
    return price - 50;
}

interface TeaMachine{
    start(): void
    stop():void
}

const machine: TeaMachine = {
    start(){
        console.log("Machine started");
    },
    stop(){
        console.log("machine stopped");
    }
}

//index signature

interface ChaiRatings {
    [flavour: string]: number
}


const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4.0
}

interface User {
    name: string
}

interface User{
    age: number
}

const u: User = {
    name: "Vansh",
    age: 21
}

interface A {a: string}
interface B {b: string}

interface C extends A, B {}



