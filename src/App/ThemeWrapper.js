import React from 'react';
import {BaseCSS, GridThemeProvider} from 'styled-bootstrap-grid';
import styled, {ThemeProvider as StyledThemeProvider } from 'styled-components';

const customCSS = `
  body {
    margin: 0;
  }
`;

const grid = {
  breakpoints: { // defaults below
    xxl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575
  }
};

const styledTheme = {
  main: 'skyblue',
  grid
};

export const Wrapper = styled.div`
  background-color: ${props => props.theme.main}
`;

const ThemeWrapper = ({ children }) => (
  <>
    <BaseCSS css={customCSS} />
    <StyledThemeProvider
      theme={styledTheme}
    >
      <GridThemeProvider
        gridTheme={styledTheme.grid}
      >
        <Wrapper>
          {
            children
          }
        </Wrapper>
      </GridThemeProvider>
    </StyledThemeProvider>
  </>
);

export default ThemeWrapper;

