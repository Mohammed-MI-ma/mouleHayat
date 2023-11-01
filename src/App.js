import './App.css';
import HeroWithSuspense from './components/Hero';
import LoginWithSuspense from './components/Login';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <HeroWithSuspense/>
      <LoginWithSuspense/>
    </div>
  );
}

export default App;
