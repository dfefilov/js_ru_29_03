import React, { Component, PropTypes } from 'react'
import Article from './Article'

class AricleList extends Component {
    render() {
        return (
            <div>
                <ul>
                    { this.renderItems() }
                </ul>
            </div>
        )
    }

    renderItems() {
        return this.props.articles.map(a => <li key={ a.id }><Article article = { a } /></li>)
    }
}

export default AricleList