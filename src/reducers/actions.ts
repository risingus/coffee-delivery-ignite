export enum ActionTypes {
	ADD_COFFEE = 'ADD_COFFEE',
	REMOVE_COFFEE = 'REMOVE_COFFEE',
	CONFIRM_COFFEE = 'CONFIRM_COFFEE',
	CLEAR_STATE = 'CLEAR_STATE',
}

interface HandleCoffeeProps {
	id: string
	count: number
}

export interface ConfirmCoffeeProps {
	city: string
	uf: string
	district: string
	address: string
	addressNumber: string
	paymentType: string
}

// export type CoffeeDeliveryActions =
// 	| {
// 			type: ActionTypes.ADD_COFFEE
// 			payload: HandleCoffeeProps
// 	  }
// 	| {
// 			type: ActionTypes.REMOVE_COFFEE
// 			payload: HandleCoffeeProps
// 	  }
// 	| {
// 			type: ActionTypes.CONFIRM_COFFEE
// 			payload: ConfirmCoffeeProps
// 	  }
// 	| {
// 			type: ActionTypes.CLEAR_STATE
// 	  }

export function addToCart(data: HandleCoffeeProps) {
	return {
		type: ActionTypes.ADD_COFFEE,
		payload: { ...data },
	}
}

export function removeFromCart(data: HandleCoffeeProps) {
	return {
		type: ActionTypes.REMOVE_COFFEE,
		payload: { ...data },
	}
}

export function confirmPurchase(data: ConfirmCoffeeProps) {
	return {
		type: ActionTypes.CONFIRM_COFFEE,
		payload: { ...data },
	}
}

export function clearState() {
	return {
		type: ActionTypes.CLEAR_STATE,
	}
}
