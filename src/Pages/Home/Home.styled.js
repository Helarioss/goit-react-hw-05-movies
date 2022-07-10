import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  margin: 0;
  margin-bottom: 30px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px 20px;
`;

export const Poster = styled.img`
  display: block;
  max-width: 100%;
  height: 340px;
  object-fit: cover;
`;

export const MovieTitle = styled.h3`
  margin: 0;
  margin-top: 12px;
  font-size: 20px;
`;

export const MovieLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover,
  &:focus {
    color: red;
  }
`;
