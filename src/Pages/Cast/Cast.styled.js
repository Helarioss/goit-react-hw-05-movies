import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px 20px;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: 340px;
  object-fit: cover;
`;
