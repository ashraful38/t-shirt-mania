import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Grandpa from './components/Grandpa/Grandpa';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main> ,  children:[
        {
          path:'/',
          loader:() =>{
            return fetch('tshirt.json')
          },
          element:<Home></Home>
        },
        {
          path:'/order',
          element:<Order></Order>
        },
        {
          path:'/grandpa',
          element:<Grandpa></Grandpa>
        }
      ]
    }
   
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
