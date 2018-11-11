import React, { Component, } from 'react';
import ReactDOM from 'react-dom';
import { hot, } from 'react-hot-loader';
import { createStore, } from 'redux';
import { Provider, } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from './components/reducer';
import Body from './components/body';
import { store, persistor } from './configureStore.js';
import { PersistGate } from 'redux-persist/integration/react';


class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Body />
				</PersistGate>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

export default hot(module)(App);
