import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Routing/Header';
import Home from './Routing/Home';
import Students from './Routing/Students';
import Contact from './Routing/Contact';

function App() {
  return (
    <Router>
        <Header/>

            <Routes>
                <Route path="/" element={   <Navigate   to={"/home"}/>}/>
                <Route path="/home" element={ <Home/> }/>
                <Route path="/students" element={ <Students/> }/>
                <Route path="/contact" element={ <Contact/> }/>
            </Routes>
    </Router>
  );
}

export default App;
