import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import moment from 'moment';

import Post from './Post/Post';
import useStyles from './styles';



const Posts = ({ setCurrentId }) => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);


    const sortByDate = () => {return posts.sort((a,b) => {return moment(a.createdAt).isBefore(b.createdAt) ? 1 : -1});}
    useEffect(() => {
        console.log('sorting');
        posts.sort((a,b) => {return moment(a.createdAt).isBefore(b.createdAt) ? 1 : -1});
    }
    ,[posts]);
    
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {sortByDate().map((post) => (
                    <Grid item key={post._id} xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )

    );
}

export default Posts;