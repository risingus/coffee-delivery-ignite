import { Card } from '../../components/Card';
import { HomeHero } from './components/HomeHero';
import styles from './styles.module.scss';
import { useCoffeeDelivery } from '../../contexts/CoffeeDelivery';

export function Home() {
  const { coffees } = useCoffeeDelivery();

  return (
    <div className={styles.home}>
      <HomeHero />
      <div className={styles.coffees}>
        <h2>Nossos cafés</h2>
        <div className={styles.cardsCoffees}>
          {
            coffees.map((coffee) => (
              <Card {...coffee} key={coffee.id} />
            ))
          }
        </div>
      </div>
    </div>
  )
} 