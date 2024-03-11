
import ReactDOM from 'react-dom/client';
// import App from './App.jsx'
import "./styles.scss";


import { RouterProvider } from "react-router-dom";
import router from './router';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
   /* <BrowserRouter>
        <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/signup' element={<SignUp/>}/>     
        </Routes>
   </BrowserRouter>  */

 
)
