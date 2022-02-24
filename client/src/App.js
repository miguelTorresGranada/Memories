import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';


import { getPosts } from './actions/posts';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import Navbar from './components/Navbar/Navbar';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxidth="lg">
            <Navbar />
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing = {3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;