import axios from 'axios';
import { API_BASE_URL } from './config';
import { responseSuccess, responseError } from './interceptors';

const HTTP = axios.create({ baseURL: API_BASE_URL });

HTTP.interceptors.response.use(responseSuccess, responseError);

export const getBestBlockHash = () => HTTP.get(`/getbestblockhash`);

export const getBlock = blockhash => HTTP.get(`/getblock/${blockhash}`);

export const getBlockChainInfo = () => HTTP.get(`/getblockchaininfo`);

export const getBlockCount = () => HTTP.get(`/getblockcount`);

export const getBlockHash = height => HTTP.get(`/getblockhash/${height}`);

export const getConnectionCount = () => HTTP.get(`/getconnectioncount`);

export const getMiningInfo = () => HTTP.get(`/getmininginfo`);

export const getPeerInfo = () => HTTP.get(`/getpeerinfo`);

export const getTransaction = txid => HTTP.get(`/gettransaction/${txid}`);
