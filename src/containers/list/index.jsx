
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AppContainer from '../../components/layout'
import Filters from '../../components/filters'
import CarsList from '../../components/carsList'
import ListHeader from '../../components/listHeader';
import Pagination from '../../components/pagination';
import { getCarsList, getFilterColors, getFilterManufacturers, setFilters, setSortOrder } from '../../actions'

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCarsList,
      getFilterColors,
      getFilterManufacturers,
      setFilters,
      setSortOrder
    },
    dispatch
  );

const mapStateToProps = ({
  carsList: {
    meta: { currentPage, totalCarsCount, totalPageCount },
    cars
  },
  filters: {
    meta: {
      selectedColor,
      selectedManufacturer,
      sortOrder
    },
    colors,
    manufacturers
  }
}) => ({
  cars,
  colors,
  currentPage,
  selectedColor,
  selectedManufacturer,
  manufacturers,
  sortOrder,
  totalCarsCount,
  totalPageCount
});

export class List extends Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.viewDetails = this.viewDetails.bind(this);
    this.goToPage = this.goToPage.bind(this);
  }
  componentDidMount() {
    const { currentPage } = this.props;
    const { getCarsList, getFilterColors, getFilterManufacturers } = this.props;
    getCarsList({ page: currentPage });
    getFilterColors();
    getFilterManufacturers();
  }

  handleFilterChange(event) {
    const { setFilters } = this.props;
    const { type, color, manufacturer } = event;
    if (type === "color") {
      setFilters({ color })
    }
    if (type === "manufacturer") {
      setFilters({ manufacturer })
    }
  }

  handleFilterClick() {
    const { getCarsList, selectedColor: color, selectedManufacturer: manufacturer, sortOrder } = this.props;
    const sort = sortOrder.includes('des') ? 'des' : 'asc';
    getCarsList({ color, manufacturer, page: 1, sort });
  }

  handleSort(sortOrder) {
    const { getCarsList, selectedColor: color, selectedManufacturer: manufacturer, setSortOrder } = this.props;
    const sort = sortOrder.toLowerCase().includes('des') ? 'des' : 'asc';
    setSortOrder(sortOrder);
    getCarsList({ color, manufacturer, page: 1, sort });
  }

  viewDetails(stockNumber) {
    const { history } = this.props;
    history.push(`/stockNumber/${stockNumber}`);
  }

  goToPage(page) {
    const { getCarsList, selectedColor: color, selectedManufacturer: manufacturer, sortOrder } = this.props;
    const sort = sortOrder.includes('des') ? 'des' : 'asc';
    getCarsList({ color, manufacturer, page, sort });
  }

  render() {
    const { colors, manufacturers, selectedColor, selectedManufacturer, cars, sortOrder, totalCarsCount, totalPageCount, currentPage } = this.props
    return <AppContainer>
      <Row>
        <Filters
          colors={colors}
          manufacturers={manufacturers}
          selectedColor={selectedColor}
          selectedManufacturer={selectedManufacturer}
          handleFilterChange={this.handleFilterChange}
          handleFilterClick={this.handleFilterClick}
        />
        <Col sm={8}>
          <ListHeader 
            sortOrder={sortOrder}
            totalCarsCount={totalCarsCount}
            totalPageCount={totalPageCount}
            handleSort={this.handleSort}
            currentPage={currentPage}
          />
          <CarsList cars={cars} viewDetails={this.viewDetails}/>
          <Pagination 
            goToPage={this.goToPage}
            totalPageCount={totalPageCount}
            currentPage={currentPage}
          />
        </Col>
      </Row>
    </AppContainer>
  }
}

List.propTypes = {
  getCarsList: PropTypes.func.isRequired,
  getFilterColors: PropTypes.func.isRequired,
  getFilterManufacturers: PropTypes.func.isRequired,
  setFilters: PropTypes.func.isRequired,
  setSortOrder: PropTypes.func.isRequired,
  cars: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  selectedColor: PropTypes.string.isRequired,
  selectedManufacturer: PropTypes.string.isRequired,
  manufacturers: PropTypes.array.isRequired,
  sortOrder: PropTypes.string.isRequired,
  totalCarsCount: PropTypes.number.isRequired,
  totalPageCount: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
