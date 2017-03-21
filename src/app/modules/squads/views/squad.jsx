import React from 'react';
import {connect} from 'react-redux'
import './squad-item.scss'
import Edit from '../../../svg/edit'
import Plus from '../../../svg/plus'

export default function Squad(props) {

    return (
     <div className="squad-container">

        <span className="squad-container__name">
          {props.name}
        </span>

         <Plus cssClass="squad-container__edit" color="gray"
               onClick={props.onClick}></Plus>
         <Edit cssClass="squad-container__edit" color="blue" onClick={props.onClick}></Edit>
     </div>
    )
};
