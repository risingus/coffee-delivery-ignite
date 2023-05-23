import { useMemo } from 'react'
import { Trash } from '@phosphor-icons/react'
import { formatCurrency } from '../../../../services/utils'
import { CoffeeCount } from '../../../../components/CoffeeCount'
import styles from './styles.module.scss'


interface CoffeeCheckoutCardProps {
  count: number
  title: string
  img: string
  price: number
}

export function CoffeeCheckoutCard({ count, title, img, price }: CoffeeCheckoutCardProps) {

  const totalPrice = useMemo(() => {
    if (count === 0) return 'R$ 0,00';
    const total = (count * price).toFixed();
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
            <CoffeeCount count={count} decreaseCounter={() => null} increaseCounter={() => null} size='small' />
            <button>
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