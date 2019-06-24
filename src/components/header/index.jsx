import React from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import logo from '../../assets/logo.png'
// eslint-disable-next-line
import styles from './index.styles.css'

const Header = () =>
  <Row className="header">
    <Col><Image src={logo} rounded /></Col>
    <Row className="justify-content-md-right">
      <ul>
        <li>Purchase</li>
        <li>My Orders</li>
        <li>Sell</li>
      </ul>
    </Row>
  </Row>

export default Header;
