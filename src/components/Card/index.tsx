
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react';
import styles from './styles.module.scss';
import { formatCurrency } from '../../services/utils';
import { CoffeeCount } from '../CoffeeCount';

interface CoffeeTypes {
  id: number
  description: string
}

interface CardsProps {
  title: string
  description: string
  img: string
  price: number
  count: number
  types: CoffeeTypes[]
  increaseCounter: (id: string) => void
  decreaseCounter: (id: string) => void
}

export function Card({
  title,
  description,
  img,
  price,
  count,
  types,
  increaseCounter,
  decreaseCounter
}: CardsProps) {
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
            <CoffeeCount count={count} increaseCounter={() => increaseCounter(title)} decreaseCounter={() => decreaseCounter(title)} />
            <button type='button' >
              <ShoppingCart size={22} weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}