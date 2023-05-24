import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from "react-router-dom";
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import styles from './styles.module.scss';
import logo from '../../assets/images/logo.svg'
import { localeApi } from '../../services/api';
import { convertStateToCode } from '../../services/utils';
import { useCoffeeDelivery } from '../../contexts/CoffeeDelivery';

interface CoordinatesProps {
  latitude: number
  longitude: number
}

interface CurrentPositionProps {
  coords: CoordinatesProps
}

export function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation()
  const { cartCount, resetState } = useCoffeeDelivery()
  const [city, setCity] = useState('' as string)
  const [stateCode, setStateCode] = useState('' as string)

  function redirectToHome() {
    if (pathname === '/success') {
      resetState()
    }
    navigate('/');
  }

  function goToCart() {
    if (pathname === '/success') {
      resetState()
      navigate('/')
      return
    }

    if (!cartCount || cartCount <= 0) {
      toast('Seu carrinho está vazio', {
        icon: '🛒'
      })
      return;
    }
    navigate('checkout')
  }

  async function getLocation({ coords }: CurrentPositionProps) {
    try {
      const { latitude, longitude } = coords;

      const { data } = await localeApi.get(`reverse.php?key=${import.meta.env.VITE_LOCATION_IQ_API_KEY}&zoom=10&lat=${latitude}&lon=${longitude}&format=json`);

      const city = typeof data?.address?.city === 'string'
        ? data?.address?.city
        : ''

      const stateCod = typeof data?.address?.state === 'string'
        ? convertStateToCode(data?.address?.state)
        : ''

      setCity(city)
      setStateCode(stateCod)

    } catch (error) {
      setCity('Não informado')
    }
  }

  async function handleGetLocation() {
    navigator.geolocation.getCurrentPosition(getLocation, () => setCity('Não informado'))
  }

  useEffect(() => {
    function getCordinates() {
      if (city) return;
      navigator.geolocation.getCurrentPosition(getLocation, () => setCity('Não informado'))
    }

    getCordinates()
  }, [city])


  return (
    <header className={styles.headerContainer}>

      <img src={logo} alt="" className={styles.logo} onClick={redirectToHome} />

      <div className={styles.actionsContainer}>
        <button type='button' className={styles.buttonLocale} onClick={handleGetLocation}>
          <MapPin size={22} weight="fill" className={styles.buttonLocaleIcon} />
          <span>
            {city}{stateCode ? `, ${stateCode}` : ''}
          </span>
        </button>

        <button type='button' className={styles.buttonCart} onClick={goToCart} >
          <ShoppingCart size={22} weight="fill" className={styles.buttonCartIcon} />
          {
            cartCount > 0 && pathname !== '/success' && (
              <div className={styles.buttonCartCount}>
                {cartCount}
              </div>
            )
          }
        </button>
      </div>
    </header>
  )
}