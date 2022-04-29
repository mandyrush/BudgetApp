import './App.css';
import { Outlet } from 'react-router-dom';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
