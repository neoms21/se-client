import React from 'react';
import {push} from 'react-router-redux';
import {IconMenu, MenuItem, IconButton} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

export default class LeftHandMenu extends React.Component {

    handleMatchList() {
        push('matches/list');
    }

    handleCreateMatch() {
        push('matches/create');
    }

    render() {

        return (
            <div className="left-hand-menu">
                <IconMenu
                    {...this.props}
                    iconButtonElement={<IconButton>
                        <MoreVertIcon />
                    </IconButton>}
                    targetOrigin={{
                        horizontal: 'left',
                        vertical: 'top'
                    }}
                    anchorOrigin={{
                        horizontal: 'left',
                        vertical: 'top'
                    }}>

                    <MenuItem primaryText='Squads' rightIcon={<ArrowDropRight />}
                              menuItems={[
                                  <MenuItem primaryText="List"/>,
                                  <MenuItem primaryText="Create"/>,
                              ]}
                    />
                    <MenuItem primaryText='Matches' rightIcon={<ArrowDropRight />}
                              menuItems={[
                                  <MenuItem primaryText="List" onTouchTap={this.handleMatchList}/>,
                                  <MenuItem primaryText="Create" onTouchTap={this.handleCreateMatch}/>,
                              ]}
                    />
                </IconMenu>
            </div>
        );
    }
}

LeftHandMenu.muiName = 'IconMenu';
