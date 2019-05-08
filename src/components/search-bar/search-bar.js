import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    header: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class SearchBar extends Component {
    render() {
        const { classes, setLink, link, renderVideo } = this.props;
        return (
            <div className={classes.root}>
                <Grid container justify="center" alignItems="flex-end" spacing={16}>
                    <Grid item xs={11} sm={11} md={3}>
                        <h3 className={classes.header}>Enter video URL</h3>
                        <TextField
                            id="standard-search"
                            label="Link"
                            type="search"
                            className={classes.textField}
                            margin="normal"
                            value={link}
                            onChange={e => setLink(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={2} sm={2} md={1}>
                        <Button variant="contained" color="primary" className={classes.button} onClick={() => renderVideo()}>
                            Go
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
};

SearchBar.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    user: PropTypes.string.isRequired,
    setUser: PropTypes.func.isRequired,
    searchGistByUser: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchBar);