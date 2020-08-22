import React from 'react';
import {Col, Container, Row} from 'styled-bootstrap-grid';
import ThemeWrapper from './ThemeWrapper';

export const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="1">Left</Col>
        <Col col>
          <Row>
            <Col lg="4" md="6" style={{ border: '1px solid black'}}>
              Col 1
            </Col>
            <Col lg="4" md="6" style={{ border: '1px solid black'}}>
              Col 2
            </Col>
            <Col lg="4" md="6" style={{ border: '1px solid black'}}>
              Col 3
            </Col>
          </Row>
        </Col>
        <Col sm="1">Right</Col>
      </Row>
    </Container>
  );
};

const AppWithTheme = () => {
  return (
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  );
}

export default AppWithTheme;