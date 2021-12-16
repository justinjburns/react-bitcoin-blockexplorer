import { createTheme }  from '@mui/material/styles';
import { palette } from './palette';

const theme = createTheme({
    palette,
    typography: {
        useNextVariants: true,
        icons: {
            default: 30
        }
    },
    overrides: {
        MuiListItem: {
            root: {
                paddingTop: 0,
                paddingBottom: 0
            }
        },
        MuiListItemText: {
            root: {
                marginTop: 0,
                marginBottom: 0,
                color: '#777'
            }
        },
        MuiListItemSecondaryAction: {
            root: {
                fontWeight: 500
            }
        },
        MuiTableCell: {
            root: {
                padding: [[8, 15, 8, 25]],
                fontWeight: 500
            }
        },
        MuiTableRow: {
            root: {
                '&.MuiTableRow-hover:hover': {
                    backgroundColor: '#1975d215'
                }
            }
        },
        MuiListItemIcon: {
            root: {
                minWidth: 40
            }
        }
    }
});

export default theme;