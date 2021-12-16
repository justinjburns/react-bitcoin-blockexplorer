import { useSelector } from 'react-redux';
import { withStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { selectedBlockDetails as formatters } from '../../utils/formatters';
import styles from './styles';


function SelectedBlockDetails({ classes }) {
    const selectedBlock = useSelector(state => state.blocks.selectedBlock);
    const { col1, col2, formatValues, skeletonArr } = formatters;

    console.log('formatters.col1: ', formatters.col1)

    return (
        <Grid container className={classes.selectedBlockContainer}>
            <Grid item xs={12}>
                { selectedBlock ? (
                    <Typography variant="body1" className={classes.blockHash} >
                        Block Hash: 
                        <span style={{fontWeight: 'bold', marginLeft: 15}} >
                            { selectedBlock && `0...${selectedBlock['hash'].replace(/^0+/,'')}` } 
                        </span>
                    </Typography>
                ) : (
                    <Skeleton animation="wave" width='100%' height={40} />
                )}
            </Grid>
			<Grid item xs={12} sm={6} >
                <List>
                    { selectedBlock ? (
                        col1.map(col => (
                            <ListItem 
                                key={col}
                                sx={{ pt: 0, pb: 0 }}
                            >
                                <ListItemText primary={col} />
                                <ListItemSecondaryAction sx={{ fontWeight: '500' }}>
                                    { formatValues(selectedBlock, col) }
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))
                    ) : ( 
                        <>
                            { skeletonArr.map(key => (
                                <Skeleton key={key} animation="wave" width='100%' height={24} />
                            ))}
                        </> 
                    )}
                </List>
            </Grid>
            <Grid item xs={12} sm={6} >
                <List>
                    { selectedBlock ? (
                        col2.map((col) => (
                            <ListItem 
                                key={col}
                                sx={{ pt: 0, pb: 0 }}
                            >
                                <ListItemText primary={col} />
                                <ListItemSecondaryAction sx={{ fontWeight: '500' }}>
                                    { formatValues(selectedBlock, col) }
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))
                    ) : (
                        <>
                            { skeletonArr.map((key) => (
                                <Skeleton key={key} animation="wave" width='100%' height={24} />
                            ))}
                        </>
                    )}
                </List>                
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(SelectedBlockDetails);