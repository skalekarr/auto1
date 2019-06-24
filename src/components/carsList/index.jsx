import React from 'react';
import PropTypes from 'prop-types';
import { Media, Button } from 'react-bootstrap';
import CarDescription from '../carDescription/index.jsx';
// eslint-disable-next-line
import styles from './index.styles.css';

const CarsList = ({cars, viewDetails}) =>
  <ul className="list-unstyled">
    {cars.map(({ pictureUrl, manufacturerName, modelName, stockNumber, mileage: { number, unit }, color, fuelType }) =>
      <Media as="li" className="border" key={stockNumber}>
        <img
          width={64}
          height={64}
          className="m-3 image-holder"
          src={pictureUrl}
          alt="Generic placeholder"
        />
        <Media.Body>
          <div className="ml-2 font">{manufacturerName} {modelName}</div>
          <div className="ml-2 font"><CarDescription stockNumber={stockNumber} number={number} unit={unit} color={color} fuelType={fuelType}/></div>
          <Button variant="link" onClick={() => viewDetails(stockNumber)}>View details</Button>
        </Media.Body>
      </Media>
    )}
  </ul>

CarsList.propTypes = {
  cars: PropTypes.array,
  viewDetails: PropTypes.func.isRequired
};

export default CarsList;
