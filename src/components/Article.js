import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
// import { findDOMNode } from 'react-dom'
// import toggleOpen from '../HOC/toggleOpen'

class Article extends Component {
    render() {
        const { article: { title }, selected } = this.props;
        const style = selected ? { color: 'red' } : null;

        return (
            <div ref = "articleContainer">
                <h3 onClick = { this.handleClick } style = { style }>{ title }</h3>
                <a href = "#" onClick = { this.handleSelect }>select this article</a>
                { this.getBody() }
            </div>
        )
    }

    /*
    componentDidMount() {
        console.log('---', this.refs);
        console.log('---', 'commentList: ', this.refs.commentList, findDOMNode(this.refs.commentList));
    }
     */

    getBody() {
        const { article, expanded } = this.props;

        return expanded ?
            (
                <section>
                    { article.text }
                    <CommentList comments = { article.comments } ref = "commentList" />
                </section>
            ) : null;
    }

    handleClick = (ev) => {
        const { article: { id }, expandArticle } = this.props;

        // this.props.toggleOpen();

        expandArticle(id);
    };

    handleSelect = (ev) => {
        const { article: { id }, selectArticle } = this.props;

        selectArticle(id);
    };
}

// export default toggleOpen(Article)
export default Article