import { Spinner } from 'components/Spinner';
import { Suspense } from 'react';
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
    <Suspense fallback={<Spinner />}>
      <Main>
        <Outlet />
      </Main>
    </Suspense>
  </>
);
