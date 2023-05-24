import { ReactNode, createContext, useContext, useMemo, useReducer } from 'react';
import { coffeeDeliveryReducer } from '../reducers/reducer';
import { coffeesList } from '../constants/coffeelist';
import { ConfirmCoffeeProps, addToCart, clearState, confirmPurchase, removeFromCart } from '../reducers/actions';

interface CoffeeDeliveryProviderProps {
  children: ReactNode
}

interface CoffeeTypes {
  id: number
  description: string
}

export interface CoffeeProps {
  id: string
  count: number
  title: string
  description: string
  img: string
  price: number
  types: CoffeeTypes[]
}

interface HandleCoffeeProps {
  id: string
  count: number
}

export interface ReducerInitialProps {
  city: string
  uf: string
  district: string
  address: string
  addressNumber: string
  paymentType: string
  coffees: CoffeeProps[]
  cartCount: number
  coffeeTotal: number
  addCoffeeToCart: (data: HandleCoffeeProps) => void
  removeCoffeeFromCart: (data: HandleCoffeeProps) => void
  buyCoffee: (data: ConfirmCoffeeProps) => void
  resetState: () => void
}

const reducerInitialState = {
  city: '',
  uf: '',
  district: '',
  address: '',
  addressNumber: '',
  paymentType: '',
  coffees: [] as CoffeeProps[],
  cartCount: 0,
  coffeeTotal: 0,
}

const CoffeeDeliveryContext = createContext({} as ReducerInitialProps)

function CoffeeDeliveryProvider({ children }: CoffeeDeliveryProviderProps) {
  const [coffeeState, dispatch] = useReducer(coffeeDeliveryReducer, reducerInitialState, (initialState) => ({
    ...initialState,
    coffees: coffeesList.map((coffee) => ({ ...coffee, count: 0 }))
  }))

  const { coffees } = coffeeState

  const cartCount = useMemo(() => {
    const itensInCart = coffees.filter((coffee) => coffee.count > 0)
    return itensInCart.length
  }, [coffees])


  const coffeeTotal = useMemo(() => {
    const itensInCart = coffees.filter((coffee) => coffee.count > 0)
    if (itensInCart.length === 0) return 0;

    const total = itensInCart.reduce((accumulator, current) => {
      const price = Number((accumulator + (current.price * current.count)).toFixed(2))
      return price
    }, 0)
    return total

  }, [coffees])


  function addCoffeeToCart({ id, count }: HandleCoffeeProps) {
    dispatch(addToCart({ id, count }))
  }

  function removeCoffeeFromCart({ id, count }: HandleCoffeeProps) {
    dispatch(removeFromCart({ id, count }))
  }

  function buyCoffee({ address, addressNumber, paymentType, city, uf, district }: ConfirmCoffeeProps) {
    dispatch(confirmPurchase({ address, addressNumber, paymentType, city, uf, district }))
  }

  function resetState() {
    dispatch(clearState())
  }

  return (
    <CoffeeDeliveryContext.Provider
      value={{
        ...coffeeState,
        cartCount,
        coffeeTotal,
        addCoffeeToCart,
        removeCoffeeFromCart,
        buyCoffee,
        resetState
      }}>
      {children}
    </CoffeeDeliveryContext.Provider>
  )
}

function useCoffeeDelivery() {
  const context = useContext(CoffeeDeliveryContext)
  return context;
}

export { CoffeeDeliveryProvider, useCoffeeDelivery }
