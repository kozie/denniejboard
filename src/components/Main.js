/*esling no-console: "error"*/
require('normalize.css/normalize.css');
require('grd/dist/grd.css');
require('styles/App.css');

var derp = require;

import React from 'react';
import Sound from './Sound';

//let yeomanImage = require('../images/yeoman.png');
let config = require('config');
let sounds = config.default.sounds || {};

class AppComponent extends React.Component {
  render() {
    return (
      <div className="main Grid -center">
				<div className="Cell -9of12">
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
