export const WINDOW_RESIZE = (width, height) => ({
	type: 'WINDOW_RESIZE',
	width,
	height,
});

export const CART_CLEAR = () => ({
	type: 'CART_CLEAR',
});

export const TRACK = (id) => ({
	type: 'TRACK',
	id,
});

export const ADD_ORDER = (props, counter) => ({
	type: 'ADD_ORDER',
	payload: props,
	counter: counter,
});

export const ADD_ITEM = (props) => ({
	type: 'ADD_ITEM',
	payload: props,
});


export const ADD_USER = (email, password) => ({
	type: 'ADD_USER',
	email,
	password,
});

export const ADD_PRODUCT = (prodid, qty = 1) => ({
	type: 'ADD_PRODUCT',
	newItem: { id: prodid, qty, },
});

export const WINDOW_SCROLL = scrollTop => ({
	type: 'WINDOW_SCROLL',
	scrollTop,
});

export const LOG_IN = user => ({
	type: 'LOG_IN',
	user,
});

export const LOG_OUT = () => ({
	type: 'LOG_OUT',
	user: null,
});
