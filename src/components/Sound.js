import React from 'react';
import {Howl} from 'howler';

class SoundComponent extends React.Component {
	constructor(props) {
		super(props);

		let sound = new Howl({
			urls: [props.file]
		});

		this.state = {
			sound: sound
		};
	}

	render() {
		return (
			<div className="sound Cell -3of12" onClick={this.play.bind(this)}>Poes</div>
		);
	}

	play() {
		this.state.sound.play();
	}
}

export default SoundComponent;
