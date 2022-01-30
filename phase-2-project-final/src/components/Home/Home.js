import React from "react";
import useStyles from './HomeStyles';
import { NavLink } from "react-router-dom";
import {Button } from '@material-ui/core';

function Home() {
  const classes = useStyles()

  return (
      <div className={classes.root}>
          <div className={classes.roots2} >
              <Button variant="contained" color ="inherit" size="small" component={NavLink} to="/marketplace">
               <strong>Buy & Sell at Aimé Leon Dore</strong>
              </Button>
              </div>
      </div>
  )
}

export default Home;