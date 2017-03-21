import React from 'react'

class Plus extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <svg onClick={this.props.onClick}
                 className={this.props.cssClass}
                 viewBox="0 0 24 24">

                <path fill={this.props.color}
                    d="M12 2q0.414 0 0.707 0.293t0.293 0.707v8h8q0.414 0 0.707 0.293t0.293 0.707-0.293 0.707-0.707 0.293h-8v8q0 0.414-0.293 0.707t-0.707 0.293-0.707-0.293-0.293-0.707v-8h-8q-0.414 0-0.707-0.293t-0.293-0.707 0.293-0.707 0.707-0.293h8v-8q0-0.414 0.293-0.707t0.707-0.293z"></path>
            </svg>
        )
    }
}



export default Plus;