import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import './App.css';


function ButtonAppBar() {

    return (
        <div className='Header'>
            <AppBar position="static">
            <Toolbar className='Header-toobar'>
                <Typography variant="h6" className='typo'>
                React redux example
                </Typography>
                <Button color="inherit">Reload data &nbsp; &nbsp;<RefreshIcon /></Button>
            </Toolbar>
            </AppBar>
        </div>
    );
}

export default ButtonAppBar;