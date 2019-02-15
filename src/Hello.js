import React, { Component } from 'react';

class Hello extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Court'
        }
    }
    render() {
        return (
            <div>
                <p>Hello {this.state.name}</p>
            </div>
        );
    }
}

export default Hello;