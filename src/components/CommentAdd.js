import React, { Component, PropTypes } from 'react'
import { commentStore } from '../stores'

class CommentAdd extends Component {
    render() {
        return (
            <form>
                <input placeholder="author name" ref="author" type="text"/>
                <br/>
                <textarea placeholder="comment text" ref="text"></textarea>
                <br/>
                <button onClick = { this.handleAdd }>add</button>
            </form>
        )
    }

    handleAdd = (ev) => {
        ev.preventDefault();

        var author = this.refs.author, text = this.refs.text;

        if (text.value) {
            this.props.add({ id: commentStore.generateId(), name: author.value, text: text.value });

            author.value = text.value = "";
        }
    }
}

export default CommentAdd