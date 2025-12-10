function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai...`;
    }

    return `Chai order: ${kind}`;
}

function serveChai(msg? : string){
    if(msg){
        return `Serving ${msg}`;
    }

    return `Serving default massala chai`;
}

function orderChai(size: "small" | "mediun" | "large"){
    if(size === "small"){
        return `small cutting chai`;
    }
    if(size == 'mediun'){
        return `medium chai`;

        return `chai order #${size}`;
    }
}

class KulhadChai{
    server(){
        return `Kulhad chai served`;
    }
}

class Cutting{
    server(){
        return `Cutting chai served`;
    }
}

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any) : obj is ChaiOrder {
    return (
        typeof obj === "object" && 
        obj !== null &&
        typeof obj.type === "string"
        && typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type}`;
    }
    return `Serving ${item}`;
}