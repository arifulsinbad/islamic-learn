import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Route/Routes';

function App() {
  return (
    <div className="App" bg='dark'>
 <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
