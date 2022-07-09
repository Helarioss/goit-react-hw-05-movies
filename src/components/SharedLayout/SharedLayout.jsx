import { Outlet } from 'react-router-dom';
import { Nav, Link } from './SharedLayout.styled';

export const SharedLayout = () => (
  <>
    <header>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
    </header>
    <main>
      <Outlet />
    </main>
  </>
);
