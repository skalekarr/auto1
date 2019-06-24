import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Dropdown from '../dropdown';
// eslint-disable-next-line
import styles from './index.styles.css'

const ListHeader = ({ totalCarsCount, sortOrder, handleSort, currentPage, totalPageCount, itemsPerPage }) => {
  const title = sortOrder ? sortOrder : 'None';
  const sortItems = [{ name: 'Mileage - Ascending'}, { name: 'Mileage - Descending'}];
  const pageItems = currentPage === totalPageCount ? totalCarsCount : currentPage * itemsPerPage;
  return (
    <Row>
      <Col className="padding">
        <div className="roboto-bold-18">Available Cars</div>
        <div className='results'>Showing {pageItems} of {totalCarsCount} results</div>
      </Col>
      <Col className="pull-right">
        <div>Sort By</div>
        <Dropdown title={title} options={sortItems} selected={sortOrder} handleClick={handleSort} />
      </Col>
    </Row>
  );
}

ListHeader.propTypes = {
  totalCarsCount: PropTypes.number.isRequired,
  sortOrder: PropTypes.string.isRequired,
  handleSort: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPageCount: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired
};

ListHeader.defaultProps = {
  itemsPerPage: 10
};

export default ListHeader;
