import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reduxThunk from 'redux-thunk';
import reducer from './components/reducer';


const persistConfig = {
	key: 'root9',
	storage,
};

const persistedReducer = persistReducer(
	persistConfig,
	reducer
);

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
	persistedReducer,
	devTool,
	applyMiddleware(reduxThunk)
);

export const persistor = persistStore(store);