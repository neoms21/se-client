import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import styles from './logged.scss';

const Logged = (props) => (
    <div className="logged">
        <span className="user-name">{props.currentUser.userName}</span>
        <IconMenu
            {...props}
            iconButtonElement={<IconButton>
                <MoreVertIcon />
            </IconButton>}
            targetOrigin={{
                horizontal: 'right',
                vertical: 'top'
            }}
            anchorOrigin={{
                horizontal: 'right',
                vertical: 'top'
            }}>

            <MenuItem primaryText='Refresh'/>
            <MenuItem primaryText='Help'/>
            <MenuItem primaryText='Sign out'/>
        </IconMenu>
    </div>
);

Logged.muiName = 'IconMenu';

export default Logged;
