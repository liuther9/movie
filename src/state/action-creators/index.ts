import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions"
import { movies } from "../../content/movie.mock-data"

export const searchMovies = (term: string) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.SEARCH_MOVIES
		})
		
		try {
			const searchList = movies.filter(movie => movie.name.toLowerCase().includes(term.toLowerCase()))

			dispatch({
				type: ActionType.SEARCH_MOVIES_SUCCESS,
				payload: searchList
			})
		} catch (error) {
			dispatch({
				type: ActionType.SEARCH_MOVIES_ERROR,
				payload: error.message
			})
		}
	}
}