import './App.css';
import FooterWithSuspense from './components/Footer';
import HeroWithSuspense from './components/Hero';
import LoginWithSuspense from './components/Login';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <HeroWithSuspense/>
      <LoginWithSuspense/>
      <FooterWithSuspense/>
    </div>
  );
}

export default App;
