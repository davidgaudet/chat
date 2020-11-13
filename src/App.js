import React from 'react';
import Top from './Top'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './App.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import randomColor from 'randomcolor';

//<Grid item xs={6}>
 //       <div style={{background:randomColor()}}>Hooray something is here!</div>
 //     </Grid>
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      rounds_completed: 0,
      rounds_remaining: 0
    };
  }
  
  render() {
    const CenteredGrid = ({rCompleted, rRemaining}) => (
      <div>

        <Grid container justify="space-evenly" alignItems="stretch" style={{padding: '24px'}}>
          <Grid item xs={3} component={Card} className={useStyles().roundStatusCard} variant="outlined">
            <CardContent>
              <Typography variant="body2" component="p">
                Rounds Completed: {rCompleted}
                <br />
                Rounds Remaining: {rRemaining}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={3} component={Card} className={useStyles().memberStatusCard} variant="outlined">
            <CardContent>
              <Typography variant="body2" component="p">
                New Members
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={3} component={Card} className={useStyles().memberStatusCard} variant="outlined">
            <CardContent>
              <Typography variant="body2" component="p">
                Existing Members
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
    
        <Grid container item justify="center" alignItems="center">
          <Grid item>
            <Button onClick={() => { this.setState({rounds_completed: rCompleted+1})}}
              variant="outlined" style={{backgroundColor: "#82E0AA", margin: "10px"}} >
              Start Round
            </Button>
          </Grid>
        </Grid>
    
      </div>
    );

    return(
      <div className="App">
        <Top />
        <CenteredGrid rCompleted={this.state.rounds_completed} rRemaining={this.state.rounds_remaining}/>
      </div>
    );
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  roundStatusCard: {
    backgroundColor:"#8DC6F6",
    border: "1px solid black"
  },
  memberStatusCard: {
    backgroundColor:"#D19BE8",
    border: "1px solid black"
  },
  meetingRowCard: {
    margin: "6px",
    border: "1px solid black",
    backgroundColor:"white"
  },
}));

export default App;
