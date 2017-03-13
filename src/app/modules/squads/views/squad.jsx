import React from 'react';
import {connect} from 'react-redux'
import './squad-item.scss'
import Edit from '../../../svg/edit'

export default function Squad(props) {

    return <div className="squad-container">

    <span className="squad-container__name">
      {props.name}
    </span>

        <Edit color="blue" onClick={props.onClick}></Edit>


    </div>;
};
