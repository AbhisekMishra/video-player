import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
import Grid from '@material-ui/core/Grid';

const Video = (props) => {
  const { link } = props;
  return (
    <Grid container spacing={24} justify="center">
        <Grid item md={6} xs={11} sm={11}>
            <ReactPlayer url={link} playing controls width='100%' />
        </Grid>
    </Grid>
  );
}

Video.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles()(Video);