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
import Switch from '@material-ui/core/Switch';
import Link from '@material-ui/core/Link';
import Popper from '@material-ui/core/Popper';

let newMemberCount = 0;
let extMemberCount = 0;

let demo_frame_count = 0;
let demo_prev_round_info = [[], [], []];
let demo_round_info = [
  [[2, 3, 4, 1],
   [3, 4, 2, 0]],
  [[3, 5, 4, 1],
   [4, 2, 5, 0],
   [2, 0, 1, 3, 4]],
];
let demo_all_data = [{
  first:"Puppy 1",
  last:"User",
  email:"User@email.com",
  role:"Intern",
  forms:"https://docs.google.com/forms/d/14Kt4TJWxoWov_SyW1hs74qOzm9mxeOlUOnuX8tOFgvg/edit#response=ACYDBNhRatw8OGnceLGnqmnD9RIPUHYoPdUGg5blnTlslcWxVWKnEoUk4MhiGbmJbQCxpH8",
  pic:"https://i.pinimg.com/736x/ae/c4/53/aec453161b2f33ffc6219d8a758307a9.jpg",
  dateJoined: "date",
  currentMatch: 0,
  id: 0
},
{
  first:"Puppy 2",
  last:"User",
  email:"User1@email.com",
  role:"Intern",
  forms:"https://docs.google.com/forms/d/14Kt4TJWxoWov_SyW1hs74qOzm9mxeOlUOnuX8tOFgvg/edit#response=ACYDBNhRatw8OGnceLGnqmnD9RIPUHYoPdUGg5blnTlslcWxVWKnEoUk4MhiGbmJbQCxpH8",
  pic:"https://www.firstforwomen.com/wp-content/uploads/sites/2/2019/07/puppy-eyes.jpg?resize=715,536",
  dateJoined: "date",
  currentMatch: 0,
  id: 1
},
{
  first:"Boss",
  last:"User",
  email:"User2@email.com",
  role:"Manager",
  forms:"https://docs.google.com/forms/d/14Kt4TJWxoWov_SyW1hs74qOzm9mxeOlUOnuX8tOFgvg/edit#response=ACYDBNhRatw8OGnceLGnqmnD9RIPUHYoPdUGg5blnTlslcWxVWKnEoUk4MhiGbmJbQCxpH8",
  pic:"https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
  dateJoined: "date",
  currentMatch: 0,
  id: 2
},
{
  first:"Cat",
  role:"Manager",
  email:"User3@email.com",
  forms:"https://docs.google.com/forms/d/14Kt4TJWxoWov_SyW1hs74qOzm9mxeOlUOnuX8tOFgvg/edit#response=ACYDBNhRatw8OGnceLGnqmnD9RIPUHYoPdUGg5blnTlslcWxVWKnEoUk4MhiGbmJbQCxpH8",
  pic:"https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
  dateJoined: "date",
  currentMatch: 0,
  id: 3
},
{
  first:"Tan cat",
  last:"User",
  email:"User4@email.com",
  role:"Manager",
  forms:"https://docs.google.com/forms/d/14Kt4TJWxoWov_SyW1hs74qOzm9mxeOlUOnuX8tOFgvg/edit#response=ACYDBNhRatw8OGnceLGnqmnD9RIPUHYoPdUGg5blnTlslcWxVWKnEoUk4MhiGbmJbQCxpH8",
  pic:"https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg",
  dateJoined: "date",
  currentMatch: 0,
  id: 4
},
{
  first:"Puppy 3",
  last:"User",
  role:"Intern",
  forms:"",
  pic:"https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-03/puppy-tips.jpg?itok=dp_MoapS",
  dateJoined: "date",
  currentMatch: 0,
  id: 5
}];

