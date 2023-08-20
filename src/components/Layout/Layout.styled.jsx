import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 0;
`;
const navLink = NavLink;
export const LinkStyle = styled(navLink)`
  text-decoration: none;
  color: ${props => (props.isActive ? '#ff8c00' : '#000')};
  font-size: 32px;
  &:hover,
  :focus {
    color: #ff8c00;
  }
`;
