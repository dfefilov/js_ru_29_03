import React, { Component as ReactComponent } from 'react'

export default (Component) => class AccordionDecorator extends ReactComponent {
    state = {
        expandedSections: []
    };

    expandSection = (id) => {
        this.setState({ expandedSections: [id] });
    };

    render() {
        return <Component {...this.props} expanded = { this.state.expandedSections.includes(a.id) } expandSection={ this.expandSection }/>
    }
}
