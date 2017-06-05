import React from 'react';
import { IconMenu, MenuItem, IconButton } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { changeLocation } from '../../actions/location-actions';
import { push, go } from 'react-router-redux';

class LeftHandMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="left-hand-menu">
          <IconMenu
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
                            <MenuItem primaryText="List" onTouchTap={this.props.goSquads}/>,
                            <MenuItem primaryText="Create" onTouchTap={this.props.goCreateSquad}/>,
                        ]}
              />
              <MenuItem primaryText='Matches' rightIcon={<ArrowDropRight />}
                        menuItems={[
                            <MenuItem primaryText="List" onTouchTap={this.props.goMatchList}/>,
                            <MenuItem primaryText="Create" onTouchTap={this.props.goCreateMatch}/>,
                        ]}
              />
          </IconMenu>
      </div>
    );
  }
}

LeftHandMenu.muiName = 'IconMenu';

const mapDispatchToProps = (dispatch) => {
  return {
    goSquads: () => dispatch(push('/squads')),
    goCreateSquad: () => dispatch(push('/squad')),
    goMatchList: () => dispatch(push('/matchlist')),
    goCreateMatch: () => dispatch(push('/creatematch'))
  }
};

export default connect(null, mapDispatchToProps)(LeftHandMenu);
