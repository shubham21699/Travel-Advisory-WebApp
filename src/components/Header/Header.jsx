import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './HeaderStyles'

export default function Header() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position='static'>
                <Toolbar className={classes.toolbar}>
                    {/* Typography is every single text element but we can change the variant like we do below */}
                    <Typography variant='h5' className={classes.title}>
                        Travel Advisory
                    </Typography>
                    <Box display='flex'>
                        <Typography variant='h6' className={classes.title} >
                            Explore New Places
                        </Typography>
                        {/* <Autocomplete> */}
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                            </div>
                        {/* </Autocomplete> */}
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}
