import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import deliveryImg from '../../assets/images/delivery.svg'
import styles from './styles.module.scss';
import { useCoffeeDelivery } from '../../contexts/CoffeeDelivery';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export function Success() {
  const navigate = useNavigate()
  const { address, addressNumber, paymentType, city, district, uf, cartCount, resetState } = useCoffeeDelivery();

  useEffect(() => {
    if (address && paymentType && cartCount) return
    navigate('/')

    return () => {
      resetState()
    }
  }, [address, paymentType, cartCount])

  return (
    <div className={styles.success}>
      <div className={styles.messages}>
        <div className={styles.infoHeader}>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <div className={styles.content}>
          <div className={styles.infoContainer}>
            <div className={styles.info}>
              <div className={styles.infoIcon}>
                <MapPin size={16} weight="fill" />
              </div>

              <div className={styles.infoText}>
                <p>Entrega em <strong>{address}, {addressNumber}</strong></p>
                <p>{district} - {city}, {uf}</p>
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.infoIcon}>
                <Timer size={16} weight="fill" />
              </div>

              <div className={styles.infoText}>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.infoIcon}>
                <CurrencyDollar size={16} />
              </div>

              <div className={styles.infoText}>
                <p>Pagamento na entrega</p>
                <strong className={styles.paymentType}>{paymentType}</strong>
              </div>
            </div>
          </div>
          <img src={deliveryImg} alt="" />
        </div>
      </div>
    </div>

  )
}