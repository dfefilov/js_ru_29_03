import React, { Component, PropTypes } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    state = { visible: false };

    render() {
        return (
            <div className="comment-list">
                { this.renderTitle() }
                <ul>{ this.renderItems() }</ul>
            </div>
        )
    };

    renderItems() {
        return this.state.visible && this.props.items
            ? this.props.items.map(item => <li key={ item.id }><Comment comment = { item } /></li>)
            : ''
    }

    renderTitle() {
        return <a href="javascript:" onClick = { this.onTitleClick }>comments ({ this.props.items ? this.props.items.length : 0 })</a>
    }

    onTitleClick = (event) => {
        this.setState({ visible: !this.state.visible })
    }
}

export default CommentList