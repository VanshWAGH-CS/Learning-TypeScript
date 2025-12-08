let subs : number | string  = '1M';

let apiRequest: 'pending' | 'success' | 'error' = 'pending';

// apiRequest = 'success';
let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle';

airlineSeat = 'window';

const orders = ['123', '456', '789'];

let currentOrder: string | undefined;


for(let order of orders){
    if(order === '28'){
        currentOrder = order;
        break;
    }

    currentOrder = '11';
}

console.log(currentOrder);

