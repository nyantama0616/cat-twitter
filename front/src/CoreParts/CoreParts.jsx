import { Navbar, Nav } from 'react-bootstrap';
import { useIsSignedIn } from '../User/User';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import "./CoreParts.scss";

export function CatNavbar() {
    const catImagePath = `${process.env.PUBLIC_URL}/images/logo.png `;
    let links = [< NavLink key={0} to="/home" > Home</NavLink>]
    if (!useIsSignedIn()) {
        links.push(<NavLink key={1} to="/sign-up">Sign up</NavLink>)
        links.push(<NavLink key={2} to="/sign-in">Sign in</NavLink>)
    } else {
        // links.push(<NavLink key={1} to="/sign-up">Sign up</NavLink>)

    }

    return (    
        <Navbar collapseOnSelect expand="true" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <NavLink to="home">
                    <img
                        src={catImagePath}
                        alt="cat twitter logo"
                    />
                </NavLink>
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {links}
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export function Layout() {
    console.log("layout");
    return (
        <div>
            <CatNavbar />
            <div className='container'>
                <Outlet />
            </div>
        </div>
    );
}
