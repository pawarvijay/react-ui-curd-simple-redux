import { createStore, combineReducers } from 'redux';
import { itemsReducer } from './itemsReducer';

const rootReducer = combineReducers({
    items: itemsReducer,
});

export const store = createStore(rootReducer);
