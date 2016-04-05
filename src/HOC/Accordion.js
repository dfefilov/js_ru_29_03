import React, { Component as ReactComponent } from 'react'

export default (Component) => class Accordion extends ReactComponent {
    state = { expandedItem: null };

    expandItem = (item) => {
        this.setState({ expandedItem: item });
    };

    render() {
        return <Component {...this.props} expandedItem={ this.expandedItem } expandItem={ this.expandItem } />
    }
}
