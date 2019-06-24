import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../header/index.jsx';
import Footer from '../footer/index.jsx';

const Layout = ({children}) => 
<Container>
    <Header />
    <hr />
        <div> { children } </div>
    <hr />
    <Footer />
</Container>

export default Layout