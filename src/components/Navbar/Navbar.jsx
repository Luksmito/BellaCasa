import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart, TollTwoTone } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h2" className={classes.title} color="inherit">
                        BellaCasa
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname === '/' && (
                        <div className={classes.button}>
                            <IconButton component={Link} to="/carrinho" aria-label= "Mostrar itens do carrinho" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                    
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;