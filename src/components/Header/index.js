import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(() => ({
    root: {
        background: '#0078d2',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: '24px',
    },
    menuIcon: {
        color: '#fff',
    },
    link: {
        textDecoration: 'none',
        color: '#696969'
    }
}));

export default function MenuAppBar() {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar className={classes.root}>
            <Toolbar className={classes.header} >
                <div>
                    <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                        <MenuIcon className={classes.menuIcon} />
                    </IconButton>
                    <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClick={handleClose} >
                        <MenuItem >
                            <Link className={classes.link} href="http://www.pichau.com.br">
                                Pacientes
                            </Link>
                        </MenuItem>
                    </Menu>
                </div>

                <Typography className={classes.title}>
                    Controle Pacientes
                </Typography>

            </Toolbar>
        </AppBar>
    );
}