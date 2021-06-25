import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Description from './pages/Description'
import styled from 'styled-components'
import Navbar from './components/Navbar/Navbar'

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
background: #dff7f3;
`

const App = () => {
	return (<AppWrapper>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/:id'>
					<Description />
				</Route>
			</Switch>
		</AppWrapper>
	);
}

export default App