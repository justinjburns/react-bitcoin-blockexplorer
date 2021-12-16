import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BlockList from './BlockList';
import SelectedBlockDetails from './SelectedBlockDetails';
import SelectedBlockTransactions from './SelectedBlockTransactions';
import { getBlocks } from '../../store/slices/blocks';
import styles from './styles';

function Blocks(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBlocks());
	}, []);

	return (
		<Grid container justify='center'>
			<Grid item xs={12} md={12} >
				<Paper elevation={1} style={{marginTop: 30}} >
					<Grid container className={props.classes.container} spacing={3}>
						<Grid item xs={12} sm={4}>
							<BlockList />
						</Grid>
						<Grid item xs={12} sm={8}>
							<SelectedBlockDetails />
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<SelectedBlockTransactions />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default withStyles(styles)(Blocks);

// const getbestblock = actions.getbestblock;

// const mapDispatchToProps = ({ 
// 	getbestblock
// });

// export default compose(
//     withStyles(styles),
//     connect(null, mapDispatchToProps)
// )(Blocks);