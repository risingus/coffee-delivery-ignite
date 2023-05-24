import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import styles from './styles.module.scss'


interface ButtonPaymentTypeProps {
  children: string
  onClick: () => void
  selected: string
}

export function ButtonPaymentType({ children, onClick, selected }: ButtonPaymentTypeProps) {

  const returnButtonIcon = () => {
    if (typeof children !== 'string') return '';
    if (children.toLowerCase() === 'cartão de débito') return <Bank className={styles.buttonIcon} size={16} />
    if (children.toLowerCase() === 'cartão de crédito') return <CreditCard className={styles.buttonIcon} size={16} />
    return <Money className={styles.buttonIcon} size={16} />
  }

  const isSelected = selected === children;

  return (
    <button
      type='button'
      onClick={onClick}
      className={isSelected ? styles.buttonPaymentType_selected : styles.buttonPaymentType}
    >
      {returnButtonIcon()}
      {children}
    </button>
  )
}