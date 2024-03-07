import logo from './logo.svg';
import './App.css';
import Header from './layout/Header'
import Footer from './layout/Footer'
import SideBar from './layout/Sidebar'
import Main from './layout/Main'

function App() {
  return (
    <div className="App">
     <Header/>
     <SideBar />
     <Main />
     <Footer />
    </div>
  );
}

export default App;
