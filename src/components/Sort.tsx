import { movieType } from "../content/movie.model"
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector"
import { ActionType } from "../state/action-types"
import { AppDispatch } from "../state"
import styled from 'styled-components'

const sortMoviesByLength = (data: movieType[], dispatch: AppDispatch) => {
	const sortedData = data.slice(0).sort((x, y) => parseFloat(y.length[0]+ y.length.slice(4,6)) - parseFloat(x.length[0]+ x.length.slice(4,6)))
	dispatch({type: ActionType.SEARCH_MOVIES_SUCCESS, payload: sortedData})
}

//Sort by Rate
const sortMoviesByRate = (data: movieType[], dispatch: AppDispatch) => {
	const sortedData = data.slice(0).sort((x, y) => parseFloat(y.rate) - parseFloat(x.rate))
	dispatch({type: ActionType.SEARCH_MOVIES_SUCCESS, payload: sortedData})
}

//Sort by Date
const newDate = (date: string) => {
	const date1 = date.split('.')
	const newDate = date1[1] + '/' +date1[0] +'/' +date1[2]
	return newDate
}

const sortMoviesByDate = (data: movieType[], dispatch: AppDispatch) => {
	const sortedData = data.slice(0).sort((x, y) => +new Date(newDate(y.date))- +new Date(newDate(x.date)))
	dispatch({type: ActionType.SEARCH_MOVIES_SUCCESS, payload: sortedData})
}

const StyledSort = styled.button`
font-family: Roboto;
font-size: medium;
padding: 10px;
margin: 0 10px;
border-radius: 10px;
border: transparent;
background-color: white;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
cursor: pointer;
`

export const Sort = () => {
	const dispatch = useAppDispatch()
	const { data } = useAppSelector(sort => sort.moviesReducer)

	return (
		<div>
			<StyledSort onClick={() => sortMoviesByLength(data, dispatch)}>Length</StyledSort>
			<StyledSort onClick={() => sortMoviesByRate(data, dispatch)}>Rate</StyledSort>
			<StyledSort onClick={() => sortMoviesByDate(data, dispatch)}>New Date</StyledSort>
		</div>
	)
}