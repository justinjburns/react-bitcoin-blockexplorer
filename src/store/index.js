import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import blocksReducer from './slices/blocks';
import fullnodeReducer from './slices/fullnode';
import transactionsReducer from './slices/transactions';

export default configureStore({
    reducer: {
        blocks: blocksReducer,
        fullnode: fullnodeReducer,
        transactions: transactionsReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});