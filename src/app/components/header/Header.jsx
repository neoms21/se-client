import React from 'react';
import {Link, browserHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import headerSass from './HeaderStyle.scss';

export default React.createClass({
    render: function() {
        return (
            <AppBar title="Sports Editor"  onLeftIconButtonTouchTap={this.handleHomeClick}>
                    <Link to="/registration" onlyActiveOnIndex activeClassName="active">Registration</Link>
                    <Link to="/about" onlyActiveOnIndex activeClassName="active">About</Link>
                    <Link to="/squads" onlyActiveOnIndex activeClassName="active">Squads</Link>

            </AppBar>
        );
    },

    handleHomeClick: function() {
        browserHistory.push('/');
    }
});


