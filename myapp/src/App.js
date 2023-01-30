import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Main from './components/Main';

function App() {
  
  return (
    <div className='App'>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
