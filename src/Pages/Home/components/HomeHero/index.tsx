import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import heroImg from '../../../../assets/images/heroImg.svg'
import styles from './styles.module.scss';

export function HomeHero() {
  return (
      <div className={styles.hero}>
        <div className={styles.heroInfo}>
          <div className={styles.heroText}>
            <h1>
            Encontre o café perfeito <br /> para qualquer hora do dia
            </h1>

            <p>
              Com o Coffee Delivery você recebe seu café onde estive, a<br />
              qualquer hora
            </p>

            <div className={styles.heroItems}>
              <div className={styles.heroItem}>
              <div className={styles.heroShopping}>
                <ShoppingCart size={16} weight="fill" />
                </div>
                <p>Compra simples e segura</p>
              </div>

              <div className={styles.heroItem}>
              <div className={styles.heroDelivery}>
                  <Package size={16} weight="fill" />
                </div>

                <p>Embalagem mantém o café intacto</p>
              </div>

              <div className={styles.heroItem}>
              <div className={styles.heroTime}>
                  <Timer size={16} weight="fill" />
                </div>
                <p>Entrega rápida e rastreada</p>
              </div>


              <div className={styles.heroItem}>
              <div className={styles.heroCoffee}>
                  <Coffee size={16} weight="fill" />
                </div>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
        <img src={heroImg} className={styles.heroImg} />
      </div>

      <div className={styles.heroBackground} />
    </div >
  )
}