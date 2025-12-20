const chaiFlavour : string[] = ["Masala", "Adrak"];

const chaiPrice : number[] = [10, 15];

const rating: Array<number> = [4.5, 4.0];

type Chai = {
    name : string;
    price: number;
}

const menu: Chai[] = [
    {name: "Masala", price: 10},
    {name: "Adrak", price: 15}
]

const cities: readonly string[] = ["Delhi", "Nagpur"];

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]

let chaiTuple: [string, number];
chaiTuple= ["Masala", 10];
chaiTuple= ["Adrak", 15];

let userInfo : [string, number, boolean];

userInfo = ["vansh" ,100, true];

//_____________________________________________________________

//Enum

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE;

enum Status { 
    PENDING = 100,
    SAVED,
    CANCELLED
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType){
    console.log(`Making ${type}`);
}

makeChai(ChaiType.GINGER);

enum RandomEnum {
    ID = 1,
    NAME = "Chai",
}


const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

// const s = Sugars.HIGH;

let t : [string, number] = ["chai", 100];
// t.push("extra")




