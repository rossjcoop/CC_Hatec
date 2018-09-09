import { createStore } from 'redux';
import { reducer } from './reducers/reducer';
import { StoreState } from './types/index';

const store = createStore<StoreState>(reducer)

