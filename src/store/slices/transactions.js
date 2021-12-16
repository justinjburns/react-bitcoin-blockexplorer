import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTransaction } from '../../api';

const defaultState = {
	selectedBlockTransactions: null,
	selectedTransaction: null,
};

export const getSelectedTransactionFromTxid = createAsyncThunk(
	'transactions/getTransaction', async txid => {
		try {
			const { data: { result: transaction } } = await getTransaction(txid);
			return transaction;
		} catch(e) {
			return Promise.reject(e);
		}
	}
); 

export const transactionsSlice = createSlice({
	name: 'transactions',
	initialState: defaultState,
	reducers: {
		setSelectedBlockTransactions: (state, action) => 
			state.selectedBlockTransactions = action.payload
	},
	extraReducers: builder => {
		builder.addCase(getSelectedTransactionFromTxid.fulfilled, (state, action) => {
			state.selectedTransaction = action.payload
		});
	}
});

// Action creators are generated for each case reducer function
export const { setSelectedBlockTransactions } = transactionsSlice.actions

export default transactionsSlice.reducer