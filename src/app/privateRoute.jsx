// import React from 'react'
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     Redirect,
//     withRouter
// } from 'react-router-dom';
//
// const fakeAuth = {
//     isAuthenticated: true,
//     authenticate(cb) {
//         this.isAuthenticated = true
//         setTimeout(cb, 100) // fake async
//     },
//     signout(cb) {
//         this.isAuthenticated = false;
//         setTimeout(cb, 100)
//     }
// };
//
// const PrivateRoute = ({component: Component, ...rest}) => (
//     <Route {...rest} render={props => (
//         fakeAuth.isAuthenticated ? (
//             <Component {...props}/>
//         ) : (
//             <Redirect to={{
//                 pathname: '/signin',
//                 state: {from: props.location}
//             }}/>
//         )
//     )}/>
// );
//
// export default PrivateRoute;


import React from 'react';

import {connect} from 'react-redux';// import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

// class PrivateRoute extends React.Component {
//
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         console.log(this.props);
//         return (
//
//             <Route {...this.props.rest}  render={props => (
//                 this.props.user ? (
//                     <Component {...props.component}/>
//                 ) : (
//                     <Redirect to={{
//                         pathname: '/signin',
//                         state: {from: props.location}
//                     }}/>
//                 )
//             )}/>
//
//         )
//     }
// }
//
//
// const mapStateToProps = (state, ownProps) => {
//
//     return {
//         user: state.user.currentUser,
//     }
//
// };
//
// export default connect(mapStateToProps)(PrivateRoute)

const PrivateRouteComponent = ({component: Component, ...rest}) => (
console.log('in PR', Component),
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