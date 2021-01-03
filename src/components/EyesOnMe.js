import React, { Component } from 'react';

export default class eyeOnMe extends Component {
  onBlur = () => console.log('Hey! Eyes on me!');
  onFocus = () => console.log('Good!');
  
  render() {
    return (
      <button onBlur={this.onBlur} onFocus={this.onFocus}>Eyes on me!</button> 
    );
  }
}