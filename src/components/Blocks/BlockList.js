import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Skeleton from '@mui/material/Skeleton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ListItemText from '@mui/material/ListItemText';
import { 
    getBlockFromSelectedBlockHeight,
    setSelectedBlockHeight 
} from '../../store/slices/blocks';
import { pageSize } from '../../utils/constants';
import styles from './styles';

function BlockList({ classes }) {
    const dispatch = useDispatch();

    const { blockList, selectedBlockHeight } = useSelector(state => state.blocks)

    const handleSelectedBlockHeight = block => e => {
        dispatch(setSelectedBlockHeight(block));
        dispatch(getBlockFromSelectedBlockHeight(block));
    };

    return (
        <div>
            <Typography className={classes.blockListHeading} variant="h6" >Block Height</Typography>
                <List className={classes.blockListContainer}>
                    { blockList ?
                        blockList.map((block) => (
                            <ListItem 
                                button
                                key={block}
                                className={classes.blockListItem}
                                selected={selectedBlockHeight === block}
                                onClick={handleSelectedBlockHeight(block)}
                            >
                                <ListItemIcon> 
                                    { selectedBlockHeight === block ? 
                                        <CheckCircleRoundedIcon className={classes.selectedIcon} /> : 
                                        <RadioButtonUncheckedRoundedIcon /> 
                                    } 
                                </ListItemIcon>
                                <ListItemText className={classes.blockListItemText}>
                                    <span style={{color: '#aaa', fontSize: '12px', marginRight: 10}}>BLOCK #: </span> { block > 0 ? block : 'loading...' }
                                </ListItemText>
                                <ChevronRightIcon style={{color: '#aaa'}}/>
                            </ListItem>
                        )) :
                        Array.from(Array(pageSize).keys()).map(key => (
                            <ListItem  key={key} style={{padding:0}}>
                                <Skeleton animation="wave" width='100%' height={40} />
                            </ListItem>
                        ))
                    }
                </List>
                
        </div>
    );
}

export default withStyles(styles)(BlockList);

