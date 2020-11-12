import React from 'react';
import Top from './Top'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './App.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Chat Map. Message strangers around the world.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          .
        </a>
      </header>
      <Button variant="contained">Default</Button>
      <Map />	  
    </div>
  );
}
*/


function App() {
  return (
    <div className="App">
      <Top />
      
      <CenteredGrid />
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  roundStatusCard: {
    backgroundColor:"lightskyblue"
  },
  memberStatusCard: {
    backgroundColor:"mediumpurple"
  },
  meetingRowCard: {
    margin: "6px",
    backgroundColor:"white"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

function CenteredGrid() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={10} direction="column" justify="center" alignItems="center">
        
        <Grid container item direction="row" justify="space-around" alignItems="stretch">
          <Grid item component={Card} className={classes.roundStatusCard}>
            <CardContent>
              <Typography variant="body2" component="p">
                Rounds Completed: 0
                <br />
                Rounds Remaining: 0
              </Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} className={classes.memberStatusCard}>
            <CardContent>
              <Typography variant="body2" component="p">
                New Members
              </Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} className={classes.memberStatusCard}>
            <CardContent>
              <Typography variant="body2" component="p">
                Existing Members
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      

        <Grid container item direction="column" justify="space-evenly" alignItems="center">
          <Grid item component={Card} className={classes.meetingRowCard}>
            <CardContent>
              <Typography variant="body2" component="p">
                O O O O O O O O O
              </Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} className={classes.meetingRowCard}>
            <CardContent>
              <Typography variant="body2" component="p">
                O O O O O O O O O
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      
        <Grid container item justify="center" alignItems="center">
          <Grid>
            <Button variant="contained" style={{backgroundColor: "lightgreen", margin: "10px"}} >
              Start Round
            </Button>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}
export default App;
