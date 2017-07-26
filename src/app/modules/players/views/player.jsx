import React from 'react';
import './player-item.scss'

import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import {NavLink} from 'react-router-dom';

export default function Player(props) {
    const iconStyles = {
        marginRight: 10,
        cursor: 'hand'
    };

    return (
        <div className="player-container">

        <span className="player-container__name">
          {props.name}
        </span>

            <a onClick={() => {
                props.click(props.player);
            }}>
                <FontIcon style={iconStyles}
                          className="material-icons"
                          color={greenA200}>edit</FontIcon>
            </a>
            <a onClick={() => {
                props.deletePlayer(props.player);
            }}>
                <FontIcon style={iconStyles}
                          className="material-icons"
                          color={red500}>delete</FontIcon>
            </a>
        </div>
    )
};
