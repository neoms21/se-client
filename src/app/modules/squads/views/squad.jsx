import React from 'react';
import {connect} from 'react-redux'
import './squad-item.scss'

import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

export default function Squad(props) {
    const iconStyles = {
        marginRight: 10,
        cursor: 'hand'
    };
    return (
        <div className="squad-container">

        <span className="squad-container__name">
          {props.name}
        </span>

            <FontIcon style={iconStyles}
                      className="material-icons"

                      onClick={props.onSquadClick}
                      color={blue500}>people_outline</FontIcon>
            <FontIcon style={iconStyles}
                      className="material-icons"
                      color={greenA200}
                      onClick={props.onEditClick}>edit</FontIcon>
        </div>
    )
};
