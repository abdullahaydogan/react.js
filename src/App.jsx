import { Link,Outlet } from 'react-router-dom'
import logo from  "./assets/KOU.png"

function App() {
 

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  
    <Link className="navbar-brand" to="/home">
      <img src={logo} width={80}/>
      KOU
    </Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        <Link className="nav-link" to="/signup">SignUp</Link>
        <Link className="nav-link " to="/login">LogIn</Link>
        <Link className="nav-link" to="/aboutus">About us</Link>
      </div>
    </div>
  </div>
</nav>
   
        <div className='container mt-4'>
        <Outlet/>
        </div>
     
    </>
  )
}

export default App
