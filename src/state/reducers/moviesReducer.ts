import { movies } from "../../content/movie.mock-data";
import { movieType } from "../../content/movie.model";
import { ActionType } from '../action-types'
import { Action } from "../actions";

interface MoviesState {
	loading: boolean,
	error: string | null,
	data: movieType[]
}

const initialState = {
	loading: false,
	error: null,
	data: movies
}

const reducer = (state: MoviesState = initialState, action: Action) => {
	switch (action.type) {
		case ActionType.SEARCH_MOVIES:
			return {loading: true, error: null, data: []}
		case ActionType.SEARCH_MOVIES_SUCCESS:
			return {loading: false, error: null, data: action.payload}
		case ActionType.SEARCH_MOVIES_ERROR:
			return {loading: false, error: action.payload, data: []}
		default:
			return state;
	}
}

export default reducer