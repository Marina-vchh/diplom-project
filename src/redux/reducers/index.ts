import { combineReducers } from 'redux';
import { filtersReducer } from './filterReducer/filterReducer';
import { counterReducer } from './counterReducers/counterReducer';
import { likeReducer } from './likeReducers/likeReducer';
import { sortReducer } from './sortReducers/sortReducer';

const rootReducer = combineReducers({
   filter: filtersReducer,
   counter: counterReducer,
   like: likeReducer,
   sort: sortReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
