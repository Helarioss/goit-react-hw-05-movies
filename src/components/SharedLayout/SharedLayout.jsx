import { Outlet } from 'react-router-dom';
import { Nav, Link, Main } from './SharedLayout.styled';

export const SharedLayout = () => (
  <>
    <header>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
    </header>
    <Main>
      <Outlet />
    </Main>
  </>
);
