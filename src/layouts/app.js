import React from 'react';
import { Link } from 'react-router';

require('assets/styles/app.scss');

export default React.createClass({
  render: function () {
    return (
      <div className="app">
      	<div id="container">
      		<div className="todoContainer">
      			<h1 className="title">todos</h1>
            {this.props.children}
            <div className="footer"></div>
      		</div>
          <div className="foot1"></div>
          <div className="foot2"></div>
      	</div>
        
      </div>
    );
  }
})