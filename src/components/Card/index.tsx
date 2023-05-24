
import { ShoppingCart } from '@phosphor-icons/react';
import styles from './styles.module.scss';
import { formatCurrency } from '../../services/utils';
import { CoffeeCount } from '../CoffeeCount';
import { useState } from 'react';
import { CoffeeProps, useCoffeeDelivery } from '../../contexts/CoffeeDelivery';

export function Card({
  id,
  title,
  description,
  img,
  price,
  types,
}: CoffeeProps) {
  const [coffeeCount, setCoffeeCount] = useState(0 as number);
  const { addCoffeeToCart } = useCoffeeDelivery();

  function increaseCounter() {
    setCoffeeCount((state) => {
      if (state === 10) return state
      return state + 1
    })
  }

  function decreaseCounter() {
    setCoffeeCount((state) => {
      if (state === 0) return state
      return state - 1
    })
  }

  function handleAdd() {
    addCoffeeToCart({ count: coffeeCount, id })
    setCoffeeCount(0)
  }

  return (
    <div className={styles.card}>
      <img src={img} alt="" />

      <div className={styles.cardContent}>

        {
          Array.isArray(types) && types.length > 0
          && (
            <div className={styles.types}>
              {
                types.map((type) => (
                  <div className={styles.type} key={String(type.id)}>
                    {type.description}
                  </div>
                ))
              }
            </div>
          )
        }

        <div className={styles.cardDescription}>
          <strong>{title}</strong>
          <p>{description}</p>
        </div>

        <div className={styles.footer}>
          <p>R$ <strong>{formatCurrency({ currency: false, value: price })}</strong></p>

          <div className={styles.actions}>
            <CoffeeCount count={coffeeCount} increaseCounter={increaseCounter} decreaseCounter={decreaseCounter} />
            <button type='button' onClick={handleAdd}>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}