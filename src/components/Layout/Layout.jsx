import { Outlet, useLocation } from 'react-router-dom';
import { NavList, LinkStyle, ActiveLink } from './Layout.styled';
import { Suspense } from 'react';
import Spiner from 'components/Spiner/Spiner';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <NavList>
        <li>
          <LinkStyle to="/" isActive={location.pathname === '/'}>
            Home
          </LinkStyle>
        </li>
        <li>
          <LinkStyle to="/movies" isActive={location.pathname === '/movies'}>
            Movies
          </LinkStyle>
        </li>
      </NavList>
      <Suspense fallback={<Spiner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
