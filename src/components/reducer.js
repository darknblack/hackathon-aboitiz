import _findIndex from 'lodash/findIndex';
import _pullAt from 'lodash/pullAt';


const initialState = {
	windowHeight: 500,
	windowWidth: 500,
	scrollTop: 0,
	currentItem: '',
	username: '',
	items: [],
	user: null,
	cart: [],
	order: [],
	trackingNumber: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

	case 'TRACK': {
		return {
			...state,
			trackingNumber: action.id
		}
	};

	case 'ADD_ITEM': {

		const { sku } = action.payload;
		const index = _findIndex(state.cart, { sku: sku });


		if(index !== -1) {
			const newItem = state.cart[index];
			const quantity = state.cart[index].quantity + action.payload.quantity;
			newItem.quantity = quantity;
			const pulled = _pullAt(state.cart, index);
			console.log(pulled, "pulled/removed");

			return {
				...state,
				cart: [
					newItem,
					...state.cart,
				],
			}
		};

		return {
			...state,
			cart: [
				action.payload,
				...state.cart,
			],
		}
	}

	case 'ADD_ORDER':
		return {
			...state,
			order: [...state.order,{
				id: action.counter,
				item: action.payload,
			}],
			cart: [],
		};

	case 'CART_CLEAR':
		return {
			...state,
			cart: [],
		};

	case 'WINDOW_RESIZE':
		return {
			...state,
			windowWidth: action.width,
			windowHeight: action.height,
		};

	case 'WINDOW_SCROLL':
		return {
			...state,
			scrollTop: action.scrollTop,
		};

	default:
		return state;
	}
};

export default reducer;
