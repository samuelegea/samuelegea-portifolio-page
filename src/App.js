import './App.css';
import Home from './pages/Home/Home'
import Header from './components/Header/Header';
import { Routes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
}

export default App;
