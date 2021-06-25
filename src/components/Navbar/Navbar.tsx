import styled from 'styled-components'
import { SearchInput } from "./SearchInput"
import { Movie2 } from '@styled-icons/remix-line' 

const StyledNavbar = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: stretch;
height: 50px;
width: 990px;
margin-left: 1vw;
margin-right: auto;
padding: 0 15px;
`

const StyledLogo = styled.h2`
	font-family: roboto;
	font-weight: normal;
	font-size: 25px;
	margin: 0 30px 2px 10px;
	height: 20px;
	display: flex;
	align-items: center;
`

const Navbar = () => {
	return (
		<div style={{backgroundColor: 'white'}}>
			<StyledNavbar>
				<Movie2 style={{height: 30}}/>
				<StyledLogo>Logo</StyledLogo>
				<SearchInput />
			</StyledNavbar>
		</div>
	)
}

export default Navbar