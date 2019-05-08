import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    list: {
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

class HistoryList extends React.Component {
    state = {
        selectedHistory: '',
    };

    handleListItemClick = (event, history) => {
        this.setState({ selectedHistory: history });
        this.props.setVideoLink(history);
    };

    render() {
        const { historyArr, classes } = this.props;
        const { selectedHistory } = this.state;

        return historyArr.slice(1, 4).length > 0 && (
            <Grid container justify="center" alignItems="flex-end" spacing={16}>
                <Grid item xs={11} sm={11} md={4}>
                    <h3 className={classes.header}>Previously visited links</h3>
                    <List component="nav" className={classes.list}>
                        {[...new Set(historyArr)].slice(1, 4).map((history) => (
                            <ListItem
                                button
                                key={history}
                                selected={selectedHistory === history}
                                onClick={event => this.handleListItemClick(event, history)}
                            >
                                <ListItemText primary={history} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        );
    }
}

HistoryList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HistoryList);