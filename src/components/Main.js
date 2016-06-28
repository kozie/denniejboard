/*esling no-console: "error"*/
require('normalize.css/normalize.css');
require('materialize-css/sass/materialize.scss');
require('styles/App.css');

import React from 'react';
import Sound from './Sound';

//let yeomanImage = require('../images/yeoman.png');
let config = require('config');
let sounds = config.default.sounds || {};

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
				<div className="row">
					{Object.keys(sounds).map(function(key) {
						return (<Sound file={sounds[key]} />);
					}, this)}
				</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
