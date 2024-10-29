import { ThemeProvider, CssBaseline } from '@mui/material';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import darkTheme from './Theme/Theme';
import { Home } from './components/Home/Home';

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme} >
      <CssBaseline/>
      <Navbar/>
      <Home/>
      </ThemeProvider>
    </>
  );
}

export default App;
