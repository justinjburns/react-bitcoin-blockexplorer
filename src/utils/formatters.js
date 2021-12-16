import moment from 'moment';

export const dateTimeFormat = 'MM/DD/YY HH:mm';
export const rowsPerPage = [10, 25, 50, 100];
export const skeletonArr = [...Array(6).keys()];

/**  used in SelectedBlockDetails: **/
const col1 = ['confirmations', 'size', 'weight', 'height', 'version', 'versionHex' ,'merkleroot'];
const col2 = ['time', 'nonce', 'difficulty', 'bits', 'chainwork', 'nTx', 'previousblockhash'];
const formatValuesSelectedBlock = (selectedBlock, key) => {
    switch(key) {
        case 'hash':
        case 'chainwork':
        case 'previousblockhash':
        case 'nextblockhash':
            return `0...${selectedBlock[key].replace(/^0+/,'').substr(0, 8)}`;
        case 'merkleroot':
            return `${selectedBlock[key].substr(0, 8)}..`;
        case 'difficulty':
            return selectedBlock[key].toExponential(3);
        case 'time':
            return moment.unix(selectedBlock[key]).format(dateTimeFormat);
        case 'tx':
            return `[ ${selectedBlock[key].length} ]`;
        case 'size':
            return `${( selectedBlock[key] / 1000000 ).toFixed(3)} MB`;
        default: 
            return selectedBlock[key];
    }
}

/**  used in SelectedTransactionDetails: **/
const fields1 = ['hash', 'confirmations', 'time', 'size', 'version', 'weight'];
const fields2 = ['vin', 'vout'];
const vincol =[ 'txid', 'coinbase', 'vout',  'sequence' ]; //'scriptSig', 'txwitness',
const voutcol = ['value', 'n', 'type']; //, 'addresses'
const formatValuesSelectedTransactionDetails = (tx, key) => {
    switch(key) {
        case 'hash':
        case 'blockhash':
            return tx[key];
        case 'time':
        case 'blocktime':
            return moment.unix(tx[key]).format(dateTimeFormat);
        case 'size':
        case 'vsize':
            return ` ${tx[key]} B `;
        default: 
            return tx[key];
    }
};

/**  used in SelectedBlockTransactions: **/
const columns = [{
    field: 'txid', 
    headerName: 'Transaction ID', 
    headerClassName: 'txHeader',
    cellClassName: 'txCell',
    flex: 1,
    minWidth: 400
}];

export const selectedBlockDetails = {
    col1,
    col2, 
    formatValues: formatValuesSelectedBlock,
    skeletonArr
};

export const selectedTransactionDetails = { 
    fields1, 
    fields2, 
    formatValues: formatValuesSelectedTransactionDetails,
    skeletonArr,
    vincol,
    voutcol,
};

export const selectedBlockTransactions = {
    columns,
    rowsPerPage
};