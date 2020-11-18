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
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active_round: false,
      rounds_completed: 0,
      rounds_remaining: 0,
      new_members: [0],
      ext_members: [1],
      new_member_data: [{
        first:"Sample",
        last:"User",
        role:"Intern",
        forms:"",
        pic:"https://i.pinimg.com/736x/ae/c4/53/aec453161b2f33ffc6219d8a758307a9.jpg",
        dateJoined: "date",
        currentMatch: 0,
        id: 0
      }],
      ext_member_data: [{
        first:"Boss",
        last:"User",
        role:"Manager",
        forms:"",
        pic:"https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
        dateJoined: "date",
        currentMatch: 0,
        id: 0
      }],
      modalStyle:"",
      open: false,
      setOpen: false


    };
  }


  render() {
    function MeeterModal({name, pic, matchName, matchPic}) {
      const classes = useStyles();
      // getModalStyle is not a pure function, we roll the style only on the first render
      const [modalStyle] = React.useState(getModalStyle);
      const [open, setOpen] = React.useState(false);

      const handleOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

      const body = (
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Meeter Match!</h2>
          <p id="simple-modal-description">
            Match Meeting Details.

          </p>
          <AvatarGroup>
            <Avatar alt={name[0]} src={pic} className={classes.large}></Avatar>
            <Avatar alt={matchName} src={matchPic} className={classes.large} height="1000"></Avatar>
          </AvatarGroup>
          <p>
            {name} + {matchName}
          </p>
        </div>
      );

      return (
        <div>
          <Fab size="small" onClick={() => {handleOpen();}}>
            <Avatar alt={name} src={pic}></Avatar>
          </Fab>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
      );
    }
    this.state.rounds_remaining = this.state.new_members.length + this.state.ext_members.length - (1 + this.state.rounds_completed);
    var meeting_past = [];
    var meetingMembers = [];
    var meeting_future = [];

    var new_avatars = [];
    for (var i = 0; i < this.state.new_members.length; i++) {
      var previousCircleString = "";
      var remainingCircleString = "";
      for (var j = 0; j < this.state.rounds_completed; j++) {
        previousCircleString += " O   ";
      }
      for (var j = 0; j < this.state.new_members.length + this.state.ext_members.length - (1 + this.state.rounds_completed); j++) {
        remainingCircleString += " O   ";
      }
      let matchee = this.state.new_member_data[i];
      let match = this.state.ext_member_data[matchee.currentMatch];
      console.log(match);
      new_avatars.push(
        <MeeterModal name={matchee.first} pic={matchee.pic} matchName={match.first} matchPic={match.pic} />
      );

      if (this.state.rounds_completed != 0) {
        meeting_past.push(
          <Grid item>
            <Card className="roundStatusCard" variant="outlined">
            <CardContent>
              <Typography variant="body2" component="p">
                {previousCircleString}
              </Typography>
            </CardContent>
            </Card>
          </Grid>
        );
      }
      meetingMembers.push(
        <Grid item spacing={2}>
        <MeeterModal name={matchee.first} pic={matchee.pic} matchName={match.first} matchPic={match.pic} />
        </Grid>
      );
      if (this.state.rounds_remaining != 0) {
        meeting_future.push(
          <Grid item>
            <Card className="roundStatusCard" variant="outlined">
            <CardContent>
              <Typography variant="body2" component="p">
                {remainingCircleString}
              </Typography>
            </CardContent>
            </Card>
          </Grid>
        );
      }
    }

    var ext_avatars = [];

    for (var i = 0; i < this.state.ext_members.length; i++) {
      let matchee = this.state.ext_member_data[i];
      let match = this.state.new_member_data[matchee.currentMatch];
      ext_avatars.push(
            <MeeterModal name={matchee.first} pic={matchee.pic} matchName={match.first} matchPic={match.pic} />
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
                <SimpleModal isNewMember={true}/>
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
                  <SimpleModal/>
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

        <Grid container spacing={2} direction="row" justify="center" alignItems="stretch">
          <Grid container item xs={2} spacing={1} direction="column" justify="center" alignItems="flex-end">
            {meeting_past}
          </Grid>
          <Card className="roundStatusCard" variant="outlined">
            <CardContent>
              <Grid container spacing={4} direction="column" justify="center">
                {meetingMembers}
              </Grid>
            </CardContent>
          </Card>
          <Grid container item xs={2} spacing={1} direction="column" justify="center" alignItems="flex-start">
            {meeting_future}
          </Grid>
        </Grid> 

        <Grid container item justify="center" alignItems="center">
          <Grid item>
            { this.state.active_round == false && 
              <Button onClick={() => { this.setState({active_round: !this.state.active_round})}}
                variant="outlined" style={{backgroundColor: "#82E0AA", margin: "20px"}} >
                Start Round
              </Button>
            }
            { this.state.active_round == true && 
              <Button onClick={() => { this.setState({active_round: !this.state.active_round, rounds_completed: rCompleted+1})}}
                variant="outlined" style={{backgroundColor: "#f5d36e", margin: "20px"}} >
                Finish Round
              </Button>
            }
          </Grid>
        </Grid>

      </div>
    );

    function rand() {
      return Math.round(Math.random() * 20) - 10;
    }

    function getModalStyle() {
      const top = 50 + rand();
      const left = 50 + rand();

      return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
      };
    }

    function BasicTextFields() {

      const classes = useStyles();
      return (
        <form className={classes.root} noValidate autoComplete="off">
          <TextField required id="standard-required" className="new-member-first" label="Required" helperText="First Name" placeholder="First Name"/>
          <TextField required  id="standard-required" className="new-member-last" label="Required" helperText="Last Name" placeholder="Last Name"/>
          <TextField className="new-member-role" id="standard-basic" label="" helperText="Team Role"   placeholder="Team Role"/>
          <TextField
          className="new-member-forms"
              id="standard-full-width"
              style={{ margin: 8 }}
              placeholder="Enter Link"
              helperText="Google Forms Link"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
            className="new-member-pic"
                id="standard-full-width"
                style={{ margin: 8 }}
                placeholder="Enter Link"
                helperText="Profile Picture Link"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
        </form>

      );
    }

    function BasicTextFieldsForExisting() {

      const classes = useStyles();
      return (
        <form className={classes.root} noValidate autoComplete="off">
          <TextField required id="standard-required" className="new-member-first" label="Required" helperText="First Name" placeholder="First Name"/>
          <TextField required  id="standard-required" className="new-member-last" label="Required" helperText="Last Name" placeholder="Last Name"/>
          <TextField className="new-member-role" id="standard-basic" label="" helperText="Team Role"   placeholder="Team Role"/>
          <TextField
          className="new-member-forms"
              id="standard-full-width"
              style={{ margin: 8 }}
              placeholder="Enter Link"
              helperText="Google Forms Link"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
            className="new-member-pic"
                id="standard-full-width"
                style={{ margin: 8 }}
                placeholder="Enter Link"
                helperText="Profile Picture Link"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
        </form>

      );
    }

    function DatePickers() {
      const classes = useStyles();
      return (
        <form className={classes.container} noValidate>
          <TextField
          className="new-member-date"
            id="date"
            label="Join Date"
            type="date"
            defaultValue="yyyy-MM-dd"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      );
    }

    const SimpleModal= ({isNewMember}) => {
      const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);

    };

    const handleClose = () => {
      setOpen(false);
    };

    const addNewAndClose = () => {


      var first = document.querySelectorAll("#standard-required")[0].value;
      var lastN = document.querySelectorAll("#standard-required")[1].value;
      var role = document.getElementById("standard-basic").value;
      var forms = document.querySelectorAll("#standard-full-width")[0].value;
      var pic = document.querySelectorAll("#standard-full-width")[1].value;
      var date = document.getElementById("date").value;
      if(first.trim() != "" && lastN.trim() != ""){
       console.log(first, lastN, role, forms, pic, date);
       if(pic.trim() == ""){
         pic = "invalid";
       }
       var newMemberToAdd = {
         "first":first,
         "last":lastN,
         "role":role,
         "forms":forms,
         "pic":pic,
         "dateJoined": date,
         "currentMatch": 0,
         "id": this.state.new_members.length-1
       };
       let newMembers = this.state.new_members;
         let last = newMembers[newMembers.length-1];
          newMembers.push(last+2);
          this.setState({new_members: newMembers});

          let memberData = this.state.new_member_data;
          memberData.push(newMemberToAdd);
          this.setState({new_member_data: memberData});
              setOpen(false);
        }
        else{
          if(first.trim() == "" && lastN.trim() == "")
            alert("First and last name required");
          else if(first.trim() == "")
              alert("First name required");
          else if(lastN.trim() == "")
                alert("Last name required");
        }

    };

    const addExistingAndClose = () => {


      var first = document.querySelectorAll("#standard-required")[0].value;
      var lastN = document.querySelectorAll("#standard-required")[1].value;
      var role = document.getElementById("standard-basic").value;
      var forms = document.querySelectorAll("#standard-full-width")[0].value;
      var pic = document.querySelectorAll("#standard-full-width")[1].value;
      var date = document.getElementById("date").value;
      if(first.trim() != "" && lastN.trim() != ""){
       console.log(first, lastN, role, forms, pic, date);
       if(pic.trim() == ""){
         pic = "invalid";
       }
       var existingMemberToAdd = {
         "first":first,
         "last":lastN,
         "role":role,
         "forms":forms,
         "pic":pic,
         "dateJoined": date,
         "currentMatch": 0,
         "id": this.state.new_members.length-1
       };
       let extMembers = this.state.ext_members;
      let last = extMembers[extMembers.length-1];
      extMembers.push(last+2);
      this.setState({ext_members: extMembers});

          let extMemberData = this.state.ext_member_data;
          extMemberData.push(existingMemberToAdd);
          this.setState({ext_member_data: extMemberData});
              setOpen(false);
        }
        else{
          if(first.trim() == "" && lastN.trim() == "")
            alert("First and last name required");
          else if(first.trim() == "")
              alert("First name required");
          else if(lastN.trim() == "")
                alert("Last name required");
        }

    };

    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">New Teammember Form</h2>
        <p id="simple-modal-description">
          Onboard your new member to meeter.
        </p>
        <BasicTextFields/>
        <DatePickers/>
        <button type="button" onClick={addNewAndClose}>
        Add User
        </button>

      </div>
    );

    const body_for_existing = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Existing Team Member Form</h2>
        <p id="simple-modal-description">
          Add your exisiting team member to Meeter.
        </p>
        <BasicTextFieldsForExisting/>
        <DatePickers/>
        <button type="button" onClick={addExistingAndClose}>
        Add User
        </button>

      </div>
    );
    if(isNewMember){
      return(
        <div>
        <Fab size="small" onClick={() => {handleOpen();

        }
        }>
          <AddIcon/>
        </Fab>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
      {body}
    </Modal>
        </div>
      );
    }
    else{
      return (
        <div>
        <Fab size="small" onClick={() => {handleOpen();

        }
        }>
          <AddIcon/>
        </Fab>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
      {body_for_existing}
    </Modal>
        </div>
      );
    }
    }






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
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    }
  },
  rootles: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  container: {
   display: 'flex',
   flexWrap: 'wrap',
 },
 textField: {
   marginLeft: theme.spacing(1),
   marginRight: theme.spacing(1),
   width: 200,
 },
 large: {
   width: theme.spacing(15),
   height: theme.spacing(15),
 }
}));




export default App;
