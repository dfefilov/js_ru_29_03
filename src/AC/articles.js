import AppDispatcher from '../dispatcher'
import { ADD_COMMENT } from '../constants'
import { DELETE_ARTICLE } from '../constants'

export function addComment(articleId, comment) {
    AppDispatcher.dispatch({ type: ADD_COMMENT, data: { id: articleId, comment } })
}

export function deleteArticle(id) {
    AppDispatcher.dispatch({ type: DELETE_ARTICLE, data: { id } })
}