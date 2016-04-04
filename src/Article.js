import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

class Article extends Component {
    state = { visible: false };

    render() {
        const { title, text, comments } = this.props.article;
        const body = this.state.visible ?
            (
                <section>
                    { text }
                    <CommentList items = { comments } />
                </section>
            ) : null;

        return (
            <div>
                <h3 onClick = { this.onTitleClick }>{ title }</h3>
                { body }
            </div>
        )
    }

    onTitleClick = (event) => {
        this.setState({ visible: !this.state.visible })
    }
}

export default Article