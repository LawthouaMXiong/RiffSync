import { Link, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Navigation() {
    
    const router = useLocation();
    return (
      <div class="navigate">
      <nav>
      <ul class="navbar">
      <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>

      {/* <Button variant="flat" size="xxl">
        flat button
      </Button> */}
    </>
      <Button >
              <Link 
              className={router.pathname === '/' ? 'active' : ''} to='/'
              >
                  Home
              </Link>
              </Button>
          
          
          <Button >
              <Link to='/jammers'
              className={router.pathname === '/jammers' ? 'active' : ''}
              >
                  Jammers
              </Link>
              </Button>
          
          
          <Button >
              <Link to='/profile'
              className={router.pathname === '/profile' ? 'active' : ''}
              >
                  Profile
              </Link>
              </Button>
          
          
          <Button >
              <Link to='/Resources'
              className={router.pathname === '/Resources' ? 'active' : ''}
              >
                  Resources
              </Link>
              </Button>
          
          
          <Button >
              <Link to='/Search'
              className={router.pathname === '/Search' ? 'active' : ''}
              >
                  Search
              </Link>
              </Button>
          
          
      </ul>
   </nav> 
  </div>
    )
}