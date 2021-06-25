import { useState } from "react"
import { genreType, movieType } from "../content/movie.model"

interface Props {
	setMovieList: React.Dispatch<React.SetStateAction<movieType[]>>,
	data: movieType[]
    };


export const Select: React.FC<Props> = ({ data, setMovieList}) => {
	const filteredByGenre:movieType[] = []
	const [genre, setGenre] = useState<any>('')
	
	return (
		<select 
			value={genre} 
			onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
				setGenre(e.target.value)
				
				data.forEach(movie => 
					movie.genres.forEach(g => {
						if(g === e.target.value) {
							filteredByGenre.push(movie)
						}
					})
				)
				if(e.target.value === ''){
					setMovieList(data)
				} else {
					setMovieList(filteredByGenre)
				}
			}}
			>
			<option value={''}>All Genres</option>
			{Object.keys(genreType).map((keyName: any) => {
				return(
					<option key={keyName} value={keyName}>
						{keyName[0].toUpperCase()+keyName.slice(1).toLowerCase()}
					</option>
				)
			})}
		</select>
	)
}