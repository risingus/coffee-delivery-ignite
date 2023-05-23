import { Minus, Plus } from '@phosphor-icons/react';
import styles from './styles.module.scss'

interface CoffeeCountProps {
  count: number
  size?: null | 'small'
  increaseCounter: () => void
  decreaseCounter: () => void
}


export function CoffeeCount({ count, decreaseCounter, increaseCounter, size }: CoffeeCountProps) {
  return (
    <div className={size === 'small' ? styles.actionsInputSmall : styles.actionsInput}>
      <button type='button' onClick={decreaseCounter}>
        <Minus size={14} />
      </button>
      <input type="number" disabled value={count} max={10} min={0} />

      <button type='button' onClick={increaseCounter}>
        <Plus size={14} />
      </button>
    </div>
  )
}