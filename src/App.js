import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipsDetails from './pages/StarshipDetails/StarshipDetails';


function App() {
  return (
    <>
      <div className='nav'>
        <NavBar />
      </div>
      <StarshipList />
      <Routes>
        <Route path='starship' element={<StarshipsDetails/>} />
      </Routes>
    </>
  );
}

export default App;
