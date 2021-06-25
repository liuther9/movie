import { useState, useRef, useEffect } from "react"
import { useActions } from "../../hooks/useActions"
import styled from 'styled-components'
import { Search } from '@styled-icons/material'

const StyledSearchBar = styled.div`
	display: flex;
	height: 30px;
	width: 500px;
	background-color: #edeef0;
	border-radius: 8px;
	margin-right: 10px;
`
const StyledInput = styled.input`
	margin: 0px;
	padding: 0 0 0 30px;
	border: 0px;
	height: 30px;
	width: 470px;
	outline: none;
	background: transparent;
	position: absolute;
`

export const SearchInput = () => {
	const inputRef = useRef<any>()
	const [ term, setTerm ] = useState<string>('')
	const { searchMovies } = useActions()

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	const onClick = () => {
		searchMovies(term)
	}
	
	return (
		<StyledSearchBar>
			<Search style={{width: 22, color: 'grey', margin: '0 5'}}/>
			<StyledInput  ref={inputRef}
			value={term}
			onChange={e => setTerm(e.target.value)} 
			onKeyPress={e => {
				if(e.key === 'Enter'){
					onClick()
				}
			}}
			/>
		</StyledSearchBar>
	)

}