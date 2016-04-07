import React, { Component, PropTypes } from 'react'
import CommentAdd from './CommentAdd'
import CommentList from './CommentList'
import { findDOMNode } from 'react-dom'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: React.PropTypes.bool,
        isSelected: React.PropTypes.bool,
        addComment: PropTypes.func.isRequired,
        deleteArticle: PropTypes.func.isRequired,
        expandArticle: PropTypes.func.isRequired,
        selectArticle: PropTypes.func.isRequired
    }

    render() {
        const { article: { title }, isSelected, expandArticle, deleteArticle } = this.props
        const style = isSelected ? {color: 'red'} : null
        return (
            <div ref = "articleContainer">
                <h3 onClick = {expandArticle} style = {style}>{title}</h3>
                <a href = "#" onClick = {this.handleSelect}>select this article</a> | <a href = "#" onClick = {this.deleteArticle}>delete this article</a>
                { this.getBody() }
            </div>
        )
    }

    addComment = (comment) => {
        const { article: { id } } = this.props;

        this.props.addComment(id, comment);
    };

    deleteArticle = (ev) => {
        ev.preventDefault();

        this.props.deleteArticle(this.props.article.id)
    };

    componentDidMount() {
/*
        console.log('---', this.refs);
        console.log('---', 'commentList: ', this.refs.commentList, findDOMNode(this.refs.commentList));
*/
    }

    handleSelect = (ev) => {
        const { article: {id}, selectArticle } = this.props
        selectArticle(id)
    }

    getBody() {
        if (!this.props.isOpen) return null
        const { article } = this.props
        return (
            <section>
                <p>{ article.text }</p>
                <CommentAdd add = { this.addComment } />
                <br/>
                <CommentList comments = { article.getRelation('comments') } ref = "commentList" />
            </section>
        )
    }
}

export default Article