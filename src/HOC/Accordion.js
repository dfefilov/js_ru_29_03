import React, { Component as ReactComponent } from 'react'

export default (Component) => class Accordion extends ReactComponent {
    state = { expandedItem: null };

    expandItem = (item) => {
        this.setState({ expandedItem: this.state.expandedItem == item ? null : item });
    };

    render() {
        return <Component {...this.props} expandedItem={ this.state.expandedItem } expandItem={ this.expandItem } />
    }
}