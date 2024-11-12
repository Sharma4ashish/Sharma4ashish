import { ThemeProvider, CssBaseline } from '@mui/material';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import darkTheme from './Theme/Theme';
import { Home } from './components/Home/Home';
import RestaurantDetails from './components/Restaurants/RestaurantDetails';

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme} >
      <CssBaseline/>
      <Navbar/>
      {/* <Home/> */}
      <RestaurantDetails/>
      </ThemeProvider>
    </>
  );
}

export default App;
