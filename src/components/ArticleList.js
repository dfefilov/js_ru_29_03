import React, { Component, PropTypes } from 'react'
import Article from './Article'

class AricleList extends Component {
    state = {
        expandedArticles: [],
        selectedArticles: []
    };

    render() {
        return (
            <div>
                <ul>{ this.getList() }</ul>
            </div>
        )
    }

    getList() {
        return this.props.articles.map((a) => {
            return (
                <li key={ a.id }>
                    <Article
                        article={ a }
                        expandArticle={ this.expandArticle }
                        expanded={ this.state.expandedArticles.includes(a.id) }
                        selectArticle={ this.selectArticle }
                        selected={ this.state.selectedArticles.includes(a.id) }
                    />
                </li>
            )
        });
    }

    expandArticle = (id) => {
        this.setState({ expandedArticles: [id] });
    };

    selectArticle = (id) => {
        this.setState({
            selectedArticles:
                this.state.selectedArticles.includes(id)
                    ? this.state.selectedArticles
                    : this.state.selectedArticles.concat(id)
        });
    };
}

export default AricleList