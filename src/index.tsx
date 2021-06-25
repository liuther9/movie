import { Provider } from 'react-redux'
import { store } from './state'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
`

const rootNode = document.getElementById('root')
ReactDOM.render(
	<>
		<GlobalStyle />
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</>,
	rootNode
)