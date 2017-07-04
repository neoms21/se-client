import React from 'react';
import {connect} from 'react-redux'
import './squad-item.scss'

import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import {NavLink} from 'react-router-dom'
export default function Squad(props) {
    const iconStyles = {
        marginRight: 10,
        cursor: 'hand'
    };
    let playersUrl = 'squad/' + props.id + '/players';
    let editUrl = 'squad/' + props.id;
    return (
        <div className="squad-container">

        <span className="squad-container__name">
          {props.name}
        </span>


            <NavLink to={playersUrl}>
                <FontIcon style={iconStyles}
                          className="material-icons"
                          color={blue500}>people_outline</FontIcon>
            </NavLink>
            <NavLink to={editUrl}>
                <FontIcon style={iconStyles}
                          className="material-icons"
                          color={greenA200}>edit</FontIcon>
            </NavLink>
            <NavLink to={editUrl}>
                <FontIcon style={iconStyles}
                          className="material-icons"
                          color={red500}>delete</FontIcon>
            </NavLink>
        </div>
    )
};
