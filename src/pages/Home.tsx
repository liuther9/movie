import "./Paginate.css"
import { useState, useEffect } from "react"
import { movieType } from "../content/movie.model"
import { useAppSelector } from "../hooks/useTypedSelector"
import { Select } from "../components/Select"
import { Sort } from '../components/Sort'
import Movie from "../components/Movie"
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'
import { StyledText, StyledContainer } from "../styles/StyledContainer"

const StyledMovieContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
height: 700px;
`

const SortFilterContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`


const Home = () => {
	const { data } = useAppSelector(store => store.moviesReducer) 
	const [movieList, setMovieList] = useState<movieType[]>([])
	const [pageNumber, setPageNumber] = useState<number>(0)

	useEffect(() => {
		setMovieList(data)
	}, [data])
	// Pagination
	const pageCount: number = Math.ceil(movieList.length/3)
	const changePage = ({ selected }: any) => setPageNumber(selected)
	const showMovies = movieList.slice((pageNumber+1)*3-3, (pageNumber+1)*3)

	return (
		<StyledContainer>
			<StyledText>Movies Catalog</StyledText>
			<SortFilterContainer>
				<StyledText>Sort</StyledText>
				<Sort />
				<Select data={data} setMovieList={setMovieList}/>
			</SortFilterContainer>
			<StyledMovieContainer>
				{showMovies.map(movie => {
					return <Movie key={movie.id} movie={movie}/>
				})}
			</StyledMovieContainer>
			<ReactPaginate 
				pageCount={pageCount}
				pageRangeDisplayed={4} 
				marginPagesDisplayed={1} 
				onPageChange={changePage}
				containerClassName={"paginationBttns"}
				activeClassName={"paginationActive"}
				disabledClassName={"paginationDisabled"}
				nextLinkClassName={"nextBttn"}
				previousLinkClassName={"previousBttn"}
			/>
		</StyledContainer>
	)
}

export default Home