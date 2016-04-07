import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { ADD_COMMENT } from '../constants'
import { DELETE_ARTICLE } from '../constants'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args);

        AppDispatcher.register((action) => {
            const { type, data } = action;

            switch (type) {
                case ADD_COMMENT:
                    var article = this.getById(data.id);

                    if (article) {
                        article.comments.push(data.comment.id);
                        this.emitChange();
                    }
                    break;
                case DELETE_ARTICLE:
                    this.__delete(data.id);
                    this.emitChange();
                    break;
            }
        })
    }
}

export default ArticleStore