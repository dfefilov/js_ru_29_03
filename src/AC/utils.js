import AppDispatcher from '../dispatcher'
import { START, SUCCESS, FAIL } from '../constants'

export function asyncAC(apiCall, type) {
    return (...args) => {
        AppDispatcher.dispatch({ type: type + START })

        setTimeout(() => {
            apiCall(...args)
                .done(response => AppDispatcher.dispatch({ type: type + SUCCESS, response }))
                .fail(error => AppDispatcher.dispatch({ type: type + FAIL, error }))
        }, 1000)
    }
}