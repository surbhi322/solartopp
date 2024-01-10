import './App.css';
import Footer from './components/Footer/Footer';
import MainNavbar from './components/MainNavbar/MainNavbar';
import NavBar from './components/Navbar/Navbar';
import ScheduleMeet from './components/ScheduleMeet/ScheduleMeet';

function App() {
  return (
    <div className="">
      <NavBar />
      <MainNavbar />
      <ScheduleMeet />
      <Footer />
    </div>
  );
}

export default App;
