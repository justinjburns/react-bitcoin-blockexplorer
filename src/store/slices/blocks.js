import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api';
import { pageSize } from '../../utils/constants';
import { reverse, range } from 'ramda';

const defaultState = {
	bestBlock: null,
	bestBlockHash: null,
	block: null,
	blockChainInfo: null,
	blockHash: null,
	blockList: null,
	blocks: [],
	selectedBlock: null,
	selectedBlockHeight: null,
	selectedTransaction: null,
};

export const blocksSlice = createSlice({
	name: 'blocks',
	initialState: defaultState,
	reducers: {
		setBestBlock: (state, action) => {
			state.bestBlock = action.payload
		},	
		setBestBlockHash: (state, action) => {
			state.bestBlockHash = action.payload
		},	
		setBlock: (state, action) => {
			state.block = action.payload
		},	
		setBlockChainInfo: (state, action) => {
			state.blockChainInfo = action.payload
		},	
		setBlockHash: (state, action) => {
			state.blockHash = action.payload
		},	
		setBlockList: (state, action) => {
			state.blockList = action.payload
		},	
		setBlocks: (state, action) => {
			state.blocks = action.payload
		},	
		setSelectedBlock: (state, action) => {
			state.selectedBlock = action.payload
		},	
		setSelectedBlockHeight: (state, action) => {
			state.selectedBlockHeight = action.payload
		},	
		setSelectedTransaction: (state, action) => {
			state.selectedTransaction = action.payload
		}	
	},
	// extraReducers: builder => {
	// 	builder.addCase('blocks/getBlocks/fulfilled', (state, action) => 
	// 		state.connectionCount = action.payload
	// 	);
	// }
});

export const {
	setBestBlock,
	setBestBlockHash,
	setBlock,
	setBlockChainInfo,
	setBlockHash,
	setBlockList,
	setBlocks,
	setSelectedBlock,
	setSelectedBlockHeight,
	setSelectedTransaction
} = blocksSlice.actions

export default blocksSlice.reducer

export const getBlockFromSelectedBlockHeight = createAsyncThunk(
	'blocks/getBlockFromSelectedBlockHeight', 
	async (arg, { dispatch, getState }) => {
		try {
			const { blocks: { selectedBlockHeight } } = getState();

			const {data: {result: blockHash}} = await API.getBlockHash(selectedBlockHeight);
			dispatch(setBlockHash(blockHash));

			const {data: {result: block}} = await API.getBlock(blockHash);
			const height = block.height;
			
			dispatch(setSelectedBlock(block));
			dispatch(setSelectedBlockHeight(height));

		} catch (e) {
			return Promise.reject(e)
		} 
	}
);

export const getBlocks = createAsyncThunk(
	'blocks/getBlocks', 
	async (arg, { dispatch }) => {
		try {
			const { data: { result: bestBlockHash } } = await API.getBestBlockHash();
			dispatch(setBestBlockHash(bestBlockHash));

			const {data: { result: bestBlock }} = await API.getBlock(bestBlockHash);
			const bestBlockHeight = bestBlock.height;
			const blockList = reverse(range(bestBlockHeight - pageSize, bestBlockHeight + 1));

			dispatch(setBlockList(blockList));
			dispatch(setBestBlock(bestBlock));
			dispatch(setSelectedBlock(bestBlock));
			dispatch(setSelectedBlockHeight(bestBlockHeight)); 
		} catch(e) {
			return Promise.reject(e);
		}
	}
);