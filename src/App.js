import { ThemeProvider, CssBaseline } from '@mui/material';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import darkTheme from './Theme/Theme';


function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme} >
      <CssBaseline/>
      <Navbar/>
      </ThemeProvider>
      <h1>Helloe </h1>
      <h1 className="text-2xl bg-grey text-blue-200 font-bold underline">asd</h1>
    </>
  );
}

export default App;
