import { Coffee, MapPin, Package, Timer } from '@phosphor-icons/react';
import heroBackground from '../../../../assets/images/heroBackground.svg'
import heroImg from '../../../../assets/images/heroImg.svg'
import styles from './styles.module.scss';

export function HomeHero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroInfo}>
          <div className={styles.heroText}>
            <h1>
              Encontre o café perfeito para qualquer hora do dia
            </h1>

            <p>
              Com o Coffee Delivery você recebe seu café onde estive, a<br />
              qualquer hora
            </p>

            <div className={styles.heroItems}>
              <div className={styles.heroItem}>
                <div>
                  <MapPin size={16} weight="fill" />
                </div>
                <p>Compra simples e segura</p>
              </div>

              <div className={styles.heroItem}>
                <div>
                  <Package size={16} weight="fill" />
                </div>

                <p>Embalagem mantém o café intacto</p>
              </div>

              <div className={styles.heroItem}>
                <div>
                  <Timer size={16} weight="fill" />
                </div>
                <p>Entrega rápida e rastreada</p>
              </div>


              <div className={styles.heroItem}>
                <div>
                  <Coffee size={16} weight="fill" />
                </div>
                <p>O café chega fresquinho até você</p>
              </div>
            </div>
          </div>
        </div>

        <img src={heroImg} className={styles.heroImg} />
      </div>
      <img src={heroBackground} className={styles.heroBackground} />
    </>

  )
}