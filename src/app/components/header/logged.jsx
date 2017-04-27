import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import './loggedStyle.scss';

export default class Logged extends React.Component {
    render() {
        return (
            <div className="logged">
                <span className="user-name">{this.props.currentUser.userName}</span>
                <IconMenu
                    {...this.props}
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
    }
}

Logged.muiName = 'IconMenu';

