import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  height: 32px;
  padding: 5px 10px;
  width: 20%;

  font-size: 16px;
`;

export const SearchButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    color: red;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 30px;

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
