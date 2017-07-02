import React from 'react';
import {connect} from 'react-redux';// import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

const PrivateRouteComponent = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => (

        rest.user ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/signin',
                state: {from: props.location}
            }}/>
        )
    )}/>
);

const mapStateToProps = (state, ownProps) => {

    return {
        user: state.user.currentUser,
        routeProps: {
            exact: ownProps.exact,
            path: ownProps.path
        }
    };
};

const PrivateRoute = connect(mapStateToProps, null)(PrivateRouteComponent);
export default PrivateRoute