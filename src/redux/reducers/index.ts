import { combineReducers } from 'redux';
import { filtersReducer } from './filterReducer/filterReducer';
import { counterReducer } from './counterReducers/counterReducer';
import { stickerReducer } from './stickersReducers/stickersReducer';
import { sortReducer } from './sortReducers/sortReducer';

const rootReducer = combineReducers({
   filter: filtersReducer,
   counter: counterReducer,
   stickers: stickerReducer,
   sort: sortReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
