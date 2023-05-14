import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AllRoutes from './hook/AllRoutes';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
