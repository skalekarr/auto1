import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../header';
import Footer from '../footer';
// eslint-disable-next-line
import styles from './index.styles.css';

const Layout = ({children}) => 
<Container>
    <Header />
        <div className="container-layout"> { children } </div>
    <Footer />
</Container>

export default Layout