import React, {Component} from 'react';

export default class Keypad extends Component {

    handleKeyUp = (e) => {
        // console.log(e.key)
        console.log("Entering password...")
    }

    render() {
        return <input onKeyUp={this.handleKeyUp}type="password" />
    }
}
