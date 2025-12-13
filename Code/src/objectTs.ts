const chai = {
    name : "masala chai",
    price: 20,
    isHot: true
};

// {
//     name : String
//     price: number
//     isHot: boolean
// }

// ########################

//predefine the types

let tea : {
    name : string,
    price: number,
    isHot: boolean
};

tea = {
    name: "ginger tea",
    price: 15,
    isHot: false
}

type Tea = {
    name : string;
    price: number;
    ingredients: string[];
};

const adhrakTea : Tea = {
    name: "Adhrak Tea",
    price: 25,
    ingredients: ["water", "milk"]
};


type cup = {size : string};

const smallCup = {size: "200ml"};

const largeCup = {size: "500ml", material: "plastic"};

// largeCup = smallCup;


type Item = {name : string, price: number};

type Address= {street: string, pin:number};

type Order = {
    id: string,
    item: Item[],
    address: Address
}

type chai = {name : string, price: number, isHot: boolean};

const updatechai = (updates: Partial<chai>)=>{
    console.log("updates the chai with", updates);
}

updatechai({price: 30});


type Chai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
}

type basicChaiInfo = Pick<Chai, "name" | "price">;

const chaiIf : basicChaiInfo = {
    name : "lemon tea",
    price: 15
}

type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string[];
};

type PublicChai = Omit<ChaiNew, "secretIngredients">;



