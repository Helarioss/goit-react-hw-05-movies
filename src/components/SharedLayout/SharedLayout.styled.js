import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 20px 50px;
  display: flex;
  gap: 30px;
  background-color: #f5f5f5;
`;

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    font-weight: bold;
    color: red;
  }
`;

export const Main = styled.main`
  padding: 30px;
`;
