import { CoffeeProps } from '../contexts/CoffeeDelivery'
import { ActionTypes } from './actions'

interface ReducerStateProps {
	city: string
	uf: string
	district: string
	address: string
	addressNumber: string
	paymentType: string
	coffees: CoffeeProps[]
	cartCount: number
}

export function coffeeDeliveryReducer(state: ReducerStateProps, action: any) {
	switch (action.type) {
		case ActionTypes.ADD_COFFEE: {
			if (!action?.payload?.id) return state
			if (!action?.payload?.count) return state
			const { id, count } = action.payload
			return {
				...state,
				coffees: state.coffees.map((coffee: CoffeeProps) => {
					if (coffee.id !== id) return coffee
					if (coffee.count >= 10) return coffee
					return {
						...coffee,
						count: coffee.count + count,
					}
				}),
			}
		}

		case ActionTypes.REMOVE_COFFEE: {
			if (!action?.payload?.id) return state
			if (!action?.payload?.count) return state
			const { id, count } = action.payload
			return {
				...state,
				coffees: state.coffees.map((coffee: CoffeeProps) => {
					if (coffee.id !== id) return coffee
					if (coffee.count - count <= 0)
						return {
							...coffee,
							count: 0,
						}
					return {
						...coffee,
						count: coffee.count - count,
					}
				}),
			}
		}

		case ActionTypes.CONFIRM_COFFEE: {
			const { address, addressNumber, paymentType, city, uf, district } =
				action.payload
			return {
				...state,
				city,
				uf,
				district,
				address,
				addressNumber,
				paymentType,
			}
		}

		case ActionTypes.CLEAR_STATE: {
			return {
				...state,
				city: '',
				uf: '',
				district: '',
				address: '',
				addressNumber: '',
				paymentType: '',
				coffees: state.coffees.map((coffee) => ({
					...coffee,
					count: 0,
				})),
			}
		}

		default: {
			return state
		}
	}
}
