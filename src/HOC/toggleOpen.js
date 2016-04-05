import React, { Component as ReactComponent } from 'react'

export default (Component) => class ToggleOpen extends ReactComponent {
    state = { isOpen: false };

    render() {
        return <Component {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>
    }

    toggleOpen = (ev) => {
        if (ev) ev.preventDefault();

        this.setState({
            isOpen: !this.state.isOpen
        })
    };
}