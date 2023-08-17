import { NavLink, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {

    const router = useLocation();
    return (
    //     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    //     <Navbar bg="dark" data-bs-theme="dark">
    //     <Container>
    //       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#features">Features</Nav.Link>
    //         <Nav.Link href="#pricing">Pricing</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>
    //   </link>
        <div class="navigate">
            <nav>
                <ul class="navbar">

                    <Button variant="secondary">
                        <NavLink to='/' style={{ textDecoration: 'none' }}
                            className={router.pathname === '/' ? 'active' : ''}
                        >
                            Home
                        </NavLink>
                    </Button>


                    <Button variant="secondary">
                        <NavLink to='/jammers' style={{ textDecoration: 'none' }}
                            className={router.pathname === '/jammers' ? 'active' : ''}

                        >
                            Jammers
                        </NavLink>
                    </Button>


                    <Button variant="secondary">
                        <NavLink to='/profile' style={{ textDecoration: 'none' }}
                            className={router.pathname === '/profile' ? 'active' : ''}

                        >
                            Profile
                        </NavLink>
                    </Button>


                    <Button variant="secondary">
                        <NavLink to='/Resources' style={{ textDecoration: 'none', }}
                            className={router.pathname === '/Resources' ? 'active' : ''}

                        >
                            Resources
                        </NavLink>
                    </Button>


                    <Button variant="secondary">
                        <NavLink to='/Search' style={{ textDecoration: 'none' }}
                            className={router.pathname === '/Search' ? 'active' : ''}

                        >
                            Search
                        </NavLink>
                    </Button>

                    <Button variant="secondary">
                        <NavLink
                            to='/theTeam' style={{ textDecoration: 'none' }}
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