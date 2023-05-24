import { useMemo } from 'react'
import { Trash } from '@phosphor-icons/react'
import { formatCurrency } from '../../../../services/utils'
import { CoffeeCount } from '../../../../components/CoffeeCount'
import styles from './styles.module.scss'
import { useCoffeeDelivery } from '../../../../contexts/CoffeeDelivery'

interface CoffeeCheckoutCardProps {
  id: string
  count: number
  title: string
  img: string
  price: number
}

export function CoffeeCheckoutCard({ count, title, img, price, id }: CoffeeCheckoutCardProps) {
  const { removeCoffeeFromCart, addCoffeeToCart } = useCoffeeDelivery();

  const totalPrice = useMemo(() => {
    if (count === 0) return 'R$ 0,00';
    const total = (count * price).toFixed(2);
    const formatedTotal = formatCurrency({ currency: true, value: Number(total) })
    return formatedTotal
  }, [count, price])


  return (
    <div className={styles.coffeeCardContainer}>
      <div className={styles.coffeeContainer}>
        <img src={img} alt="" />
        <div className={styles.coffeeDetails}>
          <p>{title}</p>
          <div className={styles.coffeeActions}>
            <CoffeeCount count={count} decreaseCounter={() => removeCoffeeFromCart({ count: 1, id })} increaseCounter={() => addCoffeeToCart({ count: 1, id })} size='small' />
            <button type='button' onClick={() => removeCoffeeFromCart({ count, id })}>
              <Trash size={16} />
              <p>remover</p>
            </button>
          </div>
        </div>
      </div>
      <strong>{totalPrice}</strong>
    </div>
  )
}