import React from 'react';
import { Link } from 'react-router';


class Home extends React.Component{
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>Welcome to the Sports Editor website</p>
                <p>You can register by going to the
                    <Link to="registration"> registration</Link> page
                </p>
            </div>
        );
    }
}

export default Home;

// export default React.createClass({
//   render() {
//     return (
//       <div>
//                 <h1>Home</h1>
//                 <p>Welcome to the Sports Editor website</p>
//                 <p>You can register by going to the
//                   <Link to="registration"> registration</Link> page
//                 </p>
//             </div>
//       );
//   }
// });
