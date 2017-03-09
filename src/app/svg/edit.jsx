import React from 'react';

class Edit extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <svg onClick={this.props.onClick}
                className="squad-container__delete"
                viewBox="0 0 24 24">

                <path
                    fill={this.props.color}
                    d="M20.71,4.04C21.1,3.65 21.1,3 20.71,2.63L18.37,0.29C18,-0.1 17.35,-0.1 16.96,0.29L15,2.25L18.75,6M17.75,7L14,3.25L4,13.25V17H7.75L17.75,7Z" />

            </svg>
        );
    }

}


export default Edit;
