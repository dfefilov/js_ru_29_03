import React, { Component, PropTypes } from 'react'
import Article from './Article'

class AricleList extends Component {
    state = {
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
        const { expandedItem } = this.props;

        return this.props.articles.map((a) => {
            return (
                <li key={ a.id }>
                    <Article
                        article={ a }
                        expandArticle={ this.expandArticle }
                        expanded={ a.id == expandedItem }
                        selectArticle={ this.selectArticle }
                        selected={ this.state.selectedArticles.includes(a.id) }
                    />
                </li>
            )
        });
    }

    expandArticle = (id) => {
        const { expandItem } = this.props;

        expandItem(id);
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

export default Accordion(AricleList)