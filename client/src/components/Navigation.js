import { NavLink, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Navigation() {

    const router = useLocation();
    return (
        <div class="navigate">
            <nav>
                <ul class="navbar">

                    <Button variant="secondary">
                        <NavLink
                            className={router.pathname === '/' ? 'active' : ''} to='/'
                            // className={({isActive}) => {
                            // return (  
                            // (isActive ? 'secondary' : 'primary')
                            //     )
                            // }}
                        >
                            Home
                        </NavLink>
                    </Button>


                    <Button variant="secondary">
                        <NavLink to='/jammers'
                            className={router.pathname === '/jammers' ? 'active' : ''}

                        >
                            Jammers
                        </NavLink>
                    </Button>


                    <Button variant="secondary">
                        <NavLink to='/profile'
                            className={router.pathname === '/profile' ? 'active' : ''}

                        >
                            Profile
                        </NavLink>
                    </Button>


                    <Button variant="secondary">
                        <NavLink to='/Resources'
                            className={router.pathname === '/Resources' ? 'active' : ''}

                        >
                            Resources
                        </NavLink>
                    </Button>


                    <Button variant="secondary">
                        <NavLink to='/Search'
                            className={router.pathname === '/Search' ? 'active' : ''}

                        >
                            Search
                        </NavLink>
                    </Button>

                    <Button variant="secondary">
  <NavLink 
    to='/theTeam'
    className={router.pathname === '/theTeam' ? 'active' : ''}
  >
    The Team
  </NavLink>
</Button>


                </ul>
            </nav>
        </div>
    )
}