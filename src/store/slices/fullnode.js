import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getConnectionCount as _getConnectionCount } from '../../api';

const defaultState = {
	connectionCount: null,
    miningInfo: null,
    peerInfo: null
};

export const fullnodeSlice = createSlice({
	name: 'fullnode',
	initialState: defaultState,
	reducers: {
		setMiningInfo: (state, action) => {
			state.miningInfo = action.payload
		},
		setPeerInfo: (state, action) => {
			state.peerInfo = action.payload
		}
	},
	extraReducers: builder => {
		builder.addCase(
			'fullnode/getConnectionCount/fulfilled', (state, action) => {
				state.connectionCount = action.payload
			}
		);
	}
});

export const { setMiningInfo, setPeerInfo } = fullnodeSlice.actions

export default fullnodeSlice.reducer;

export const getConnectionCount = createAsyncThunk(
	'fullnode/getConnectionCount', 
	async () => {
		try {
			const { data: { result: connectionCount } } = await _getConnectionCount();
			return connectionCount;
		} catch(e) {
			return Promise.reject(e);
		}
	}
);