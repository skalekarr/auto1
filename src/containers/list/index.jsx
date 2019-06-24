
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AppContainer from '../../components/layout/index.jsx'
import Filters from '../../components/filters/index.jsx'
import CarsList from '../../components/carsList/index.jsx'
import ListHeader from '../../components/listHeader/index.jsx';
import Pagination from '../../components/pagination/index.jsx';
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

class App extends Component {
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
    const { getCarsList, selectedColor: color, selectedManufacturer: manufacturer, currentPage: page, setSortOrder } = this.props;
    const sort = sortOrder.toLowerCase().includes('des') ? 'des' : 'asc';
    setSortOrder(sortOrder);
    getCarsList({ color, manufacturer, page, sort });
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

App.propTypes = {
  getCarsList: PropTypes.func.isRequired,
  getFilterColors: PropTypes.func.isRequired,
  getFilterManufacturers: PropTypes.func.isRequired,
  setFilters: PropTypes.func.isRequired,
  setSortOrder: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
