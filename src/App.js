import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux';
import store from './store';
import Nav from './components/Nav';
import Blocks from './components/Blocks';
import CssBaseLine from '@mui/material/CssBaseline';
import theme from './styles/theme';
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<CssBaseLine />
					<Nav />
					<Routes>
						<Route path='/blocks' element={<Blocks />} >
							<Route path=':height' element={<Blocks />} />
						</Route>
						<Route path="*" element={<main><p>There's nothing here! [todo]</p></main>}/>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
