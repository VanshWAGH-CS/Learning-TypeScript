import './App.css'
import Card from './component/Card';
import { ChaiCard } from './component/ChaiCard'
import ChaiList from './component/ChaiList';
import { Counter } from './component/Counter'
import { OrderForm } from './component/OrderForm';

import type { Chai } from './types';

const menu: Chai[]=[
  {id: 1, name: "Masala Chai", price: 300},
  {id: 2, name: "Ginger Chai", price: 350},
  {id: 3, name: "Elaichi Chai", price: 600},
  {id: 4, name: "Lemon Tea", price: 250},
]

function App() {

  return (
    <>
      <div>
        
      <h1>Vite + React</h1>
      <ChaiCard
        name="Headphone"
        price={500}
      />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList 
          items={menu}
        />
      </div>

      <div>
        <OrderForm
        onSubmit={(order)=>{
          console.log("Placed Ordered", order.name, order.cups);
        }}
        />
      </div>
      <div>
        <Card
          title="My Card"
        >
          <p>This is the content of the card.</p>
        </Card>
      </div>
    </>
  )
}

export default App
