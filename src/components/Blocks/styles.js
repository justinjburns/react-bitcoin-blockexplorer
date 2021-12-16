import { lighten } from '@mui/material/styles';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex',
        width: '100%',
		paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
        marginTop: 10
    },
    container: {
        padding: [[10, 20, 20, 20]]
	},
	txHeader: {
		fontWeight: 'bold'
	},
	blockListHeading: {
		borderBottom: `1px solid ${theme.palette.grays.dddddd}`,
		paddingTop: 0,
		paddingBottom: 10,
		paddingLeft: 15,
		marginBottom: 10,
		fontWeight: 500 
	},
	blockListContainer: {
		paddingTop: 0,
		paddingRight: 10,
		maxHeight: 800,
		overflow: 'auto'
	},
	blockListItem: {
		color: 'inherit',		
		paddingTop: 5,
		paddingBottom: 5,
		borderRadius: 10,
		marginBottom: 8,
		boxShadow: `0 1px 2px ${theme.palette.grays._00000015}`,
		background: `${theme.palette.grays.f5f5f5}`,
		'&:hover': {
			backgroundColor: `${theme.palette.primary.light}`
		},
		'&.Mui-selected, &.Mui-selected:hover': {
			backgroundColor: `${theme.palette.primary.light}`
		},
	},
	blockListItemText: {
		'& > .MuiTypography-body1': {
			fontWeight: 'bold',
			color: `${theme.palette.text.primary}`
		}
	},
	selectedIcon: {
		color: `${theme.palette.primary.main}`
	},
	selectedBlockContainer: {
		padding: 20,
		background: `${theme.palette.primary.light}`,
		borderRadius: 10
	},
	selectedBlockTransactionsContainer: {
		marginTop: 20
	},
	selectedTransactionContainer: {
		padding: [[0, 20]],
		background: theme.palette.grays.fafafa
	},
	blockHash: {
		paddingLeft: 15,
		borderBottom: `1px solid ${theme.palette.grays.dddddd}`,
		paddingBottom: 10,
		paddingLeft: 15,
		marginBottom: 5
	},
	summaryIcon: {
		color: theme.palette.divider,
		marginRight: 15
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
	title: {
		flex: '1 1 100%',
    },
    paper: {
		width: '100%',
		marginBottom: theme.spacing(2),
	},
	table: {
		minWidth: 750,
	},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1,
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	}
});

export default styles;