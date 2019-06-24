import React from 'react';
import PropTypes from 'prop-types';

const CarDescription = ({stockNumber, number, unit, fuelType, color}) => 
<>Stock # {stockNumber} - {number} {unit} - {fuelType} - {color}</>

CarDescription.propTypes = {
    stockNumber: PropTypes.number,
    number: PropTypes.number,
    unit: PropTypes.string,
    fuelType: PropTypes.string,
    color: PropTypes.string
};

export default CarDescription;
