import React from 'react';
import PropTypes from 'prop-types';
import { Row, Button } from 'react-bootstrap';
// eslint-disable-next-line
import styles from './index.styles.css';

const Pagination = ({ goToPage, totalPageCount, currentPage }) => {
    return (
        <Row className="pagination">
            <Button variant="link" disabled={currentPage === 1} onClick={() => goToPage(1)}>First</Button>
            <Button variant="link" disabled={currentPage-1 === 0} onClick={() => goToPage(currentPage-1)}>Previous</Button>
            <Button variant="link" disabled>Page {currentPage} of {totalPageCount}</Button>
            <Button variant="link" disabled={currentPage === totalPageCount} onClick={() => goToPage(currentPage+1)}>Next</Button>
            <Button variant="link" disabled={currentPage === totalPageCount} onClick={() => goToPage(totalPageCount)}>Last</Button>
        </Row>
    )
};

Pagination.propTypes = {
    goToPage: PropTypes.func.isRequired,
    totalPageCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
