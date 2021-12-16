import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@mui/styles';
import { DataGrid } from '@mui/x-data-grid';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SelectedTransactionDetails from './SelectedTransactionDetails';
import { getSelectedTransactionFromTxid } from '../../store/slices/transactions';
import { selectedBlockTransactions as formatters } from '../../utils/formatters';
import styles from './styles';

function SelectedBlockTransactions({ classes }) {
    const dispatch = useDispatch();
    const selectedBlock = useSelector(state => state.blocks.selectedBlock);

    const rows = () => selectedBlock['tx'].map(
        (txid, i) => ({ id: i, txid: txid })
    );

    const handleSelectedTransaction = ({ row }) => {
        dispatch(getSelectedTransactionFromTxid(row.txid));
    }

    const transactionDetailsPanel = (tx) => {
        return (<SelectedTransactionDetails selectedTxId={tx.txid} />);
    };

    return (
        <Grid container className={classes.selectedBlockTransactionsContainer}>
            <Grid item xs={12} style={{ height: 500, width: '100%' }}>
                { selectedBlock ? (
                    <Box
                        sx={{
                            height: 500,
                            '& .txHeader': {
                                fontWeight: 'bold',
                                fontSize: 18
                            },
                            '& .txCell': {
                                fontWeight: 500,
                                fontSize: 15,
                                cursor: 'pointer'
                            },
                        }}
                    >
                        <DataGrid
                            columns={formatters.columns}
                            onRowClick={ handleSelectedTransaction }
                            rows={rows()}
                            pageSize={25}
                            rowsPerPageOptions={formatters.rowsPerPage}
                            sx={{
                                border: 1,
                                borderRadius: 2,
                                borderColor: '#ddd',
                                p: 1
                            }}
                        />
                    </Box>
                ) : (
                    <Skeleton animation="wave" width='100%' height={450} style={{transform: 'none'}} />
                )}
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(SelectedBlockTransactions);