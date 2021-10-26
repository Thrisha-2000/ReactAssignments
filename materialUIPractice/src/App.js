
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import Layout from './components/Layout';



const theme = createTheme({
  typography : {
    fontFamily: 'Zen Old Mincho',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})








function App() {
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path = '/'>
            <Notes/>
          </Route>
          <Route path = '/create'>
            <Create />
          </Route>

        </Switch>
        </Layout>
      </ BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App;