let demo_new_member_data = [{
  first:"Puppy 1",
  last:"User",
  email:"User@email.com",
  role:"Intern",
  forms:"",
  pic:"https://i.pinimg.com/736x/ae/c4/53/aec453161b2f33ffc6219d8a758307a9.jpg",
  dateJoined: "date",
  currentMatch: 0,
  id: 0,
  matchList: [2,3,4,1]
},
{
  first:"Puppy 2",
  last:"User",
  email:"User1@email.com",
  role:"Intern",
  forms:"https://docs.google.com/forms/d/14Kt4TJWxoWov_SyW1hs74qOzm9mxeOlUOnuX8tOFgvg/edit#response=ACYDBNhRatw8OGnceLGnqmnD9RIPUHYoPdUGg5blnTlslcWxVWKnEoUk4MhiGbmJbQCxpH8",
  pic:"https://www.firstforwomen.com/wp-content/uploads/sites/2/2019/07/puppy-eyes.jpg?resize=715,536",
  dateJoined: "date",
  currentMatch: 0,
  id: 1,
  matchList: [3,4,2,0]
}];

let demo_ext_member_data = [
  {
  first:"Boss",
  last:"User",
  email:"User2@email.com",
  role:"Manager",
  forms:"https://docs.google.com/forms/d/14Kt4TJWxoWov_SyW1hs74qOzm9mxeOlUOnuX8tOFgvg/edit#response=ACYDBNhRatw8OGnceLGnqmnD9RIPUHYoPdUGg5blnTlslcWxVWKnEoUk4MhiGbmJbQCxpH8",
  pic:"https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
  dateJoined: "date",
  currentMatch: 0,
  id: 0
},
{
  first:"Cat",
  last:"User",
  email:"User3@email.com",
  role:"Manager",
  forms:"https://docs.google.com/forms/d/14Kt4TJWxoWov_SyW1hs74qOzm9mxeOlUOnuX8tOFgvg/edit#response=ACYDBNhRatw8OGnceLGnqmnD9RIPUHYoPdUGg5blnTlslcWxVWKnEoUk4MhiGbmJbQCxpH8",
  pic:"https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
  dateJoined: "date",
  currentMatch: 0,
  id: 1
},
{
  first:"Tan cat",
  last:"User",
  email:"User4@email.com",
  role:"Manager",
  forms:"https://docs.google.com/forms/d/14Kt4TJWxoWov_SyW1hs74qOzm9mxeOlUOnuX8tOFgvg/edit#response=ACYDBNhRatw8OGnceLGnqmnD9RIPUHYoPdUGg5blnTlslcWxVWKnEoUk4MhiGbmJbQCxpH8",
  pic:"https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg",
  dateJoined: "date",
  currentMatch: 0,
  id: 1
}];

