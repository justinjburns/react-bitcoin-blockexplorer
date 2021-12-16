import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@mui/styles';
import { Tooltip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreIcon from '@mui/icons-material/MoreVert';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GroupsIcon from '@mui/icons-material/Groups';

import { getConnectionCount } from '../../store/slices/fullnode';
import { fullNode } from '../../api/config';
import styles from './styles';

function Nav ({ classes }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
	const dispatch = useDispatch();
	
	const connectionCount = useSelector(state => state.fullnode.connectionCount);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	useEffect(() => {
		dispatch(getConnectionCount());
	}, []);

	const menuId = 'primary-search-account-menu';

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton aria-label="Peer Connection count" color="inherit">
					<Badge badgeContent={connectionCount ? connectionCount : '?'} color="secondary">
						<GroupsIcon />
					</Badge>
				</IconButton>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar position="static">
				<Toolbar>
					<Typography className={classes.title} variant="body1" noWrap>
						{`Bitcoin Full Node - Blockchain Explorer - [${fullNode.ipAddress}:${fullNode.port}]`}
					</Typography>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<Tooltip title="Peer Connection count">
							<IconButton aria-label="Peer Connection count" color="inherit">
								<Badge badgeContent={connectionCount ? connectionCount : '?'} color="secondary">
									<GroupsIcon />
								</Badge>
							</IconButton>
						</Tooltip>		
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
		</div>
	);
}

// const mapStateToProps = state => ({
//     connectionCount: state.connectionCount
// });

// const { getconnectioncount } = actions;

// const mapDispatchToProps = {
//     getconnectioncount
// };

// export default compose(
// 	withStyles(styles),
// 	connect(mapStateToProps, mapDispatchToProps)
// )(Nav);

export default withStyles(styles)(Nav);