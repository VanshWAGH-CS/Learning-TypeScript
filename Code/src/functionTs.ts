function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type} chai`);
}

makeChai("ginger", 2);

function serveChai(): number{
    return 25;
}

function createChai(order: {
    type: string,
    cups: number,
    sugar?: boolean,
    size: "small" | "medium" | "large"
}):number{
    return 4;
}