import { combineReducers } from 'redux';
import { filtersReducer } from './filterReducer/filterReducer';
import { counterReducer } from './counterReducers/counterReducer';

const rootReducer = combineReducers({
   filter: filtersReducer,
   counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
