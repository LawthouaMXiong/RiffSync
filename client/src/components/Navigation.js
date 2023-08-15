import { Link, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Navigation() {

    const router = useLocation();
    return (
        <div class="navigate">
            <nav>
                <ul class="navbar">

                    <Button variant="secondary">
                        <Link
                            className={router.pathname === '/' ? 'active' : ''} to='/'
                        >
                            Home
                        </Link>
                    </Button>


                    <Button variant="secondary">
                        <Link to='/jammers'
                            className={router.pathname === '/jammers' ? 'active' : ''}

                        >
                            Jammers
                        </Link>
                    </Button>


                    <Button variant="secondary">
                        <Link to='/profile'
                            className={router.pathname === '/profile' ? 'active' : ''}

                        >
                            Profile
                        </Link>
                    </Button>


                    <Button variant="secondary">
                        <Link to='/Resources'
                            className={router.pathname === '/Resources' ? 'active' : ''}

                        >
                            Resources
                        </Link>
                    </Button>


                    <Button variant="secondary">
                        <Link to='/Search'
                            className={router.pathname === '/Search' ? 'active' : ''}

                        >
                            Search
                        </Link>
                    </Button>

                    <Button variant="secondary">
  <Link 
    to='/theTeam'
    className={router.pathname === '/theTeam' ? 'active' : ''}
  >
    The Team
  </Link>
</Button>



                </ul>
            </nav>
        </div>
    )
}