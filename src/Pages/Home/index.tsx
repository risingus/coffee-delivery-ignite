import { useState } from 'react';
import { Card } from '../../components/Card';
import { coffeesList } from '../../constants/coffeelist';
import { HomeHero } from './components/HomeHero';
import styles from './styles.module.scss';

interface CoffeeTypes {
  id: number
  description: string
}
interface CoffeeCounter {
  id: string
  count: number
  title: string
  description: string
  img: string
  price: number
  types: CoffeeTypes[]
}

const coffeeCounterInitial = coffeesList.map((coffee) => ({ ...coffee, id: coffee.title, count: 0 }))

export function Home() {
  const [coffeeCounter, setCoffeeCounter] = useState(coffeeCounterInitial as CoffeeCounter[])

  function increaseCounter(id: string) {
    setCoffeeCounter((state) => state.map((coffee) => {
      if (coffee.id !== id) return coffee;
      if (coffee.count === 10) return coffee
      return {
        ...coffee,
        count: coffee.count + 1
      }
    }))
  }

  function decreaseCounter(id: string) {
    setCoffeeCounter((state) => state.map((coffee) => {
      if (coffee.id !== id) return coffee;
      if (coffee.count === 0) return coffee
      return {
        ...coffee,
        count: coffee.count - 1
      }
    }))
  }

  return (
    <div className={styles.home}>
      <HomeHero />
      <div className={styles.coffees}>
        <h2>Nossos cafés</h2>
        <div className={styles.cardsCoffees}>
          {
            coffeeCounter.map((coffee) => (
              <Card {...coffee} key={coffee.title} increaseCounter={increaseCounter} decreaseCounter={decreaseCounter} count={coffee.count} />
            ))
          }
        </div>
      </div>
    </div>
  )
} 