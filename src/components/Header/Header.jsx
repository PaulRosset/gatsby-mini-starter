import React from 'react';
import styled from 'styled-components';

export const ContainerHeader = styled.div`
  background: #0e6eb8;
  margin-bottom: 1.45rem;
`;

export const FormHeader = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

export const StyledLinkHeader = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

const Header = () => (
  <ContainerHeader>
    <FormHeader>
      <h1>
        <StyledLinkHeader to="/">Gatsby</StyledLinkHeader>
      </h1>
    </FormHeader>
  </ContainerHeader>
);

export default Header;
