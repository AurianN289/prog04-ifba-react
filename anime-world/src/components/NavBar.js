import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function NavBar(){

    return(
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a href="#" className="navbar-brand mx-4">AnimeWorld</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>

            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav ms-auto">
                    
                    <li class="nav-item">
                        <Link to="/animes" className="nav-link">Animes</Link>
                    </li>

                    
                    <li class="nav-item">
                        <a href="#" class="nav-link">Animações</a>
                    </li>

                    
                    <li class="nav-item">
                        <a href="#" class="nav-link">Galeria</a>
                    </li>

                    
                    <li class="nav-item">
                        <a href="#" class="nav-link">Catalogação</a>
                    </li>

                </ul>

            </div>
        </nav> 

    )
}

export default NavBar;