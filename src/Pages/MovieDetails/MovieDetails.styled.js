import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BaseInformation = styled.div`
  display: flex;
  gap: 20px;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 500px;
`;

export const Description = styled.div`
  width: 100%;
`;

export const ButtonBack = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 20px;

  color: black;
  text-decoration: none;

  &:hover,
  &:focus {
    color: red;
  }

  svg {
    margin-right: 7px;
  }
`;
