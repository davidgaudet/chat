import React from 'react';
import Top from './Top'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './App.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import randomColor from 'randomcolor';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

//<Grid item xs={6}>
 //       <div style={{background:randomColor()}}>Hooray something is here!</div>
 //     </Grid>
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      rounds_completed: 0,
      rounds_remaining: 0,
      new_members: [0],
      ext_members: [1]
    };
  }
  
  render() {
    var meetingRows = [];

    var new_avatars = [];
    for (var i = 0; i < this.state.new_members.length; i++) {
      var circleString = "";
      for (var j = 0; j < this.state.new_members.length + this.state.ext_members.length - 1; j++) {
        circleString += " O   ";
      }
      meetingRows.push(
        <Grid item>
          <Card className="roundStatusCard" variant="outlined">
          <CardContent>
            <Typography variant="body2" component="p">
              {circleString}
            </Typography>
          </CardContent>
          </Card>
        </Grid>
      );
      new_avatars.push(
        <Avatar>{this.state.new_members[i]}</Avatar>
      );
    }

    var ext_avatars = [];
    for (var i = 0; i < this.state.ext_members.length; i++) {
      ext_avatars.push(
        <Avatar>{this.state.ext_members[i]}</Avatar>
      );
    }

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
            <CardHeader 
              action={
                <Fab size="small" onClick={() => { 
                  let newMembers = this.state.new_members;
                  let last = newMembers[newMembers.length-1];
                  newMembers.push(last+2);
                  this.setState({new_members: newMembers})}
                }>
                  <AddIcon/>
                </Fab>
              }
              title={
                <Typography variant="body2" component="p">
                  New Members
                </Typography>
              }
            />
            <CardContent>
              <AvatarGroup>
                {new_avatars}
              </AvatarGroup>
            </CardContent>
          </Grid>
          <Grid item xs={3} component={Card} className={useStyles().memberStatusCard} variant="outlined">
            <CardHeader 
              action={
                <Fab size="small" onClick={() => { 
                  let extMembers = this.state.ext_members;
                  let last = extMembers[extMembers.length-1];
                  extMembers.push(last+2);
                  this.setState({ext_members: extMembers})}
                }>
                  <AddIcon/>
                </Fab>
              }
              title={
                <Typography variant="body2" component="p">
                  Existing Members
                </Typography>
              }
            />
            <CardContent>
              <AvatarGroup>
                {ext_avatars}
              </AvatarGroup>
            </CardContent>
          </Grid>
        </Grid>
    
        <Grid container spacing={1} direction="column" justify="center" alignItems="center">
          {meetingRows}
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
    alight: "left",
    backgroundColor:"#D19BE8",
    border: "1px solid black"
  },
  meetingRowCard: {
    border: "1px solid black",
    backgroundColor:"white"
  }
}));

export default App;
