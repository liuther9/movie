import { useHistory, useParams } from "react-router-dom"
import { movieType } from "../content/movie.model"
import { useAppSelector } from "../hooks/useTypedSelector"
import Movie from '../components/Movie'
import styled from 'styled-components'
import {StyledContainer, StyledText} from "../styles/StyledContainer"
import { ArrowLeftCircle } from "@styled-icons/remix-line"

const StyledImage = styled.img`
height:450px;
width: 300px;
border-radius: 7px;
`

const StyledSpan = styled.span`
font-family: sans-serif;
display: block;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
width: 300px;
`

const StyledDescription = styled.p`
font-family: Roboto;
width: 50em;
padding: 30px;
background-color: #eefbff;
border: transparent;
border-radius: 10px;
`

const StyledMovieContainer = styled.div`
display: flex;
align-items: center;
justify-content: start;
`

const Description = () => {
	const { id } = useParams<{id?: string}>()
	const { data } = useAppSelector(store => store.moviesReducer)
	const movie = data.filter(movie => movie.id.toString() === id)[0]
	const { name, description, img, genres, rate, length, date } = movie
	const history = useHistory()

	// FILTERING MOVIES BY GENRE : START
	const movies: movieType[] = []

	movie.genres.forEach(genre => {
		for (let i in data) {
			for(let j in data[i].genres){
				if(data[i].genres[j] === genre) {
					movies.push(data[i])
				}
			}
		}
	})

	const count = movies.reduce((obj: any, e) => {
		obj[e.id] = (obj[e.id] || 0) + 1;
		return obj;
	}, {});

	movies.sort((x, y) => {
		return count[y.id] - count[x.id]
	})

	const filteredMovies = movies.reduce((movie: movieType[], current) => {
		const x = movie.find((item: any) => item.id === current.id)
		if (!x) {
			return movie.concat([current])
		} else {
			return movie
		}
	}, []).filter((movie: any) => movie.id.toString() !== id).slice(0,3)
	// FILTERING MOVIES BY GENRE : END

	return (<StyledContainer>
			<div style={{display: 'flex'}}>
				<ArrowLeftCircle 
					onClick={() => history.goBack()}
					style={{width: 40}}
				/>
				<StyledText>{name}</StyledText>
			</div>
			<div style={{display: 'flex', marginBottom: 30}}>
				<div style={{marginRight: 30}}>
					<StyledImage src={require(`../content/assets/images/movie-covers/${img}`).default} alt={''}/>
					<StyledSpan>Rate: {rate}</StyledSpan>
					<StyledSpan>Genres: {genres.map(genre => genre[0].toUpperCase() + genre.slice(1).toLowerCase()+ ' ')} </StyledSpan>
					<StyledSpan>Length: {length}</StyledSpan>
					<StyledSpan>Date: {date}</StyledSpan>
				</div>
				<StyledDescription>{description}</StyledDescription>
			</div>
			<StyledText>Similar Movies:</StyledText>
			<StyledMovieContainer>
				{filteredMovies.map((movie) => {
					return <Movie movie={movie} />}
				)}
			</StyledMovieContainer>
		</StyledContainer>
	)
}

export default Description