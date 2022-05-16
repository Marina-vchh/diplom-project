import { combineReducers } from 'redux';
import { filtersReducer } from './filterReducer/filterReducer';
import { chooseReducer } from './chooseReducer/chooseReducer';

const rootReducer = combineReducers({
   filter: filtersReducer,
   choose: chooseReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
