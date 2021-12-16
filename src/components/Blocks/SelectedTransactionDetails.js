import React, { useState, useEffect } from 'react';
import { withStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { getSelectedTransactionFromTxid } from '../../store/slices/transactions';
import { selectedTransactionDetails as formatters } from '../../utils/formatters';
import styles from './styles';

function SelectedTransactionDetails({ selectedTxId, classes }) {
    const [transactionDetails, setTransactionDetails] = useState();

    useEffect(() => {
        getSelectedTransactionFromTxid(selectedTxId).then((tx) => {
            setTransactionDetails(tx);
        });
    }, [selectedTxId, getSelectedTransactionFromTxid]);

    return (
        <Grid container className={classes.selectedTransactionContainer} spacing={2}>
			<Grid item xs={12}>
                <List>
                    {transactionDetails ? formatters.fields1.map((key) => (
                        <ListItem key={key}>
                            <ListItemText primary={key} />
                            <ListItemSecondaryAction>
                                { formatters.formatValues(transactionDetails, key) }
                            </ListItemSecondaryAction>
                        </ListItem>
                    )) :( 
                        <>
                            { formatters.skeletonArr.map((key) => (
                                <Skeleton 
                                    key={key}
                                    animation="wave"
                                    width='100%'
                                    height={24} 
                                />)) 
                            }
                        </> 
                        )
                    }
                </List>
            </Grid>
            <Grid item xs={6} >
                vin
                { transactionDetails ? transactionDetails.vin.map((vinObj) => {
                    console.log('vinObj==' + JSON.stringify(vinObj));
                    window.vinObj = vinObj;
                    formatters.vincol.map((key) => (
                        (vinObj[key] !== undefined) && <ListItem key={key}>
                            <ListItemText primary={key} />
                            <ListItemSecondaryAction>
                                { formatters.formatValues(vinObj, key) }
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))
                }): (
                        <>
                            { formatters.skeletonArr.map((key) => (
                                <Skeleton 
                                    key={key}
                                    animation="wave"
                                    width='100%'
                                    height={24} 
                                />)) 
                            }
                        </> 
                    )
                }
            </Grid>
            <Grid item xs={6} >
                vout
                    { transactionDetails ? transactionDetails.vout.map((voutObj) => {
                        formatters.voutcol.map((key) => (
                            (voutObj[key] !== undefined) && <ListItem key={key}>
                                <ListItemText primary={key} />
                                <ListItemSecondaryAction>
                                    { formatters.formatValues(voutObj, key) }
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))
                    }): (
                        <>
                            { formatters.skeletonArr.map((key) => (
                                <Skeleton 
                                    key={key}
                                    animation="wave"
                                    width='100%'
                                    height={24} 
                                />)) 
                            }
                        </> 
                    )
                }
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(SelectedTransactionDetails);