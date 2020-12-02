import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});


class Top extends React.Component {

	render() {
		return (
			<Typography variant="h2" gutterBottom>
        Meeter
      </Typography>
		);
	}
}

export default Top
