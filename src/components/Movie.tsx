import { useHistory } from "react-router-dom"
import { movieType } from "../content/movie.model"
import styled from 'styled-components'

const StyledMovie = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 500px;
width: 320px;
margin: 20px;
background-color: white;
border-radius: 10px;
padding: 10px 5px 10px 15px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const StyledImage = styled.img`
height:300px;
width: 200px;
border-radius: 5px;
`

const StyledSpan = styled.span`
font-family: sans-serif;
display: block;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
width: 300px;
`


interface Props {
	movie: movieType
}

const Movie: React.FC<Props> = ({movie}) => {
	const { name, description, img, genres, rate, length, date, id } = movie
	const history = useHistory()

	return (
		<StyledMovie>
			<StyledImage src={require(`../content/assets/images/movie-covers/${img}`).default} alt={''} onClick={() => history.push(`/${id}`)}/>
			<h2 style={{fontFamily: 'Roboto'}}>{name}</h2>
			<StyledSpan>Description: {description}</StyledSpan>
			<StyledSpan>Rate: {rate}</StyledSpan>
			<StyledSpan>Genres: {genres.map(genre => genre[0].toUpperCase() + genre.slice(1).toLowerCase()+ ' ')} </StyledSpan>
			<StyledSpan>Length: {length}</StyledSpan>
			<StyledSpan>Date: {date}</StyledSpan>
		</StyledMovie>
	)
}

export default Movie