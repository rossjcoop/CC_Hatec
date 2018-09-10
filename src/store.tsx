import { createStore, Store } from 'redux';
import { reducer } from './reducers/reducer';
import { AppState } from './app-state';

const store: Store<AppState> = createStore(reducer);

export default store