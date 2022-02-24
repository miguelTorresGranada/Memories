import React from 'react';
import { Avatar, AppBar, Typography, Toolbar, Button } from '@mui/material';


import useStyles from './styles';
import memories from '../../images/memories.png';

const Navbar = () => {
    const classes = useStyles();
    const user = null;

  return (
    <AppBar className={classes.appBar} position="static" color="inherit"> 
        <div className={classes.brandContainer}>
            <Typography  to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
            <img className={classes.image} src={memories} alt="memories" height={60}/>
        </div>

        <Toolbar className={classes.toolbar} >
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} >{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" >Log out</Button>

                </div>
            ) : (
                <Button  to="/auth" variant="contained" color="primary">Login</Button>
            )}
        </Toolbar>

    </AppBar>
  )
}

export default Navbar