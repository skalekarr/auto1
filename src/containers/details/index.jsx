
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Row, Col, Card } from 'react-bootstrap'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CarDescription from '../../components/carDescription/index.jsx'
import AppContainer from '../../components/layout/index.jsx'
import Favourites from '../../components/favourites/index.jsx';
import { getCarDetails } from '../../actions'
import { loadState, saveState, removeState } from '../../utils/generic'
// eslint-disable-next-line
import styles from './index.styles.css'

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCarDetails,
    },
    dispatch
  );


const mapStateToProps = ({
  carDetails: {
    car
  },
}) => ({
  car
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: loadState()
    }
    this.addFavourites = this.addFavourites.bind(this);
    this.removeFavourites = this.removeFavourites.bind(this);
  }
  componentDidMount() {
    const { getCarDetails, match: { params: { stockNumber } } } = this.props;
    getCarDetails(stockNumber);
  }

  addFavourites() {
    const { car: { stockNumber} = {} } = this.props;
    const favourites = saveState(stockNumber);
    this.setState({ favourites })
  }

  removeFavourites() {
    const { car: { stockNumber} = {} } = this.props;
    const favourites = removeState(stockNumber)  
    this.setState({ favourites })
  }

  render() {
    const { car = {} } = this.props;
    const { pictureUrl, manufacturerName, modelName, stockNumber, mileage: { number, unit } = {}, color, fuelType } = car;
    const isFavorite = this.state.favourites.some(item => item === stockNumber);
    return <AppContainer>
      <Card>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Row>
            <Col>
              <h5>{manufacturerName} {modelName}</h5>
              <CarDescription stockNumber={stockNumber} number={number} unit={unit} color={color} fuelType={fuelType} />
              <div>
                This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.
              </div>
            </Col>
            <Col>
              <Favourites 
                isFavorite={isFavorite}
                toggleFavourites={isFavorite ? this.removeFavourites : this.addFavourites}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>

    </AppContainer>
  }
}

App.propTypes = {
  getCarDetails: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
