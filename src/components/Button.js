import React, { Component } from 'react';
import './Button.css'

class Button extends Component {

    render() {
        return (
            <button value={this.props.location} onClick={this.props.handleClick} className="location-button">{this.props.location ? this.props.location : "All Location"}</button>
        );
    }
}

export default Button;