import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
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
});
