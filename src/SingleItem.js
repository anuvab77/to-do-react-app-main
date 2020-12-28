import React, {useState} from 'react';
import './SingleItem.css';
import { makeStyles } from '@material-ui/core/styles';


import {Card, CardContent,  Typography} from "@material-ui/core";

const SingleItem = (props)=>{

   const value = props.value;

    const useStyles = makeStyles({
        root: {
            backgroundColor:value===1?"whitesmoke":"white"
        },
        media: {
            height: 140,
        },
    });
    const classes = useStyles();

  return (<div >



    <Card className={classes.root}>


      <CardContent>
          <Typography variant={"h6"}>
              {props.name} </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
        {props.date}
          </Typography>

      </CardContent>
    </Card>


  </div>)
}

  export default SingleItem;