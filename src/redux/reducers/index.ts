import { combineReducers } from 'redux';
import { filtersReducer } from './filterReducer/filterReducer';

const rootReducer = combineReducers({
   filter: filtersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
