// class Chai {
//     flavour: string;
//     price: number;

//     constructor(flavour: string, price: number){
//         this.flavour = flavour;
//         this.price = price;
//     }
// }

// const masalaChai = new Chai("Ginger", 12);

// masalaChai.flavour = "Masala";


//----------------------access modifier----------------

class Chai {
    public flavour: string = "Masala";

    private secretIngredient: string = "Cardamom";

    reveal(){
        return this.secretIngredient;
    }

    

}

class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop{
    getName(){
        return this.shopName;
    }
}

class Walet{
    #balance = 100;//private field

    getBalance(){
        return this.#balance;
    }
}

class Cup{
    readonly capacity: number = 23;

    constructor(capacity: number){
        this.capacity = capacity;
    }
}

class ModernChai{
    private _sugar = 2;


    get sugar(){
        return this._sugar;
    }

    set sugar(value: number){
        if(value > 5)throw new Error("Too sweet");
        this._sugar = value;
    }
}

const c = new ModernChai();

c.sugar = 3;
class EkChai{
    static shopName = "chai code cafe";

    constructor(public flavour: string){

    }
}

console.log(EkChai.shopName);

abstract class Drink{
    abstract make(): void;
}

class MyChai extends Drink{
    make(){
        console.log("Improving chai");
    }
}

class Heater{
    head(){}
}

class ChaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.head;
    }
}