class App extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      active_round: false,
      rounds_completed: 0,
      rounds_remaining: 0,
      new_members: [0],
      ext_members: [0],
      prev_meetings: [],
      next_meetings: [],
      new_member_data: [{
        first:"Sample",
        last:"User",
        role:"Intern",
        forms:"",
        pic:"https://i.pinimg.com/736x/ae/c4/53/aec453161b2f33ffc6219d8a758307a9.jpg",
        dateJoined: "date",
        currentMatch: 0,
        id: 0,
        matchList: []
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
      setOpen: false,
      demo: false,
      demoRound: 0
    };
  }


  render() {
    function MeeterModal({name, pic, email, role, matchName, matchPic, matchEmail, matchRole, popUp}) {
      const classes = useStyles();
      // getModalStyle is not a pure function, we roll the style only on the first render
      const [modalStyle] = React.useState(getModalStyle);
      const [open, setOpen] = React.useState(false);

      const handleOpen = () => {
        if(!popUp)
        setOpen(true);
      };

      const handleClose = () => {
          if(!popUp)
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
            {name} ({role}) + {matchName} ({matchRole})
          </p>
          <a target="_blank" href="https://docs.google.com/forms/d/14Kt4TJWxoWov_SyW1hs74qOzm9mxeOlUOnuX8tOFgvg/edit#response=ACYDBNhRatw8OGnceLGnqmnD9RIPUHYoPdUGg5blnTlslcWxVWKnEoUk4MhiGbmJbQCxpH8">Google Form Data</a>
          <h4>Emails</h4>
          <a href={"mailto: " + email}>{name}'s email: {email}</a>
          <br></br>
          <a href={"mailto: " + matchEmail}>{matchName}'s email: {matchEmail}</a>
        </div>
      );

      return (
        <div style={{paddingLeft: 2, paddingRight: 2}}>
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
    if (newMemberCount != this.state.new_members.length) {
      console.log("new new member");
      newMemberCount = this.state.new_members.length;
    }
    if (extMemberCount != this.state.ext_members.length) {
      console.log("new ext member");
      extMemberCount = this.state.ext_members.length;
    }
    if (this.state.demo && this.state.new_member_data.length == 3) {
      this.state.new_member_data[2].pic = "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-03/puppy-tips.jpg?itok=dp_MoapS";
    }

    if (!this.state.demo) this.state.rounds_remaining = this.state.new_members.length + this.state.ext_members.length - (1 + this.state.rounds_completed);
    else if (this.state.rounds_completed == 1) this.state.rounds_remaining = 3;
    var meeting_past = [];
    var meetingMembers = [];
    var meeting_future = [];

    var new_avatars = [];
    for (var i = 0; i < this.state.new_member_data.length; i++) {
      var previousCircleString = "";
      var remainingCircleString = "";
      for (var j = 0; j < this.state.rounds_completed; j++) {
        previousCircleString += " O   ";
      }
      for (var j = 0; j < this.state.new_members.length + this.state.ext_members.length - (1 + this.state.rounds_completed); j++) {
        remainingCircleString += " O   ";
      }
      let matchee = this.state.new_member_data[i];
      let match;
      if (this.state.demo)
      {
            //current # completed
            let idx = this.state.rounds_completed;
            //if we are done w matching meetings, just make it the last person in the list
            if(idx >= matchee.matchList.length)
            {
              idx = matchee.matchList.length -1 ;
            }
            //get the person we are matching w based on this round #
            idx = matchee.matchList[idx];
            //set the match
            match = demo_all_data[idx];

      }
      else{
        match = this.state.ext_member_data[0];
      }
      console.log(match);
      new_avatars.push(
        <MeeterModal name={matchee.first} pic={matchee.pic} email={matchee.email} role={matchee.role} matchName={match.first} matchPic={match.pic} matchEmail={match.email} matchRole={match.role}/>
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
      let avatar_padding = 0;
      if (this.state.demo) avatar_padding = 10;
      meetingMembers.push(
        <Grid item>
        <div style={{ paddingTop: avatar_padding }}>
                <MeeterModal name={matchee.first} pic={matchee.pic} email={matchee.email} role={matchee.role} matchName={match.first} matchPic={match.pic} matchEmail={match.email} matchRole={match.role}/>
        </div>
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

    for (var i = 0; i < this.state.ext_member_data.length; i++) {
      let matchee = this.state.ext_member_data[i];
      let match = this.state.new_member_data[matchee.currentMatch];
      ext_avatars.push(
                  <MeeterModal name={matchee.first} pic={matchee.pic} email={matchee.email} role={matchee.role} matchName={match.first} matchPic={match.pic} matchEmail={match.email} matchRole={match.role} popUp={true}/>
      );
    }

    if (this.state.demo) {
      if (this.state.new_member_data.length == 2) {
          meeting_future = [];
          if (this.state.rounds_completed == 1 && demo_prev_round_info[0].length == 0) {
            meeting_past = [];
            for (var i = 0; i < 2; i++) {
              demo_prev_round_info[i].push(demo_round_info[0][i].shift());
            }


            for (var i = 0; i < 2; i++) {
              let matchee = this.state.new_member_data[i];
              let previous_meetings = [];
              for (var j = 0; j < demo_prev_round_info[i].length; j++) {
                let match = demo_all_data[demo_prev_round_info[i][j]];
                let matchee = demo_all_data[match.currentMatch];
                previous_meetings.push(
                  <Grid item>
                        <MeeterModal name={match.first} pic={match.pic} email={match.email} role={match.role} matchName={matchee.first} matchPic={matchee.pic} matchEmail={matchee.email} matchRole={matchee.role}/>
                  </Grid>
                );
              }
              meeting_past.push(
                <Grid item>
                  <Card className="roundStatusCard" variant="outlined">
                  <CardContent>
                    <Typography variant="body2" component="p">
                      <Grid container direction="row">
                        {previous_meetings}
                      </Grid>
                    </Typography>
                  </CardContent>
                  </Card>
                </Grid>
              );
            }
          } else {
            this.state.rounds_remaining = 4;
            meeting_past = [];
            meeting_future = [];
          }

          for (var i = 0; i < 2; i++) {
            let matchee = this.state.new_member_data[i];
            let future_meetings = [];
            for (var j = 0; j < demo_round_info[0][i].length; j++) {
                let match = demo_all_data[demo_round_info[0][i][j]];
                future_meetings.push(
                <Grid item>
                <MeeterModal name={match.first} pic={match.pic} email={match.email} role={match.role} matchName={matchee.first} matchPic={matchee.pic} matchEmail={matchee.email} matchRole={matchee.role}/>
                </Grid>
                );
            }
            meeting_future.push(
              <Grid item>
                <Card className="roundStatusCard" variant="outlined">
                <CardContent>
                  <Typography variant="body2" component="p">
                    <Grid container direction="row">
                      {future_meetings}
                    </Grid>
                  </Typography>
                </CardContent>
                </Card>
              </Grid>
            );
          }
      } else if (this.state.new_member_data.length == 3) {
          this.state.rounds_remaining = 6-this.state.rounds_completed;
          meeting_past = [];

          if (this.state.rounds_completed == 6) {
            demo_prev_round_info[2].push(demo_round_info[1][2].shift());
          }
          else if (this.state.rounds_completed > 1 && this.state.rounds_completed != demo_frame_count) {
            for (var i = 0; i < 3; i++) {
              demo_prev_round_info[i].push(demo_round_info[1][i].shift());
            }
          }

          for (var i = 0; i < 3; i++) {
            if (i == 2 && this.state.rounds_completed == 1) continue;
            let previous_meetings = [];
            for (var j = 0; j < demo_prev_round_info[i].length; j++) {
              let match = demo_all_data[demo_prev_round_info[i][j]];
              if (match == null) continue;
              previous_meetings.push(
                <Grid item>
                  <MeeterModal name={match.first} pic={match.pic} matchName={match.first} matchPic={match.pic} />
                </Grid>
              );
            }
            meeting_past.push(
              <Grid item>
                <Card className="roundStatusCard" variant="outlined">
                <CardContent>
                  <Typography variant="body2" component="p">
                    <Grid container direction="row">
                      {previous_meetings}
                    </Grid>
                  </Typography>
                </CardContent>
                </Card>
              </Grid>
            );
          }
          meeting_future = [];

          for (var i = 0; i < 3; i++) {
            if (this.state.rounds_completed == 6) break;
            if (this.state.rounds_completed == 5 && (i == 0 || i == 1)) continue;
            let future_meetings = [];
            for (var j = 0; j < demo_round_info[1][i].length; j++) {
                let match = demo_all_data[demo_round_info[1][i][j]];
                if(match!= null)
                {
                future_meetings.push(
                <Grid item>
                <MeeterModal name={match.first} pic={match.pic} matchName={match.first} matchPic={match.pic} />
                </Grid>
                );
              }
            }
            meeting_future.push(
              <Grid item>
                <Card className="roundStatusCard" variant="outlined">
                <CardContent>
                  <Typography variant="body2" component="p">
                    <Grid container direction="row">
                    {future_meetings}
                    </Grid>
                  </Typography>
                </CardContent>
                </Card>
              </Grid>
            );
          }
          demo_frame_count = this.state.rounds_completed;
      }
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
              <Switch
                checked={this.state.demo}
                onChange={() => { this.setState({
                  demo: !this.state.demo,
                  new_member_data: demo_new_member_data,
                  ext_member_data: demo_ext_member_data})}}
                color="primary"
                name="demoMode"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
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
          <Grid container item xs={4} spacing={1} direction="column" justify="flex-start" alignItems="flex-end">
            {meeting_past}
          </Grid>
          <Card className="roundStatusCard" variant="outlined">
            <CardContent>
              <Grid container spacing={4} direction="column" justify="center">
                {meetingMembers}
              </Grid>
            </CardContent>
          </Card>
          <Grid container item xs={4} spacing={1} direction="column" justify="flex-end" alignItems="flex-start">
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
          <SimplePopper/>

      </div>
    );

    function rand() {
      return Math.round(Math.random() * 20) - 10;
    }

    function SimplePopper() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  var ran = Math.floor(Math.random() * 8);;

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);

  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  let listOfIB = [
    "Are there any interesting things your name spells with the letters rearranged?",
    "If you were a potato, what way would you like to be cooked?",
    "Would you go to space if you knew that you could never come back to earth?",
    "Have you ever been mistaken for someone famous?",
    "What animal would you chose to be?",
    "What is the most embarrassing thing you’ve ever done?",
    "What is the strangest gift you have ever received?",
    "What kind of reality show would you appear in?",
    "Which of Snow White’s seven dwarfs describes you best (Bashful, Doc, Dopey, Grumpy, Happy, Sleepy or Sneezy)?"
  ];

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
         <div>
        <Avatar src="https://static.thenounproject.com/png/2554637-200.png"></Avatar>
        </div>

      </button>
        <p>Generate Icebreaker</p>

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper2}>{listOfIB[ran]}</div>
      </Popper>
    </div>
  );
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
        <TextField required  id="standard-required" className="new-member-email" label="Required" helperText="Email" placeholder="Email"/>
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
          <TextField required  id="standard-required" className="new-member-email" label="Required" helperText="Email" placeholder="Email"/>
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
      var email = document.querySelectorAll("#standard-required")[2].value;
      var role = document.getElementById("standard-basic").value;
      var forms = document.querySelectorAll("#standard-full-width")[0].value;
      var pic = document.querySelectorAll("#standard-full-width")[1].value;
      var date = document.getElementById("date").value;
      if(first.trim() != "" && lastN.trim() != "" && email.trim() != ""){
       console.log(first, lastN, role, forms, pic, date);
       if(pic.trim() == ""){
         pic = "invalid";
       }
       var newMemberToAdd = {
         "first":first,
         "last":lastN,
         "email":email,
         "role":role,
         "forms":forms,
         "pic":pic,
         "dateJoined": date,
         "currentMatch": 0,
         "id": this.state.new_members.length-1,
         "matchList": [3,4,2,0]
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
          else if(email.trim() == "")
                alert("Email required");
        }

    };

    const addExistingAndClose = () => {


      var first = document.querySelectorAll("#standard-required")[0].value;
      var lastN = document.querySelectorAll("#standard-required")[1].value;
      var email = document.querySelectorAll("#standard-required")[2].value;
      var role = document.getElementById("standard-basic").value;
      var forms = document.querySelectorAll("#standard-full-width")[0].value;
      var pic = document.querySelectorAll("#standard-full-width")[1].value;
      var date = document.getElementById("date").value;
      if(first.trim() != "" && lastN.trim() != ""&& email.trim() != ""){
       console.log(first, lastN, role, forms, pic, date);
       if(pic.trim() == ""){
         pic = "invalid";
       }
       var existingMemberToAdd = {
         "first":first,
         "last":lastN,
         "email":email,
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
          else if(email.trim() == "")
                  alert("Email required");
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
 },
 paper2: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  }
}));




export default App;
