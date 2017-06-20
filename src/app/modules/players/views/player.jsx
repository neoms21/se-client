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
    let editPlayerurl = 'players/' + props.id;

    const handleClick = () => {
        props.click('hello');
    };

    return (
        <div className="player-container">

        <span className="player-container__name">
          {props.name}
        </span>

            <NavLink to={editPlayerurl}>
                <FontIcon style={iconStyles}
                          className="material-icons"
                          color={greenA200}>edit</FontIcon>
            </NavLink>

            <button onClick={handleClick}>Edit</button>

        </div>
    )
};
