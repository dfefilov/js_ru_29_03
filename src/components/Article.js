import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import { findDOMNode } from 'react-dom'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        isSelected: PropTypes.bool,
        deleteArticle: PropTypes.func.isRequired,
        expandArticle: PropTypes.func.isRequired,
        selectArticle: PropTypes.func.isRequired
    }

    render() {
        const { article: { title }, isSelected } = this.props;
        const style = isSelected ? {color: 'red'} : null;

        return (
            <div ref = "articleContainer">
                <h3 onClick = { this.handleExpand } style = {style}>{title}</h3>
                <a href = "#" onClick = { this.handleSelect }>select this article</a> | <a href = "#" onClick = { this.handleDelete }>delete this article</a>
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

    handleDelete = (ev) => {
        ev.preventDefault()
        this.props.deleteArticle(this.props.article.id)
    }

    handleExpand = (ev) => {
        const { article: { id }, isOpen, expandArticle, loadOneArticle } = this.props;

        if (!isOpen) {
            loadOneArticle(id)
        }

        expandArticle(id)
    }

    handleSelect = (ev) => {
        this.props.selectArticle(this.props.article.id)
    }

    getBody() {
        if (!this.props.isOpen) return null
        const { article } = this.props
        return (
            <section>
                {article.text}
                <CommentList article = {article} ref = "commentList" />
            </section>
        )
    }
}

export default Article